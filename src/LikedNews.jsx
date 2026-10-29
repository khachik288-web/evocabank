import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { ThumbsUp, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { db, auth } from './firebase';
import { ALL_NEWS, CAT_COLOR } from './newsData';
import NewsVotes from './NewsVotes';

// Страница «Հավանած նորություններ»: все новости, которым текущий юзер поставил лайк.
// Источник — те же голоса newsVotes/{newsId}/{uid} = 1, что пишет NewsVotes.
export default function LikedNews() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [uid, setUid] = useState(undefined); // undefined = ещё проверяем вход
  const [liked, setLiked] = useState({}); // { [newsId]: true }

  useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        if (!u) navigate('/reg', { replace: true });
        else setUid(u.uid);
      }),
    [navigate]
  );

  useEffect(() => {
    if (!uid) return undefined;
    setLiked({});
    const offs = ALL_NEWS.map((n) =>
      onValue(ref(db, `newsVotes/${n.id}/${uid}`), (s) =>
        setLiked((prev) => {
          const next = { ...prev };
          if (s.val() === 1) next[n.id] = true;
          else delete next[n.id];
          return next;
        })
      )
    );
    return () => offs.forEach((off) => off());
  }, [uid]);

  const items = ALL_NEWS.filter((n) => liked[n.id]);

  return (
    <main
      className="w-full bg-white text-[#111]"
      style={{ fontFamily: "'Noto Sans Armenian','Montserrat',system-ui,sans-serif" }}
    >
      <div className="mx-auto max-w-[1440px] px-4 pb-24 pt-10 sm:px-6 xl:px-0">
        <Link
          to="/logout"
          className="mb-5 inline-flex items-center gap-1.5 text-sm text-slate-500 no-underline hover:text-[#6a0bd6] hover:no-underline"
        >
          <Home size={16} /> {t('Իմ էջը')}
        </Link>

        <h1 className="flex items-center gap-3 text-[32px] font-extrabold leading-tight text-[#1d0a4a]">
          <ThumbsUp size={28} className="text-[#6a0bd6]" /> {t('Հավանած նորություններ')}
        </h1>

        {uid === undefined ? null : items.length ? (
          <div className="mt-10 grid gap-x-[55px] gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.id}>
                <a href="#" className="group block no-underline">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="aspect-[438/328] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center">
                    <span
                      className="mr-4 inline-block h-[26px] w-1"
                      style={{ background: CAT_COLOR[item.cat] || '#6a0bd6' }}
                    />
                    <span className="text-[13px] font-bold text-[#1d0a4a]">{t(item.cat)}</span>
                  </div>
                  <h3 className="mt-5 line-clamp-2 text-[18px] font-medium leading-[26px] text-[#111]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-6 text-[17px] text-[#c9c9c9]">{item.date}</p>
                </a>
                {/* повторный клик по лайку снимает его — новость пропадёт из списка */}
                <NewsVotes id={item.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-[#f7f4fd] px-6 py-12 text-center">
            <p className="text-[#555]">{t('Դուք դեռ ոչ մի նորություն չեք հավանել:')}</p>
            <Link
              to="/news"
              className="mt-5 inline-block rounded-full bg-[#6a0bd6] px-6 py-3 text-[14px] font-bold text-white no-underline hover:bg-[#5c00b3] hover:no-underline"
            >
              {t('Նորություններ')}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
