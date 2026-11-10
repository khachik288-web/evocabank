import React, { useState } from 'react';
import Tr from './Tr';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DepositsPage.css';
import { Header } from './App';
import { DEPOSITS } from './depositsData';
import { onDownload } from './downloadFile';

// Переиспользуемый компонент карточки (аналогично структуре из busines.jsx)
const DepositCard = ({ image, title, description, stats, buttonText, onDetails }) => {
  const { t } = useTranslation();
  return (
    <div className="deposit-card">
      <div className="deposit-card-image">
        <img src={image} alt={t(title)} />
      </div>
      <div className="deposit-card-content">
        <h2 className="deposit-card-title">{t(title)}</h2>
        <p className="deposit-card-description">{t(description)}</p>

        <div className="deposit-card-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-label">{t(stat.label)}</span>
              <span className="stat-value"><Tr>{stat.value}</Tr></span>
              <span className="stat-sub">{t(stat.sub)}</span>
            </div>
          ))}
        </div>

        <button className="deposit-card-btn" onClick={onDetails}>
          {t(buttonText || 'Մանրամասն')} &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default function DepositsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('deposits'); // 'deposits' | 'info'
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ - Ավանդների ներգրավման պայմանները",
      content: (
        <ol className="info-list">
          <li><Tr>{"Հաճախորդը (ստորև նաև` Ավանդատու) կարող է ավանդ ներդնել ինչպես «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ գործունեության վայրում (գլխամասային գրասենյակ և մասնաճյուղեր), այնպես էլ Բանկի հեռակառավարման համակարգերի (EvocaMobile, EvocaTouch) միջոցով:"}</Tr></li>
          <li><Tr>{"Հեռակառավարման համակարգերի միջոցով ավանդ ներդնելու համար Հաճախորդը պետք է նախապես հանդիսանա Բանկի հաշվետեր հաճախորդ և Բանկից ստացած լինի նշված համակարգեր մուտք գործելու գաղտնաբառերը:"}</Tr></li>
          <li><Tr>{"Ավանդների ներդրումը, դրանց դիմաց հաշվեգրված տոկոսագումարների վճարումը Ավանդատուի ցանկությամբ կարող է կատարվել ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:"}</Tr></li>
          <li><Tr>{"Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ և սոցիալական քարտ (նույնականացման քարտի առկայության դեպքում սոցիալական քարտ չի պահանջվում):"}</Tr></li>
          <li><Tr>{"Բանկի գործունեության վայրում ավանդ ներդնելու նպատակով Հաճախորդը լրացնում է հայտ-պայմանագիր:"}</Tr></li>
          <li><Tr>{"Բանկը կարող է Հաճախորդից պահանջել լրացուցիչ փաստաթղթեր (օրինակ՝ FATCA, AML):"}</Tr></li>
          <li><Tr>{"Ֆիզիկական անձանց ավանդները երաշխավորվում են համաձայն ՀՀ օրենքի:"}</Tr></li>
          <li><Tr>{"Ավանդի ներդրման համար Հաճախորդի համար բացվում է ավանդային արժույթով ընթացիկ հաշիվ:"}</Tr></li>
          <li><Tr>{"Ավանդի գումարի վերադարձը կատարվում է Ավանդային պայմանագրի վերջին օրը:"}</Tr></li>
        </ol>
      )
    },
    { title: "Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը", content: <p><Tr>{"Տոկոսագումարները հաշվարկվում են օրական կտրվածքով..."}</Tr></p> },
    { title: "Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն", content: <p><Tr>{"Տեղեկատվությունը տրամադրվում է քաղվածքների միջոցով..."}</Tr></p> },
    { title: "Երաշխավորված ավանդների չափերը", content: <p><Tr>{"Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի..."}</Tr></p> },
    { title: "Ավանդատուներին անվճար տրամադրվող վճարային քարտեր", content: <p><Tr>{"Ավանդատուներին տրամադրվում են ArCa, Visa, MasterCard քարտեր..."}</Tr></p> },
    { title: "Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ", content: <p><Tr>{"Օրինակների ցանկը ներկայացված է ստորև..."}</Tr></p> },
    { title: "Ավանդի տարեկան տոկոսային եկամտաբերության չափը", content: <p><Tr>{"Տարեկան տոկոսային եկամտաբերության հաշվարկ..."}</Tr></p> },
    { title: "Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերության աղյուսակներ", content: <p><Tr>{"Աղյուսակները թարմացված են:"}</Tr></p> },
    { title: "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում", content: <p><Tr>{"FATCA-ի վերաբերյալ ծանուցման տեքստը..."}</Tr></p> }
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
              <Tr>{"Ավանդներ"}</Tr>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              <Tr>{"Կարևոր տեղեկատվություն"}</Tr>
            </button>
          </div>
        </div>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <span>🏠</span> &rsaquo; <span><Tr>{"Անհատ"}</Tr></span> &rsaquo; <span><Tr>{"Ավանդներ"}</Tr></span> &rsaquo; 
        <span className="current"> <Tr>{activeTab === 'deposits' ? 'Ավանդներ' : 'Կարևոր տեղեկատվություն'}</Tr></span>
      </div>

      {/* Main Content Area */}
      <main className="evoca-main-content">
        {activeTab === 'deposits' ? (
          /* ----- TAB 1: Ավանդներ ----- */
          <div className="tab-page-deposits">
            <h1 className="page-title"><Tr>{"Ավանդներ"}</Tr></h1>
            <div className="cards-list">
              {DEPOSITS.map((dep) => (
                <DepositCard
                  key={dep.id}
                  image={dep.image}
                  title={dep.title}
                  description={dep.description}
                  stats={dep.stats}
                  onDetails={() => navigate(`/deposits/${dep.id}`)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ----- TAB 2: Կարևոր տեղեկատվություն ----- */
          <div className="tab-page-info">
            <h1 className="page-title"><Tr>{"Կարևոր տեղեկատվություն"}</Tr></h1>

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
                    <span><Tr>{item.title}</Tr></span>
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
              <h2 className="docs-title"><Tr>{"Փաստաթղթեր"}</Tr></h2>
              <div className="docs-list">
                {documentsData.map((doc, idx) => (
                  <div className="doc-item" key={idx} onClick={onDownload(doc)} role="button" tabIndex={0}>
                    <div className="doc-icon">📄</div>
                    <span className="doc-name"><Tr>{doc}</Tr></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="updated-date">
              <Tr>{"Թարմացվել է՝ "}</Tr>{'14/10/2025 12:15'}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="evoca-footer">
        <div className="footer-content">
          <div className="footer-col brand-col">
            <div className="footer-logo">evocaBANK</div>
            <p className="address"><Tr>{"ք. Երևան, 0010, Հանրապետության 44/2"}</Tr></p>
            <p className="reg"><Tr>{"Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից"}</Tr></p>
            <p className="copy"><Tr>{"1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ"}</Tr></p>
          </div>

          <div className="footer-col">
            <h4><Tr>{"Բանկի մասին"}</Tr></h4>
            <ul>
              <li><Tr>{"Մեր մասին"}</Tr></li>
              <li><Tr>{"Ղեկավարություն"}</Tr></li>
              <li><Tr>{"Բաժնետերեր"}</Tr></li>
              <li><Tr>{"Հաշվետվություններ"}</Tr></li>
              <li><Tr>{"Իրավական ակտեր"}</Tr></li>
              <li><Tr>{"Սակագներ"}</Tr></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4><Tr>{"Օգտակար հղումներ"}</Tr></h4>
            <ul>
              <li><Tr>{"Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)"}</Tr></li>
              <li><Tr>{"Հաճախորդի ռեզիդենտության չափանիշներ"}</Tr></li>
              <li><Tr>{"Կարգավորում"}</Tr></li>
              <li><Tr>{"Գաղտնիության"}</Tr></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4><Tr>{"Այլ հղումներ"}</Tr></h4>
            <ul>
              <li>EvocaONLINE</li>
              <li><Tr>{"Պահատուփեր"}</Tr></li>
              <li><Tr>{"Հաճախ տրվող հարցեր"}</Tr></li>
              <li><Tr>{"Հայտարարություններ"}</Tr></li>
              <li>Dibrary</li>
              <li><Tr>{"Բրոկերներ"}</Tr></li>
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
              <a href="#link"><Tr>{"Բանկի հասցեները և աշխատաժամերը"}</Tr></a>
              <p><Tr>{"Կապ մեզ հետ"}</Tr></p>
              <p className="phone">+374 10 605555</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}