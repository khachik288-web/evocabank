import React, { useRef, useState } from 'react';
import { RefreshCw, Upload, Mail, Globe, User } from 'lucide-react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const makeCaptcha = () => Array.from({ length: 5 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join('');

const input = {
  width: '100%',
  border: '1px solid #d9d9e0',
  borderRadius: 4,
  padding: '10px 12px',
  fontSize: 14,
  outline: 'none',
  background: '#fff',
};
const label = { display: 'block', fontSize: 13, color: '#333', marginBottom: 6, fontWeight: 500 };
const star = <span style={{ color: '#e11' }}> *</span>;

function Field({ title, required, error, icon: Icon, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={label}>{title}{required && star}</label>
      <div style={{ position: 'relative' }}>
        {Icon && <Icon size={15} style={{ position: 'absolute', left: 10, top: 13, color: '#999' }} />}
        {children}
      </div>
      {error && <p style={{ margin: '6px 0 0', color: '#d92d20', fontSize: 12 }}>{error}</p>}
    </div>
  );
}

// Форма «Դառնալ թիմի անդամ» — общая для всех страниц раздела «Կարիերա»
export default function CareerApplyForm() {
  const [v, setV] = useState({ name: '', surname: '', phone: '', email: '', fb: '', li: '', letter: '', code: '' });
  const [file, setFile] = useState(null);
  const [captcha, setCaptcha] = useState(makeCaptcha);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const fileRef = useRef(null);

  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }));
  const pad = (hasIcon) => (hasIcon ? { ...input, paddingLeft: 32 } : input);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = 'Լրացրեք անունը';
    if (!v.surname.trim()) er.surname = 'Լրացրեք ազգանունը';
    if (v.phone.replace(/\D/g, '').length < 8) er.phone = 'Մուտքագրեք վավեր հեռախոսահամար';
    if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Սխալ էլ. հասցե';
    if (!file) er.file = 'Կցեք ռեզյումեն';
    if (v.code.trim().toUpperCase() !== captcha) er.code = 'Սխալ ծածկագիր';
    setErrors(er);
    if (Object.keys(er).length) {
      if (er.code) setCaptcha(makeCaptcha());
      return;
    }
    setSent(true); // здесь можно отправить данные на сервер / в Firebase
  };

  if (sent) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 style={{ color: '#6a00db', fontWeight: 700 }}>Շնորհակալություն</h2>
        <p style={{ color: '#555', marginTop: 12 }}>
          Ձեր դիմումն ընդունված է: Մեր թիմը կապ կհաստատի Ձեզ հետ:
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 style={{ color: '#6a00db', fontWeight: 700, fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)', marginBottom: 20 }}>
        Դառնալ թիմի անդամ
      </h2>
      <p style={{ textAlign: 'center', color: '#444', lineHeight: 1.6, marginBottom: 32 }}>
        Եթե ցանկանում ես միանալ <strong style={{ color: '#6a00db' }}>EvocaTEAM</strong>-ին,
        <br />
        կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
      </p>

      <form onSubmit={submit} noValidate>
        <Field title="Անուն" required error={errors.name} icon={User}>
          <input style={pad(true)} value={v.name} onChange={set('name')} autoComplete="given-name" />
        </Field>
        <Field title="Ազգանուն" required error={errors.surname} icon={User}>
          <input style={pad(true)} value={v.surname} onChange={set('surname')} autoComplete="family-name" />
        </Field>
        <Field title="Հեռախոսահամար" required error={errors.phone}>
          <div style={{ display: 'flex' }}>
            <span style={{ ...input, width: 'auto', borderRight: 0, borderRadius: '4px 0 0 4px', background: '#fafafa', color: '#555', display: 'flex', alignItems: 'center', gap: 6 }}>
              🇦🇲 +374
            </span>
            <input type="tel" style={{ ...input, borderRadius: '0 4px 4px 0' }} value={v.phone} onChange={set('phone')} autoComplete="tel-national" />
          </div>
        </Field>
        <Field title="Էլ. հասցե" error={errors.email} icon={Mail}>
          <input type="email" style={pad(true)} value={v.email} onChange={set('email')} autoComplete="email" />
        </Field>
        <Field title="Facebook սոց. կայքում անձնական էջի հղում" icon={Globe}>
          <input style={pad(true)} value={v.fb} onChange={set('fb')} />
        </Field>
        <Field title="LinkedIn սոց. կայքում անձնական էջի հղում" icon={Globe}>
          <input style={pad(true)} value={v.li} onChange={set('li')} />
        </Field>
        <Field title="Ուղեկցող նամակ">
          <textarea rows={4} style={{ ...input, resize: 'vertical' }} value={v.letter} onChange={set('letter')} />
        </Field>

        <Field title="Վերբեռնեք Ձեր ռեզյումեն" required error={errors.file}>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            style={{ ...input, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px dashed #cfcfd8', padding: '24px 18px', cursor: 'pointer', fontSize: 13, color: '#555' }}
          >
            <span>{file ? file.name : 'Կցել ֆայլը / ֆայլերը'}</span>
            <Upload size={16} />
          </button>
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </Field>

        <div style={{ marginBottom: 20 }}>
          <label style={label}>Ստուգման ծածկագիր{star}</label>
          <div style={{ border: '1px solid #bbb', borderRadius: 4, padding: 14, maxWidth: 300 }}>
            <p style={{ margin: '0 0 6px', fontSize: 12, color: '#444' }}>Մուտքագրեք ծածկագիրը</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <input style={input} value={v.code} onChange={set('code')} autoComplete="off" />
              <button type="button" aria-label="refresh captcha" onClick={() => setCaptcha(makeCaptcha())} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#444' }}>
                <RefreshCw size={18} />
              </button>
            </div>
            <div
              aria-label="captcha"
              style={{ marginTop: 12, border: '1px solid #e5e5e5', textAlign: 'center', padding: '10px 0', fontSize: 26, letterSpacing: 4, fontFamily: 'monospace', textDecoration: 'line-through', userSelect: 'none', color: '#222' }}
            >
              {captcha}
            </div>
          </div>
          {errors.code && <p style={{ margin: '6px 0 0', color: '#d92d20', fontSize: 12 }}>{errors.code}</p>}
        </div>

        <button
          type="submit"
          style={{ width: '100%', background: '#6a00db', color: '#fff', border: 0, borderRadius: 999, padding: '14px 24px', fontWeight: 600, cursor: 'pointer' }}
        >
          Ես ուզում եմ աշխատել Evoca-ում :)
        </button>
      </form>
    </section>
  );
}
