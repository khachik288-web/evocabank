import React, { useState } from 'react';
import { 
  ChevronRight, 
  Plus, 
  Edit3, 
  Trash2, 
  Sparkles, 
  Layers, 
  X
} from 'lucide-react';

const DEFAULT_LOANS_DATA = [
  {
    id: '1',
    image: 'https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png',
    title: 'Արագ բիզնես վարկ/վարկային գիծ',
    description: 'Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:',
    stats: [
      { label: 'Ժամկետ', sublabel: 'մինչև', value: '60 ամիս' },
      { label: 'Սահմանաչափ կամ համարժեք արտարժույթ', sublabel: 'մինչև', value: '30 մլն ֏' },
      { label: 'Տարեկան տոկոսադրույք', sublabel: '', value: '9.22%-17.89%' }
    ],
    buttonText: 'Մանրամասն',
    buttonUrl: '#'
  },
  {
    id: '2',
    image: 'https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png',
    title: 'Պարզ բիզնես վարկ',
    description: 'Ստացեք Պարզ բիզնես վարկ\' անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:',
    stats: [
      { label: 'Սահմանաչափ կամ համարժեք արտարժույթ', sublabel: 'մինչև', value: '50 մլն ֏' },
      { label: 'Մարման ժամկետ', sublabel: 'մինչև', value: '60 ամիս' },
      { label: 'Տոկոսադրույք', sublabel: 'սկսած', value: '7.5%-ից' }
    ],
    buttonText: 'Մանրամասն',
    buttonUrl: '#'
  },
  {
    id: '3',
    image: 'https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png',
    title: 'Հաշվի վարկավորում',
    description: 'Հանդիսանու՞մ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:',
    stats: [
      { label: 'կամ համարժեք արտարժույթ', sublabel: 'առավելագույնը', value: '500 մլն ֏' },
      { label: 'Մարման ժամկետ', sublabel: 'առավելագույնը', value: '12 ամիս' },
      { label: 'Տոկոսադրույք', sublabel: 'սկսած', value: '7%-ից' }
    ],
    buttonText: 'Մանրամասն',
    buttonUrl: '#'
  }
];

export function LoanCard({
  image,
  title,
  description,
  stats = [],
  buttonText = 'Մանրամասն',
  buttonUrl = '#',
  onAction,
  className = ''
}) {
  return (
    <div className={`py-10 border-b border-gray-200/80 last:border-b-0 text-[#212529] font-sans ${className}`}>
      <div className="flex flex-col md:flex-row items-stretch md:items-start gap-8 lg:gap-12">
        <div className="w-full md:w-[380px] lg:w-[415px] flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden bg-[#f4f5f8] aspect-[415/261] flex items-center justify-center group shadow-sm transition-transform duration-300 hover:shadow-md">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/415x261/f4f5f8/6c3baa?text=Evocabank';
              }}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between self-stretch">
          <div>
            <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#111111] tracking-tight mb-3 leading-snug">
              {title}
            </h2>
            <p className="text-[#6c757d] text-[14px] lg:text-[15px] leading-relaxed mb-6 font-normal max-w-4xl">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    {stat.sublabel && (
                      <span className="text-[12px] text-[#868e96] font-medium leading-none mb-1">
                        {stat.sublabel}
                      </span>
                    )}
                    <div className="text-[22px] lg:text-[26px] font-bold text-[#7B2CBF] leading-tight tracking-tight my-0.5">
                      {stat.value}
                    </div>
                    {stat.label && (
                      <span className="text-[12px] lg:text-[13px] text-[#6c757d] font-medium leading-snug">
                        {stat.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <a
              href={buttonUrl}
              onClick={(e) => {
                if (onAction) {
                  e.preventDefault();
                  onAction();
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#f0e8f8] hover:bg-[#e4d4f4] text-[#7B2CBF] font-semibold text-[14px] transition-all duration-200 shadow-xs hover:shadow-sm group active:scale-95"
            >
              <span>{buttonText}</span>
              <ChevronRight className="w-4 h-4 text-[#7B2CBF] transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Business() {
  const [loans, setLoans] = useState(DEFAULT_LOANS_DATA);
  const [editingCard, setEditingCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    image: '',
    title: '',
    description: '',
    stats: [{ sublabel: 'մինչև', value: '50 մլն ֏', label: 'Սահմանաչափ' }],
    buttonText: 'Մանրամասն',
    buttonUrl: '#'
  });

  const handleOpenEdit = (loan) => {
    setEditingCard(loan.id);
    setFormData(JSON.parse(JSON.stringify(loan)));
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingCard) {
      setLoans(loans.map((item) => (item.id === editingCard ? formData : item)));
    } else {
      setLoans([formData, ...loans]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setLoans(loans.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setLoans(DEFAULT_LOANS_DATA);
  };

  return (
    <div className="min-h-screen bg-white text-[#212529] font-sans antialiased">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-10 text-left border-b border-gray-100 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-2">
            Բիզնես վարկեր
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Evocabank բիզնես ֆինանսավորման ծրագրեր և ճկուն վարկային ապրանքներ
          </p>
        </div>

        <div className="space-y-2">
          {loans.map((loan) => (
            <div key={loan.id} className="relative group/card">
              <div className="absolute top-4 right-0 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1.5 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg border border-purple-100 shadow-sm">
                <button
                  onClick={() => handleOpenEdit(loan)}
                  className="p-1.5 rounded-md hover:bg-purple-100 text-purple-700 transition-colors"
                  title="Խմբագրել"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(loan.id)}
                  className="p-1.5 rounded-md hover:bg-red-100 text-red-600 transition-colors"
                  title="Ջնջել"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <LoanCard
                image={loan.image}
                title={loan.title}
                description={loan.description}
                stats={loan.stats}
                buttonText={loan.buttonText}
                buttonUrl={loan.buttonUrl}
                onAction={() => alert(`Անցում՝ ${loan.title}`)}
              />
            </div>
          ))}

          {loans.length === 0 && (
            <div className="py-20 text-center text-gray-400">
              <Layers className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">Քարտեր չեն գտնվել</p>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 rounded-xl bg-purple-100 text-[#7B2CBF] text-sm font-semibold hover:bg-purple-200 transition-colors"
              >
                Վերականգնել ցանկը
              </button>
            </div>
          )}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                {editingCard ? 'Խմբագրել քարտը' : 'Ավելացնել նոր քարտ'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Վերնագիր
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Նկարագրություն
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors"
                >
                  Չեղարկել
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#7B2CBF] hover:bg-[#6A24A6] text-white text-sm font-semibold shadow-sm transition-all"
                >
                  Պահպանել
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}