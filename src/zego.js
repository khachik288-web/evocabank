import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { ZIM } from "zego-zim-web";

// Ключи берутся из .env (VITE_ZEGO_APP_ID / VITE_ZEGO_SERVER_SECRET).
// Секрет в клиентском коде — только для разработки; в продакшене токен
// нужно генерировать на бэкенде (generateKitTokenForProduction).
const ZEGO_APP_ID = 774258292;
const ZEGO_SERVER_SECRET = "f8c457a4c783f52d355b077e687ec6a5";

// Единственный экземпляр Zego на всё приложение. Создаётся один раз
// после логина и живёт, пока юзер не разлогинится — именно он "слушает"
// входящие звонки в фоне, поэтому никакой отдельный useCallListener
// на Firebase больше не нужен: это делает сам ZIM-плагин.
let zpInstance = null;

/**
 * Инициализирует Zego-сервис для текущего юзера.
 * Вызывать один раз после успешного логина (в App.jsx, в onAuthStateChanged).
 */
export function initZegoService(uid, userName) {
  if (!uid) return null;
  if (!ZEGO_APP_ID || !ZEGO_SERVER_SECRET) {
    console.warn("Zego: заполните VITE_ZEGO_APP_ID и VITE_ZEGO_SERVER_SECRET в .env");
    return null;
  }

  // Если уже инициализировано для этого же юзера — не пересоздаём.
  if (zpInstance && zpInstance.__uid === uid) {
    return zpInstance;
  }

  // Если был живой инстанс от другого юзера (например, залогинились под
  // другим аккаунтом без перезагрузки страницы) — сначала выключаем его.
  if (zpInstance) {
    destroyZegoService();
  }

  const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
    ZEGO_APP_ID,
    ZEGO_SERVER_SECRET,
    null, // roomID не нужен — комнату для звонка Zego создаёт сам
    String(uid),
    String(userName || "User")
  );

  const zp = ZegoUIKitPrebuilt.create(token);
  zp.addPlugins({ ZIM });

  // Настройки входящего/исходящего звонка. UI (всплывающее окно с "принять/
  // отклонить", полноэкранный экран звонка) Zego рисует сам поверх страницы —
  // никакого собственного CallContainer/IncomingCallModal для этого не нужно.
  zp.setCallInvitationConfig({
    enableCustomCallInvitationDialog: false,
    // Пока страница открыта — уведомление входящего звонка Zego покажет сам.
  });

  zp.__uid = uid;
  zpInstance = zp;
  return zp;
}

/**
 * Возвращает текущий инстанс Zego (или null, если сервис ещё не
 * инициализирован — например, юзер не залогинен).
 */
export function getZegoInstance() {
  return zpInstance;
}

/**
 * Останавливает Zego-сервис. Вызывать при разлогине.
 */
export function destroyZegoService() {
  if (zpInstance) {
    try {
      zpInstance.destroy();
    } catch (e) {
      console.error("Ошибка при остановке Zego-сервиса:", e);
    }
    zpInstance = null;
  }
}

export { ZegoUIKitPrebuilt };
