import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TopDropdown, ONLINE_REQUESTS, FEEDBACK } from './HeaderDropdowns';
import MobileNav, { AuthLink } from './MobileNav';

const TOP = [['Անհատ', '/'], ['Բիզնես', '/business'], ['Ակնթարթային վճարումներ', '/web-payment'], ['Մեր մասին', '/about'], ['Նորություններ', '/news'], ['Բլոգ', '/blog'], ['Կարիերա', '/career']];
// [название, путь] — путь '#' пока заглушка
const MAIN = [['Վարկեր', '/business'], ['Քարտեր', '/cards'], ['Հաշիվներ', '/business/accounts'], ['Ավանդներ', '/business/deposits'], ['Արժեթղթերի շուկա', '/business/securities'], ['Առևտրի ֆինանսավորում', '/business/trade-finance'], ['Դիջիթալ', '/business/digital'], ['Այլ', '/business/other']];
// Заголовок фиолетовой полосы по маршруту
const SUB = { '/business': 'Բիզնես վարկեր', '/business/deposits': 'Դասական ավանդ' };
// Вкладки фиолетовой полосы для раздела «Առևտրի ֆինանսավորում»
const TRADE_TABS = [['Երաշխիք', '/business/trade-finance'], ['Ֆակտորինգային ֆինանսավորում', '/business/trade-finance/factoring'], ['Ակրեդիտիվ', '/business/trade-finance/letter-of-credit'], ['Ինկասո', '/business/trade-finance/collection']];
// Вкладки фиолетовой полосы для раздела «Արժեթղթերի շուկա»
const SECURITIES_TABS = [['Ներդրումային ծառայություններ', '/business/securities'], ['Պարտատոմսեր', '/business/securities/bonds'], ['ՀԿԴ ծառայություններ', '/business/securities/hkd'], ['Ռեպո/Հակադարձ ռեպո գործարքներ', '/business/securities/repo'], ['EvocaINVEST', '/business/securities/evocainvest']];
// Вкладки фиолетовой полосы для раздела «Հաշիվներ»
const ACCOUNT_TABS = [['Հաշիվների բացում և սպասարկում', '/business/accounts'], ['Առարկայազուրկ մետաղական հաշիվներ', '/business/accounts/metal']];

// Вкладки фиолетовой полосы для раздела «Դիջիթալ»
const DIGITAL_TABS = [['V-POS Տերմինալ', '/business/digital'], ['POS Տերմինալ', '/business/digital/pos'], ['Սակագներ', '/business/digital/tariffs'], ['Տերմինալի տեղադրման հայտ', '/business/digital/request'], ['Evoca Mobile POS mPOS', '/business/digital/mpos']];

// ayl vkladken 
const OTHER_TABS = [['Պահատուփեր', '/business/other'], ['Փոխանցումներ', '/business/other/transfers']];

export default function BusinessHeader({ sub }) {
  const { pathname } = useLocation();

  const title = sub || SUB[pathname] || 'Բիզնես վարկեր';
  const isAccounts = pathname.startsWith('/business/accounts');
  const isSecurities = pathname.startsWith('/business/securities');
  const isTrade = pathname.startsWith('/business/trade-finance');
  const isDigital = pathname.startsWith('/business/digital');
  const isOther = pathname.startsWith('/business/other');
  const tabs = isOther ? OTHER_TABS : isDigital ? DIGITAL_TABS : isAccounts ? ACCOUNT_TABS : isSecurities ? SECURITIES_TABS : isTrade ? TRADE_TABS : null;
  const isActive = (p) => p !== '#' && (p === '/business/other' ? isOther : p === '/business/accounts' ? isAccounts : p === '/business/securities' ? isSecurities : p === '/business/trade-finance' ? isTrade : pathname === p);

  return (
    <header className="w-full text-sm">
      {/* Top thin bar */}
      <div className="hidden border-b border-gray-200 px-6 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <nav className="flex items-center">
            {TOP.map(([label, path]) => {
              const active = label === 'Բիզնես';
              return (
                <Link
                  key={label}
                  to={path}
                  className={`relative px-2 py-3 text-[13px] text-black no-underline xl:px-4 xl:text-sm hover:text-purple-700 hover:no-underline ${
                    active
                      ? 'text-purple-700 after:absolute after:left-0 after:right-0 after:-bottom-px after:h-0.5 after:bg-purple-700'
                      : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3 whitespace-nowrap text-[13px] text-gray-600 xl:gap-5 xl:text-sm">
            <TopDropdown label="Առցանց հայտեր" items={ONLINE_REQUESTS} />
            <TopDropdown label="Հետադարձ կապ" items={FEEDBACK} />
            <AuthLink className="text-gray-600 no-underline hover:text-purple-700 hover:no-underline" />

            <button aria-label="location" className="hidden hover:text-purple-700 2xl:block">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
              </svg>
            </button>
            <button aria-label="help" className="hidden hover:text-purple-700 2xl:block">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.5 9a2.5 2.5 0 115 .5c0 1.5-2.5 1.5-2.5 3" />
                <line x1="12" y1="17" x2="12" y2="17" />
              </svg>
            </button>
            <button aria-label="language" className="hidden hover:text-purple-700 2xl:block">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
              </svg>
            </button>
            <button aria-label="search" className="hover:text-purple-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <MobileNav
              variant="desktop"
              topLinks={TOP.map(([label, path]) => ({ label, path }))}
              mainLinks={MAIN.map(([label, path]) => ({ label, path }))}
            />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="px-4 py-3 sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-10">
            <Link to="/" className="no-underline hover:no-underline" aria-label="evoca">
              <span className="text-2xl font-bold tracking-tight text-gray-800">
                evoc<span className="text-purple-700">a</span>
              </span>
            </Link>
            <nav className="hidden items-center gap-3 text-[13px] font-medium lg:flex xl:gap-7 xl:text-sm">
              {MAIN.map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className={`no-underline hover:no-underline ${
                    isActive(path) ? 'text-purple-700' : 'text-gray-800 hover:text-purple-700'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden bg-purple-700 px-4 py-2.5 font-semibold text-white hover:bg-purple-800 sm:block xl:px-6">
              EvocaONLINE
            </button>
            <MobileNav
              topLinks={TOP.map(([label, path]) => ({ label, path }))}
              mainLinks={MAIN.map(([label, path]) => ({ label, path }))}
            />
          </div>
        </div>
      </div>

      {/* Purple sub navigation */}
      <div className="bg-[#6a00db]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav className="flex min-w-max items-stretch">
            {tabs ? (
              tabs.map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className={`whitespace-nowrap px-5 py-[19px] text-[15px] font-semibold text-white no-underline hover:bg-[#5a00bd] hover:no-underline ${
                    pathname === path ? 'bg-[#5a00bd]' : ''
                  }`}
                >
                  {label}
                </Link>
              ))
            ) : (
              <span className="whitespace-nowrap bg-[#5a00bd] px-5 py-[19px] text-[15px] font-semibold text-white">
                {title}
              </span>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
