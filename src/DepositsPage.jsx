import React, { useState } from 'react';
import './DepositsPage.css';
import { Header } from './App';

// Картинки из вашего запроса:
const IMG_CLASSIC = "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg";
const IMG_CHILD = "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg";
const IMG_ONLINE = "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg";

// Переиспользуемый компонент карточки (аналогично структуре из busines.jsx)
const DepositCard = ({ image, title, description, stats, buttonText }) => {
  return (
    <div className="deposit-card">
      <div className="deposit-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="deposit-card-content">
        <h2 className="deposit-card-title">{title}</h2>
        <p className="deposit-card-description">{description}</p>
        
        <div className="deposit-card-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>

        <button className="deposit-card-btn">
          {buttonText || 'Մանրամասն'} &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default function DepositsPage() {
  const [activeTab, setActiveTab] = useState('deposits'); // 'deposits' | 'info'
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const depositsData = [
    {
      image: IMG_CLASSIC,
      title: "Դասական ավանդ",
      description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
      stats: [
        { label: "Սկսած", value: "100,000 ֏", sub: "Գումար" },
        { label: "Մինչև", value: "31-1,825 օր", sub: "Ժամկետ" },
        { label: "Մինչև", value: "10.5% ֏", sub: "Տոկոսադրույք" },
        { label: "Սկսած", value: "100,000 ֏", sub: "Համալրման հնարավորություն" }
      ]
    },
    {
      image: IMG_CHILD,
      title: "Մանկական ավանդ",
      description: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունվում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
      stats: [
        { label: "Սկսած", value: "100,000 ֏", sub: "Գումար" },
        { label: "Մինչև", value: "18 լրանալը", sub: "Ժամկետ" },
        { label: "Մինչև", value: "9.5% ֏", sub: "Տոկոսադրույք" },
        { label: "Սկսած", value: "40,000 ֏", sub: "Համալրման հնարավորություն" }
      ]
    },
    {
      image: IMG_ONLINE,
      title: "Ավանդ Evoca Online",
      description: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՞ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
      stats: [
        { label: "Սկսած", value: "100,000 ֏", sub: "Գումար" },
        { label: "Մինչև", value: "31-1,825 օր", sub: "Ժամկետ" },
        { label: "Մինչև", value: "10.75% ֏", sub: "Տոկոսադրույք" }
      ]
    }
  ];

  const accordionItems = [
    {
      title: "ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ - Ավանդների ներգրավման պայմանները",
      content: (
        <ol className="info-list">
          <li>Հաճախորդը (ստորև նաև` Ավանդատու) կարող է ավանդ ներդնել ինչպես «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ գործունեության վայրում (գլխամասային գրասենյակ և մասնաճյուղեր), այնպես էլ Բանկի հեռակառավարման համակարգերի (EvocaMobile, EvocaTouch) միջոցով:</li>
          <li>Հեռակառավարման համակարգերի միջոցով ավանդ ներդնելու համար Հաճախորդը պետք է նախապես հանդիսանա Բանկի հաշվետեր հաճախորդ և Բանկից ստացած լինի նշված համակարգեր մուտք գործելու գաղտնաբառերը:</li>
          <li>Ավանդների ներդրումը, դրանց դիմաց հաշվեգրված տոկոսագումարների վճարումը Ավանդատուի ցանկությամբ կարող է կատարվել ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:</li>
          <li>Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ և սոցիալական քարտ (նույնականացման քարտի առկայության դեպքում սոցիալական քարտ չի պահանջվում):</li>
          <li>Բանկի գործունեության վայրում ավանդ ներդնելու նպատակով Հաճախորդը լրացնում է հայտ-պայմանագիր:</li>
          <li>Բանկը կարող է Հաճախորդից պահանջել լրացուցիչ փաստաթղթեր (օրինակ՝ FATCA, AML):</li>
          <li>Ֆիզիկական անձանց ավանդները երաշխավորվում են համաձայն ՀՀ օրենքի:</li>
          <li>Ավանդի ներդրման համար Հաճախորդի համար բացվում է ավանդային արժույթով ընթացիկ հաշիվ:</li>
          <li>Ավանդի գումարի վերադարձը կատարվում է Ավանդային պայմանագրի վերջին օրը:</li>
        </ol>
      )
    },
    { title: "Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը", content: <p>Տոկոսագումարները հաշվարկվում են օրական կտրվածքով...</p> },
    { title: "Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն", content: <p>Տեղեկատվությունը տրամադրվում է քաղվածքների միջոցով...</p> },
    { title: "Երաշխավորված ավանդների չափերը", content: <p>Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի...</p> },
    { title: "Ավանդատուներին անվճար տրամադրվող վճարային քարտեր", content: <p>Ավանդատուներին տրամադրվում են ArCa, Visa, MasterCard քարտեր...</p> },
    { title: "Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ", content: <p>Օրինակների ցանկը ներկայացված է ստորև...</p> },
    { title: "Ավանդի տարեկան տոկոսային եկամտաբերության չափը", content: <p>Տարեկան տոկոսային եկամտաբերության հաշվարկ...</p> },
    { title: "Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերության աղյուսակներ", content: <p>Աղյուսակները թարմացված են:</p> },
    { title: "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում", content: <p>FATCA-ի վերաբերյալ ծանուցման տեքստը...</p> }
  ];

  const documentsData = [
    "Տեղեկատվական ամփոփագիր (Ավանդներ) 09.06.2026",
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.",
    "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026"
  ];

  return (
    <div className="evoca-container">
      <Header />
        {/* Header Secondary Purple Bar / Tabs */}
        <div className="sub-purple-bar">
          <div className="tabs-wrapper">
            <button 
              className={`tab-btn ${activeTab === 'deposits' ? 'active' : ''}`}
              onClick={() => setActiveTab('deposits')}
            >
              Ավանդներ
            </button>
            <button 
              className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Կարևոր տեղեկատվություն
            </button>
          </div>
        </div>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <span>🏠</span> &rsaquo; <span>Անհատ</span> &rsaquo; <span>Ավանդներ</span> &rsaquo; 
        <span className="current"> {activeTab === 'deposits' ? 'Ավանդներ' : 'Կարևոր տեղեկատվություն'}</span>
      </div>

      {/* Main Content Area */}
      <main className="evoca-main-content">
        {activeTab === 'deposits' ? (
          /* ----- TAB 1: Ավանդներ ----- */
          <div className="tab-page-deposits">
            <h1 className="page-title">Ավանդներ</h1>
            <div className="cards-list">
              {depositsData.map((dep, index) => (
                <DepositCard 
                  key={index}
                  image={dep.image}
                  title={dep.title}
                  description={dep.description}
                  stats={dep.stats}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ----- TAB 2: Կարևոր տեղեկատվություն ----- */
          <div className="tab-page-info">
            <h1 className="page-title">Կարևոր տեղեկատվություն</h1>

            <div className="accordion-section">
              {accordionItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`accordion-item ${openAccordion === idx ? 'open' : ''}`}
                >
                  <div 
                    className="accordion-header"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span>{item.title}</span>
                    <span className="arrow">{openAccordion === idx ? '▲' : '▼'}</span>
                  </div>
                  {openAccordion === idx && (
                    <div className="accordion-body">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Block Փաստաթղթեր */}
            <div className="documents-section">
              <h2 className="docs-title">Փաստաթղթեր</h2>
              <div className="docs-list">
                {documentsData.map((doc, idx) => (
                  <div className="doc-item" key={idx}>
                    <div className="doc-icon">📄</div>
                    <span className="doc-name">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="updated-date">
              Թարմացվել է՝ 14/10/2025 12:15
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="evoca-footer">
        <div className="footer-content">
          <div className="footer-col brand-col">
            <div className="footer-logo">evocaBANK</div>
            <p className="address">ք. Երևան, 0010, Հանրապետության 44/2</p>
            <p className="reg">Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</p>
            <p className="copy">1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</p>
          </div>

          <div className="footer-col">
            <h4>Բանկի մասին</h4>
            <ul>
              <li>Մեր մասին</li>
              <li>Ղեկավարություն</li>
              <li>Բաժնետերեր</li>
              <li>Հաշվետվություններ</li>
              <li>Իրավական ակտեր</li>
              <li>Սակագներ</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Օգտակար հղումներ</h4>
            <ul>
              <li>Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</li>
              <li>Հաճախորդի ռեզիդենտության չափանիշներ</li>
              <li>Կարգավորում</li>
              <li>Գաղտնիության</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Այլ հղումներ</h4>
            <ul>
              <li>EvocaONLINE</li>
              <li>Պահատուփեր</li>
              <li>Հաճախ տրվող հարցեր</li>
              <li>Հայտարարություններ</li>
              <li>Dibrary</li>
              <li>Բրոկերներ</li>
            </ul>
          </div>

          <div className="footer-col social-col">
            <div className="social-icons">
              <span>facebook</span>
              <span>instagram</span>
              <span>youtube</span>
              <span>linkedin</span>
            </div>
            <div className="app-buttons">
              <button className="app-btn">App Store</button>
              <button className="app-btn">Google Play</button>
            </div>
            <div className="footer-contacts">
              <a href="#link">Բանկի հասցեները և աշխատաժամերը</a>
              <p>Կապ մեզ հետ</p>
              <p className="phone">+374 10 605555</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}