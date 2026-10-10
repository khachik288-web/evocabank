import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
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
        <h3>EvocaINVEST հետադարձ կապ</h3>
        {sent ? (
          <p className="dp-thanks">Շնորհակալություն, մենք կապ կհաստատենք ձեզ հետ:</p>
        ) : (
          <form onSubmit={onSubmit}>
            <div>
              <label>Անձնական տվյալներ</label>
              <div className="row2">
                <div><input className="dp-input" name="name" required /><small>Անուն</small></div>
                <div><input className="dp-input" name="surname" required /><small>Ազգանուն</small></div>
              </div>
            </div>
            <div>
              <label htmlFor="inv-mail">Էլ. Հասցե</label>
              <input id="inv-mail" className="dp-input" type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="inv-tel">Հեռախոսահամար</label>
              <div className="dp-phone">
                <span className="pre"><i className="dp-flag" /> +374</span>
                <input id="inv-tel" className="dp-input" type="tel" name="phone" required />
              </div>
            </div>
            <button className="dp-submit" type="submit">Ուղարկել</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function EvocaInvest() {
  return (
    <div className="dp">
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
            <p className="dp-p">Apple, Tesla, Google, Amazon, թե՞ Nike:</p>
            <p className="dp-p"><b className="dp-pur">EvocaINVEST</b>-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես <b className="dp-pur">EvocaTOUCH</b> հավելվածից:</p>
            <p className="dp-p">Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից:</p>

            <PH>Քո ներդրումային գործիքները</PH>
            <p className="dp-p"><b className="dp-pur">EvocaINVEST</b>-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը:</p>
            <ul className="dp-list">
              <li><b className="dp-pur">Բաժնետոմսեր</b>՝ ներդրումներ համաշխարհային առաջատար ընկերություններում</li>
              <li><b className="dp-pur">Պարտատոմսեր և եվրապարտատոմսեր</b>՝ ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն</li>
              <li><b className="dp-pur">ETF-ներ</b>՝ դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով</li>
            </ul>
            <div className="dp-spacer" />
            <p className="dp-p">Անկախ նրանից՝ նոր ես սկսում ներդրում կատարել, թե արդեն ունես փորձ, կատարում ես երկարաժամկետ, թե կարճաժամկետ ներդրումներ, <b className="dp-pur">EvocaINVEST</b>-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:</p>

            <PH>Բացիր բրոքերային հաշիվ 3 պարզ քայլով</PH>
            <PH>1. Ներբեռնիր EvocaTOUCH հավելվածը</PH>
            <p className="dp-p">Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում:</p>
            <p className="dp-p">Ներբեռնելու համար անցիր (<a className="dp-link" href="#">App Store</a> և <a className="dp-link" href="#">Google Play</a>):</p>
            <PH>2. Բացիր Բրոքերային հաշիվ</PH>
            <p className="dp-p">Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:</p>
            <PH>3. Սկսիր ներդրումներ կատարել</PH>
            <p className="dp-p">Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:</p>

            <img className="dp-wide" src={STEPS_IMG} alt="EvocaINVEST՝ 7 քայլ" loading="lazy" />

            <PH>Ինչո՞ւ ընտրել EvocaINVEST Ներդրումային հարթակը</PH>
            <PH>24/7 պատվերներ</PH>
            <p className="dp-p">Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:</p>
            <PH>Մրցակցային սակագներ</PH>
            <p className="dp-p">Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:</p>
            <PH>Լիմիտային և շուկայական պատվերներ</PH>
            <p className="dp-p">Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:</p>
            <PH>Զարգացրու ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ</PH>
            <p className="dp-p">Միանալով <b className="dp-pur">EvocaINVEST</b> տելեգրամյան ալիքին՝ դու կգտնես:</p>
            <List items={[
              'Ներդրումների մասին պարզ և հասկանալի նյութեր,',
              'Շուկայական հետազոտություններ և վերլուծություններ,',
              'Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,',
              'Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:',
            ]} />
            <p className="dp-p">Միացիր մեր տելեգրամյան ալիքին <a className="dp-link" href="#"><b>այս հղումով</b></a>:</p>

            <PH>Դեռ չե՞ս օգտվում EvocaINVEST-ից</PH>
            <p className="dp-p">Պատրաստ ես բացահայտել ներդրումների աշխարհը:</p>
            <p className="dp-p">Լրացրու տվյալներդ, և մենք կապ կհաստատենք քեզ հետ:</p>
            <p className="dp-p">Կամ կարող ես անմիջապես կապ հաստատել մեր ներդրումային բաժնի հետ:</p>
            <div className="dp-contact">
              <a href="mailto:investsecurities@evoca.am"><Mail size={15} />investsecurities@evoca.am</a>
              <a href="tel:+37433777453"><Phone size={15} />+37433777453</a>
            </div>

            <PH>Կարևոր</PH>
            <p className="dp-p"><b className="dp-pur">EvocaINVEST</b>-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները. այս հարթակում և մյուս սոց. հարթակներում նյութերը բացառապես տեղեկատվական նպատակի համար են: Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա: Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք:</p>

            <ContactForm />

            <h2 className="dp-h2 dp-caps">Անհրաժեշտ տեղեկատվություն</h2>
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

            <h2 className="dp-h2">Հաճախ տրվող հարցեր</h2>
            <div className="dp-accs">
              {FAQ.map(([q, a], i) => (
                <Accordion key={q} title={q} defaultOpen={i === 0}>
                  {a ? <p>{a}</p> : <Soon />}
                </Accordion>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
