import React from 'react';
import './CustomerRights.css';

export default function CustomerRights() {
  const documents = [
    {
      id: 1,
      title: '«Անցանկալի հաճախորդների հետ հարաբերությունների կառավարման» ընթացակարգ (Ուժի մեջ է 30.0...',
      url: '#'
    },
    {
      id: 2,
      title: 'Բողոքների քննության կանոններ (01.09.2026թ.)',
      url: '#'
    },
    {
      id: 3,
      title: 'Ինչ անել, եթե բողոք ունեք (01.09.2026թ.)',
      url: '#'
    },
    {
      id: 4,
      title: 'Բողոքի ներկայացման հայտ (01.09.2026թ.)',
      url: '#'
    },
    {
      id: 5,
      title: 'Անձնական տվյալների մշակման և երրորդ անձանց փոխանցման Համաձայնություն',
      url: '#'
    },
    {
      id: 6,
      title: 'Հաճախորդներին ծառայությունների մատուցման նպատակով Բանկի կողմից «ԷԿԵՆԳ» ՓԲԸ և «ՆՈՐՔ» կ...',
      url: '#'
    }
  ];

  return (
    <div className="customer-rights-page">
      {/* Ձախ կողմի սոց. ցանցերի ֆիքսված կոճակներ */}
      <div className="social-side-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="main-content-container">
        {/* Breadcrumbs */}
        <nav className="custom-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">
            Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
          </span>
        </nav>

        {/* Վերնագիր */}
        <h1 className="page-main-title">
          Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
        </h1>

        {/* Տեքստային բովանդակություն */}
        <div className="content-text-body">
          <p className="salutation">Հարգելի Հաճախորդներ՝</p>

          <p>
            Մեր կողմից հաճախորդների բողոք-պահանջների ընդունման, քննարկման և որոշումների կայացման
            (արձագանքման) գործընթացը կարգավորվում է «Էվոկաբանկ» ԲԲԸ կողմից հաստատված՝ Բողոքների
            քննության կանոններով:
          </p>

          <p>
            Ձեր իրավունքները կարող են պաշտպանվել ինչպես դատական կարգով, այնպես էլ Ֆինանսական համակարգի
            հաշտարարի միջոցով: Ֆինանսական համակարգի հաշտարարի քննությանը ենթակա պահանջներ են
            համարվում այն բողոք պահանջները, որոնք ներկայացվում են ֆիզիկական անձ հաճախորդի կողմից մեր դեմ,
            կապված են մեր ծառայությունների հետ և պարունակում են 10 մլն դրամը կամ դրան համարժեք արտարժույթով
            գումարը չգերազանցող գույքային պահանջ:
          </p>

          <p>
            Եթե Ձեր և Մեր միջև կնքվել է արբիտրաժային համաձայնություն,ապա մեր միջև ծագող վեճերը ենթակա են
            լուծման արբիտրաժային դատարանի կողմից («Առևտրային արբիտրաժի մասին» ՀՀ օրենքին, Արբիտրաժային
            դատարանի կանոնադրությանը և արբիտրաժի կանոնակարգին համապատասխան):
          </p>

          <p>
            Ֆինանսական համակարգի հաշտարարի գործունեությանը մանրամասն կարող եք ծանոթանալ{' '}
            <a href="https://www.fsm.am" target="_blank" rel="noreferrer" className="purple-link underline">
              www.fsm.am
            </a>{' '}
            պաշտոնական կայքում: Ֆինանսական համակարգի հաշտարարի քննությանը ենթակա պահանջներին առնչվող
            հարցերով կարող եք դիմել մեր Իրավաբանական բաժին՝ այցելելով Գլխամասային գրասենյակ կամ
            զանգահարելով (010) 60-55-55 հեռախոսահամարով:
          </p>

          <p className="attention-title">Ուշադրություն`</p>

          <ul className="purple-bullet-list">
            <li>
              Ցանկացած անձ իրավունք ունի ստանալ «Էվոկաբանկ» ԲԲԸ-ի վերաբերյալ «Բանկերի և բանկային
              գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի 3-րդ մասով, 43-րդ հոդվածի 2-րդ մասով սահմանված
              տեղեկատվության պատճենները (օրենքը կարող եք գտնել ՀՀ Կենտրոնական բանկի{' '}
              <a href="https://www.cba.am" target="_blank" rel="noreferrer" className="purple-link underline">
                www.cba.am
              </a>{' '}
              ինտերնետային հասցեում): Տեղեկատվության թղթային մեկ տպագիր էջի արժեքը 50 դրամ է, իսկ
              էլեկտրոնային առաքման դեպքում անվճար է:
            </li>
            <li>
              Վերոնշյալ տեղեկությունները Բանկը տրամադրում է գրավոր դիմում ստանալուց 3 (երեք) աշխատանքային
              օրվա ընթացքում: Գրավոր դիմումը կարող է ներկայացվել հետևյալ ձևերով. առձեռն` Բանկի գլխամասային
              գրասենյակում, ցանկացած մասնաճյուղում, էլեկտրոնային հասցեով՝{' '}
              <a href="mailto:hello@evoca.am" className="purple-link underline">
                hello@evoca.am
              </a>{' '}
              կամ փոստով՝ «Էվոկաբանկ» ԲԲԸ, ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:
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
        <div className="last-updated-info">
          Թարմացվել է` 24/08/2026 17:28
        </div>
      </div>
    </div>
  );
}