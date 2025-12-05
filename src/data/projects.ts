export interface Project {
  id: number;
  slug: string; // URL用のスラッグ
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  client: string;
  role: string;
  gallery: string[]; // 詳細ページ用の追加画像
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "overmono",
    title: "Overmono",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    year: "2024",
    description: "Overmono is a visual experiment inspired by the duo's raw, electronic energy. The project explores rhythm, distortion, and motion through a minimal, industrial-driven aesthetic. We aimed to capture the feeling of a warehouse rave in a digital format.",
    client: "Warp Records",
    role: "Art Direction & Motion",
    gallery: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" // 検証済みの有効な画像
    ]
  },
  {
    id: 2,
    slug: "likorn",
    title: "Likorn",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000&auto=format&fit=crop",
    year: "2024",
    description: "Likorn is a digital study exploring organic motion and sculptural forms. The project blends fluid simulations, subtle lighting, and minimal typography to create an atmosphere that feels both natural and uncanny.",
    client: "Likorn Studio",
    role: "Web Design & Development",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    slug: "solo-model",
    title: "Solo Model",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    year: "2023",
    description: "Solo Model is a stripped-down visual study focused on presence, light, and form. The project reduces everything to its essentials — movement, contrast, and space — to highlight a singular digital figure.",
    client: "Vogue Digital",
    role: "Interactive Design",
    gallery: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    slug: "ethereal-skiing",
    title: "Ethereal Skiing",
    category: "Visual Study",
    image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=2000&auto=format&fit=crop",
    year: "2023",
    description: "Ethereal Skiing is a visual experiment capturing the weightlessness and speed of movement on snow. The project blends soft gradients, atmospheric particles, and fluid motion to create a dreamlike sense of glide.",
    client: "Salomon",
    role: "Video Production",
    gallery: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1200&auto=format&fit=crop", // スキーヤーのシルエット
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=1200&auto=format&fit=crop"  // スキーリゾートの雪景色
    ]
  }
];

