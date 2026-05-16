/**
 * Conteúdo de demonstração — substitua URLs, textos e datas pelos dados reais.
 */
/** WhatsApp — mesma linha para menu, rodapé, sobre, etc. (mensagem curta). */
const WHATSAPP_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Gleice%20Alleyne.";

/** Link com mensagem para consulta inicial — botão hero «Agendar Consulta» e «Dar o primeiro passo». */
const WHATSAPP_AGENDAR_CONSULTA_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20Consulta%20Inicial%20com%20a%20Gleice%20Alleyne.%20Quero%20dar%20o%20primeiro%20passo%20para%20reorganizar%20minha%20mente.";

/** FAQ — botão «entrar em contato com a Equipe» */
const WHATSAPP_DUVIDAS_EQUIPE_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1.%20Estou%20com%20d%C3%BAvidas%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Eventos%2C%20Produtos%20ou%20Servi%C3%A7os%20oferecidos%20pela%20Gleice%20Alleyne.";

export const site = {
  professionalName: "Gleice Alleyne",
  brandShort: "Gleice Alleyne",
  /** Monograma GA — header, rodapé; favicon em /public/favicon.png */
  brandLogo: "/images/logo-ga.png",
  tagline: "Psicóloga e mentora — conteúdo de teste",
  announcement:
    "Cuidar da mente nunca foi tão simples — Terapias, Cursos, Livros e Mentorias com clareza. A jornada começa aqui!",
  hero: {
    pill: "Cuidando de você de qualquer lugar",
    title: "Terapia Integrativa online, Presencial em Orlando/FL-USA e Cursos.",
    subtitle:
      "Conheça os nossos Processos. Uma comunidade organizada para você alcançar a sua melhor versão. Cursos, terapias e Mentorias Online e Presenciais projetados para ajudar você a viver o que Deus reservou para você!",
    ctaPrimary: "Agendar Consulta",
    /** Fundo do topo — ficheiro em /public/images (copiado da tua arte Estratégia MKT) */
    backgroundImage: "/images/hero-bg.png",
    /**
     * Foto dentro do mockup do telemóvel — ficheiro em disco:
     * pasta do projeto: public/images/hero-phone.png
     * Para trocar: substitui esse ficheiro (mesmo nome) ou altera o caminho abaixo.
     */
    phoneImage: "/images/hero-phone.png",
    floatTags: ["Sem barreiras", "Sem trânsito", "Sem filas"] as const,
  },
  navMain: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Produtos e Serviços", href: "#produtos" },
    { label: "Sobre", href: "#sobre" },
  ] as const,
  social: [
    { label: "Instagram", href: "https://www.instagram.com/gleicealleyne/", icon: "instagram" as const },
    { label: "YouTube", href: "https://www.youtube.com/@gleicealleyne/videos", icon: "youtube" as const },
    { label: "TikTok", href: "https://www.tiktok.com/@gleicealleyne", icon: "tiktok" as const },
  ] as const,
  featuresBento: {
    title: "Diferenciais e benefícios",
    lead: "Cada atendimento é conduzido de forma personalizada, unindo conhecimento terapêutico, princípios bíblicos e técnicas integrativas que auxiliam no alinhamento emocional, espiritual e físico.",
    imageCard: {
      src: "/images/gleice-diferenciais.png",
      alt: "Gleice Alleyne — retrato profissional",
    },
    items: [
      {
        id: "f1",
        icon: "shield" as const,
        title: "Terapia Integrativa",
        body: "Uma abordagem terapêutica que considera o ser humano de forma completa — mente, corpo e espírito — promovendo equilíbrio emocional e bem-estar interior.",
      },
      {
        id: "f2",
        icon: "lock" as const,
        title: "Acolhimento com Propósito",
        body: "Um espaço seguro e sem julgamentos para você compartilhar suas dores, emoções e desafios com leveza, respeito e cuidado.",
      },
      {
        id: "f3",
        icon: "spark" as const,
        title: "Princípios fundamentados na Bíblia Sagrada",
        body: "Ensinamentos inspirados na Palavra de Deus para fortalecer a fé, restaurar emoções e trazer direção espiritual para a vida diária.",
      },
    ] as const,
    ctaCard: {
      title: "Pronto para dar o próximo passo?",
      body: "Permita-se iniciar um processo de cura emocional, fortalecimento espiritual e alinhamento da sua essência.",
      buttonLabel: "Dar o primeiro Passo →",
      href: WHATSAPP_AGENDAR_CONSULTA_HREF,
    },
  },
  howItWorks: {
    title: "Como funciona a Terapia Integrativa",
    lead:
      "Um processo terapêutico conduzido com acolhimento, propósito e direcionamento, pensado para auxiliar você em sua jornada de cura emocional, equilíbrio interior e fortalecimento da sua identidade.",
    steps: [
      {
        kicker: "Passo 01",
        title: "Consulta Inicial e Boas-vindas",
        body: "Um primeiro encontro acolhedor para conhecer a sua história, expectativas e necessidades. A partir dessa conversa, será desenvolvido um direcionamento terapêutico personalizado, incluindo terapias integrativas e abordagens que possam contribuir para sua cura interior, equilíbrio emocional e paz mental.",
        image: "/images/etapas-terapia/passo-01.png",
        imageAlt: "Conversa acolhedora em ambiente sereno (ilustrativa)",
      },
      {
        kicker: "Passo 02",
        title: "Desenvolvimento Terapêutico",
        body: "Durante os atendimentos, trabalhamos o alinhamento entre mente, corpo e espírito através de princípios bíblicos, acolhimento emocional e terapias complementares como cromoterapia, florais e direcionamentos terapêuticos integrativos.",
        image: "/images/etapas-terapia/passo-02.png",
        imageAlt: "Momento de calma e presença (ilustrativa)",
      },
      {
        kicker: "Passo 03",
        title: "Transformação e Alinhamento Interior",
        body: "Ao longo do processo, você começa a desenvolver mais clareza emocional, fortalecimento espiritual e equilíbrio interior. Feridas emocionais passam a ser compreendidas com mais consciência, trazendo leveza para sua caminhada.",
        image: "/images/etapas-terapia/passo-03.png",
        imageAlt: "Reflexão e bem-estar (ilustrativa)",
      },
      {
        kicker: "Passo 04",
        title: "Resultados Visíveis e Renovação Pessoal",
        body: "Com o avanço do acompanhamento terapêutico, muitos reflexos passam a ser percebidos no emocional, nos relacionamentos, na autoestima e na forma como você enxerga a si mesma.",
        image: "/images/etapas-terapia/passo-04.png",
        imageAlt: "Renovação e equilíbrio (ilustrativa)",
      },
    ] as const,
  },
  whatsapp: {
    href: WHATSAPP_HREF,
    /** Consulta inicial — hero e CTA destacado nos diferenciais */
    hrefAgendarConsulta: WHATSAPP_AGENDAR_CONSULTA_HREF,
    /** FAQ — dúvidas sobre eventos, produtos e serviços */
    hrefDuvidasEquipe: WHATSAPP_DUVIDAS_EQUIPE_HREF,
  },
  youtube: {
    channelUrl: "https://www.youtube.com/@GleiceAlleyneTeste",
    /** Página de vídeos do canal (botão «Ver canal» na secção live) */
    channelVideosUrl: "https://www.youtube.com/@gleicealleyne/videos",
    /** Imagem do card de live — ficheiro em public/images/ */
    liveImage: "/images/gleice-live-youtube.png",
    /** Link do botão «Abrir Live» — página de streams do canal */
    liveEventUrl: "https://www.youtube.com/@gleicealleyne/streams",
    liveTitle: "Live: toda segunda feira no Youtube.",
    liveDateLabel: "Segunda-feira às 07hs EUA - 08hs Brasil. Com assuntos interessantes e que irão agregar valor à sua vida. Faça parte dessa comunidade de crescimento.",
    liveBadge: "Próxima live no YouTube",
    liveEyebrow: "YouTube · Lives e comunidade",
  },
  about: {
    title: "Sobre a Gleice Alleyne",
    paragraphs: [
      " Terapeuta Integrativa Cristã, escritora e criadora do método Autocredibilidade™.",
      "Casada, mãe de dois filhos maravilhos herança do Senhor, minha missão é ajudar mulheres a romper crenças limitantes, curar feridas emocionais e restaurar o equilíbrio entre mente, corpo e espírito, para que possam viver com mais clareza, confiança e propósito.",
      "Hoje, uno minha experiência pessoal, meus estudos e minha fé cristã para oferecer um atendimento acolhedor e profundamente transformador. Utilizo uma abordagem integrativa que considera o ser humano como um todo — mente, emoções, corpo e espírito — respeitando a individualidade e a história de cada pessoa.",
      "Sou autora do livro Versões, no qual compartilho reflexões e ferramentas práticas para o desenvolvimento pessoal e espiritual, e criadora da mentoria EspiritualMente+Corpo (EMC), uma metodologia voltada para a transformação integral.",
      "Será uma honra caminhar com você em sua jornada de cura, autoconhecimento e transformação."
    ],
  },
  testimonials: [
    {
      quote: "Você explodiu minha mente no Workshop EMC. Se relacione com Deus e não com a ideia de Deus! Uau!",
      author: "G. Cardoso.",
      role: "Uberlândia -Minas Gerais",
    },
    {
      quote: "Pelo pouco que ouvi na Leitura do seu livro Versões, pude perceber que é uma Leitura Profunda. Parabéns pela Dedicação. Obrigada!",
      author: "Maria Martins",
      role: "Brasília-DF (Lançamento Livro Versões)",
    },
    {
      quote: "Gratidão pela confiança e transbordo. Seu trabalho é lindo! Foi um momento enriquecedor em nossas vidas.",
      author: "Neide Roldão",
      role: "Brasília-DF (Workshop EMC)",
    },
  ],
  faq: [
    {
      q: "Como funciona a Terapia Integrativa?",
      a: "Nós faremos uma conversa inicial para entender melhor suas necessidades e expectativas. Em seguida, faremos uma avaliação inicial para definir o melhor caminho para você com a aplicação de ferramentas da Terapia Integrativa.",
    },
    {
      q: "Onde acontecem a Terapia Integrativa Presencial?",
      a: "No modo Presencial, a Terapia Integrativa acontece em Orlando/FL-EUA. Ao entrar em contato com a minha equipe você receberá todas as informações necessárias para agendar a sua consulta.",
    },
    {
      q: "Onde compro os cursos Online e os Livros?",
      a: "Nossos materiais Online, tanto cursos e os livros, estão disponívels nas melhores plataformas de venda online como Amazon e Hotmart.",
    },
    {
      q: "As terapias e consultas online acontecem aqui pelo site?",
      a: "Não. Esta plataforma é apenas um fluxo para te guiar da melhor maneira para os nossos canais privados de atendimento. Com segurança e Ética.",
    },
  ],
  footerNote:
    "© 2026 Gleice Alleyne — Todos os direitos reservados.",
  nav: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Produtos", href: "#produtos" },
    { label: "Live", href: "#live-youtube" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#faq" },
  ],
} as const;

