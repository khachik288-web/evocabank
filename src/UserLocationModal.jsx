import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onValue } from "firebase/database";
import { X, MapPin } from "lucide-react";
import { db } from "./firebase";

const pin = L.divIcon({
  className: "",
  html: '<div style="width:22px;height:22px;border-radius:50%;background:#7000ff;border:4px solid #fff;box-shadow:0 0 0 6px rgba(112,0,255,.25)"></div>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

// Показывает местоположение пользователя на карте в реальном времени
export default function UserLocationModal({ user, onClose }) {
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [loc, setLoc] = useState(undefined); // undefined = грузится, null = нет данных

  useEffect(() => {
    const off = onValue(ref(db, `locations/${user.uid}`), (s) => setLoc(s.val() || null));
    return () => off();
  }, [user.uid]);

  useEffect(() => {
    if (!loc || !elRef.current) return;
    const pos = [loc.lat, loc.lng];
    if (!mapRef.current) {
      mapRef.current = L.map(elRef.current).setView(pos, 16);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(mapRef.current);
      markerRef.current = L.marker(pos, { icon: pin }).addTo(mapRef.current);
    } else {
      markerRef.current.setLatLng(pos);
      mapRef.current.panTo(pos);
    }
  }, [loc]);

  useEffect(() => () => { mapRef.current?.remove(); mapRef.current = null; }, []);

  const ago = loc ? Math.max(0, Math.round((Date.now() - loc.updatedAt) / 1000)) : 0;
  const status = !loc ? "" : ago < 60 ? "հիմա առցանց" : `թարմացվել է ${Math.round(ago / 60)} րոպե առաջ`;

  return createPortal(
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 100000, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, width: "100%", maxWidth: 560, overflow: "hidden" }}>
        <div style={{ background: "#2d0066", color: "#fff", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.name || user.email}</div>
            {status && <div style={{ fontSize: 12, opacity: 0.75 }}>{status}</div>}
          </div>
          <button onClick={onClose} aria-label="close" style={{ background: "none", border: 0, color: "#fff" }}><X size={20} /></button>
        </div>
        {loc ? (
          <div ref={elRef} style={{ height: "min(60vh, 420px)", width: "100%" }} />
        ) : (
          <div style={{ padding: "48px 24px", textAlign: "center", color: "#667" }}>
            <MapPin size={32} style={{ margin: "0 auto 12px", color: "#aaa" }} />
            {loc === undefined ? "Բեռնվում է..." : "Օգտատերը դեռ չի կիսվել իր տեղադրությամբ"}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
