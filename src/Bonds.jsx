import React from 'react';
import { FileDown } from 'lucide-react';
import { PlainPage, List, Accordion, Soon } from './SecurityParts';

const ROWS = [
  ['Անվանական արժեք', '10,000 ՀՀ դրամ', '100 ԱՄՆ դոլար'],
  ['Ընդհանուր ծավալ', '3,000,000,000 ՀՀ դրամ', '15,000,000 ԱՄՆ դոլար'],
  ['Թողարկվող պարտատոմսերի քանակ', '300,000 հատ', '150,000 հատ'],
  ['Շրջանառության ժամկետ', '36 ամիս', '36 ամիս'],
  ['Արժեկտրոնային տարեկան տոկոսադրույք', '10%', '5%'],
  ['Արժեկտրոնների վճարման պարբերականություն', 'Եռամսյակային', 'Եռամսյակային'],
];

// Остальные выпуски — тексты добавляются сюда (body), пока там заглушка
const ISSUES = [
  'ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ',
  'ՏԱՍԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ',
  'ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ',
  'ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ',
  'ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ',
  'ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ',
];

function DocIcon({ badge }) {
  return (
    <svg viewBox="0 0 96 128" fill="none" stroke="#8b8b8b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="90" height="122" rx="6" />
      <path d="M22 26h52M22 42h52M22 58h52" />
      {badge === 'check' && (<><circle cx="66" cy="94" r="18" /><path d="M57 94l7 7 12-14" /></>)}
      {badge === 'dram' && (<><path d="M52 78c10 0 16 5 16 13s-6 13-16 13h-3" /><path d="M48 80v32M40 94h30M40 100h30" /></>)}
      {badge === 'usd' && (<><path d="M70 82c-3-4-7-5-11-5-6 0-10 3-10 8 0 11 22 6 22 18 0 5-5 8-11 8-5 0-9-2-12-6M60 72v52" /></>)}
    </svg>
  );
}

const DOC_CARDS = [
  ['ԾՐԱԳՐԱՅԻՆ', 'ԱԶԴԱԳԻՐ', 'check'],
  ['ՊԱՅՄԱՆՆԵՐ', 'ՀՀ ԴՐԱՄՈՎ', 'dram'],
  ['ՊԱՅՄԱՆՆԵՐ', 'ԱՄՆ ԴՈԼԱՐՈՎ', 'usd'],
];

const FILES = [
  'Դոլարային պարտատոմսերի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար',
  'Դրամային պարտատոմսերի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար',
];

export default function Bonds() {
  return (
    <PlainPage title="Պարտատոմսեր" updated="22/05/2026 10:36">
      <p className="dp-p">
        Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով:
      </p>
      <p className="dp-p">
        <a className="dp-link" href="#">Պարտատոմսերը</a> պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
      </p>
      <List items={[
        'Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:',
        'ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացվող եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:',
      ]} />

      <h2 className="dp-h2 dp-caps">Անհրաժեշտ տեղեկատվություն</h2>
      <div className="dp-accs">
        <Accordion title="ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԵՎ ՏԱՍՆՀԻՆԳԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ" defaultOpen>
          <h3 className="dp-center-h">Թողարկվող պարտատոմսերի պայմաններ</h3>
          <div className="dp-table-wrap">
            <table className="dp-table">
              <thead>
                <tr>
                  <th className="dp-left">Դաս</th>
                  <th className="dp-left" colSpan={2}>Անվանական արժեկտրոնային</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td className="dp-left">{r[0]}</td>
                    <td className="dp-left">{r[1]}</td>
                    <td className="dp-left">{r[2]}</td>
                  </tr>
                ))}
                <tr>
                  <td className="dp-left">Տեղաբաշխող</td>
                  <td className="dp-left" colSpan={2}>«Էվոկաբանկ» ԲԲԸ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ margin: '36px 0 8px' }}>
            Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
          </p>
          <div className="dp-docs3">
            {DOC_CARDS.map(([a, b, badge]) => (
              <a key={b} href="#" className="dp-doccard">
                <span>{a}<br />{b}</span>
                <DocIcon badge={badge} />
              </a>
            ))}
          </div>
        </Accordion>

        {ISSUES.map((t) => (
          <Accordion key={t} title={t}><Soon /></Accordion>
        ))}
        <Accordion title="Հաճախ տրվող հարցեր պարտատոմսերի մասին"><Soon /></Accordion>
      </div>

      <h2 className="dp-h2s">Փաստաթղթեր</h2>
      <ul className="dp-files">
        {FILES.map((f) => (
          <li key={f}><a className="dp-file" href="#"><FileDown size={26} strokeWidth={1.5} />{f}</a></li>
        ))}
      </ul>
    </PlainPage>
  );
}
