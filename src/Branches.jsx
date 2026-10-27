import React, { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import { Clock, MapPin, Phone, SlidersHorizontal } from 'lucide-react';
import { BRANCHES, ATMS, EXCHANGE_TERMINALS, CITIES } from './branchesData';

const TABS = [
  { id: 'branches', label: 'Մասնաճյուղեր', data: BRANCHES },
  { id: 'atms', label: 'Բանկոմատներ', data: ATMS },
  { id: 'exchange', label: 'Արտարժույթի փոխանակման տերմինալներ', data: EXCHANGE_TERMINALS },
];

const PIN_SVG = (active) => `
  <svg width="36" height="44" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 43C18 43 33 27.5 33 17.5C33 8.9 26.3 2 18 2C9.7 2 3 8.9 3 17.5C3 27.5 18 43 18 43Z"
      fill="${active ? '#4b0094' : '#7000ff'}" stroke="#fff" stroke-width="2"/>
    <path d="M10.5 12.5l5.2 12h2.6l5.2-12h-3.4l-3.1 7.7-3.1-7.7z" fill="#fff"/>
  </svg>`;

const pinIcon = (active = false) =>
  L.divIcon({
    className: 'evoca-pin',
    html: PIN_SVG(active),
    iconSize: [36, 44],
    iconAnchor: [18, 42],
    popupAnchor: [0, -38],
  });

const clusterIcon = (cluster) =>
  L.divIcon({
    className: 'evoca-cluster',
    html: `<span>${cluster.getChildCount()}</span>`,
    iconSize: [34, 34],
  });

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export default function Branches() {
  const [tab, setTab] = useState('branches');
  const [city, setCity] = useState(CITIES[0]);
  const [district, setDistrict] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [saturdayOnly, setSaturdayOnly] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const mapEl = useRef(null);
  const mapRef = useRef(null);
  const clusterRef = useRef(null);
  const markersRef = useRef({});
  const itemRefs = useRef({});

  const all = TABS.find((t) => t.id === tab).data;
  const districts = useMemo(() => [...new Set(all.filter((p) => p.city === city).map((p) => p.district))], [all, city]);
  const list = useMemo(
    () =>
      all.filter(
        (p) => p.city === city && (!district || p.district === district) && (!saturdayOnly || p.saturday)
      ),
    [all, city, district, saturdayOnly]
  );

  // Создаём карту один раз
  useEffect(() => {
    const map = L.map(mapEl.current, { zoomControl: false, scrollWheelZoom: true }).setView([40.1872, 44.5152], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    const cluster = L.markerClusterGroup({ iconCreateFunction: clusterIcon, showCoverageOnHover: false, maxClusterRadius: 50 });
    map.addLayer(cluster);
    mapRef.current = map;
    clusterRef.current = cluster;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Обновляем точки при смене вкладки/фильтров
  useEffect(() => {
    const map = mapRef.current;
    const cluster = clusterRef.current;
    if (!map || !cluster) return;
    cluster.clearLayers();
    markersRef.current = {};
    list.forEach((p) => {
      const m = L.marker([p.lat, p.lng], { icon: pinIcon(false), title: p.name });
      m.bindPopup(
        `<strong>${esc(p.name)}</strong>${p.hours ? `<br/>${esc(p.hours)}` : ''}${p.address ? `<br/>${esc(p.address)}` : ''}`
      );
      m.on('click', () => setActiveId(p.id));
      cluster.addLayer(m);
      markersRef.current[p.id] = m;
    });
    if (list.length) map.fitBounds(L.latLngBounds(list.map((p) => [p.lat, p.lng])), { padding: [60, 60], maxZoom: 14 });
    setActiveId(null);
  }, [list]);

  // Подсветка выбранной точки + прокрутка списка
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, m]) => m.setIcon(pinIcon(id === activeId)));
    if (activeId && itemRefs.current[activeId]) itemRefs.current[activeId].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeId]);

  const selectItem = (p) => {
    setActiveId(p.id);
    const m = markersRef.current[p.id];
    const map = mapRef.current;
    if (m && map) {
      clusterRef.current.zoomToShowLayer(m, () => {
        map.setView([p.lat, p.lng], Math.max(map.getZoom(), 15), { animate: true });
        m.openPopup();
      });
    }
  };

  const changeTab = (id) => {
    setTab(id);
    setDistrict('');
    setSaturdayOnly(false);
  };

  return (
    <main style={{ background: '#fff' }}>
      <style>{`
        .evoca-pin, .evoca-cluster { background: none; border: 0; }
        .evoca-cluster span { display:flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:50%;
          background:#fff; color:#4b0094; font-weight:700; font-size:13px; border:3px solid #7000ff; box-shadow:0 2px 6px rgba(0,0,0,.25); }
        .br-tab { background:none; border:0; border-bottom:3px solid transparent; padding:14px 4px; color:#555; font-weight:600; font-size:15px; cursor:pointer; white-space:nowrap; }
        .br-tab:hover { color:#7000ff; }
        .br-tab.on { color:#7000ff; border-bottom-color:#7000ff; }
        .br-select { appearance:none; background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%237000ff' stroke-width='2'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E") no-repeat right 12px center;
          border:0; border-radius:6px; padding:12px 34px 12px 14px; font-size:14px; min-width:150px; box-shadow:0 2px 8px rgba(0,0,0,.18); cursor:pointer; color:#222; }
        .br-item { width:100%; text-align:left; background:#fff; border:0; border-bottom:1px solid #eee; padding:22px 28px; cursor:pointer; display:block; }
        .br-item:hover, .br-item.on { background:#f7f1ff; }
        .br-item h3 { font-size:16px; font-weight:700; color:#111; margin:0 0 10px; }
        .br-row { display:flex; gap:10px; align-items:flex-start; font-size:13px; color:#666; margin-top:8px; }
        .br-row svg { color:#b98cff; flex:none; margin-top:1px; }
        .br-wrap { height:640px; }
        @media (max-width: 900px) { .br-wrap { height:auto; flex-direction:column-reverse; } .br-list { max-height:340px; width:100% !important; } .br-map { height:420px; } }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 style={{ fontWeight: 700, color: '#111', fontSize: 'clamp(1.6rem, 1.2rem + 1.6vw, 2.4rem)', margin: 'clamp(24px,4vw,40px) 0 clamp(20px,3vw,40px)' }}>
          Բանկի հասցեները և աշխատաժամերը
        </h1>
        <div className="flex gap-6 overflow-x-auto sm:gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} className={`br-tab ${tab === t.id ? 'on' : ''}`} onClick={() => changeTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-wrap flex" style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <aside className="br-list overflow-y-auto" style={{ width: 'min(34%, 440px)', flex: 'none', boxShadow: '2px 0 10px rgba(0,0,0,.06)', zIndex: 2 }}>
          {list.length === 0 && (
            <p style={{ padding: 28, color: '#777', fontSize: 14 }}>
              {all.length === 0 ? 'Տվյալները շուտով կհրապարակվեն:' : 'Ըստ ընտրված պայմանների արդյունք չի գտնվել:'}
            </p>
          )}
          {list.map((p) => (
            <button
              key={p.id}
              ref={(el) => (itemRefs.current[p.id] = el)}
              className={`br-item ${activeId === p.id ? 'on' : ''}`}
              onClick={() => selectItem(p)}
            >
              <h3>{p.name}</h3>
              {p.hours && <div className="br-row"><Clock size={14} /> <span>{p.hours}</span></div>}
              {p.address && <div className="br-row"><MapPin size={14} /> <span>{p.address}</span></div>}
              {p.phones?.length > 0 && <div className="br-row"><Phone size={14} /> <span>{p.phones.join(', ')}</span></div>}
            </button>
          ))}
        </aside>

        <div className="br-map relative flex-1" style={{ minHeight: 320 }}>
          <div ref={mapEl} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

          <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 500 }}>
            <button
              onClick={() => setFilterOpen((o) => !o)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: 0, borderRadius: 6, padding: '12px 18px', fontWeight: 600, color: '#4b0094', boxShadow: '0 2px 8px rgba(0,0,0,.18)', cursor: 'pointer' }}
            >
              <SlidersHorizontal size={18} /> Ֆիլտր
            </button>
            {filterOpen && (
              <div style={{ marginTop: 8, background: '#fff', borderRadius: 8, padding: 16, boxShadow: '0 4px 16px rgba(0,0,0,.2)', minWidth: 220 }}>
                <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, cursor: 'pointer', margin: 0 }}>
                  <input type="checkbox" checked={saturdayOnly} onChange={(e) => setSaturdayOnly(e.target.checked)} />
                  Աշխատում է շաբաթ օրը
                </label>
              </div>
            )}
          </div>

          <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 500, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <select className="br-select" value={city} onChange={(e) => { setCity(e.target.value); setDistrict(''); }} aria-label="city">
              {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select className="br-select" value={district} onChange={(e) => setDistrict(e.target.value)} aria-label="district">
              <option value="">Համայնք</option>
              {districts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'right', margin: 0, padding: '14px 24px', fontSize: 12, color: '#888' }} className="mx-auto max-w-7xl">Թարմացվել է՝ 27/10/2026</p>
    </main>
  );
}
