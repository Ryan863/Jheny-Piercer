export interface Procedure {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  materials: string;
  recommendedFor: string;
  ctaText: string;
}

export const PROCEDURES: Procedure[] = [
  {
    id: "perfuracoes-anatomicas",
    tag: "Joalheria & Anatomia",
    title: "Perfurações Clássicas & Avançadas",
    subtitle: "Mapeamento milimétrico com respeito à anatomia única de cada cliente",
    description:
      "Aplicações auriculares (Hélix, Conch, Tragus, Daith, Rook, Flat, Transversal) e faciais (Nostril, Septo, Labret). Cada perfuração é executada com agulha americana descartável, minimizando o trauma tecidual e acelerando a regeneração natural.",
    highlights: [
      "Agulhas americanas ultrafinas (sem dor excessiva)",
      "Joias em Titânio Grau Implante ASTM F-136",
      "Rosca interna e topo sem rosca (Push-pin)",
      "Polimento espelhado para cicatrização perfeita",
    ],
    materials: "Titânio ASTM F-136 & Ouro 18k",
    recommendedFor: "Primeira perfuração ou expansão de projeto de orelha",
    ctaText: "Agendar Perfuração",
  },
  {
    id: "microdermal-surface",
    tag: "Alta Precisão",
    title: "Implantes Microdermal & Surface",
    subtitle: "Fixação e ancoragem estética segura para áreas planas corporais",
    description:
      "Técnica apurada de inserção de micro âncora subdérmica com base vazada para integração tecidual biocompatível. Ideal para colo, maçã do rosto, punho e áreas especiais com topos intercambiáveis de zircônias e pedras naturais.",
    highlights: [
      "Base de ancoragem em titânio F-136 usinado",
      "Incisão milimétrica com punch estéril",
      "Topos removíveis e substituíveis",
      "Zero acúmulo e fácil higienização pós",
    ],
    materials: "Titânio PVD & Cristais Swarovski",
    recommendedFor: "Quem busca destaque estético sofisticado e sutil",
    ctaText: "Consultar Microdermal",
  },
  {
    id: "laserterapia",
    tag: "Bioestimulação Celular",
    title: "Laserterapia Cicatricial",
    subtitle: "Tecnologia de fotobiomodulação que acelera em até 3x a cicatrização",
    description:
      "Aplicação de luz laser terapêutica (vermelha e infravermelha) de baixa intensidade. Estimula a produção de colágeno, combate edemas, alivia o incômodo pós-procedimento e previne o surgimento de granulomas e intercorrências.",
    highlights: [
      "Totalmente indolor e sem efeito térmico agressivo",
      "Redução instantânea do inchaço e vermelhidão",
      "Prevenção e tratamento eficaz de granulomas",
      "Indicado logo após a perfuração ou para resgates",
    ],
    materials: "Laser de Baixa Potência Certificado Anvisa",
    recommendedFor: "Pós-procedimento imediato ou orelhas inflamadas",
    ctaText: "Agendar Sessão de Laser",
  },
  {
    id: "lobuloplastia",
    tag: "Procedimento Exclusivo",
    title: "Lobuloplastia Não Cirúrgica",
    subtitle: "Restauração e fechamento de lóbulos rasgados sem cortes ou bisturi",
    description:
      "Técnica química/física inovadora que estimula o fechamento natural do orifício alagado ou rasgado pelo uso de brincos pesados. Sem necessidade de cortes cirúrgicos, sem pontos de sutura e com retorno imediato à rotina.",
    highlights: [
      "Sem bisturi e sem cortes invasivos",
      "Sem suturas ou pontos para retirar",
      "Recuperação confortável e estética natural",
      "Possibilidade de nova perfuração após regeneração",
    ],
    materials: "Protocolo Biológico Regenerativo Exclusivo",
    recommendedFor: "Lóbulos rasgados, fendidos ou alargados por peso",
    ctaText: "Avaliação de Lobuloplastia",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating: number;
  badge?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    quote:
      "Gosto bastante só furo com ela, ela é cuidadosa explica sempre o que pode fazer ou não, o ambiente é bem limpinho... Ela sempre esteriliza o piercing antes de colocá-lo!",
    author: "Cliente Verificada",
    role: "Google Reviews",
    rating: 5,
    badge: "Cliente Fiel",
  },
  {
    id: "dep-2",
    quote:
      "Ótimo e com profissionais de verdade, levei minha esposa para colocar piercing na orelha e ficou muito bom.",
    author: "Ferro Velho Pedra Preta",
    role: "Google Reviews",
    rating: 5,
    badge: "Recomendação Família",
  },
  {
    id: "dep-3",
    quote: "Ela é maravilhosa, excelente trabalho muito bom.",
    author: "Laise Novaes",
    role: "Google Reviews",
    rating: 5,
    badge: "Avaliação 5 Estrelas",
  },
  {
    id: "dep-4",
    quote: "Ambiente ótimo! E um excelente atendimento.",
    author: "Dara Rodrigues",
    role: "Google Reviews",
    rating: 5,
    badge: "Avaliação 5 Estrelas",
  },
  {
    id: "dep-5",
    quote: "Jhenny muito cuidadosa e atenciosa.",
    author: "Tatiana Rodrigues",
    role: "Google Reviews",
    rating: 5,
    badge: "Avaliação 5 Estrelas",
  },
  {
    id: "dep-6",
    quote: "O mais top da cidade.",
    author: "Bianca Karolina",
    role: "Google Reviews",
    rating: 5,
    badge: "Melhor de Rondonópolis",
  },
];

