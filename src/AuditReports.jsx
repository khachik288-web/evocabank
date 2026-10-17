import React from 'react';
import { Link } from 'react-router-dom';

const YEARS = Array.from({ length: 21 }, (_, i) => 2026 - i); // 2026 ... 2006

function DocIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3l5 5v3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="17" r="4.5" />
      <path d="M17 14.8v4.4m0 0l-1.6-1.6m1.6 1.6l1.6-1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Crumb({ children, to }) {
  const cls = 'text-[11px] text-gray-600 no-underline hover:no-underline';
  return to ? <Link to={to} className={cls}>{children}</Link> : <span className={cls}>{children}</span>;
}

export default function AuditReports({ title = 'Աուդիտորական եզրակացություն' }) {
  return (
    <main className="bg-white pb-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 py-5">
          <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V11z" strokeLinejoin="round" />
          </svg>
          <span className="text-gray-400">›</span>
          <Crumb to="/about">Մեր մասին</Crumb>
          <span className="text-gray-400">›</span>
          <Crumb to="/about/reports/audit">Հաշվետվություններ</Crumb>
          <span className="text-gray-400">›</span>
          <Crumb>{title}</Crumb>
        </div>

        <h1 className="mb-16 mt-6 text-[28px] font-semibold text-gray-900">{title}</h1>

        {/* Years grid */}
        <div className="grid grid-cols-1 gap-x-24 gap-y-2 md:grid-cols-2">
          {YEARS.map((year) => (
            <section key={year} className="mb-8 max-w-[373px]">
              <h2 className="mb-6 text-[22px] font-bold text-gray-900">{year}</h2>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-4 rounded bg-[#f5f3f8] px-3 py-3 text-[13px] font-semibold text-gray-900 no-underline transition-colors hover:bg-[#ece7f5] hover:no-underline"
              >
                <DocIcon />
                <span>{year} {title}</span>
              </a>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
