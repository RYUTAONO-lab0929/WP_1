"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール位置に応じて背景の濃さを変える
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const paddingY = useTransform(
    scrollY,
    [0, 100],
    ["20px", "12px"]
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // リンク先を適切に振り分け
  const menuItems = [
    { label: "Works", path: "/#works" },     // トップページのWorksセクションへ
    { label: "Services", path: "/services" }, // 詳細ページへ
    { label: "About", path: "/about" },       // 詳細ページへ
    { label: "Contact", path: "/#contact" }   // トップページ（フッター）のContactへ
  ];

  return (
    <motion.header
      style={{ 
        backgroundColor, 
        backdropFilter: backdropBlur,
        paddingTop: paddingY,
        paddingBottom: paddingY
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center text-white border-b border-white/0"
    >
      {/* ノイズテクスチャ */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-[-1]"
        style={{ 
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
            opacity: useTransform(scrollY, [0, 100], [0, 0.05])
        }}
      />

      {/* 下線のアニメーション */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"
        style={{ scaleX: useTransform(scrollY, [0, 100], [0, 1]) }}
      />

      {/* ロゴ */}
      <Link href="/" className="relative z-50 text-xl md:text-2xl font-bold tracking-tighter uppercase leading-none hover:opacity-70 transition-opacity mix-blend-difference">
        Brunsohn
      </Link>

      {/* デスクトップメニュー */}
      <nav className="hidden md:flex gap-12 relative z-50 mix-blend-difference">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className="text-xs font-medium uppercase tracking-[0.2em] hover:text-gray-300 transition-colors relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </nav>

      {/* モバイルメニューボタン */}
      <button className="md:hidden relative z-50 text-xs uppercase tracking-[0.2em] mix-blend-difference">
        Menu
      </button>
    </motion.header>
  );
};
