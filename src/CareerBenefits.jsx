import React from 'react';
import CareerSubNav from './CareerSubNav';
import CareerHero from './CareerHero';
import CareerApplyForm from './CareerApplyForm';

const IMG = (id) => `https://www.evoca.am/images-cache/benefits/1/${id}/120x120.png`;

const BENEFITS = [
  { id: '17431437867453', title: 'Առողջության ապահովագրություն' },
  { id: '1743143856123', title: 'Ճամփորդական ապահովագրություն' },
  { id: '17431582596354', title: 'Evocabank-ի ծառայությունների արտոնյալ պայմաններ, ապահովագրական ծառայությունների զեղչեր' },
  { id: '17431582659146', title: 'Կորպորատիվ զեղչեր' },
  { id: '17431581917652', title: 'Տոնական և տարեվերջյան բոնուսներ' },
  { id: '174314403471', title: 'Պարգևատրումներ ծննդյան օրերին, ամուսնանալիս և երեխա ունենալիս' },
  { id: '17431442426277', title: 'Days-off' },
  { id: '17431443089347', title: 'Սպորտային փաթեթ' },
  { id: '17431453776119', title: 'Շարունակական կրթության և մասնագիտական զարգացման լայն հնարավորություն' },
];

export default function CareerBenefits() {
  return (
    <div style={{ background: '#fff' }}>
      <CareerSubNav />
      <CareerHero
        image="https://www.evoca.am/images-cache/menu/1/16194612394395/1920x634.jpg"
        title="Առավելություններ"
        text="Միացի՛ր թիմին, որի ամենամեծ ակտիվը ներգրավված և երջանիկ աշխատակիցներն են:"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 style={{ fontWeight: 500, color: '#222', fontSize: 'clamp(1.4rem, 1.1rem + 1vw, 2rem)', paddingBottom: 20, borderBottom: '1px solid #eee', marginBottom: 40 }}>
          Մեր առավելությունները
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <article key={b.id} style={{ textAlign: 'center' }}>
              <img
                src={IMG(b.id)}
                alt={b.title}
                width={120}
                height={120}
                loading="lazy"
                style={{ display: 'block', margin: '0 auto 18px', objectFit: 'contain' }}
              />
              <p style={{ margin: 0, color: '#333', fontSize: 15, lineHeight: 1.9 }}>{b.title}</p>
            </article>
          ))}
        </div>
      </section>

      <CareerApplyForm />
    </div>
  );
}
