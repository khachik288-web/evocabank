import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { db, auth, googleProvider } from "./firebase";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Reg() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Записывает публичный профиль юзера в базу под его uid
  const saveUserProfile = async (uid, data) => {
    await set(ref(db, `users/${uid}`), {
      ...data,
      createdAt: new Date().toISOString(),
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await saveUserProfile(user.uid, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      navigate("/logout");
    } catch (err) {
      console.error(err);
      setError("Սխալ Google-ով մուտքի ժամանակ");
    }
  };

  const handleRegister = async () => {
    setError("");
    if (!email || !password) {
      setError("Լրացրեք էլ. հասցեն և գաղտնաբառը");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await saveUserProfile(user.uid, {
        name: email.split("@")[0],
        email: email,
        phone: phone || null,
        photoURL: null,
      });

      navigate("/logout");
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err.code));
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/logout");
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err.code));
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "Այս էլ. հասցեն արդեն գրանցված է";
      case "auth/invalid-email":
        return "Սխալ էլ. հասցե";
      case "auth/weak-password":
        return "Գաղտնաբառը շատ թույլ է (նվազագույնը 6 նիշ)";
      case "auth/invalid-credential":
        return "Սխալ էլ. հասցե կամ գաղտնաբառ";
      default:
        return "Ինչ-որ բան այն չէ, փորձեք կրկին";
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Форма — на мобиле занимает весь экран и центрируется по высоте,
          на десктопе (lg+) — фиксированная колонка слева, как было */}
      <div className="w-full lg:max-w-md bg-slate-50 flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:justify-start">
        <img
          src="https://banks.am/static/companies/images/6faf03460c2de9d8eb4ee0d869ac7a1d.png"
          className="w-16 h-16 lg:w-[80px] lg:h-[80px] mb-6 lg:mb-[25px] mx-auto lg:mx-0"
        />

        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* email */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Էլ. հասցե
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-slate-200 pb-2 outline-none text-base sm:text-sm placeholder:text-slate-300 bg-white text-slate-800"
              />
            </div>

            {/* phone — опционально, только для профиля */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Հեռախոսահամար (ոչ պարտադիր)
              </label>
              <div className="flex items-center border-b border-slate-200 pb-2 gap-2">
                <span className="text-slate-600 text-sm">+374</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 outline-none text-base sm:text-sm placeholder:text-slate-300 bg-white text-slate-800"
                />
              </div>
            </div>

            {/* parol */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Գաղտնաբառ
              </label>
              <div className="flex items-center border-b border-slate-200 pb-2 gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 outline-none text-base sm:text-sm placeholder:text-slate-300 bg-white text-slate-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-slate-400 p-1 -m-1"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* mutq */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-[#7000ff] hover:bg-[#5c00b3] active:bg-[#4b0094] text-white font-medium rounded-full py-3.5 sm:py-3 mt-2"
            >
              Մուտք
            </button>

            {/* googlov */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-[#7000ff] bg-white hover:bg-slate-50 active:bg-slate-100 text-[#7000ff] font-medium rounded-full py-3.5 sm:py-3 mt-2 flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} />
              <span>Մուտք Google-ով</span>
            </button>

            {/* registracia */}
            <button
              type="button"
              onClick={handleRegister}
              className="w-full border border-[#7000ff] text-[#7000ff] font-medium rounded-full py-3.5 sm:py-3 bg-white active:bg-slate-50"
            >
              Գրանցում
            </button>
          </form>
        </div>
      </div>

      {/* Декоративная картинка — только на десктопе, на мобиле только забирает
          место у формы, поэтому скрыта до lg */}
      <div className="hidden lg:block relative flex-1 bg-[url('https://burst.shopifycdn.com/photos/man-hiking-in-mountains.jpg?exif=0&iptc=0')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10" />
        <h1 className="absolute top-16 left-16 text-white text-5xl font-bold drop-shadow-lg">
          EVOCABANK
        </h1>
      </div>
    </div>
  );
}