"use client";

import React from "react";
import { motion } from "framer-motion";
import { RevealText } from "./ui/RevealText";
import Link from "next/link";
import { projects } from "@/data/projects";

export const Works = () => {
  return (
    // 背景色を #f4f4f0 (Brunsohn white) に変更し、テキストカラーを調整
    <section id="works" className="w-full py-24 px-6 md:px-12 bg-[#f4f4f0] text-[#111] rounded-t-[2rem] -mt-8 relative z-30">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-16 border-b border-[#111]/10 pb-4 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <RevealText>Selected Works</RevealText>
          </h2>
          <span className="hidden md:inline-block text-sm font-mono opacity-50">(04)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-32">
          {projects.map((project, index) => (
            <Link href={`/works/${project.id}`} key={project.id} className={`group cursor-pointer flex flex-col ${index % 2 !== 0 ? "md:mt-32" : ""}`}>
              {/* 画像エリア: アスペクト比を調整し、より洗練された印象に */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#e0e0e0] mb-6">
                 <motion.div
                   whileHover={{ scale: 1.03 }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   className="w-full h-full relative"
                 >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                 </motion.div>
              </div>

              {/* テキスト情報 */}
              <div className="flex justify-between items-start border-t border-[#111]/20 pt-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none group-hover:opacity-60 transition-opacity duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#111]/60 mt-2 font-medium uppercase tracking-wide">{project.category}</p>
                </div>
                <span className="text-sm font-mono text-[#111]/40">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-32 text-center">
            <button className="px-10 py-5 border border-[#111]/20 rounded-full hover:bg-[#111] hover:text-[#f4f4f0] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};
