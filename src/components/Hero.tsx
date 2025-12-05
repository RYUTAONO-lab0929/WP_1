import React from "react";
import { RevealText } from "./ui/RevealText";

export const Hero = () => {
  return (
    <section className="w-full h-screen min-h-[800px] flex flex-col justify-end pb-12 px-6 md:px-12 relative overflow-hidden pt-32 md:pt-40">
      {/* 背景動画エリア */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div> {/* 読みやすさ確保のためのフィルター */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
           {/* ローカルに保存した確実な動画ファイル（スキー場の空撮） */}
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-[90rem] w-full mx-auto relative z-20 text-white">
        {/* メインコピー: 行間を調整し、重なりを解消 */}
        <div className="flex flex-col gap-0 mb-12 md:mb-24 w-full">
          <div className="overflow-hidden w-full">
            {/* "Multidisciplinary" は非常に長いため、サイズを7.5vwまで落としてパディング内に収める */}
            <RevealText delay={0.1} className="text-[7.5vw] font-bold tracking-tighter leading-[0.9] uppercase text-white/90"> 
              Multidisciplinary
            </RevealText>
          </div>
          <div className="overflow-hidden">
            <RevealText delay={0.2} className="text-[7.5vw] font-bold tracking-tighter leading-[0.9] uppercase text-white mix-blend-overlay">
              Studio.
            </RevealText>
          </div>
        </div>

        {/* サブテキストとスクロール指示 */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full border-t border-white/30 pt-8">
          <div className="text-lg md:text-2xl font-medium max-w-xl leading-tight tracking-tight text-white/90">
             <div className="overflow-hidden">
               <RevealText delay={0.8}>
                 Bold, modern visuals.
               </RevealText>
             </div>
             <div className="overflow-hidden text-white/60 mt-2 text-base md:text-lg font-normal">
               <RevealText delay={0.9}>
                 We craft digital experiences that balance precision and emotion.
               </RevealText>
             </div>
          </div>
          
          <div className="mt-12 md:mt-0 flex flex-col items-center gap-2 animate-pulse text-white">
             <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 rotate-90 origin-right translate-x-4">Scroll</span>
             <div className="w-[1px] h-16 bg-white/40 mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