export const BIOSAFETY_PILLARS = [
  {
    step: "01",
    title: "Autoclave Hospitalar Classe B",
    description:
      "Ciclo de esterilização a vapor sob pressão com vácuo fracionado. Monitoramento constante através de integradores químicos e indicadores biológicos periódicos.",
    tag: "Esterilização Padrão Ouro",
  },
  {
    step: "02",
    title: "Joalheria Esterilizada em Cada Aplicação",
    description:
      "Cada peça de joalheria é acondicionada em grau cirúrgico lacrado e esterilizada na autoclave antes de ir para o seu corpo, aberta exclusivamente à sua frente.",
    tag: "Grau Cirúrgico Individual",
  },
  {
    step: "03",
    title: "Agulhas Americanas 100% Descartáveis",
    description:
      "Utilização exclusiva de agulhas blade/cateter descartáveis de uso único. Sem reaproveitamento e com descarte certificado e ecológico.",
    tag: "Lâmina Nova a Cada Furo",
  },
  {
    step: "04",
    title: "Titânio ASTM F-136 Certificado",
    description:
      "Trabalhamos exclusivamente com titânio de grau implante biomédico, livre de níquel, hipoalergênico e com polimento espelhado que não retém bactérias.",
    tag: "Biocompatibilidade Máxima",
  },
  {
    step: "05",
    title: "Assepsia Cirúrgica do Espaço",
    description:
      "Higienização rigorosa entre cada atendimento com desinfetantes de nível hospitalar. Paramentação com luvas estéreis, máscaras e campos de procedimento.",
    tag: "Ambiente 100% Controlado",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    image: "/images/portfolio-1.jpg",
    title: "Projeto Auricular com Cluster Navete",
    category: "Visagismo Auricular",
    metal: "Titânio ASTM F-136 & Zircônias",
    description:
      "Composição harmônica com cluster curvado em navetes no hélix, conch cravejado e múltiplos lóbulos com argola de brilhantes.",
  },
  {
    id: "gal-2",
    image: "/images/portfolio-2.jpg",
    title: "Design Autoral Adaga & Corrente",
    category: "Projetos Personalizados",
    metal: "Titânio PVD Dourado",
    description:
      "Combinação expressiva unindo stud minimalista em formato de adaga a corrente de elos delicados conectando cartilagem e lóbulo.",
  },
  {
    id: "gal-3",
    image: "/images/portfolio-3.jpg",
    title: "Cluster Ametista & Tragus Solitário",
    category: "Gemas Coloridas",
    metal: "Titânio com Zircônia Roxa",
    description:
      "Cluster curvado anatômico com cristais púrpura em degradê na hélix, combinando com solitário no tragus e argolas pavê no lóbulo.",
  },
];
