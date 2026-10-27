import { ref, set } from "firebase/database";
import { db, auth } from "./firebase";

let watchId = null;
let lastWrite = 0;

// Запрашивает у браузера доступ к геолокации (показывает системный диалог)
export function askLocationPermission() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(false);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        saveLocation(pos);
        resolve(true);
      },
      () => resolve(false),
      { enableHighAccuracy: true, timeout: 15000 }
    );
  });
}

function saveLocation(pos) {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  const now = Date.now();
  if (now - lastWrite < 3000) return; // не чаще раза в 3 секунды
  lastWrite = now;
  set(ref(db, `locations/${uid}`), {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
    accuracy: Math.round(pos.coords.accuracy || 0),
    updatedAt: now,
  }).catch((e) => console.error("location write", e));
}

// Постоянно обновляет позицию пользователя, пока вкладка открыта
export function startLocationSharing() {
  if (watchId !== null || !navigator.geolocation) return;
  watchId = navigator.geolocation.watchPosition(saveLocation, () => {}, {
    enableHighAccuracy: true,
    maximumAge: 5000,
  });
}

export function stopLocationSharing() {
  if (watchId !== null) navigator.geolocation.clearWatch(watchId);
  watchId = null;
}
