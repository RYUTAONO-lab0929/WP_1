# BRUNSOHN - Multidisciplinary Design Studio Portfolio

[English](#english) | [Japanese](#japanese)

---

<a id="english"></a>

## 🇬🇧 English

### Overview
This project is a high-end portfolio website for a fictional multidisciplinary design studio, "BRUNSOHN". It focuses on **immersive visual storytelling**, **fluid micro-interactions**, and **minimalist aesthetics** to demonstrate technical proficiency in modern web development.

The site is designed to be performant, accessible, and scalable, suitable for production-grade deployment.

### Tech Stack & Rationale

As a freelance engineer, I carefully selected this stack to balance **performance**, **developer experience**, and **visual impact**.

#### Core Framework
- **Next.js 15 (App Router)**:
  - Utilized for its server-side rendering (SSR) capabilities to ensure SEO optimization and fast initial load times.
  - The App Router architecture allows for efficient route handling and layout management, making the codebase scalable for future expansion.

#### Styling & UI
- **Tailwind CSS**:
  - Chosen for its utility-first approach, enabling rapid UI development and consistent design systems.
  - Facilitates easy maintenance and responsive design implementation across all device sizes.

#### Animation & Interaction
- **Framer Motion**:
  - Used to create complex, physics-based animations (staggered text reveals, smooth page transitions, scroll-linked effects) that perform efficiently at 60fps.
  - Provides a declarative syntax that makes managing animation states intuitive and bug-free.

#### Assets & Optimization
- **Video Optimization**:
  - Custom implementation of HTML5 Video with fallback strategies to ensure smooth playback without relying on heavy third-party players.
- **Image Optimization**:
  - Leveraging Next.js Image component (where appropriate) and optimized asset loading strategies to prevent layout shifts (CLS).

### Key Features
- **Smooth Page Transitions**: Custom template-based transitions using Framer Motion.
- **Dynamic Header**: Glassmorphism effect that reacts to scroll position.
- **Responsive Typography**: Viewport-based typography (vw units) for bold, editorial-style layouts.
- **Component Architecture**: Reusable UI components (e.g., `RevealText`) for maintainability.

---

<a id="japanese"></a>

## 🇯🇵 Japanese

### 概要
架空のマルチディシプリナリー・デザインスタジオ「BRUNSOHN」のための、ハイエンドなポートフォリオサイトです。
**没入感のあるビジュアルストーリーテリング**、**流れるようなマイクロインタラクション**、そして**ミニマルな美学**に焦点を当て、モダンなWeb開発における技術力を実証するために構築されました。

商用レベルの展開に耐えうるパフォーマンス、アクセシビリティ、拡張性を考慮して設計されています。

### 技術スタックと選定理由

フリーランスエンジニアとして、クライアントに最大の価値を提供するために、**パフォーマンス**、**開発効率**、そして**視覚的インパクト**のバランスを考慮して以下のスタックを選定しました。

#### コアフレームワーク
- **Next.js 15 (App Router)**:
  - サーバーサイドレンダリング (SSR) による高いSEO効果と、高速な初期読み込みを実現するために採用しました。
  - App Routerアーキテクチャにより、ルーティングやレイアウト管理が効率化され、将来的な機能追加にも柔軟に対応できるスケーラブルな構成となっています。

#### スタイリング & UI
- **Tailwind CSS**:
  - ユーティリティファーストのアプローチにより、高速なUI構築とデザインシステムの一貫性を担保しています。
  - レスポンシブデザインの実装や保守が容易であり、デザインの変更にも迅速に対応可能です。

#### アニメーション & インタラクション
- **Framer Motion**:
  - 物理演算ベースの滑らかなアニメーション（テキストの出現演出、ページ遷移、スクロール連動エフェクトなど）を60fpsで動作させるために採用しました。
  - 宣言的な記述が可能で、複雑なアニメーションの状態管理をバグなく直感的に行えます。

#### アセット & 最適化
- **動画最適化**:
  - 重いサードパーティ製プレイヤーに依存せず、HTML5 Videoを最適化して実装。スムーズな再生と軽量化を両立しています。
- **画像最適化**:
  - 適切なアセット読み込み戦略により、レイアウトシフト（CLS）を防ぎ、ユーザー体験を損なわない設計にしています。

### 主な機能
- **スムーズなページ遷移**: Framer Motionとテンプレートを活用した、映画のようなクロスフェード演出。
- **ダイナミックヘッダー**: スクロール位置に応じて質感が変化するグラスモーフィズムエフェクト。
- **レスポンシブ・タイポグラフィ**: ビューポート単位（vw）を活用した、大胆でエディトリアルな文字レイアウト。
- **コンポーネント設計**: `RevealText` などの再利用可能なコンポーネントによる、保守性の高いコードベース。

---

### Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000 with your browser to see the result.
```
