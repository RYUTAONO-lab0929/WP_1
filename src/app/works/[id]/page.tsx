import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { RevealText } from "@/components/ui/RevealText";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// ページパラメータの型定義
interface PageProps {
  params: Promise<{ id: string }>;
}

// 静的パスの生成（SSG的に動作させるため）
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function WorkDetail({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  // 次のプロジェクトへのナビゲーション用
  const nextProject = projects.find((p) => p.id === (project.id % projects.length) + 1) || projects[0];

  return (
    <main className="min-h-screen bg-[#f4f4f0] text-[#111]">
      <Header />
      
      {/* ヒーローセクション：画面いっぱいの画像 */}
      <section className="relative w-full h-[80vh] min-h-[600px]">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-12 pb-12 md:pb-20 text-white">
           <div className="max-w-[90rem] mx-auto">
             <p className="text-sm md:text-base font-mono mb-4 opacity-80 uppercase tracking-widest">{project.category} — {project.year}</p>
             <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none uppercase">
               <RevealText>{project.title}</RevealText>
             </h1>
           </div>
        </div>
      </section>

      {/* 詳細コンテンツ */}
      <section className="px-6 md:px-12 py-24 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {/* 左カラム：メタデータ */}
          <div className="md:col-span-1 space-y-8">
            <div className="border-t border-[#111]/20 pt-4">
               <h3 className="text-xs uppercase tracking-[0.2em] text-[#111]/50 mb-2">Client</h3>
               <p className="text-lg font-medium">{project.client}</p>
            </div>
            <div className="border-t border-[#111]/20 pt-4">
               <h3 className="text-xs uppercase tracking-[0.2em] text-[#111]/50 mb-2">Role</h3>
               <p className="text-lg font-medium">{project.role}</p>
            </div>
            <div className="border-t border-[#111]/20 pt-4">
               <h3 className="text-xs uppercase tracking-[0.2em] text-[#111]/50 mb-2">Year</h3>
               <p className="text-lg font-medium">{project.year}</p>
            </div>
          </div>

          {/* 右カラム：説明文 */}
          <div className="md:col-span-2">
            <p className="text-xl md:text-3xl leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        </div>

        {/* ギャラリー画像 */}
        <div className="mt-32 space-y-8 md:space-y-32">
           {project.gallery.map((img, index) => (
             <div key={index} className="w-full aspect-video relative overflow-hidden bg-gray-200">
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
             </div>
           ))}
        </div>
      </section>

      {/* 次のプロジェクトへのリンク */}
      <section className="px-6 md:px-12 py-32 bg-[#111] text-[#f4f4f0]">
        <div className="max-w-[90rem] mx-auto text-center">
           <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8">Next Project</p>
           <Link href={`/works/${nextProject.id}`} className="group inline-block">
             <h2 className="text-4xl md:text-8xl font-bold tracking-tighter group-hover:opacity-50 transition-opacity duration-500">
               {nextProject.title}
             </h2>
           </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