export type ProductItem = {
  id: string;
  title: string;
  href: string;
  /** Linha tipo Netflix: categorias • ano • formato */
  meta: string;
  /** Texto expandido abaixo da imagem */
  description: string;
};

/**
 * Imagens dos produtos: pasta `public/images/produtos/`.
 * Ficheiros por produto: `{id}-vertical.png` (cartão ~3:4) e `{id}-wide.png` (expandido ~16:9).
 * Podes usar .jpg se alterares extensão aqui e renomeares os ficheiros.
 */
export function produtoImagePath(id: string, variant: "vertical" | "wide"): string {
  return `/images/produtos/${id}-${variant}.png`;
}

/** Catálogo exibido na faixa estilo Netflix (clique para expandir). */
export const catalogProducts: ProductItem[] = [
  {
    id: "terapia-online",
    title: "Terapia Online",
    href: "https://wa.me/5561998528884?text=Ol%C3%A1.%20Quero%20saber%20mais%20sobre%20a%20Terapia%20Integrativa%20Online.",
    meta: "Terapia Especializada • Online • Acolhimento Humanizado",
    description:
      "Sessões por vídeo com alinhamento ético e privacidade. Você não estã sozinho nesta jornada. Independente da distância, estamos juntos nesta missão! Sem trânsitos, sem filas, sem esperas. Um tempo precioso para você!",
  },
  {
    id: "terapia-presencial",
    title: "Terapia Presencial",
    href: "https://wa.me/5561998528884?text=Ol%C3%A1.%20Quero%20saber%20mais%20sobre%20a%20Terapia%20Integrativa%20Presencial%20em%20Orlando%2FFl%20-%20EUA",
    meta: "Terapia Especializada • Ambiente Acolhedor • Presencial",
    description:
      "Atendimento exlusivo em Orlando/FL-EUA. Um tempo de qualidade com atendimento personalizado e humanizado para que você possa conquistar a sua melhor Versão.",
  },
  {
    id: "curso-emc",
    title: "Curso EMC",
    href: "https://hotmart.com/pt-br/marketplace/produtos/mentoria-emc-espiritualmente-corpo/R100317606L?sck=HOTMART_SITE&search=6f6bd143-87a4-40ad-86a2-0cdeb68f8f2c&hotfeature=33",
    meta: "Curso Completo • Online • Módulos",
    description:
      "O Curso Online Espiritual Mente Corpo irá te dar uma nova visão sobre a vida e como você pode alcançar a sua melhor versão. Muitas vezes estamos travados não por falta de dinheiro ou apoio, mas por falta de enxergar os traumas e bloqueios que vivemos sem perceber.",
  },
  {
    id: "livro-reflexione-1",
    title: "Livro Reflexione 1",
    href: "https://www.amazon.com/REFLEXIONE-Prov%C3%A9rbios-Portuguese-Gleice-Alleyne-ebook/dp/B0GCVDXH3Y?ref_=ast_author_mpb",
    meta: "Terapia Especializada • Complementar • Vibração das Cores",
    description:
      "Este livro é um convite à liberdade de reflexão. Em Reflexione - Versão Provérbios, você encontrará sabedoria atemporal e será desafiado a enxergar além das limitações da mente, conectando-se com sua essência verdadeira.",
  },
  {
    id: "livro-reflexione-2",
    title: "Livro Reflexione 2",
    href: "https://www.amazon.com/s?k=Gleice+Alleyne+Reflexione+2",
    meta: "Livro • Reflexões • Espiritualidade",
    description:
      "Continuação da jornada de Reflexione — páginas para pausar, questionar e alinhar o coração com verdades que sustentam o dia a dia. Substitua o link pela página oficial do livro na Amazon ou editora quando tiver.",
  },
  {
    id: "livro-versoes",
    title: "Livro Versões",
    href: "https://www.amazon.com/dp/658363211X?ref=cm_sw_r_ffobk_cso_cp_apin_dp_DFQKN5TW0RK03ZED6J0H&ref_=cm_sw_r_ffobk_cso_cp_apin_dp_DFQKN5TW0RK03ZED6J0H&social_share=cm_sw_r_ffobk_cso_cp_apin_dp_DFQKN5TW0RK03ZED6J0H&bestFormat=true&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnUNzLvjC99sYxrMHW8R2meU7e9fbB8yYj2fQvpNIVWge4gXr9SXwUpwFRdIc_aem_EURMDW6vbQOokLD0f2UTeQ&utm_content=link_in_bio&utm_medium=social&utm_source=ig",
    meta: "Livro • Editora Plena Voz • Venda Segura na Amazon",
    description:
      "Quantas versões suas ainda vivem dentro de você — repetindo histórias que não são mais suas? Versões é um convite profundo e direto para quem sente que vive no automático, repete ciclos sem explicação ou carrega pesos que não consegue nomear.",
  },
  {
    id: "youtube",
    title: "YouTube",
    href: "https://www.youtube.com/@gleicealleyne",
    meta: "Canal • Vídeos • Lives",
    description:
      "Lives semanais e conteúdos que podem te ajudar a alcançar uma liberdade mental  e espiritual para você finalmente viver o que Deus reservou para você.",
  },
];
