/**
 * Conteúdo de demonstração — substitua URLs, textos e datas pelos dados reais.
 */
/** WhatsApp — mesma linha para menu, rodapé, sobre, etc. (mensagem curta). */
const WHATSAPP_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Gleice%20Alleyne.";

/** Botão flutuante de WhatsApp — mensagem: «Olá. Acabei de vim do Site e gostaria de saber mais sobre a terapia com a Gleice Àlleyne» */
const WHATSAPP_FLOAT_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1.%20Acabei%20de%20vim%20do%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia%20com%20a%20Gleice%20%C3%80lleyne";

/** Link com mensagem para consulta inicial — botão hero «Agendar Consulta» e «Dar o primeiro passo». */
const WHATSAPP_AGENDAR_CONSULTA_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20Consulta%20Inicial%20com%20a%20Gleice%20Alleyne.%20Quero%20dar%20o%20primeiro%20passo%20para%20reorganizar%20minha%20mente.";

/** Gera um link de WhatsApp com mensagem pré-preenchida. */
const wa = (msg: string) => `https://wa.me/5561998528884?text=${encodeURIComponent(msg)}`;

/** FAQ — botão «entrar em contato com a Equipe» */
const WHATSAPP_DUVIDAS_EQUIPE_HREF =
  "https://wa.me/5561998528884?text=Ol%C3%A1.%20Estou%20com%20d%C3%BAvidas%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Eventos%2C%20Produtos%20ou%20Servi%C3%A7os%20oferecidos%20pela%20Gleice%20Alleyne.";

