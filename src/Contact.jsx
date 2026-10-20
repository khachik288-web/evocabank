import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const INFO_ROWS = [
  { label: 'Հասցե', value: 'ՀՀ, 0010 Երևան, Հանրապետության փող, 44/2 շենք' },
  { label: 'Հեռախոսահամար', value: ['+374 10 605555,', '84-44'], list: true },
  { label: 'Էլ. փոստ', value: 'hello@evoca.am' },
  { label: 'SWIFT', value: 'PRML AM 22' },
  { label: 'Աշխատանքային ժամեր', value: '9:00 - 18:00' },
  { label: 'Հաճախորդների սպասարկման ժամեր', value: '9:30 - 17:00' },
];

const randomCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

export default function Contact() {
  const [captcha, setCaptcha] = useState(randomCaptcha());
  const [fileName, setFileName] = useState('');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    personType: 'individual',
    contactType: 'thanks',
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
    captchaInput: '',
  });

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = true;
    if (!form.surname.trim()) err.surname = true;
    if (!form.phone.trim()) err.phone = true;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = true;
    if (!form.message.trim()) err.message = true;
    if (form.captchaInput.trim().toUpperCase() !== captcha) err.captchaInput = true;
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      // TODO: отправка на backend
    }
  };

  const cls = (key) => `ct-input${errors[key] ? ' ct-error' : ''}`;

  return (
    <main className="ct-page">
      <style>{`
        .ct-page { color: #222; padding-bottom: 80px; }
        .ct-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        /* breadcrumbs */
        .ct-crumbs { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 18px 0; color: #6a00db; }
        .ct-crumbs a { color: #6a00db; text-decoration: none; transition: opacity .2s; }
        .ct-crumbs a:hover { opacity: .6; }

        .ct-title { font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); font-weight: 700; margin: 28px 0 32px; }

        /* info table */
        .ct-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px;
          box-shadow: 0 4px 20px rgba(106,0,219,.08); overflow: hidden; margin-bottom: 48px; }
        .ct-table tr { border-bottom: 1px solid #e3d3f8; transition: background .2s; }
        .ct-table tr:last-child { border-bottom: 0; }
        .ct-table tr:hover { background: #faf6ff; }
        .ct-table td { padding: 14px 18px; font-size: 13px; vertical-align: middle; }
        .ct-table td:first-child { width: 50%; border-right: 1px solid #e3d3f8; }
        .ct-table td:last-child { font-weight: 600; }
        .ct-table ul { margin: 0; padding-left: 18px; }
        .ct-table li::marker { color: #6a00db; }
        .ct-table a { color: inherit; text-decoration: none; }
        .ct-table a:hover { color: #6a00db; }

        /* form card */
        .ct-card { max-width: 640px; margin: 0 auto; background: #fff; border: 1px solid #e8dcf8;
          border-radius: 18px; padding: 32px; box-shadow: 0 6px 30px rgba(106,0,219,.05); }
        .ct-lead { font-size: 13px; line-height: 1.6; color: #444; margin: 0 0 6px; }
        .ct-note { font-size: 11px; color: #777; margin: 0 0 22px; }

        .ct-group { margin-bottom: 20px; }
        .ct-label { display: block; font-size: 13px; font-weight: 700; margin-bottom: 8px; }
        .ct-label i { color: #e02020; font-style: normal; }

        .ct-radios { display: flex; gap: 22px; flex-wrap: wrap; }
        .ct-radio { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer; transition: color .2s; }
        .ct-radio:hover { color: #6a00db; }
        .ct-radio input { appearance: none; width: 18px; height: 18px; border: 2px solid #bbb; border-radius: 50%;
          display: grid; place-content: center; margin: 0; cursor: pointer; transition: border-color .2s; }
        .ct-radio input::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #6a00db;
          transform: scale(0); transition: transform .15s; }
        .ct-radio input:checked { border-color: #6a00db; }
        .ct-radio input:checked::before { transform: scale(1); }
        .ct-radio input:hover { border-color: #6a00db; }

        .ct-input { width: 100%; border: 1px solid #ddd; border-radius: 8px; padding: 12px 14px; font-size: 14px;
          background: #fff; outline: none; transition: border-color .2s, box-shadow .2s; font-family: inherit; }
        .ct-input:hover { border-color: #b98af0; }
        .ct-input:focus { border-color: #6a00db; box-shadow: 0 0 0 3px rgba(106,0,219,.12); }
        .ct-input.ct-error { border-color: #e02020; }
        textarea.ct-input { min-height: 80px; resize: vertical; }

        .ct-phone { display: flex; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; transition: border-color .2s, box-shadow .2s; }
        .ct-phone:hover { border-color: #b98af0; }
        .ct-phone:focus-within { border-color: #6a00db; box-shadow: 0 0 0 3px rgba(106,0,219,.12); }
        .ct-phone.ct-error { border-color: #e02020; }
        .ct-phone select { border: 0; background: #f1f1f1; padding: 0 10px; font-size: 12px; cursor: pointer; outline: none; }
        .ct-phone input { flex: 1; border: 0; padding: 12px 14px; font-size: 14px; outline: none; min-width: 0; }

        .ct-file { display: flex; align-items: center; justify-content: space-between; border: 1px dashed #c9c9c9;
          border-radius: 8px; padding: 14px 16px; font-size: 12px; cursor: pointer; transition: all .2s; background: #fff; }
        .ct-file:hover { border-color: #6a00db; background: #faf6ff; }
        .ct-file-btn { width: 34px; height: 34px; border-radius: 50%; background: #f1f1f1; display: grid; place-items: center;
          color: #444; transition: background .2s, color .2s; }
        .ct-file:hover .ct-file-btn { background: #6a00db; color: #fff; }

        .ct-captcha { background: #f3f3f3; padding: 10px; display: inline-block; max-width: 100%; }
        .ct-captcha small { display: block; font-size: 10px; color: #999; margin-bottom: 4px; }
        .ct-captcha-row { display: flex; align-items: flex-start; gap: 6px; }
        .ct-captcha input { width: 150px; max-width: 100%; border: 1px solid #ddd; padding: 10px; outline: none; background: #fff; }
        .ct-captcha input:focus { border-color: #6a00db; }
        .ct-captcha input.ct-error { border-color: #e02020; }
        .ct-refresh { background: none; border: 0; cursor: pointer; color: #777; font-size: 14px; transition: transform .4s, color .2s; }
        .ct-refresh:hover { color: #6a00db; transform: rotate(180deg); }
        .ct-captcha-img { margin-top: 8px; background: #fff; border: 1px solid #ddd; padding: 6px 30px;
          font: 800 24px/1 'Courier New', monospace; letter-spacing: 4px; text-align: center; user-select: none;
          text-decoration: line-through; text-decoration-color: rgba(0,0,0,.4); }

        .ct-submit-wrap { text-align: center; margin-top: 30px; }
        .ct-submit { background: #6a00db; color: #fff; border: 0; border-radius: 999px; padding: 12px 40px;
          font-weight: 600; font-size: 14px; cursor: pointer; transition: background .2s, transform .15s, box-shadow .2s; }
        .ct-submit:hover { background: #5a00bd; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(106,0,219,.3); }
        .ct-submit:active { transform: translateY(0); }

        .ct-success { text-align: center; padding: 40px 10px; }
        .ct-success h3 { color: #6a00db; margin-bottom: 8px; }

        .ct-updated { text-align: right; font-size: 11px; color: #b7791f; margin-top: 40px; }

        /* ===== MEDIA ===== */
        @media (max-width: 1023px) {
          .ct-wrap { padding: 0 16px; }
          .ct-card { padding: 26px; }
        }
        @media (max-width: 767px) {
          .ct-title { margin: 16px 0 22px; }
          .ct-table td { padding: 12px 12px; font-size: 12px; }
          .ct-table td:first-child { width: 42%; }
          .ct-card { padding: 20px 16px; border-radius: 14px; }
        }
        @media (max-width: 575px) {
          .ct-table, .ct-table tbody, .ct-table tr, .ct-table td { display: block; width: 100%; }
          .ct-table tr { padding: 10px 0; }
          .ct-table td:first-child { width: 100%; border-right: 0; color: #777; padding-bottom: 2px; }
          .ct-table td:last-child { padding-top: 0; }
          .ct-submit { width: 100%; }
          .ct-radios { gap: 14px; }
        }
        @media (max-width: 380px) {
          .ct-wrap { padding: 0 10px; }
          .ct-captcha-img { padding: 6px 14px; font-size: 20px; }
        }
      `}</style>

      <div className="ct-wrap">
        <nav className="ct-crumbs">
          <Link to="/">⌂</Link>
          <span>›</span>
          <span>Հետադարձ կապ</span>
        </nav>

        <h1 className="ct-title">Հետադարձ կապ</h1>

        <table className="ct-table">
          <tbody>
            {INFO_ROWS.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td>
                  {r.list ? (
                    <ul>{r.value.map((v) => <li key={v}>{v}</li>)}</ul>
                  ) : r.label === 'Էլ. փոստ' ? (
                    <a href={`mailto:${r.value}`}>{r.value}</a>
                  ) : (
                    r.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form className="ct-card" onSubmit={handleSubmit} noValidate>
          {sent ? (
            <div className="ct-success">
              <h3>Շնորհակալություն։</h3>
              <p>Ձեր հաղորդագրությունը ուղարկված է։</p>
            </div>
          ) : (
            <>
              <p className="ct-lead">
                Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները, մտահոգությունները կամ ցանկացած խնդրի հետ
                կապված խնդիրները, որպեսզի կարողանանք բարելավել մեր ծառայությունները:
              </p>
              <p className="ct-note">Հաղորդագրության ուղարկելու համար լրացրեք ստորև բերված դաշտերը*</p>

              <div className="ct-group">
                <span className="ct-label">Դուք հանդիսանում եք</span>
                <div className="ct-radios">
                  <label className="ct-radio">
                    <input type="radio" name="personType" checked={form.personType === 'individual'} onChange={() => set('personType', 'individual')} />
                    Ֆիզիկական անձ
                  </label>
                  <label className="ct-radio">
                    <input type="radio" name="personType" checked={form.personType === 'legal'} onChange={() => set('personType', 'legal')} />
                    Իրավաբանական անձ
                  </label>
                </div>
              </div>

              <div className="ct-group">
                <span className="ct-label">Հետադարձ կապի տեսակը <i>*</i></span>
                <div className="ct-radios">
                  <label className="ct-radio">
                    <input type="radio" name="contactType" checked={form.contactType === 'thanks'} onChange={() => set('contactType', 'thanks')} />
                    Հայտնել շնորհակալություն
                  </label>
                  <label className="ct-radio">
                    <input type="radio" name="contactType" checked={form.contactType === 'offer'} onChange={() => set('contactType', 'offer')} />
                    Ներկայացնել առաջարկ
                  </label>
                </div>
              </div>

              <div className="ct-group">
                <label className="ct-label">Անուն <i>*</i></label>
                <input className={cls('name')} value={form.name} onChange={(e) => set('name', e.target.value)} />
              </div>

              <div className="ct-group">
                <label className="ct-label">Ազգանուն <i>*</i></label>
                <input className={cls('surname')} value={form.surname} onChange={(e) => set('surname', e.target.value)} />
              </div>

              <div className="ct-group">
                <label className="ct-label">Հեռ՝ <i>*</i></label>
                <div className={`ct-phone${errors.phone ? ' ct-error' : ''}`}>
                  <select defaultValue="+374" aria-label="Country code">
                    <option value="+374">🇦🇲 +374</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+33">🇫🇷 +33</option>
                  </select>
                  <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                </div>
              </div>

              <div className="ct-group">
                <label className="ct-label">Էլ. փոստ <i>*</i></label>
                <input type="email" className={cls('email')} value={form.email} onChange={(e) => set('email', e.target.value)} />
              </div>

              <div className="ct-group">
                <label className="ct-label">Հաղորդագրություն <i>*</i></label>
                <textarea className={cls('message')} value={form.message} onChange={(e) => set('message', e.target.value)} />
              </div>

              <div className="ct-group">
                <span className="ct-label">Կցել փաստաթուղթ</span>
                <div className="ct-file" onClick={() => fileRef.current?.click()}>
                  <span>{fileName || 'Կցել ֆայլ'}</span>
                  <span className="ct-file-btn">⇪</span>
                  <input
                    ref={fileRef}
                    type="file"
                    hidden
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  />
                </div>
              </div>

              <div className="ct-group">
                <span className="ct-label">Ստուգման ծածկագիր <i>*</i></span>
                <div className="ct-captcha">
                  <small>Մուտքագրեք ծածկագիրը</small>
                  <div className="ct-captcha-row">
                    <input
                      className={errors.captchaInput ? 'ct-error' : ''}
                      value={form.captchaInput}
                      onChange={(e) => set('captchaInput', e.target.value)}
                    />
                    <button type="button" className="ct-refresh" aria-label="refresh" onClick={() => setCaptcha(randomCaptcha())}>↻</button>
                  </div>
                  <div className="ct-captcha-img">{captcha}</div>
                </div>
              </div>

              <div className="ct-submit-wrap">
                <button type="submit" className="ct-submit">Ուղարկել</button>
              </div>
            </>
          )}
        </form>

        <div className="ct-updated">Թարմացվել է՝ {new Date().toLocaleDateString('ru-RU')}</div>
      </div>
    </main>
  );
}