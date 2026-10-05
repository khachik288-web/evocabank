import React, { useState } from 'react';

// Копия OnlineBankingBanner из App.jsx (баннер перед футером)
export default function OnlineBanner() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="relative w-full bg-[#5c00b3] p-10 max-[550px]:p-5 max-[550px]:pt-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 max-[550px]:gap-6 overflow-hidden">
        <div className="absolute top-10 left-10 max-[550px]:left-2 max-[550px]:top-4 w-8 h-8 max-[550px]:w-5 max-[550px]:h-5 border-[6px] max-[550px]:border-[4px] border-[#ff47d6] rounded-full opacity-80 z-0"></div>
        <div className="absolute top-20 right-10 max-[550px]:right-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] max-[550px]:border-l-[8px] max-[550px]:border-r-[8px] max-[550px]:border-b-[14px] border-transparent border-b-[#facc15] opacity-80 z-0 rotate-12"></div>
        <div className="absolute bottom-10 right-20 max-[550px]:right-4 max-[550px]:bottom-4 w-8 h-8 opacity-80 z-0 text-[#ff47d6]">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 12 L20 12 M12 4 L12 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
        </div>

        <div className="relative flex flex-col md:flex-row items-end justify-center w-full lg:w-1/2 gap-4 max-[550px]:gap-2 z-10 mt-4">
          <div className="relative w-full max-w-[480px] max-[550px]:max-w-[320px]">
            <div className="relative bg-black rounded-t-2xl max-[550px]:rounded-t-xl p-2 pb-5 max-[550px]:p-1.5 max-[550px]:pb-3 border-[3px] border-[#222] shadow-2xl z-10">
              <div className="relative aspect-video bg-gray-900 rounded-[4px] overflow-hidden group">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg"
                      alt="EvocaTOUCH Video Cover"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <svg viewBox="0 0 68 48" className="w-16 h-16 max-[550px]:w-10 max-[550px]:h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                        <path className="fill-[#ff0000] opacity-90 group-hover:opacity-100 transition-opacity" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.1 34 .1 34 .1s-21.79 0-27.1.15C3.97 2.33 2.26 4.81 1.48 7.74.1 13.06.1 24 .1 24s0 10.94 1.38 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.9 34 47.9 34 47.9s21.79 0 27.1-.15c2.93-.78 4.64-3.26 5.42-6.19C67.9 34.94 67.9 24 67.9 24s0-10.94-1.38-16.26z"/>
                        <path className="fill-white" d="M27 36l18-12-18-12v24z"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <iframe
                    id="video-KwAgMHEx8ys"
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1&enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="EvocaTOUCH"
                  ></iframe>
                )}
              </div>
            </div>
            <div className="relative h-4 max-[550px]:h-3 bg-[#b5b7ba] rounded-b-xl shadow-lg flex justify-center z-20 mx-[-4px]">
              <div className="w-24 max-[550px]:w-16 h-[6px] max-[550px]:h-[4px] bg-[#939598] rounded-b-md"></div>
            </div>
            <div className="h-1 bg-[#838588] rounded-b-3xl mx-1 shadow-2xl"></div>
          </div>

          <div className="relative w-[120px] max-[550px]:w-[85px] shrink-0 transform md:-translate-x-12 translate-y-6 max-[550px]:translate-y-2 md:translate-y-0 z-30">
            <div className="border-[5px] max-[550px]:border-[3px] border-[#1a1a1a] rounded-[24px] max-[550px]:rounded-[16px] overflow-hidden bg-black shadow-2xl relative">
              <img
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                alt="Evoca Mobile App"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 text-white z-10 flex flex-col items-center text-center lg:items-start lg:text-left mt-8 max-[550px]:mt-6 lg:mt-0 px-4 lg:px-10">
          <h2 className="text-3xl max-[550px]:text-2xl font-bold mb-4 max-[550px]:mb-2 tracking-wide text-[#f4f4f4]">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          <p className="text-[15px] max-[550px]:text-[13px] leading-relaxed mb-8 max-[550px]:mb-6 text-[#e2d5f8] max-w-md font-light">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
          </p>

          <button className="bg-white text-[#5c00b3] px-8 max-[550px]:px-6 py-3.5 max-[550px]:py-3 rounded-full font-bold max-[550px]:text-sm shadow-lg hover:bg-gray-100 transition-colors mb-10 max-[550px]:mb-8 w-max max-[550px]:w-full">
            Դառնալ հաճախորդ
          </button>
        </div>
      </div>
    </section>
  );
}