export const site = {
  professionalName: "Gleice Alleyne",
  brandShort: "Gleice Alleyne",
  /**
   * Logo — ficheiros gerados por `node scripts/crop-logo.mjs` a partir de
   * public/images/logo-gleice-alleyne-source.jpg (fundo removido automaticamente).
   */
  /** Só o símbolo (header, rodapé, favicon) */
  brandLogo: "/images/logo-ga.png",
  /** Logo completa (símbolo + nome + tagline) — usada no rodapé */
  brandLogoFull: "/images/logo-gleice-alleyne.png",
  tagline: "Terapeuta Integrativa Cristã",
  announcement:
    "Terapia Integrativa online para o mundo e presencial em Orlando/FL — agende a sua consulta inicial.",
  hero: {
    /** Pequeno texto em maiúsculas acima do título */
    pill: "Gleice Àlleyne · Orlando/FL - EUA e Brasil",
    /** Título grande — a última palavra fica em dourado */
    titleLead: "Terapia Integrativa",
    titleAccent: "Cristã",
    title: "Terapia Integrativa Cristã",
    /** Frase de apoio logo abaixo do título */
    subtitle: "Levando milhares de pessoas a se reconectarem com a sua Verdadeira Versão.",
    /** Breve explicação das duas formas de atendimento */
    modalities: [
      {
        icon: "video" as const,
        title: "Terapia Online",
        body: "Atendimento em qualquer lugar do mundo, em Português/BR, por videochamada.",
      },
      {
        icon: "pin" as const,
        title: "Terapia Presencial",
        body: "No consultório em Orlando/FL – EUA, em ambiente acolhedor e reservado.",
      },
    ] as const,
    ctaPrimary: "Agendar minha consulta",
    /** Cartões flutuantes à volta do telemóvel */
    floatCards: [
      { icon: "globe" as const, title: "Sem barreiras", body: "Atenda de onde estiver" },
      { icon: "car" as const, title: "Sem trânsito", body: "Mais tempo para você" },
      { icon: "clock" as const, title: "Sem filas", body: "Foco total na sua jornada" },
    ] as const,
    /** Nota pequena ao lado do telemóvel */
    note: "Terapia online com a mesma qualidade e conexão do presencial.",
    /** Linha de confiança com ícones (hero e chamada final) */
    trustIcons: [
      { icon: "video" as const, label: "Online e Presencial" },
      { icon: "chat" as const, label: "Atendimento em Português" },
      { icon: "pin" as const, label: "Em Orlando/FL – EUA e Brasil" },
    ] as const,
    /**
     * Fundo do topo (desktop) — mesa com Bíblia, café e caderno à esquerda, bandeira dos EUA à direita.
     * Ficheiro: public/images/hero-bg-desk-flag.jpg (substitua pelo mesmo nome para trocar).
     */
    backgroundImage: "/images/hero-bg-desk-flag.jpg",
    /** Fundo do topo (telemóvel, vertical) — bandeira no alto, mesa com Bíblia e café em baixo. */
    backgroundImageMobile: "/images/hero-bg-mobile.jpg",
    /**
     * Foto dentro do mockup do telemóvel — ficheiro em disco:
     * pasta do projeto: public/images/hero-phone.png
     * Para trocar: substitui esse ficheiro (mesmo nome) ou altera o caminho abaixo.
     */
    phoneImage: "/images/hero-phone.png",
    floatTags: ["Sem barreiras", "Sem trânsito", "Sem filas"] as const,
    /** Linha de confiança abaixo do botão principal */
    trustLine: ["Atende online em português, de onde você estiver", "Presencial em Orlando/FL – EUA", "Formações com diploma validado"] as const,
  },
  navMain: [
    { label: "Início", href: "#topo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Produtos", href: "#produtos" },
    { label: "Técnicas Integrativas", href: "/tecnicas-integrativas" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ] as const,
  /** Botão do cabeçalho */
  headerCta: { label: "Agendar Consulta", href: WHATSAPP_AGENDAR_CONSULTA_HREF },

  /* ——— LANDING PAGE ——— */

  /** «Como posso te ajudar?» — 4 cartões de serviço */
  services: {
    id: "servicos",
    kicker: "Entenda a abordagem",
    title: "O que é a Terapia Integrativa Cristã?",
    /** Explicação curta — parágrafos exibidos abaixo do título */
    intro: [
      "É uma abordagem que une as técnicas e ferramentas da Terapia Integrativa — como PNL, Hipnose Clínica, Mindfulness, Logoterapia, Cromoterapia, Florais e Auriculoterapia — a uma base firme nos princípios bíblicos cristãos.",
      "Na prática, você recebe um acompanhamento sério, com método e resultados, que cuida da mente, das emoções e do corpo sem deixar a sua fé de lado. Cada ferramenta é aplicada com propósito, alinhada à Palavra de Deus e à sua história, para que você se reconecte com a sua verdadeira versão.",
    ],
    /** Três pilares resumidos (ícone + frase) */
    pillars: [
      { icon: "clipboard" as const, label: "Técnicas da Terapia Integrativa" },
      { icon: "book" as const, label: "Pautada nos princípios bíblicos cristãos" },
      { icon: "chart" as const, label: "Método sério, com resultados reais" },
    ],
    /** Título destacado acima dos cartões de preço */
    cardsTitle: "Técnicas de Terapia Integrativa Aplicadas",
    cardsLead:
      "Escolha o formato ideal para o seu momento — online de qualquer lugar do mundo em Português ou presencial em Orlando/FL.",
    /** Nota comum a todos os planos */
    installments: "Parcelamento sem juros",
    /** Aviso exibido logo após os cartões de preço */
    helpNote: {
      title: "Não sabe qual formato escolher?",
      body: "Se você não sabe qual formato faz mais sentido para o seu momento, não se preocupe. Durante o primeiro contato, podemos conversar sobre sua necessidade e encontrar o caminho mais adequado para o seu objetivo.",
      ctaLabel: "Conversar sobre o meu momento",
      href: wa("Olá! Vim do site e ainda não sei qual formato de atendimento faz mais sentido para o meu momento. Podemos conversar?"),
    },
    /** Cartões com preço */
    plans: [
      {
        id: "terapia-integrativa-crista",
        icon: "heart" as const,
        badge: "Mais procurado",
        title: "Terapia Integrativa Cristã",
        subtitle: "Protocolo com 6 sessões",
        description:
          "Um processo terapêutico individualizado, no qual diferentes técnicas integrativas podem ser utilizadas de acordo com as necessidades identificadas ao longo do acompanhamento.",
        price: "R$ 3.000",
        priceUnit: "protocolo completo",
        features: [
          "6 sessões individuais, online ou presenciais em Orlando/FL",
          "Protocolo personalizado para a sua história e objetivos",
          "Técnicas integrativas pautadas nos princípios bíblicos cristãos",
          "Acompanhamento semanal com suporte da equipe",
        ],
        ctaLabel: "Saiba mais",
        href: wa("Olá! Vim do site e quero saber mais sobre o Protocolo de Terapia Integrativa Cristã (6 sessões)."),
      },
      {
        id: "tecnicas-individuais",
        icon: "leaf" as const,
        badge: null,
        title: "Técnicas Integrativas Individuais",
        subtitle: "Protocolo de 10 sessões",
        description:
          "Para quem deseja trabalhar uma demanda específica de forma mais direcionada, utilizando uma abordagem ou técnica principal ao longo do processo.",
        price: "R$ 2.000",
        priceUnit: "protocolo completo",
        features: [
          "PNL, Hipnose, Cromoterapia, Florais, Auriculoterapia, Logoterapia e Mindfulness",
          "10 sessões focadas na técnica mais indicada para você",
          "Formações com diploma validado",
          "Online ou presencial em Orlando/FL",
        ],
        ctaLabel: "Saiba mais",
        href: wa("Olá! Vim do site e quero saber mais sobre o Protocolo de 10 sessões de Técnicas Integrativas Individuais."),
        secondaryLabel: "Conhecer as técnicas",
        secondaryHref: "/tecnicas-integrativas",
      },
      {
        id: "sessao-avulsa",
        icon: "clock" as const,
        badge: null,
        title: "Sessão Avulsa",
        subtitle: "Técnicas Integrativas Individuais",
        description:
          "Também é possível realizar uma sessão direcionada a uma técnica específica, de acordo com o objetivo apresentado.",
        price: "R$ 250",
        priceUnit: "por sessão avulsa",
        features: [
          "Uma sessão da técnica à sua escolha",
          "Ideal para conhecer o trabalho ou tratar uma demanda pontual",
          "Online ou presencial em Orlando/FL",
        ],
        ctaLabel: "Saiba mais",
        href: wa("Olá! Vim do site e quero saber mais sobre a Sessão Avulsa de Técnicas Integrativas Individuais."),
      },
    ] as const,
    /** Cartões sem preço (mesmo visual) — direcionam para «Nossos produtos e Serviços» */
    extras: [
      {
        id: "projeto-emc",
        icon: "spark" as const,
        title: "Projeto EMC · Mentoria e Cursos",
        subtitle: "Espiritual · Mente · Corpo",
        description:
          "Imersões, workshops e o curso online com o método Autocredibilidade™, para destravar a sua vida e viver com mais propósito.",
        features: ["Curso online EMC", "Workshops e imersões", "Mentoria com o método Autocredibilidade™"],
        ctaLabel: "Saiba mais",
        href: "#produtos",
      },
      {
        id: "livros",
        icon: "book" as const,
        title: "Livros e Materiais",
        subtitle: "Leituras e ferramentas práticas",
        description:
          "Conteúdos para continuar a jornada no seu ritmo, aprofundando o autoconhecimento e a reconexão com a sua verdadeira versão.",
        features: ["Livro Versões", "Livros Reflexione 1 e 2", "Apostila EMC"],
        ctaLabel: "Saiba mais",
        href: "#produtos",
      },
    ] as const,
  },

  /** Faixa de autoridade logo abaixo do topo */
  trustStrip: [
    { icon: "globe" as const, title: "Vive nos EUA", body: "Baseada em Orlando, Flórida — atende em português para o mundo todo." },
    { icon: "video" as const, title: "Terapia online", body: "Sessões por vídeo, com privacidade, ética e horários flexíveis." },
    { icon: "pin" as const, title: "Presencial em Orlando/FL", body: "Consultório acolhedor e reservado para quem vive ou visita a região." },
    { icon: "book" as const, title: "Autora e mentora", body: "Livros Versões e Reflexione · criadora do Projeto EMC e do método Autocredibilidade™." },
  ] as const,

  /** Secção «Online ou presencial» */
  modalities: {
    id: "atendimento",
    title: "Online ou presencial: você escolhe como quer ser atendida",
    lead: "O mesmo cuidado, a mesma seriedade e o mesmo protocolo personalizado — de onde você estiver ou no consultório em Orlando.",
    items: [
      {
        id: "online",
        kicker: "Terapia Online",
        title: "De qualquer lugar do mundo",
        image: "/images/gleice-studio.png",
        bullets: [
          "Sessões por vídeo, com privacidade e ética",
          "Horários compatíveis com Brasil e EUA",
          "Protocolo de 6 sessões semanais, personalizado",
        ] as const,
        ctaLabel: "Agendar sessão online",
        href: "https://wa.me/5561998528884?text=Ol%C3%A1.%20Quero%20agendar%20uma%20Consulta%20Inicial%20Online%20com%20a%20Gleice%20Alleyne.",
      },
      {
        id: "presencial",
        kicker: "Terapia Presencial",
        title: "Em Orlando, Flórida – EUA",
        image: "/images/gleice-office.png",
        bullets: [
          "Ambiente acolhedor, reservado e exclusivo",
          "Atendimento individual e personalizado",
          "Ideal para quem vive ou está de passagem pela Flórida",
        ] as const,
        ctaLabel: "Agendar em Orlando",
        href: "https://wa.me/5561998528884?text=Ol%C3%A1.%20Quero%20agendar%20uma%20Consulta%20Inicial%20Presencial%20em%20Orlando%2FFL%20com%20a%20Gleice%20Alleyne.",
      },
    ] as const,
    /** Link discreto para a página 2 */
    techniquesLink: "Conheça as Técnicas Integrativas usadas nas sessões",
  },

  /** «Como funciona» — 4 passos em linha */
  process: {
    id: "como-funciona",
    title: "Um caminho claro, do primeiro contato aos resultados.",
    lead: "Cada passo é conduzido com cuidado e propósito.",
    steps: [
      {
        icon: "chat" as const,
        title: "Conversa inicial",
        body: "Entendemos a sua história, expectativas e necessidades.",
      },
      {
        icon: "clipboard" as const,
        title: "Protocolo personalizado",
        body: "Aplicamos as técnicas integrativas alinhadas aos seus objetivos.",
      },
      {
        icon: "people" as const,
        title: "Sessões e acompanhamento",
        body: "Um processo consistente, semanal, com suporte da equipe.",
      },
      {
        icon: "chart" as const,
        title: "Resultados reais",
        body: "Mais equilíbrio, clareza emocional e uma vida com mais propósito.",
      },
    ] as const,
  },

  /** Produtos — cabeçalho da faixa */
  productsHead: {
    kicker: "Conteúdos e ferramentas para a sua jornada",
    title: "Nossos produtos e Serviços",
    lead: "Conhecimento, prática e espiritualidade para te apoiar em cada etapa.",
  },

  /** Depoimentos — cabeçalho */
  testimonialsHead: {
    id: "depoimentos",
    kicker: "Histórias reais, transformações verdadeiras",
    title: "Comentários e Testemunhos",
  },

  /** Banda final antes do rodapé */
  finalCta: {
    kicker: "Pronta para dar o próximo passo?",
    title: "Sua jornada de transformação pode começar hoje.",
    body: "Viva com mais leveza, propósito e conexão. Agende a sua consulta — online ou presencial em Orlando/FL — e dê o primeiro passo para uma vida mais plena.",
    buttonLabel: "Agendar minha consulta",
    href: WHATSAPP_AGENDAR_CONSULTA_HREF,
    secondaryLabel: "Falar no WhatsApp",
    secondaryHref: WHATSAPP_HREF,
    /** Foto da banda final — public/images/gleice-final-cta.jpg (retrato 9:16) */
    image: "/images/gleice-final-cta.jpg",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/gleicealleyne/", icon: "instagram" as const },
    { label: "YouTube", href: "https://www.youtube.com/@gleicealleyne/videos", icon: "youtube" as const },
    { label: "TikTok", href: "https://www.tiktok.com/@gleicealleyne", icon: "tiktok" as const },
  ] as const,
  offerOverview: {
    id: "ecossistema-gleice",
    title: "Mapa do que você encontra por aqui",
    lead: "Um mapa de tudo o que oferecemos para ajudar você a alcançar sua melhor versão — terapias, técnicas, mentorias, cursos e livros. Conheça as possibilidades com clareza e sem pressa.",
    chapters: [
      {
        id: "terapia-integrativa",
        hub: "Terapia Integrativa",
        branches: ["Online", "Presencial"] as const,
        details: [
          "Protocolo de 6 sessões personalizado",
          "1 sessão por semana",
          "Técnicas integrativas de acordo com a necessidade de cada pessoa",
          "Princípios Bíblicos unindo Espiritualidade, Mente e Corpo",
          "Consulta segura e confidencial com atendimento Personalizado",
        ] as const,
      },
      {
        id: "tecnicas-individuais",
        hub: "Sessões com Técnicas Integrativas Individuais",
        branches: ["PNL", "Hipnose Clínica", "Mindfulness", "Cromoterapia", "Florais"] as const,
        details: [
          "Cada técnica com protocolo de 6 sessões",
          "Encontros semanais",
          "Você escolhe o que mais se interessa e juntos vamos aplicar a ferramenta para destravar a sua vida",
          "Um Investimento menor para você conhecer cada técnica com acompanhamento correto e aplicar ferramentas que podem mudar sua vida. ",
        ] as const,
      },
      {
        id: "projeto-emc",
        hub: "Projeto EMC",
        hubTag: "Espiritual · Mente · Corpo",
        branches: [
          "Imersão EMC (7 dias)",
          "Curso Autocredibilidade",
          "Workshops",
          "Curso Online EMC",
        ] as const,
        details: [
          "Neste Projeto a Gleice Alleyne ensina e orienta seus alunos passando por uma jornada integrada",
          "Imersão online de 7 dias — tema Autocredibilidade",
          "Curso Online Autocredibilidade — 5 módulos",
          "Workshops online e presencial — eventos ao vivo com datas marcadas e temas específicos sobre Espírito, Mente e Corpo",
          "Curso Online EMC — 5 módulos. Acompanhe o passoa passo de como funciona o nosso Workshop e aplique as ferramentas em sua vida.",
        ] as const,
      },
      {
        id: "livros",
        hub: "Livros e materiais",
        branches: ["Livro Versões", "Livro Reflexione 1", "Livro Reflexione 2", "Apostila EMC"] as const,
        details: [
          "Publicações e materiais de apoio para continuar a jornada no seu ritmo",
          "Autoria Própria - Gleice Alleyne",
          "Livros e Apostilas disponíveis na Amazon e Hotmart",
        ] as const,
      },
    ] as const,
  },
  integrativeTechniques: {
    path: "/tecnicas-integrativas",
    teaser: {
      id: "tecnicas-integrativas-teaser",
      title: "O que são as Técnicas Integrativas?",
      /** Coloque a imagem em public/images/tecnicas-integrativas-banner.png */
      backgroundImage: "/images/tecnicas-integrativas-banner.png",
      ctaLabel: "Conhecer as Técnicas Integrativas",
    },
    page: {
      title: "Técnicas Integrativas",
      lead: "Ferramentas complementares que apoiam o equilíbrio entre mente, emoções, corpo e espírito — aplicadas com acolhimento, propósito e direcionamento personalizado.",
      intro:
        "Conheça as formações e técnicas que a Gleice Alleyne utiliza no atendimento. Ela possui diploma validado em cada uma delas, com aplicação ética, acolhedora e personalizada — em protocolos individuais de 10 sessões, em sessões avulsas ou integradas à Terapia Integrativa Cristã completa.",
      items: [
        {
          id: "terapeuta-clinica",
          name: "Terapeuta Clínica",
          tagline: "Base clínica para um cuidado seguro e humanizado",
          body: "Formação que sustenta o olhar terapêutico da Gleice: escuta qualificada, direcionamento clínico e condução responsável do processo, sempre respeitando a sua história, limites e ritmo de transformação.",
        },
        {
          id: "mindfulness",
          name: "Mindfulness",
          tagline: "Presença, calma e regulação emocional",
          body: "Práticas de atenção plena para reduzir ansiedade, aumentar o autocontrole e cultivar uma relação mais gentil consigo mesma. Ideal para quem busca equilíbrio no ritmo acelerado da vida.",
        },
        {
          id: "logoterapia",
          name: "Logoterapia",
          tagline: "Sentido, propósito e direção para a vida",
          body: "Inspirada na busca por significado, a logoterapia ajuda a reorganizar escolhas e valores quando há vazio, crise ou sensação de estar sem direção — reconectando você ao que importa de verdade.",
        },
        {
          id: "pnl",
          name: "PNL",
          tagline: "Programação Neurolinguística aplicada à mudança",
          body: "A PNL auxilia a identificar crenças e padrões que mantêm ciclos repetitivos. Com linguagem e exercícios práticos, você desenvolve respostas mais conscientes no dia a dia.",
        },
        {
          id: "auriculoterapia",
          name: "Auriculoterapia",
          tagline: "Estímulos na orelha para equilíbrio integral",
          body: "Técnica que utiliza pontos específicos da orelha para apoiar bem-estar físico e emocional, complementando o trabalho terapêutico com uma abordagem integrativa e cuidadosa.",
        },
        {
          id: "hipnose-clinica",
          name: "Hipnose Clínica",
          tagline: "Acesso profundo a emoções e bloqueios",
          body: "Em relaxamento guiado e seguro, é possível trabalhar memórias, medos e comportamentos que dificultam o bem-estar. Conduzida com ética, consentimento e acompanhamento terapêutico.",
        },
        {
          id: "terapeuta-floral",
          name: "Terapeuta Floral",
          tagline: "Essências florais para apoio emocional",
          body: "Os florais de Bach e outras linhas complementares auxiliam em medo, insegurança, cansaço ou transição. São aliados suaves para fortalecer o processo entre as sessões.",
        },
      ] as const,
      /** Formatos e valores — exibidos após a lista de técnicas */
      pricing: {
        kicker: "Formatos e investimento",
        title: "Como você pode ser atendida com essas técnicas",
        installments: "Parcelamento sem juros",
        items: [
          {
            id: "terapia-integrativa-crista",
            icon: "heart" as const,
            title: "Terapia Integrativa Cristã",
            detail: "Protocolo com 6 sessões usando várias dessas técnicas, de acordo com o seu caso.",
            price: "R$ 3.000",
            unit: "protocolo completo",
          },
          {
            id: "tecnicas-individuais",
            icon: "leaf" as const,
            title: "Técnicas Integrativas Individuais",
            detail: "Protocolo de 10 sessões com uma dessas técnicas, de forma direcionada para o seu caso.",
            price: "R$ 2.000",
            unit: "protocolo completo",
          },
          {
            id: "sessao-avulsa",
            icon: "clock" as const,
            title: "Sessão Avulsa",
            detail: "Uma sessão de qualquer uma dessas técnicas.",
            price: "R$ 250",
            unit: "por sessão",
          },
        ] as const,
      },
      cta: {
        label: "Quero saber mais sobre as técnicas",
        href: "https://wa.me/5561998528884?text=Ol%C3%A1.%20Gostaria%20de%20saber%20mais%20sobre%20as%20T%C3%A9cnicas%20Integrativas%20Individuais%20com%20a%20Gleice%20Alleyne.",
      },
      backLabel: "Voltar ao início",
    },
  },
  featuresBento: {
    title: "Um trabalho sério, com propósito e resultados",
    lead: "Cada atendimento é conduzido de forma personalizada, unindo conhecimento terapêutico, princípios bíblicos e técnicas integrativas com diploma validado.",
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
    /** Chamada ao fim da secção */
    cta: {
      title: "Pronta para começar a sua jornada?",
      body: "A primeira conversa é o passo mais importante. Fale com a equipe e agende a sua consulta inicial.",
      buttonLabel: "Agendar Consulta",
      href: WHATSAPP_AGENDAR_CONSULTA_HREF,
    },
  },
  /** Botão flutuante de WhatsApp (todas as páginas) */
  whatsappFloat: {
    label: "Falar no WhatsApp",
    href: WHATSAPP_FLOAT_HREF,
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
    kicker: "Quem conduz o seu processo",
    title: "Sobre a Gleice Àlleyne",
    /** Fotografia da secção — public/images/gleice-family.jpg (4:3) */
    image: "/images/gleice-family.jpg",
    paragraphs: [
      "Terapeuta Integrativa Cristã, escritora e criadora do método Autocredibilidade™. Vive em Orlando, Flórida (EUA), onde atende presencialmente — e online, em português, para pessoas em qualquer parte do mundo.",
      "Casada e mãe de dois filhos, a sua missão é ajudar mulheres a romper crenças limitantes, curar feridas emocionais e restaurar o equilíbrio entre mente, corpo e espírito, para que vivam com mais clareza, confiança e propósito.",
      "Autora dos livros Versões e Reflexione, e criadora do Projeto EspiritualMente+Corpo (EMC), uma metodologia voltada para a transformação integral. Será uma honra caminhar com você na sua jornada de cura e autoconhecimento.",
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
    { label: "Início", href: "#topo" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Técnicas Integrativas", href: "/tecnicas-integrativas" },
    { label: "Produtos", href: "#produtos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Live", href: "#live-youtube" },
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

/**
 * Fotos das técnicas (página /tecnicas-integrativas): pasta `public/images/tecnicas/`.
 * Um ficheiro por técnica: `{id}.png` (ou .jpg — altere a função abaixo).
 */
export function tecnicaImagePath(id: string): string {
  return `/images/tecnicas/${id}.png`;
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
    id: "tecnicas-terapias-individuais",
    title: "Técnicas de Terapias Individuais",
    href: "https://wa.me/5561998528884?text=Ol%C3%A1.%20Quero%20saber%20mais%20sobre%20as%20T%C3%A9cnicas%20de%20Terapias%20Individuais%20com%20a%20Gleice%20Alleyne.",
    meta: "Protocolo • 6 sessões • Online ou Presencial",
    description:
      "PNL, Hipnose Clínica, Mindfulness, Cromoterapia e Florais — cada técnica com protocolo de 6 sessões e encontros semanais. Você escolhe a ferramenta que mais faz sentido e, juntos, aplicamos o método para destravar a sua vida.",
  },
  {
    id: "curso-emc",
    title: "Curso Online EMC",
    href: "https://hotmart.com/pt-br/marketplace/produtos/mentoria-emc-espiritualmente-corpo/R100317606L?sck=HOTMART_SITE&search=6f6bd143-87a4-40ad-86a2-0cdeb68f8f2c&hotfeature=33",
    meta: "Curso Completo • Online • Módulos",
    description:
      "O Curso Online Espiritual Mente Corpo irá te dar uma nova visão sobre a vida e como você pode alcançar a sua melhor versão. Muitas vezes estamos travados não por falta de dinheiro ou apoio, mas por falta de enxergar os traumas e bloqueios que vivemos sem perceber.",
  },
  {
    id: "apostila-emc",
    title: "Apostila EMC",
    href: "https://hotmart.com/pt-br/marketplace?search=Apostila+EMC+Gleice+Alleyne",
    meta: "Apostila • Digital • Venda online",
    description:
      "Material de apoio do Projeto Espiritual Mente Corpo (EMC) para estudar no seu ritmo, revisitar conceitos e aplicar ferramentas práticas no dia a dia. Disponível para compra online com acesso digital após a confirmação do pagamento.",
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
