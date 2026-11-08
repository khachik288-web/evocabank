import React, { useState } from 'react';
import Tr from './Tr';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SecCrumbs, Hero, Share, List, Accordion, PH, Soon } from './SecurityParts';

const HERO_IMG = 'https://www.evoca.am/images-cache/menu/1/17812684765006/780x585.png';
const STEPS_IMG = 'https://www.evoca.am/file_manager/other/invest%20steps%20(1).png';
const VIDEO_IDS = ['5kUF-3KueZ8', 'wax5BjEOAGQ', 'oxxOZXf2kPA', 'XCz2N5eicHs', '8_C9YpvlZAE', '3mPDelJ-KcM', 'OIfnnN40_DA'];

// Вопросы известны, тексты ответов добавляются сюда (null = заглушка)
const FAQ = [
  ['Ի՞նչ է բաժնետոմսը:', 'Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է: Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակից սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից: Բաժնետոմսերի արժեքը կարող է փոփոխվել՝ շուկայական պահանջարկից, ընկերության արդյունքներից և տնտեսական պայմաններից կախված:'],
  ['Ի՞նչ է պարտատոմսը:', null],
  ['Ի՞նչ է ETF-ը:', null],
  ['Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև:', null],
  ['Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու:', null],
  ['Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ը ապահովում հասանելիություն:', null],
  ['Կարո՞ղ եմ միաժամանակ ունենալ տարբեր տեսակի արժեթղթեր:', null],
  ['Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ:', null],
  ['Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև:', null],
  ['Ի՞նչ է ticker-ը:', null],
  ['Ի՞նչ է դիվիդենտը:', null],
  ['Կարո՞ղ եմ պատվերներ տեղադրել բորսայի աշխատանքային ժամերից դուրս:', null],
  ['Ինչո՞ւ է կարևոր դիվերսիֆիկացիան:', null],
  ['Կարո՞ղ եմ վաճառել արժեթուղթը ցանկացած պահի:', null],
  ['Ի՞նչ արժույթներով կարող եմ ներդրումներ կատարել:', null],
  ['Ի՞նչ ռիսկեր ունի ներդրումը:', null],
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: подключить отправку на бэкенд / почту
    setSent(true);
  };
  return (
    <div className="dp-formbox">
      <div className="dp-form">
        <h3><Tr>{"EvocaINVEST հետադարձ կապ"}</Tr></h3>
        {sent ? (
          <p className="dp-thanks"><Tr>{"Շնորհակալություն, մենք կապ կհաստատենք ձեզ հետ:"}</Tr></p>
        ) : (
          <form onSubmit={onSubmit}>
            <div>
              <label><Tr>{"Անձնական տվյալներ"}</Tr></label>
              <div className="row2">
                <div><input className="dp-input" name="name" required /><small><Tr>{"Անուն"}</Tr></small></div>
                <div><input className="dp-input" name="surname" required /><small><Tr>{"Ազգանուն"}</Tr></small></div>
              </div>
            </div>
            <div>
              <label htmlFor="inv-mail"><Tr>{"Էլ. Հասցե"}</Tr></label>
              <input id="inv-mail" className="dp-input" type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="inv-tel"><Tr>{"Հեռախոսահամար"}</Tr></label>
              <div className="dp-phone">
                <span className="pre"><i className="dp-flag" /> +374</span>
                <input id="inv-tel" className="dp-input" type="tel" name="phone" required />
              </div>
            </div>
            <button className="dp-submit" type="submit"><Tr>{"Ուղարկել"}</Tr></button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function EvocaInvest() {
  const { t } = useTranslation();
  return (
    <div className="dp dp-v2">
      <div className="dp-wrap">
        <SecCrumbs current="EvocaINVEST" />

        <Hero
          title="Կատարիր ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով"
          text="EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:"
          img={HERO_IMG}
        />

        <div className="dp-body">
          <Share />
          <article className="dp-content">
            <p className="dp-p"><Tr>{"Apple, Tesla, Google, Amazon, թե՞ Nike:"}</Tr></p>
            <p className="dp-p"><b className="dp-pur">EvocaINVEST</b><Tr>{"-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես "}</Tr><b className="dp-pur">EvocaTOUCH</b><Tr>{" հավելվածից:"}</Tr></p>
            <p className="dp-p"><Tr>{"Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից:"}</Tr></p>

            <PH><Tr>{"Քո ներդրումային գործիքները"}</Tr></PH>
            <p className="dp-p"><b className="dp-pur">EvocaINVEST</b><Tr>{"-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը:"}</Tr></p>
            <ul className="dp-list">
              <li><b className="dp-pur"><Tr>{"Բաժնետոմսեր"}</Tr></b><Tr>{"՝ ներդրումներ համաշխարհային առաջատար ընկերություններում"}</Tr></li>
              <li><b className="dp-pur"><Tr>{"Պարտատոմսեր և եվրապարտատոմսեր"}</Tr></b><Tr>{"՝ ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն"}</Tr></li>
              <li><b className="dp-pur"><Tr>{"ETF-ներ"}</Tr></b><Tr>{"՝ դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով"}</Tr></li>
            </ul>
            <div className="dp-spacer" />
            <p className="dp-p"><Tr>{"Անկախ նրանից՝ նոր ես սկսում ներդրում կատարել, թե արդեն ունես փորձ, կատարում ես երկարաժամկետ, թե կարճաժամկետ ներդրումներ, "}</Tr><b className="dp-pur">EvocaINVEST</b><Tr>{"-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:"}</Tr></p>

            <PH><Tr>{"Բացիր բրոքերային հաշիվ 3 պարզ քայլով"}</Tr></PH>
            <PH><Tr>{"1. Ներբեռնիր EvocaTOUCH հավելվածը"}</Tr></PH>
            <p className="dp-p"><Tr>{"Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում:"}</Tr></p>
            <p className="dp-p"><Tr>{"Ներբեռնելու համար անցիր ("}</Tr><a className="dp-link" href="#">App Store</a><Tr>{" և "}</Tr><a className="dp-link" href="#">Google Play</a>):</p>
            <PH><Tr>{"2. Բացիր Բրոքերային հաշիվ"}</Tr></PH>
            <p className="dp-p"><Tr>{"Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:"}</Tr></p>
            <PH><Tr>{"3. Սկսիր ներդրումներ կատարել"}</Tr></PH>
            <p className="dp-p"><Tr>{"Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:"}</Tr></p>

            <img className="dp-wide" src={STEPS_IMG} alt={t('EvocaINVEST՝ 7 քայլ')} loading="lazy" />

            <PH><Tr>{"Ինչո՞ւ ընտրել EvocaINVEST Ներդրումային հարթակը"}</Tr></PH>
            <PH><Tr>{"24/7 պատվերներ"}</Tr></PH>
            <p className="dp-p"><Tr>{"Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:"}</Tr></p>
            <PH><Tr>{"Մրցակցային սակագներ"}</Tr></PH>
            <p className="dp-p"><Tr>{"Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:"}</Tr></p>
            <PH><Tr>{"Լիմիտային և շուկայական պատվերներ"}</Tr></PH>
            <p className="dp-p"><Tr>{"Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:"}</Tr></p>
            <PH><Tr>{"Զարգացրու ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ"}</Tr></PH>
            <p className="dp-p"><Tr>{"Միանալով "}</Tr><b className="dp-pur">EvocaINVEST</b><Tr>{" տելեգրամյան ալիքին՝ դու կգտնես:"}</Tr></p>
            <List items={[
              'Ներդրումների մասին պարզ և հասկանալի նյութեր,',
              'Շուկայական հետազոտություններ և վերլուծություններ,',
              'Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,',
              'Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:',
            ]} />
            <p className="dp-p"><Tr>{"Միացիր մեր տելեգրամյան ալիքին "}</Tr><a className="dp-link" href="#"><b><Tr>{"այս հղումով"}</Tr></b></a>:</p>

            <PH><Tr>{"Դեռ չե՞ս օգտվում EvocaINVEST-ից"}</Tr></PH>
            <p className="dp-p"><Tr>{"Պատրաստ ես բացահայտել ներդրումների աշխարհը:"}</Tr></p>
            <p className="dp-p"><Tr>{"Լրացրու տվյալներդ, և մենք կապ կհաստատենք քեզ հետ:"}</Tr></p>
            <p className="dp-p"><Tr>{"Կամ կարող ես անմիջապես կապ հաստատել մեր ներդրումային բաժնի հետ:"}</Tr></p>
            <div className="dp-contact">
              <a href="mailto:investsecurities@evoca.am"><Mail size={15} />investsecurities@evoca.am</a>
              <a href="tel:+37433777453"><Phone size={15} />+37433777453</a>
            </div>

            <PH><Tr>{"Կարևոր"}</Tr></PH>
            <p className="dp-p"><b className="dp-pur">EvocaINVEST</b><Tr>{"-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները. այս հարթակում և մյուս սոց. հարթակներում նյութերը բացառապես տեղեկատվական նպատակի համար են: Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա: Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք:"}</Tr></p>

            <ContactForm />

            <h2 className="dp-h2 dp-caps"><Tr>{"Անհրաժեշտ տեղեկատվություն"}</Tr></h2>
            <div className="dp-accs">
              <Accordion title="EvocaINVEST օգտակար նյութեր" defaultOpen wide>
                <div className="dp-videos">
                  {VIDEO_IDS.map((id, i) => (
                    <div className="dp-video" key={id}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}`}
                        title={`EvocaINVEST video ${i + 1}`}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>

            <h2 className="dp-h2"><Tr>{"Հաճախ տրվող հարցեր"}</Tr></h2>
            <div className="dp-accs">
              {FAQ.map(([q, a], i) => (
                <Accordion key={q} title={q} defaultOpen={i === 0}>
                  {a ? <p><Tr>{a}</Tr></p> : <Soon />}
                </Accordion>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
