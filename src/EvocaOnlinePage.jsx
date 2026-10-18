import React, { useState } from 'react';
import './EvocaOnlinePage.css';

export default function EvocaOnlinePage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const documents = [
    {
      id: 1,
      title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.',
      url: '#'
    },
    {
      id: 2,
      title: 'SWIFT Transfers (20.03.2026)',
      url: '#'
    },
    {
      id: 3,
      title: 'SWIFT переводы в РФ (20.03.2026)',
      url: '#'
    }
  ];

  return (
    <div className="evoca-online-page">
      {/* Ձախ կողմի սոց. ցանցերի ֆիքսված կոճակներ */}
      <div className="social-side-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="evoca-online-container">
        {/* Breadcrumbs */}
        <nav className="evoca-online-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">EvocaONLINE</span>
        </nav>

        {/* Վերնագիր */}
        <h1 className="evoca-online-main-title">
          EvocaONLINE
        </h1>

        {/* Բովանդակություն */}
        <div className="evoca-online-content">
          <h2 className="section-title-purple">
            Նկարագիրը և հնարավորությունները
          </h2>

          <p className="page-p">
            EvocaOnline-ը բանկային հաշիվների հեռակառավարման ինտերնետ-բանկ համակարգ է, որի միջոցով կարող եք հեռակառավարել Ձեր բանկային հաշիվները: EvocaOnline-ից կարող եք օգտվել մեր կայքի համապատասխան հղման միջոցով: Համակարգի միջոցով կարող եք՝
          </p>

          {/* Բաժին 1 */}
          <ul className="purple-bullet-list">
            <li>
              <span className="list-group-title">Դիտել տարբնույթ տեղեկատվություն.</span>
              <ul className="dash-sublist">
                <li>բանկային հաշիվների մնացորդներն ու գործառնությունները,</li>
                <li>հաշիվների,վճարային քարտերի, վարկերի, ավանդների քաղվածքները,</li>
                <li>վճարային քարտերի օնլայն մնացորդները,</li>
                <li>վարկերի մասին ամբողջ տեղեկատվությունը ու մարման ժամանակացույցը,</li>
                <li>ավանդների մասին ամբողջ տեղեկատվությունը,</li>
                <li>արտարժույթի փոխարժեքները:</li>
              </ul>
            </li>

            {/* Բաժին 2 */}
            <li>
              <span className="list-group-title">Կատարել գործարքներ.</span>
              <ul className="dash-sublist">
                <li>փոխանցումներ՝ միջազգային և Հայաստանի տարածքում (նաև խմբային),</li>
                <li>արտարժույթի փոխանակումներ,</li>
                <li>վարկի մարումներ,</li>
                <li>ավանդի բացում և համալրումներ,</li>
                <li>կոմունալ վճարումներ (նաև խմբային),</li>
                <li>բյուջետային փոխանցումներ,</li>
                <li>գույքահարկի վճարումներ,</li>
                <li>կանխիկացումներ,</li>
                <li>փաստաթղթերի չեղարկում:</li>
              </ul>
            </li>

            {/* Բաժին 3 */}
            <li>
              <span className="list-group-title">Ինչպես նաև.</span>
              <ul className="dash-sublist">
                <li>ուղարկել և ստանալ ազատ ֆորմատի նամակներ՝ կցված ֆայլերով (MS Word, Excel և այլն),</li>
                <li>ներմուծել տվյալներ xml ֆորմատով ֆայլից,</li>
                <li>ստեղծել փաստաթղթերի ձևանմուշներ (շաբլոններ):</li>
              </ul>
            </li>
          </ul>

          {/* Ուշադրություն բաժին */}
          <h3 className="section-title-purple mt-6">Ուշադրություն.</h3>

          <ul className="purple-bullet-list">
            <li>
              EvocaOnline հավելվածով գործարքներ կատարելիս գործում է միջնորդավճարների կիրառման շահավետ զեղչային համակարգ:
            </li>
            <li>
              Ծանոթացեք մեր Evoca Online ավանդատեսակին, որի ներդրման պարագայում գործում են ավելի բերձր տոկոսադրույքներ (մեր կողմից առաջարկվող այլ ավանդատեսակների համեմատ):
            </li>
            <li>
              Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ այստեղ:
            </li>
          </ul>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Accordion) */}
        <div className="accordion-section">
          <h2 className="accordion-main-title">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>

          <div className="accordion-list">
            <div className={`accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(0)}>
                <span>Անվտանգությունը</span>
                <span className="accordion-arrow">▼</span>
              </button>
              {openAccordion === 0 && (
                <div className="accordion-body">
                  <p>Բանկը կիրառում է անվտանգության ժամանակակից համակարգեր՝ ապահովելով Ձեր տվյալների և ֆինանսական միջոցների լիարժեք պաշտպանությունը հեռակառավարման բոլոր գործառնությունների ժամանակ:</p>
                </div>
              )}
            </div>

            <div className={`accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                <span>Ակտիվացման կարգը</span>
                <span className="accordion-arrow">▼</span>
              </button>
              {openAccordion === 1 && (
                <div className="accordion-body">
                  <p>EvocaOnline համակարգին միանալու համար կարող եք այցելել Բանկի ցանկացած մասնաճյուղ կամ դիմել առցանց եղանակով՝ լրացնելով համապատասխան հայտը Բանկի պաշտոնական կայքում:</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Փաստաթղթեր բաժին */}
        <div className="documents-section">
          <h2 className="docs-title">Փաստաթղթեր</h2>

          <div className="docs-list">
            {documents.map((doc) => (
              <a key={doc.id} href={doc.url} className="doc-item-card">
                <div className="doc-icon">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0H2C0.9 0 0 0.9 0 2V26C0 27.1 0.9 28 2 28H22C23.1 28 24 27.1 24 26V10L14 0Z" fill="#F0E8FF"/>
                    <path d="M14 0V10H24L14 0Z" fill="#D3BFFF"/>
                    <path d="M12 11V21M12 21L8.5 17.5M12 21L15.5 17.5" stroke="#7000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="doc-text">{doc.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Թարմացման ամսաթիվ */}
        <div className="evoca-online-updated-info">
          Թարմացվել է` 21/05/2026 09:28
        </div>
      </div>
    </div>
  );
}