import React from 'react';

// Баннер страницы с белой карточкой поверх картинки
export default function CareerHero({ image, title, text }) {
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: 'clamp(300px, 34vw, 440px)', overflow: 'hidden', background: '#f1d9f4' }}>
      <img
        src={image}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="mx-auto flex max-w-7xl items-end px-4 sm:px-10" style={{ position: 'relative', minHeight: 'inherit', paddingTop: 60, paddingBottom: 56 }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #f3f3f5 0%, #f7f1ff 100%)',
            borderRadius: '0 0 0 48px',
            padding: 'clamp(24px, 3.5vw, 48px) clamp(24px, 4vw, 56px)',
            maxWidth: 520,
            boxShadow: '0 12px 32px rgba(0,0,0,.08)',
          }}
        >
          <h1 style={{ margin: 0, fontWeight: 700, color: '#161616', fontSize: 'clamp(1.5rem, 1.1rem + 1.4vw, 2.1rem)', lineHeight: 1.25 }}>
            {title}
          </h1>
          {text && <p style={{ margin: '16px 0 0', color: '#555', lineHeight: 1.65, fontSize: 15 }}>{text}</p>}
        </div>
      </div>
    </section>
  );
}
