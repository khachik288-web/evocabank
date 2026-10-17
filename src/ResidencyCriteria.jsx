import React from 'react';
import './ResidencyCriteria.css';

export default function ResidencyCriteria() {
  return (
    <div className="residency-page">
      {/* Левая боковая панель соцсетей */}
      <div className="residency-social-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="residency-container">
        {/* Хлебные крошки */}
        <nav className="residency-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">Հաճախորդի ռեզիդենտության չափանիշներ</span>
        </nav>

        {/* Заголовок страницы */}
        <h1 className="residency-title">
          Հաճախորդի ռեզիդենտության չափանիշներ
        </h1>

        {/* Основной контент */}
        <div className="residency-content">
          <h2 className="section-title-purple">Ո՞վ է համարվում ՀՀ ռեզիդենտ:</h2>

          <p className="residency-p">
            Ձեր Ռեզիդենտության կարգավիճակը որոշվում է՝ հաշվի առնելով երկու կարևոր հանգամանք:
          </p>

          <p className="residency-p font-semibold">
            Դուք համարվում եք ՀՀ ռեզիդենտ, եթե՝
          </p>

          <ul className="purple-bullet-list">
            <li>
              տվյալ հարկային տարում <strong>ՀՀ-ում գտնվել եք 183 և ավել օր</strong>,
            </li>
            <li>
              Ձեր <strong>կենսական շահերի կենտրոնը ՀՀ-ում է</strong>:
            </li>
          </ul>

          <p className="residency-p">
            Կենսական շահերի կենտրոնը գնահատելիս կարող են հաշվի առնվել, օրինակ, Ձեր ընտանիքի բնակության վայրը, մշտական բնակության վայրը, հիմնական աշխատանքը կամ բիզնեսը, գույքը, եկամուտների աղբյուրներն ու տնտեսական գործունեությունը:
          </p>

          <h2 className="section-title-purple mt-8">ՀՀ ռեզիդենտ չե՞ք:</h2>

          <p className="residency-p">
            Դուք այլ երկրի քաղաքացի եք և չեք համապատասխանում ՀՀ ռեզիդենտության չափանիշներին:
          </p>

          <p className="residency-p">
            Բանկի հաճախորդ կարող եք դառնալ, եթե բավարարում եք ստորև նշված պայմաններից <strong>առնվազն մեկին</strong>:
          </p>

          <ol className="purple-numbered-list">
            <li>
              <div className="list-heading">Անշարժ գույք ՀՀ-ում</div>
              <p className="list-description">
                ՀՀ-ում ունեք անշարժ գույք և դրա նկատմամբ սեփականության իրավունքը հաստատող գրանցման վկայական:
              </p>
            </li>

            <li>
              <div className="list-heading">Ավանդ՝ առնվազն 6 ամիս ժամկետով</div>
              <p className="list-description">
                Evocabank-ում պատրաստվում եք ներդնել առնվազն 6 ամիս ժամկետով ավանդ հետևյալ սահմանաչափերով՝
              </p>

              <ul className="purple-bullet-sublist">
                <li>20,000 ԱՄՆ դոլար,</li>
                <li>20,000 եվրո,</li>
                <li>1,500,000 ՌԴ ռուբլի</li>
                <li>կամ դրանց համարժեք ՀՀ դրամ</li>
              </ul>
            </li>

            <li>
              <div className="list-heading">Անհատ ձեռնարկատեր ՀՀ-ում</div>
              <p className="list-description">
                ՀՀ-ում գրանցված եք որպես անհատ ձեռնարկատեր և ունեք համապատասխան գրանցման վկայական:
              </p>
            </li>

            <li>
              <div className="list-heading">Մասնակից կամ բաժնետեր ՀՀ-ում գրանցված ընկերությունում</div>
              <p className="list-description">
                ՀՀ-ում գրանցված ընկերության բաժնետեր եք, և այդ կարգավիճակը հաստատված է համապատասխան փաստաթղթերով:
              </p>
            </li>
          </ol>
        </div>

        {/* Дата обновления */}
        <div className="residency-updated-info">
          Թարմացվել է` 28/09/2026 10:35
        </div>
      </div>
    </div>
  );
}