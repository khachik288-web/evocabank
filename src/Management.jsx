import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MEMBERS } from './Managementdata';

/* ---------------------------------------------------------------
   MemberCard — универсальная карточка.
   Props:
     id        — slug (идёт в URL: /about/management/:id)
     photo     — url картинки
     name      — ФИО
     position  — должность (текст под именем)
   Структура всегда одна: треугольный фон + фото + имя + должность.
   При hover треугольник становится фиолетовым, имя — фиолетовым.
---------------------------------------------------------------- */
export function MemberCard({ id, photo, name, position }) {
  return (
    <Link
      to={`/about/management/${id}`}
      className="group flex w-[230px] max-w-full flex-col items-center text-center no-underline hover:no-underline"
    >
      <div className="relative h-[250px] w-[230px] max-w-full">
        {/* треугольный фон */}
        <div
          className="absolute inset-0 bg-[#f3f3f5] transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#a06cf0] group-hover:to-[#7a3ff0]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 15%, 50% 100%, 0 15%)',
            borderRadius: '24px 24px 0 0',
          }}
        />
        <img
          src={photo}
          alt={name}
          className="absolute bottom-0 left-1/2 h-[230px] w-[230px] max-w-none -translate-x-1/2 object-cover object-top"
        />
      </div>

      <h3 className="mt-5 text-[15px] font-bold uppercase leading-snug text-black transition-colors group-hover:text-[#6a00db]">
        {name}
      </h3>
      <p className="mt-2 text-[12px] leading-relaxed text-gray-600">{position}</p>
    </Link>
  );
}

/* Список карточек: flex-wrap на десктопе, flex-col на мобиле */
function CardsGrid({ items }) {
  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-8">
      {items.map((m) => (
        <MemberCard key={m.id} id={m.id} photo={m.photo} name={m.name} position={m.position} />
      ))}
    </div>
  );
}

/* --- Страница «Ղեկավարություն» --- */
export function ManagementPage() {
  const board = MEMBERS.filter((m) => m.group === 'board');
  const management = MEMBERS.filter((m) => m.group === 'management');

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-10 font-bold text-gray-900">Ղեկավարություն</h1>

      <h2 className="mb-6 text-xl font-semibold text-gray-800">Բանկի խորհուրդ</h2>
      <CardsGrid items={board} />

      <h2 className="mb-6 mt-16 text-xl font-semibold text-gray-800">Բանկի վարչություն</h2>
      <CardsGrid items={management} />
    </main>
  );
}

/* строка "2019թ. - текст" -> <b>2019թ.</b> - текст */
function Line({ text }) {
  const m = text.match(/^(.{0,30}?)\s[-–]\s(.*)$/s);
  if (!m) return <p className="mb-2 text-[14px] leading-relaxed text-gray-800">{text}</p>;
  return (
    <p className="mb-2 text-[14px] leading-relaxed text-gray-800">
      <b>{m[1]}</b> - {m[2]}
    </p>
  );
}

function Section({ title, lines, text }) {
  return (
    <section className="mb-8">
      <h4 className="mb-3 text-[15px] font-bold uppercase text-[#6a00db]">{title}</h4>
      {lines && lines.map((l, i) => <Line key={i} text={l} />)}
      {text && <p className="text-[14px] leading-relaxed text-gray-800">{text}</p>}
    </section>
  );
}

/* --- Страница сотрудника: /about/management/:id --- */
export function MemberPage() {
  const { id } = useParams();
  const m = MEMBERS.find((x) => x.id === id);

  if (!m) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <p>Էջը չի գտնվել։</p>
        <Link to="/about/management" className="text-purple-700">← Վերադառնալ</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        to="/about/management"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm text-black no-underline shadow-sm hover:no-underline"
      >
        ← Վերադառնալ
      </Link>

      {/* flex-col на мобиле, row на десктопе */}
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-full shrink-0 md:w-[280px]">
          <div
            className="relative mx-auto h-[300px] w-[280px] max-w-full bg-gradient-to-b from-[#a06cf0] to-[#6a00db]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 50% 100%, 0 15%)', borderRadius: '24px 24px 0 0' }}
          >
            <img
              src={m.photo}
              alt={m.name}
              className="absolute bottom-0 left-1/2 h-[280px] w-[280px] max-w-none -translate-x-1/2 object-cover object-top"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="mb-2 font-bold uppercase text-gray-900">{m.name}</h1>
          <p className="mb-8 text-sm text-gray-500">{m.position}</p>

          <Section title="Կրթություն" lines={m.education} />
          <Section title="Կարիերա" lines={m.career} />
          {m.extra && m.extra.map((s) => <Section key={s.title} title={s.title} text={s.text} />)}
        </div>
      </div>
    </main>
  );
}