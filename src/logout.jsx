import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, get } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";

const DEFAULT_AVATAR =
  "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80";

export default function LogOut() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // никто не залогинен — отправляем на регистрацию/вход
        navigate("/reg");
        return;
      }

      const snapshot = await get(ref(db, `users/${user.uid}`));
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
      setLoading(false);
    });

    // отписка при размонтировании компонента, чтобы не было утечки
    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/reg");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500">Բեռնում է...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-[720px] bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col sm:flex-row">
        {/* Фото профиля — на мобиле сверху, невысокое; на десктопе слева, во всю высоту */}
        <div className="w-full h-40 sm:h-auto sm:w-1/2 shrink-0">
          <img
            src={userData?.photoURL || DEFAULT_AVATAR}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-center p-6 sm:p-8 gap-5 sm:gap-6 bg-white">
          {userData?.name && (
            <div>
              <label className="block text-xs text-slate-500 mb-1">Անուն</label>
              <p className="text-slate-800 font-medium text-base sm:text-lg border-b border-slate-200 pb-2 truncate">
                {userData.name}
              </p>
            </div>
          )}

          <div>
            <label className="block text-xs text-slate-500 mb-3 sm:mb-4 sm:text-[20px]">
              ձեր Տվյալները
            </label>
            <label className="block text-xs text-slate-500 mb-1">
              Էլ. հասցե
            </label>
            <p className="text-slate-800 font-medium text-base sm:text-lg border-b border-slate-200 pb-2 truncate">
              {userData?.email || "Нет данных"}
            </p>
          </div>

          {userData?.phone && (
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Հեռախոսահամար
              </label>
              <p className="text-slate-800 font-medium text-base sm:text-lg border-b border-slate-200 pb-2">
                {userData.phone}
              </p>
            </div>
          )}

          <div className="mt-2 sm:mt-4">
            <button
              onClick={handleLogOut}
              className="w-full bg-[#7000ff] hover:bg-[#5c00b3] active:bg-[#4b0094] text-white font-medium rounded-full py-3.5 sm:py-3 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}