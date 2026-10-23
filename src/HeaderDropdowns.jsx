import React, { useState, useEffect, useRef } from 'react';

export function TopDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-purple-700 no-underline hover:no-underline"
      >
        {label}
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[60] w-max min-w-[180px] pt-3">
          <ul className="m-0 list-none rounded-lg bg-white py-3 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href || '#'}
                  className="block whitespace-nowrap px-5 py-2 text-right text-[13px] font-medium text-gray-900 no-underline hover:text-purple-700 hover:no-underline"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export const ONLINE_REQUESTS = [
  { label: 'ՓՄԸ վարկավորում', href: '#' },
  { label: 'Visa Infinite', href: '#' },
  { label: 'MasterCard Gold', href: '#' },
  { label: 'Visa Gold', href: '#' },
];

export const FEEDBACK = [
  { label: '+374 10 605555', href: 'tel:+37410605555' },
  { label: '+374 98 205555', href: 'tel:+37498205555' },
  { label: '+374 99 605555', href: 'tel:+37499605555' },
  { label: '8444', href: 'tel:8444' },
  { label: 'Պատվիրել զանգ', href: '/contact' },
];
