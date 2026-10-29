import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, get } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LogOut as LogOutIcon, MessageCircle, Home, Mail, Phone, CalendarDays, ThumbsUp } from "lucide-react";
import { useChatStore } from "./useChatStore";
import { useTranslation } from 'react-i18next';

export default function LogOut() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const navigate = useNavigate();
  const setIsOpen = useChatStore((s) => s.setIsOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/reg", { replace: true });
        return;
      }
      // Данные из базы, а если их нет — из самого аккаунта Firebase
      let data = {};
      try {
        const snapshot = await get(ref(db, `users/${user.uid}`));
        if (snapshot.exists()) data = snapshot.val();
      } catch (e) {
        console.error(e);
      }
      setUserData({
        name: data.name || user.displayName || user.email?.split("@")[0] || "",
        email: data.email || user.email || "",
        phone: data.phone || "",
        photoURL: data.photoURL || user.photoURL || "",
        createdAt: data.createdAt || user.metadata?.creationTime || "",
      });
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    setSigningOut(true);
    await signOut(auth);
    navigate("/reg", { replace: true });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-[#7000ff]" />
      </div>
    );
  }

  const initial = (userData?.name || userData?.email || "?").charAt(0).toUpperCase();
  const since = userData?.createdAt
    ? new Date(userData.createdAt).toLocaleDateString("hy-AM", { year: "numeric", month: "long", day: "numeric" })
    : "";

  const rows = [
    { icon: Mail, label: t("Էլ. հասցե"), value: userData?.email },
    { icon: Phone, label: t("Հեռախոսահամար"), value: userData?.phone ? `+374 ${userData.phone}` : "" },
    { icon: CalendarDays, label: t("Գրանցման ամսաթիվ"), value: since },
  ].filter((r) => r.value);

  return (
    <div className="min-h-screen bg-[#f8f9fc] px-4 py-8 sm:py-14">
      <div className="mx-auto w-full max-w-[520px]">
        <Link to="/" className="mb-5 inline-flex items-center gap-1.5 text-sm text-slate-500 no-underline hover:text-[#7000ff] hover:no-underline">
          <Home size={16} /> {t("Գլխավոր էջ")}
        </Link>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Шапка карточки */}
          <div className="h-28 bg-gradient-to-r from-[#7000ff] to-[#a24dff] sm:h-32" />

          <div className="px-6 pb-8 sm:px-8">
            <div className="-mt-14 flex flex-col items-center text-center sm:-mt-16">
              {userData?.photoURL ? (
                <img
                  src={userData.photoURL}
                  alt="Profile"
                  referrerPolicy="no-referrer"
                  className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md sm:h-32 sm:w-32"
                />
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-purple-100 text-4xl font-bold text-[#7000ff] shadow-md sm:h-32 sm:w-32">
                  {initial}
                </div>
              )}
              <h1 className="mt-4 text-xl font-bold text-slate-800 sm:text-2xl">
                {userData?.name || t("Օգտատեր")}
              </h1>
              <p className="text-sm text-slate-400">{t("Evoca հաճախորդ")}</p>
            </div>

            <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-100">
              {rows.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#7000ff]">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="truncate text-sm font-medium text-slate-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/liked-news"
              className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 px-4 py-3 text-slate-800 no-underline hover:bg-purple-50 hover:no-underline"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#7000ff]">
                <ThumbsUp size={18} />
              </div>
              <span className="text-sm font-medium">{t("Հավանած նորություններ")}</span>
            </Link>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => { setIsOpen(true); navigate("/"); }}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#7000ff] bg-white py-3 font-medium text-[#7000ff] hover:bg-purple-50"
              >
                <MessageCircle size={18} /> {t("Բացել չատը")}
              </button>
              <button
                onClick={handleLogOut}
                disabled={signingOut}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#7000ff] py-3 font-medium text-white hover:bg-[#5c00b3] active:bg-[#4b0094] disabled:opacity-60"
              >
                <LogOutIcon size={18} /> {signingOut ? t("Դուրս ենք գալիս...") : t("Դուրս գալ")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
