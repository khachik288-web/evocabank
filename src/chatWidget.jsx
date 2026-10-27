import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, onValue, push, query, limitToLast } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { MessageCircle, X, ArrowLeft, Send, Users, Video, Phone, MapPin } from "lucide-react";
import UserLocationModal from "./UserLocationModal";
import { startLocationSharing, stopLocationSharing } from "./location";
import { useChatStore } from "./useChatStore";
import { initiateCall } from "./callUtils";

function getChatId(uid1, uid2) {
  return [uid1, uid2].sort().join("_");
}

const DEFAULT_AVATAR =
  "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80";

export default function ChatWidget() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [locUser, setLocUser] = useState(null); // чью геолокацию смотрим
  const [lastFrom, setLastFrom] = useState({}); // chatId -> uid автора последнего сообщения
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  // Стор больше не хранит ничего про звонки — этим занимается Zego (zego.js)
  const {
    isOpen,
    view,
    activeChat,
    setIsOpen,
    setView,
    openPrivateChat,
    openGroupChat,
  } = useChatStore();

  const myUid = auth.currentUser?.uid;
  const myName =
    auth.currentUser?.displayName || auth.currentUser?.email?.split("@")[0] || "User";

  const activeChatId = activeChat
    ? activeChat.isGroup
      ? "public_group"
      : getChatId(myUid, activeChat.id)
    : null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Пока пользователь вошёл — отправляем его позицию в базу (если разрешено)
  useEffect(() => {
    if (!myUid) return;
    startLocationSharing();
    return () => stopLocationSharing();
  }, [myUid]);

  // Список пользователей нужен всегда (и для списка чатов, и для индикатора непрочитанных)
  useEffect(() => {
    if (!myUid) return;
    const unsubscribe = onValue(ref(db, "users"), (snapshot) => {
      const data = snapshot.val() || {};
      setUsers(
        Object.entries(data)
          .map(([uid, info]) => ({ uid, ...info }))
          .filter((u) => u.uid !== myUid)
      );
    });
    return () => unsubscribe();
  }, [myUid]);

  // Непрочитанные: слушаем последнее сообщение в каждом доступном чате
  // (правила базы не дают читать весь узел /chats, только свои переписки)
  const userIdsKey = users.map((u) => u.uid).sort().join(",");
  useEffect(() => {
    if (!myUid) return;
    const chatIds = ["public_group", ...users.map((u) => getChatId(myUid, u.uid))];
    const unsubs = chatIds.map((chatId) =>
      onValue(query(ref(db, `chats/${chatId}/messages`), limitToLast(1)), (snap) => {
        const last = Object.values(snap.val() || {})[0];
        setLastFrom((prev) => ({ ...prev, [chatId]: last ? last.from : null }));
      })
    );
    return () => unsubs.forEach((u) => u());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myUid, userIdsKey]);

  const unreadChats = {};
  Object.entries(lastFrom).forEach(([chatId, from]) => {
    const isReading = isOpen && view === "chat" && activeChatId === chatId;
    if (from && from !== myUid && !isReading) unreadChats[chatId] = true;
  });

  useEffect(() => {
    if (!activeChat || !myUid) return;

    const chatId = activeChat.isGroup ? "public_group" : getChatId(myUid, activeChat.id);

    const messagesRef = ref(db, `chats/${chatId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([id, msg]) => ({ id, ...msg }))
        .sort((a, b) => a.timestamp - b.timestamp);
      setMessages(list);
    });

    return () => unsubscribe();
  }, [activeChat, myUid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleWidgetClick = () => {
    if (isLoggedIn) {
      setIsOpen(true);
    } else {
      navigate("/reg");
    }
  };

  const handleOpenGroupChat = () => {
    openGroupChat();
  };

  const handleOpenPrivateChat = (user) => {
    openPrivateChat(user);
  };

  const handleSend = async () => {
    if (!text.trim() || !activeChat || !myUid) return;

    const chatId = activeChat.isGroup ? "public_group" : getChatId(myUid, activeChat.id);

    await push(ref(db, `chats/${chatId}/messages`), {
      from: myUid,
      senderName: myName,
      text: text.trim(),
      timestamp: Date.now(),
    });
    setText("");
  };

  // initiateCall (callUtils.js) ждёт targetUser с полями .id и .name
  const targetUser = activeChat ? { id: activeChat.id, name: activeChat.name } : null;

  const hasAnyUnread = Object.values(unreadChats).some(Boolean);

  return (
    <div className="fixed bottom-6 right-6 z-[2000]">
      {!isOpen && (
        <button
          onClick={handleWidgetClick}
          className="relative w-14 h-14 rounded-full bg-[#7000ff] hover:bg-[#5c00b3] text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <MessageCircle size={26} />
          {hasAnyUnread && (
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full"></span>
          )}
        </button>
      )}

      {isOpen && (
        <div className="w-[360px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#2a0066] text-white px-4 py-3 flex items-center gap-2">
            {view !== "list" && (
              <button onClick={() => setView("list")} className="text-white/80 hover:text-white mr-1">
                <ArrowLeft size={18} />
              </button>
            )}

            <div className="flex-1 min-w-0">
              {view === "list" ? (
                <p className="font-medium">Հաղորդագրություններ</p>
              ) : (
                <p className="font-medium truncate">{activeChat?.name}</p>
              )}
            </div>

            {/* Кнопки звонка — только для личных чатов (групповой звонок не поддержан) */}
            {view === "chat" && !activeChat?.isGroup && (
              <div className="flex items-center gap-2 mr-2">
                <button
                  onClick={() => initiateCall(targetUser, "audio")}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                  title="Ձայնային զանգ"
                >
                  <Phone size={16} />
                </button>
                <button
                  onClick={() => initiateCall(targetUser, "video")}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                  title="Տեսազանգ"
                >
                  <Video size={16} />
                </button>
              </div>
            )}

            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* View: List */}
          {view === "list" && (
            <div className="flex-1 overflow-y-auto">
              <button
                onClick={handleOpenGroupChat}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left border-b border-slate-100 bg-slate-50/50 relative"
              >
                <div className="w-10 h-10 rounded-full bg-[#7000ff] text-white flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800">Ընդհանուր Խումբ</p>
                  <p className="text-xs text-slate-400">Գրեք բոլորին</p>
                </div>
                {unreadChats["public_group"] && (
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0 ml-auto" />
                )}
              </button>

              {users.map((user) => {
                const chatId = getChatId(myUid, user.uid);
                const isUnread = unreadChats[chatId];
                return (
                  <button
                    key={user.uid}
                    onClick={() => handleOpenPrivateChat(user)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left border-b border-slate-50 relative"
                  >
                    <img
                      src={user.photoURL || DEFAULT_AVATAR}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-800 truncate">
                        {user.name || "Անանուն"}
                      </p>
                      <p className="text-xs text-slate-400 truncate">{user.email}</p>
                    </div>
                    {isUnread && (
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0 ml-auto" />
                    )}
                    <span
                      role="button"
                      title="Տեղադրություն"
                      onClick={(e) => { e.stopPropagation(); setLocUser(user); }}
                      className="ml-auto shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#7000ff] hover:bg-[#7000ff]/10"
                    >
                      <MapPin size={18} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* View: Chat */}
          {view === "chat" && (
            <>
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                {messages.map((msg) => {
                  const isMine = msg.from === myUid;
                  return (
                    <div
                      key={msg.id}
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                        isMine
                          ? "self-end bg-[#7000ff] text-white rounded-br-sm"
                          : "self-start bg-slate-100 text-slate-800 rounded-bl-sm"
                      }`}
                    >
                      {activeChat.isGroup && !isMine && (
                        <p className="text-[10px] font-bold opacity-75 mb-0.5">{msg.senderName}</p>
                      )}
                      {msg.text}
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>

              <div className="flex items-center gap-2 p-3 border-t border-slate-100">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Գրեք հաղորդագրություն..."
                  className="flex-1 border border-slate-200 rounded-full px-3 py-1.5 outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#7000ff] hover:bg-[#5c00b3] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
            </>
          )}

          {/* Отдельного "view: call" больше нет — сам Zego рисует
              полноэкранный UI звонка поверх страницы, когда invitation
              принят (см. zego.js / callUtils.js). */}
        </div>
      )}
      {locUser && <UserLocationModal user={locUser} onClose={() => setLocUser(null)} />}
    </div>
  );
}