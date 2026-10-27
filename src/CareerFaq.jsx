import React from 'react';
import CareerSubNav from './CareerSubNav';
import CareerHero from './CareerHero';
import CareerAccordion from './CareerAccordion';
import CareerApplyForm from './CareerApplyForm';

const QUESTIONS = [
  {
    title: 'Կարո՞ղ եմ միաժամանակ դիմել տարբեր աշխատատեղերի համար:',
    body: [
      'Մեկ օգտատիրոջ կողմից ներկայացվող դիմումների քանակն անսահմանափակ է, սակայն խնդրում ենք դիմել միայն այն աշխատանքների համար, որում նշված պահանջներին և հմտություններին համապատասխանում եք:',
    ],
  },
  {
    title: 'Դիմումը ներկայացնելուց որքա՞ն ժամանակ հետո ինձ կհրավիրեն հարցազրույցի:',
    body: [
      'Եթե Դուք դիմել եք հայտարարված ազատ աշխատատեղի համար և հայտնվել եք նախնական ընտրված թեկնածուների շարքում, ապա մեր թիմը կապ կհաստատի Ձեզ հետ հայտարարության ժամկետի ավարտից հետո`մեկ ամսվա ընթացքում:',
    ],
  },
  {
    title: 'Հարցազրույցի ընթացքում լինելո՞ւ է թեստավորում:',
    body: [
      'Աշխատանքի ընդունման մեր գործընթացը մի քանի փուլից է կազմված: Առաջին փուլում թեստավորում չի իրականացվում: Հետագա փուլերի մասին ինֆորմացիան կարող եք գտնել [«Ինչպես ընդունվել աշխատանքի Evocabank-ում»](/career/how-we-hire) բաժնում:',
    ],
  },
];

export default function CareerFaq() {
  return (
    <div style={{ background: '#fff' }}>
      <CareerSubNav />
      <CareerHero
        image="https://www.evoca.am/images-cache/menu/1/16194612949534/1920x634.jpg"
        title="Հաճախ տրվող հարցեր"
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 style={{ fontWeight: 600, color: '#333', fontSize: 20, marginBottom: 10 }}>Հարցերի ցանկ</h2>
        <p style={{ color: '#555', lineHeight: 1.65, marginBottom: 32 }}>
          Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին:
        </p>
        <CareerAccordion items={QUESTIONS} variant="faq" defaultOpen={0} />
      </section>

      <CareerApplyForm />
    </div>
  );
}
