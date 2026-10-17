import React from 'react';
import './Regulation.css';

export default function Regulation() {
  const documents = [
    {
      id: 1,
      title: '«Անցանկալի հաճախորդների հետ հարաբերությունների կառավարման» ընթացակարգ (Ուժի մեջ է 30.0...',
      url: '#'
    },
    {
      id: 2,
      title: 'Բնապահպանական և սոցիալական կառավարման համակարգ',
      url: '#'
    },
    {
      id: 3,
      title: 'Հաճախորդների սպասարկման գործելակարգ 01.09.2026թ.',
      url: '#'
    },
    {
      id: 4,
      title: 'Տեղեկատվական անվտանգության քաղաքականություն (Ուժի մեջ է 25.12.2025թ.-ից)',
      url: '#'
    }
  ];

  return (
    <div className="regulation-page">
      {/* Ձախ կողմի սոց. ցանցերի ֆիքսված կոճակներ */}
      <div className="social-side-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="regulation-container">
        {/* Breadcrumbs */}
        <nav className="regulation-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">Կարգավորում</span>
        </nav>

        {/* Վերնագիր */}
        <h1 className="regulation-main-title">
          Կարգավորում
        </h1>

        {/* Ենթավերնագիր */}
        <h2 className="regulation-subtitle">
          Բանկի կողմից ծառայությունների մատուցումը կարգավորվում է `
        </h2>

        {/* Բովանդակություն */}
        <div className="regulation-content">
          <ul className="purple-bullet-list">
            <li>
              <span className="list-group-title">ՀՀ Օրենքներով`</span>
              <ul className="dash-sublist">
                <li>«Հայաստանի Հանրապետության Քաղաքացիական օրենսգիրք»,</li>
                <li>«Բանկային գաղտնիքի մասին»,</li>
                <li>«Բանկային ավանդների ներգրավման մասին»,</li>
                <li>«Վճարման հանձնարարականով միջոցների փոխանցումների մասին»,</li>
                <li>«Արժութային կարգավորման և արժութային վերահսկողության մասին»,</li>
                <li>«Արժեթղթերի շուկայի մասին»,</li>
                <li>«Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին»,</li>
                <li>«Վճարահաշվարկային համակարգերի և վճարահաշվարկային կազմակերպությունների մասին»,</li>
                <li>«Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին»,</li>
                <li>«Սպառողական կրեդիտավորման մասին»,</li>
                <li>«Բնակարանային հիփոթեքային կրեդիտավորման մասին»,</li>
                <li>«Պետական կենսաթոշակների մասին»,</li>
                <li>«Ֆինանսական համակարգի հաշտարարի մասին»,</li>
                <li>«Պետական նպաստների մասին»,</li>
                <li>«Բանկերի և բանկային գործունեության մասին»:</li>
              </ul>
            </li>

            <li>
              <span className="list-group-title">ՀՀ Կենտրոնական Բանկի Նորմատիվ իրավական ակտերով`</span>
              <ul className="dash-sublist">
                <li>Կանոնակարգ 8/01 «Տարեկան փաստացի տոկոսադրույքի հաշվարկման բացատրություններ և օրինակներ»,</li>
                <li>Կանոնակարգ 8/02 «Բանկային ավանդների տարեկան տոկոսային եկամտաբերության հաշվարկումը»,</li>
                <li>Կանոնակարգ 8/03 «Ֆինանսական կազմակերպությունների և ֆինանսական խմբերի կողմից տեղեկությունների հրապարակումը»,</li>
                <li>Կանոնակարգ 8/04 «Հաճախորդների բողոքների քննության գործընթացը կարգավորող ներքին իրավական ակտերին ներկայացվող նվազագույն պայմաններ և սկզբունքներ»,</li>
                <li>Կանոնակարգ 8/05 «Ֆինանսական կազմակերպությունների գործարար վարվելակերպի կանոնները»,</li>
                <li>Կանոնակարգ 9 «ՀՀ տարածքում գործող բանկերում կանխիկ դրամով կատարվող գործառնությունները»:</li>
              </ul>
            </li>

            <li>
              <span className="list-group-title">
                Բանկի Խորհրդի կողմից հաստատված Ներքին իրավական ակտերով (կանոնակարգեր, կարգեր, ընթացակարգեր և այլն):
              </span>
            </li>
          </ul>
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
        <div className="regulation-updated-info">
          Թարմացվել է` 03/04/2026 09:50
        </div>
      </div>
    </div>
  );
}