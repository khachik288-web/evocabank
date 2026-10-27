import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// [текст](url): внутренние ссылки (начинаются с "/") идут через роутер
function rich(text) {
  const out = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let i = 0;
  const st = { color: '#7000ff', textDecoration: 'underline' };
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      m[2].startsWith('/') ? (
        <Link key={i++} to={m[2]} style={st}>{m[1]}</Link>
      ) : (
        <a key={i++} href={m[2]} target="_blank" rel="noreferrer" style={st}>{m[1]}</a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Body({ paragraphs }) {
  return (
    <div style={{ color: '#333', fontSize: 15, lineHeight: 1.7 }}>
      {paragraphs.map((p, i) => (
        <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0' }}>{rich(p)}</p>
      ))}
    </div>
  );
}

// variant="faq"   — вопросы со стрелкой и фиолетовой рамкой у открытого
// variant="steps" — нумерованные шаги с пунктирным соединителем
export default function CareerAccordion({ items, variant = 'faq', defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  if (variant === 'steps') {
    return (
      <div>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <React.Fragment key={it.title}>
              <div style={{ background: '#fff', borderRadius: 4, boxShadow: '0 4px 18px rgba(106,0,219,.14)', overflow: 'hidden' }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ display: 'flex', width: '100%', alignItems: 'stretch', background: 'none', border: 0, padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ background: '#e7d9ff', width: 60, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#6a00db', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {i + 1}
                    </span>
                  </span>
                  <span style={{ flex: 1, padding: '20px 20px', fontSize: 17, fontWeight: 500, color: '#222' }}>{it.title}</span>
                  <span style={{ padding: '0 20px', display: 'flex', alignItems: 'center', color: '#6a00db' }}>
                    {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '6px 28px 26px 84px' }} className="career-step-body">
                    <Body paragraphs={it.body} />
                  </div>
                )}
              </div>
              {i < items.length - 1 && (
                <div aria-hidden style={{ height: 44, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5, paddingLeft: 29 }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} style={{ width: 3, height: 3, borderRadius: '50%', background: '#c9c9d6' }} />
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.title}
            style={{ background: '#fff', borderRadius: 12, border: `1px solid ${isOpen ? '#7000ff' : '#e3d3ff'}`, overflow: 'hidden' }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 14, background: 'none', border: 0, padding: '16px 20px', cursor: 'pointer', textAlign: 'left' }}
            >
              <span style={{ color: '#7000ff', display: 'flex' }}>{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: isOpen ? '#000' : '#666' }}>{it.title}</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 20px 20px 54px' }}>
                <Body paragraphs={it.body} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
