import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_CATEGORIES } from './faqData';

// [текст](url) -> <a>
function renderInline(text) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <a key={i++} href={m[2]} target="_blank" rel="noreferrer" style={{ color: '#7000ff', textDecoration: 'underline' }}>
        {m[1]}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// Абзацы и маркированные списки
function Answer({ text }) {
  const blocks = [];
  let list = [];
  const flush = () => {
    if (list.length) {
      blocks.push({ type: 'ul', items: list });
      list = [];
    }
  };
  text.split('\n').forEach((line) => {
    if (line.trim().startsWith('* ')) list.push(line.trim().slice(2));
    else if (line.trim()) {
      flush();
      blocks.push({ type: 'p', text: line.trim() });
    }
  });
  flush();

  return (
    <div className="space-y-3 text-[15px] leading-relaxed text-gray-800">
      {blocks.map((b, i) =>
        b.type === 'p' ? (
          <p key={i} className="m-0">{renderInline(b.text)}</p>
        ) : (
          <ul key={i} className="m-0 list-disc space-y-1 pl-5">
            {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
          </ul>
        )
      )}
    </div>
  );
}

export default function Faq() {
  const [catId, setCatId] = useState(FAQ_CATEGORIES[0].id);
  const [openIdx, setOpenIdx] = useState(0);
  const cat = FAQ_CATEGORIES.find((c) => c.id === catId);

  const selectCat = (id) => {
    setCatId(id);
    setOpenIdx(0); // первый вопрос раздела открыт по умолчанию
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14">
      <style>{`
        .faq-tab { background:#fff; color:#4b5563; border:1px solid #e5e7eb; border-radius:999px; padding:8px 16px; cursor:pointer; }
        .faq-tab:hover { color:#7000ff; }
        .faq-tab[data-active="true"] { background:#7000ff; color:#fff; border-color:#7000ff; }
        .faq-q { background:transparent; border:0; cursor:pointer; color:inherit; }
        .faq-a { padding: 0 16px 20px 16px; }
        @media (min-width: 640px) { .faq-a { padding: 0 24px 24px 62px; } }
        @media (min-width: 1024px) {
          .faq-tab { border:0; border-left:3px solid transparent; border-radius:0; background:transparent; padding:12px 24px; }
          .faq-tab[data-active="true"] { background:transparent; color:#7000ff; border-left-color:#7000ff; }
        }
      `}</style>
      <h1 className="mb-6 sm:mb-10" style={{ fontWeight: 700, color: '#111', fontSize: 'clamp(1.6rem, 1.2rem + 1.6vw, 2.4rem)' }}>Հաճախ տրվող հարցեր</h1>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
        {/* Разделы: на телефоне и планшете — горизонтальная лента, на ПК — боковая колонка */}
        <aside className="lg:w-[330px] lg:shrink-0">
          <nav
            className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-0 lg:overflow-visible lg:rounded-2xl lg:bg-white lg:py-3 lg:shadow-[0_4px_24px_rgba(112,0,255,0.08)]"
            aria-label="FAQ categories"
          >
            {FAQ_CATEGORIES.map((c) => {
              const active = c.id === catId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectCat(c.id)}
                  className="faq-tab whitespace-nowrap text-left text-sm font-semibold transition-colors lg:text-[15px]"
                  data-active={active}
                >
                  {c.title}
                </button>
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0 flex-1">
          <h2 className="mb-5 sm:mb-7" style={{ fontWeight: 700, color: '#111', fontSize: 'clamp(1.35rem, 1.1rem + 1vw, 2rem)' }}>{cat.title}</h2>
          <div className="flex flex-col gap-3">
            {cat.items.map((item, i) => {
              const open = openIdx === i;
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    open ? 'border-[#7000ff]' : 'border-[#e3d3ff] hover:border-[#b98cff]'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    className="faq-q flex w-full items-start gap-4 px-4 py-4 text-left sm:px-6"
                  >
                    <span className="mt-0.5 shrink-0 text-[#7000ff]">
                      {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </span>
                    <span className={`text-[15px] font-semibold leading-snug sm:text-base ${open ? 'text-black' : 'text-gray-600'}`}>
                      {item.q}
                    </span>
                  </button>
                  {open && (
                    <div className="faq-a">
                      <Answer text={item.a} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
