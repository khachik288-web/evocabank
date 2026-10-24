import { getZegoInstance, ZegoUIKitPrebuilt } from "./zego";

/**
 * Запускает звонок через встроенный механизм Zego Call Invitation.
 * Никакого roomId и записи в Firebase — Zego сам создаёт сессию звонка,
 * показывает получателю всплывающее окно "входящий звонок" и, если тот
 * принимает, сам открывает полноэкранный UI звонка на обеих сторонах.
 *
 * @param {{ id: string, name?: string }} targetUser — кому звоним
 * @param {"audio" | "video"} callType
 */
export const initiateCall = async (targetUser, callType) => {
  if (!targetUser?.id) return;

  const zp = getZegoInstance();
  if (!zp) {
    console.error(
      "Zego-сервис не инициализирован. Проверьте, что initZegoService() " +
        "вызывается в App.jsx после логина."
    );
    alert("Զանգերի ֆունկցիան դեռ պատրաստ չէ, թարմացրեք էջը և փորձեք կրկին:");
    return;
  }

  const zegoCallType =
    callType === "video"
      ? ZegoUIKitPrebuilt.InvitationTypeVideoCall
      : ZegoUIKitPrebuilt.InvitationTypeVoiceCall;

  try {
    const res = await zp.sendCallInvitation({
      callees: [{ userID: targetUser.id, userName: targetUser.name || "User" }],
      callType: zegoCallType,
      timeout: 60,
    });

    if (res?.errorInvitees?.length) {
      alert("Օգտատերը հասանելի չէ (անցանց է կամ գոյություն չունի):");
    }
  } catch (err) {
    console.error("Ошибка при отправке звонка:", err);
    alert("Չհաջողվեց սկսել զանգը, փորձեք կրկին:");
  }
};
