import React from 'react';
import './SafeDepositBoxes.css';

export default function SafeDepositBoxes() {
  const documents = [
    {
      id: 1,
      title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.',
      url: '#'
    }
  ];

  return (
    <div className="safes-page">
      {/* Ձախ կողմի սոց. ցանցերի ֆիքսված կոճակներ */}
      <div className="social-side-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="safes-container">
        {/* Breadcrumbs */}
        <nav className="safes-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">Պահատուփեր</span>
        </nav>

        {/* Hero բլոկ վերնագրի և նկարի համար */}
        <div className="safes-hero-section">
          <div className="safes-hero-title-box">
            <h1 className="safes-main-title">
              Անհատական պահատուփեր
            </h1>
            <p className="safes-hero-text">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր:
            </p>
          </div>
          <div className="safes-hero-image-box">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg" 
              alt="Անհատական պահատուփեր" 
            />
          </div>
        </div>

        {/* Հիմնական տեքստեր */}
        <div className="safes-content">
          <p className="safes-p">
            Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն):
          </p>

          <p className="safes-p">
            Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ, պահատուփերի առանձնացված տարածքում կարող է գտնվել մինչև 15 րոպե:
          </p>

          <p className="safes-p">
            Առաջարկում ենք 3 չափի պահատուփեր՝ փոքր, միջին, մեծ:
          </p>

          <p className="safes-p">
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն բանկային միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալու օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:
          </p>

          <p className="safes-p">
            Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալության գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների:
          </p>

          <p className="safes-p">
            12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով:
          </p>

          <p className="safes-p">
            Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին:
          </p>
        </div>

        {/* Աղյուսակ 1: Չհրկիզվող անհատական պահարանների վարձակալման սակագներ */}
        <div className="safes-table-section">
          <h2 className="table-section-title">
            Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
          </h2>

          <div className="table-responsive">
            <table className="safes-table">
              <thead>
                <tr>
                  <th rowSpan="2" className="th-time">Ժամկետ</th>
                  <th colSpan="3">Պահատուփի չափերը</th>
                </tr>
                <tr>
                  <th>փոքր</th>
                  <th>միջին</th>
                  <th>մեծ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14 օր</td>
                  <td>5,000 ՀՀ դրամ</td>
                  <td>7,000 ՀՀ դրամ</td>
                  <td>10,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>1 ամիս</td>
                  <td>7,000 ՀՀ դրամ</td>
                  <td>10,000 ՀՀ դրամ</td>
                  <td>12,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>3 ամիս</td>
                  <td>10,000 ՀՀ դրամ</td>
                  <td>15,000 ՀՀ դրամ</td>
                  <td>20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>6 ամիս</td>
                  <td>15,000 ՀՀ դրամ</td>
                  <td>20,000 ՀՀ դրամ</td>
                  <td>25,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>12 ամիս</td>
                  <td>30,000 ՀՀ դրամ</td>
                  <td>40,000 ՀՀ դրամ</td>
                  <td>50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>Երկարաժամկետ</td>
                  <td>պայմանագրային</td>
                  <td>պայմանագրային</td>
                  <td>պայմանագրային</td>
                </tr>
                <tr>
                  <td>Պահատուփի բանալու կորուստ կամ վնասում</td>
                  <td colSpan="3" className="td-centered">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>Պահատուփի վնասում</td>
                  <td colSpan="3" className="td-centered">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td>Պայմանագրի ժամկետի ավարտին բանալին չհանձնում</td>
                  <td colSpan="3" className="td-centered">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                  <td colSpan="3" className="td-centered">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Աղյուսակ 2: Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար */}
        <div className="safes-table-section">
          <h2 className="table-section-title">
            Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
          </h2>

          <div className="table-responsive">
            <table className="safes-table">
              <thead>
                <tr>
                  <th rowSpan="2" className="th-time">Ժամկետ</th>
                  <th colSpan="3">Պահատուփի չափերը</th>
                </tr>
                <tr>
                  <th>փոքր</th>
                  <th>միջին</th>
                  <th>մեծ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14 օր</td>
                  <td>25,000 ՀՀ դրամ</td>
                  <td>35,000 ՀՀ դրամ</td>
                  <td>50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>1 ամիս</td>
                  <td>35,000 ՀՀ դրամ</td>
                  <td>50,000 ՀՀ դրամ</td>
                  <td>60,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>3 ամիս</td>
                  <td>50,000 ՀՀ դրամ</td>
                  <td>75,000 ՀՀ դրամ</td>
                  <td>100,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>6 ամիս</td>
                  <td>75,000 ՀՀ դրամ</td>
                  <td>100,000 ՀՀ դրամ</td>
                  <td>125,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>12 ամիս</td>
                  <td>100,000 ՀՀ դրամ</td>
                  <td>125,000 ՀՀ դրամ</td>
                  <td>150,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>Երկարաժամկետ</td>
                  <td>պայմանագրային</td>
                  <td>պայմանագրային</td>
                  <td>պայմանագրային</td>
                </tr>
                <tr>
                  <td>Պահատուփի բանալու կորուստ կամ վնասում</td>
                  <td colSpan="3" className="td-centered">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>Պահատուփի վնասում</td>
                  <td colSpan="3" className="td-centered">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td>Պայմանագրի ժամկետի ավարտին բանալին չհանձնում</td>
                  <td colSpan="3" className="td-centered">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td>Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                  <td colSpan="3" className="td-centered">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-note">
            <strong>Նշում</strong> - Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ
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
        <div className="safes-updated-info">
          Թարմացվել է` 18/03/2026 15:58
        </div>
      </div>
    </div>
  );
}