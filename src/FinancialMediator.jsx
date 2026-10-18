import React from 'react';
import './FinancialMediator.css';

export default function FinancialMediator() {
  return (
    <div className="mediator-page">
      {/* Ձախ կողմի սոց. ցանցերի ֆիքսված կոճակներ */}
      <div className="social-side-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="mediator-container">
        {/* Breadcrumbs */}
        <nav className="mediator-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">Ֆին. հաշտարար</span>
        </nav>

        {/* Վերնագիր */}
        <h1 className="mediator-main-title">
          Ֆին. հաշտարար
        </h1>

        {/* Բովանդակություն */}
        <div className="mediator-content">
          <p className="mediator-lead-text">
            <strong>Ֆինանսական համակարգի հաշտարարի</strong> գրասենյակն անկախ կառավարման համակարգով կառույց է, որի հիմնադիրն է ՀՀ կենտրոնական բանկը: Հաշտարարի գրասենյակը կոչված է լուծելու ֆիզիկական անձ սպառողների և ֆինանսական կազմակերպությունների միջև ծագած գույքային վեճերը:
          </p>

          <p className="mediator-p">
            Հաշտարարի ծառայություններն անվճար են:
          </p>

          <h2 className="mediator-section-title">
            Ֆինանսական համակարգի հաշտարարի գործունեության նպատակներն են`
          </h2>

          <ul className="purple-bullet-list">
            <li>ֆինանսական ոլորտում սպառողների իրավունքների ու շահերի պաշտպանությունը,</li>
            <li>սպառողների պահանջների արագ, արդյունավետ և անվճար քննությունը,</li>
            <li>ֆինանսական համակարգի նկատմամբ հանրության վստահության բարձրացումը:</li>
          </ul>

          <h2 className="mediator-section-title">
            Ֆինանսական համակարգի հաշտարարի գրասենյակ`
          </h2>

          <p className="mediator-p">
            Ֆինանսական համակարգի հաշտարարի գլխավոր հաշտարար, Գրասենյակի կառավարիչ՝ Վազգեն Մնացականյան
          </p>

          <p className="mediator-p">
            Հաշտարար՝ Փիրուզ Սարգսյան
          </p>

          <p className="mediator-p">
            Հասցե՝ ՀՀ, 0010, ք. Երևան, Մ. Խորենացու փող., 15, «Էլիտ Մլազա» բիզնես կենտրոն 7-րդ հարկ
          </p>

          <p className="mediator-p">
            Հեռ.՝ +374 60 70-11-11
          </p>

          <p className="mediator-p">
            Ֆաքս՝ +374 10 58-24-21
          </p>

          <p className="mediator-p">
            Էլ. հասցե՝ <a href="mailto:Info@fsm.am" className="purple-link">Info@fsm.am</a>,
          </p>

          <p className="mediator-p">
            Պաշտոնական կայք՝ <a href="https://www.fsm.am" target="_blank" rel="noreferrer" className="purple-link">www.fsm.am</a>
          </p>

          <h2 className="mediator-section-title">
            Աշխատանքային ժամեր`
          </h2>

          <p className="mediator-p">
            Ֆինանսական համակարգի հաշտարարի գրասենյակն աշխատում է ամեն օր ժամը 09:00 - 18:00 (ընդմիջման ժամը՝ 13:00-ից 14:00), բացի հանգստյան և տոն օրերից:
          </p>
        </div>

        {/* Թարմացման ամսաթիվ */}
        <div className="mediator-updated-info">
          Թարմացվել է` 17/08/2026 12:03
        </div>
      </div>
    </div>
  );
}