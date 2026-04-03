export type Language = 'en' | 'pt' | 'es';

export const translations = {
  en: {
    // Navbar
    nav: {
      products: 'Products',
      howItWorks: 'How It Works',
      appPreview: 'App Preview',
      security: 'Security',
      team: 'Team',
      openApp: 'Open App',
    },

    // Hero
    hero: {
      badge: 'VANTS App — Early Access',
      headline1: 'A global account to pay the real world with',
      headline2: 'your own investments.',
      subheadline: 'Invest smarter. Earn more. Pay anywhere — all from one app.',
      ctaPrimary: 'Open App',
      ctaSecondary: 'How it Works',
      metric1Value: '391M+',
      metric1Label: 'Addressable users',
      metric2Value: '< 5s',
      metric2Label: 'Settlement time',
      metric3Value: '100%',
      metric3Label: 'Always your money',
      cardBalance: 'Total balance',
      cardLive: '● Live',
      cardYield: '+4.2% per year',
      cardOwnership: 'ownership',
      cardOwnershipLabel: 'Always your money',
      cardLastPayment: 'Last payment',
      cardPixSent: 'Pix sent',
      cardJustNow: 'Just now',
      cardPayButton: 'Pay with Vants',
      cardEarning: 'Earning now',
      cardNetworks: 'Pix • CBU • SPEI',
    },

    // Problem/Solution
    problemSolution: {
      title1: 'The old way is',
      title2: 'broken.',
      subtitle: "Your money should work as hard as you do. Here's why it doesn't — and how Vants fixes it.",
      problemBadge: 'The Problem',
      solutionBadge: 'The Vants Way',
      problems: [
        {
          title: 'Converting money costs a fortune',
          desc: "You lose 3–5% every time you move money across borders. That's thousands of dollars a year, gone.",
        },
        {
          title: 'Your savings are losing value',
          desc: 'Money sitting in a traditional account earns less than 2% a year — below inflation. Your money is shrinking.',
        },
        {
          title: 'Paying bills from investments is a nightmare',
          desc: 'Selling assets to pay a bill takes multiple apps and multiple days. By the time it settles, you\'ve missed a discount.',
        },
      ],
      solutions: [
        {
          title: 'Earn more, automatically',
          desc: 'Your money goes into high-yield accounts the moment you deposit. No steps, no complexity — just returns.',
        },
        {
          title: 'Pay any bill in seconds',
          desc: 'Scan a QR code. Vants converts just what you need and settles the payment via Pix, SPEI, or CBU — instantly.',
        },
        {
          title: 'Always your money',
          desc: 'You own your assets 100%. Vants moves money on your behalf — it never holds it, never touches it.',
        },
      ],
      loop: ['Invest', 'Earn', 'Pay'],
    },

    // BridgeFeature
    bridge: {
      title1: 'How Vants',
      title2: 'pays for you',
      subtitle: 'Tap to pay. Vants figures out the best way to settle — you just go.',
      nodeYourAccount: 'Your Account',
      nodeVants: 'Vants',
      nodeMerchant: 'Merchant',
      nodeRedeem: 'Redeem Earnings',
      nodeRedeemSub: 'Best option',
      nodeExchange: 'Currency Exchange',
      nodeExchangeSub: 'Best rate',
      nodeDirect: 'Direct Transfer',
      nodeDirectSub: 'Pix • CBU • SPEI',
      legendAuto: '// Payment routing is automatic and instant',
      legendSettled: '✓ Settled in under 5 seconds',
      badgeSmart: 'Smart Payment',
      badgeRouting: 'Routing engine',
      badgeActive: 'ACTIVE',
    },

    // Dashboard
    dashboard: {
      title1: 'Your money,',
      title2: 'always working.',
      subtitle: 'Put your savings to work. Earn every day. Pay any bill in seconds — without switching apps.',
      features: [
        {
          title: 'Earn every day',
          desc: 'Your balance grows automatically from the moment you deposit. No action needed.',
        },
        {
          title: 'Pay in seconds',
          desc: 'Scan a QR code. Done. Works with Pix, SPEI, and CBU — wherever you are.',
        },
        {
          title: 'Always your money',
          desc: 'You own it, 100%. Always. Vants moves money on your behalf — it never holds it.',
        },
      ],
      cardBalance: 'Total balance',
      cardEarning: 'Earning 4.2% per year',
      cardAvailable: 'Available to spend',
      cardRecent: 'Recent payments',
      cardPayButton: 'Pay with Vants',
      transactions: [
        { label: 'Netflix', sublabel: 'Subscription' },
        { label: 'Pix received', sublabel: 'From Wlad M.' },
        { label: 'Electric bill', sublabel: 'Pix payment' },
      ],
    },

    // Security
    security: {
      title1: 'Built for people who',
      title2: 'trust their money',
      title3: 'to us.',
      subtitle: "We don't take that lightly. Every layer of Vants is designed to keep your money safe and always under your control.",
      badge: 'BCB Compliant • SPEI • CBU • SOC2 Type II',
      features: [
        {
          title: 'Automated bank-grade security',
          description: "Your account is protected by the same standards used by the world's leading financial institutions. Every transaction is verified before it moves.",
        },
        {
          title: 'You own your assets, 100%',
          description: 'Vants never holds your money. It moves on your behalf, under your total control. No third party can access your funds — ever.',
        },
        {
          title: 'Regulatory-ready',
          description: 'Operating within the compliance frameworks of BCB (Brazil), SPEI (Mexico), and CBU (Argentina). Built for the long term.',
        },
        {
          title: 'Full transparency',
          description: 'Every operation is verifiable and auditable at any time. We publish our security reports and compliance certifications openly.',
        },
      ],
    },

    // Team
    team: {
      title1: 'Meet the',
      title2: 'Team',
      subtitle: 'A team of experienced builders, engineers, and product leaders passionate about making financial access simpler for everyone.',
      members: {
        wlad: {
          role: "CEO & Tech Lead",
          bio: "Former Sodexo/Lumx Tech Lead. 10+ years building payment infrastructure in LatAm. Led engineering teams at scale. Multiple Stellar hackathon winner.",
        },
        vhendala: {
          role: "Engineering",
          bio: "Software Engineer specialized in scalable applications. Previously built infrastructure at OLX Group serving millions of users. 2nd place winner at the Dev Connect 2025 hackathon in Buenos Aires with the Vants project.",
        },
        pedro: {
          role: "Product & Partnerships",
          bio: "Product leader with deep fintech expertise and a long track record building ecosystems in Latin America. VP of Stellar Ambassadors Program in Brazil.",
        }
      }
    },

    // FAQ
    faq: {
      title1: 'Frequently asked',
      title2: 'questions',
      subtitle: 'Everything you need to know before you get started.',
      stillQuestion: 'Still have questions?',
      talkToUs: 'Talk to us',
      items: [
        {
          question: 'What exactly is Vants?',
          answer: 'Vants is a global financial app that lets you put your savings to work in high-yield accounts and use those same funds to pay your everyday bills in seconds. Your money earns returns until the exact moment you need to make a payment.',
        },
        {
          question: 'How do I pay a bill using my investments?',
          answer: "It's completely seamless. You just scan a Pix, SPEI, or CBU QR code. Vants automatically calculates the exact amount needed, converts it from your invested balance, and settles the payment in under 5 seconds. No manual withdrawals required.",
        },
        {
          question: "Do I lose access to my money when it's earning returns?",
          answer: 'Not at all. Your money is always yours. Unlike traditional accounts that might lock your funds away for months, your balance in Vants is always available to spend or withdraw instantly, 24/7.',
        },
        {
          question: 'Is my money safe? Does Vants hold my funds?',
          answer: 'We use automated bank-grade security to ensure your assets are protected. More importantly, you have total ownership of your money. Vants provides the technology to orchestrate your payments and earnings, but we never hold, lend, or lock your funds.',
        },
        {
          question: 'How do the returns compare to my regular bank?',
          answer: 'Traditional banks often pay less than inflation on idle cash. Vants connects your account to global digital dollars and high-yield accounts, allowing your money to work harder and protect your purchasing power globally.',
        },
        {
          question: 'Are there any monthly fees?',
          answer: 'No. Opening an account and earning returns is completely free. We only apply a small, fully transparent conversion rate at the exact moment you make a payment or transfer.',
        },
      ],
    },

    // Footer
    footer: {
      tagline: 'A global account that makes your money work harder. Earn returns on your savings and pay any bill in seconds — anywhere in Latin America.',
      navigation: 'Navigation',
      copyright: '© 2026 VANTS. All rights reserved.',
    },
  },

  pt: {
    nav: {
      products: 'Produtos',
      howItWorks: 'Como Funciona',
      appPreview: 'Ver App',
      security: 'Segurança',
      team: 'Time',
      openApp: 'Abrir App',
    },

    hero: {
      badge: 'VANTS App — Acesso Antecipado',
      headline1: 'Uma conta global para pagar o mundo real com',
      headline2: 'os seus próprios investimentos.',
      subheadline: 'Invista melhor. Ganhe mais. Pague em qualquer lugar — tudo em um único app.',
      ctaPrimary: 'Abrir App',
      ctaSecondary: 'Como Funciona',
      metric1Value: '391M+',
      metric1Label: 'Usuários endereçáveis',
      metric2Value: '< 5s',
      metric2Label: 'Tempo de liquidação',
      metric3Value: '100%',
      metric3Label: 'Sempre seu dinheiro',
      cardBalance: 'Saldo total',
      cardLive: '● Ao vivo',
      cardYield: '+4,2% ao ano',
      cardOwnership: 'propriedade',
      cardOwnershipLabel: 'Sempre seu dinheiro',
      cardLastPayment: 'Último pagamento',
      cardPixSent: 'Pix enviado',
      cardJustNow: 'Agora mesmo',
      cardPayButton: 'Pagar com Vants',
      cardEarning: 'Rendendo agora',
      cardNetworks: 'Pix • CBU • SPEI',
    },

    problemSolution: {
      title1: 'O jeito antigo está',
      title2: 'quebrado.',
      subtitle: 'O seu dinheiro deveria trabalhar tanto quanto você. Eis o porquê isso não acontece — e como a Vants resolve.',
      problemBadge: 'O Problema',
      solutionBadge: 'O Jeito Vants',
      problems: [
        {
          title: 'Converter dinheiro custa uma fortuna',
          desc: 'Você perde de 3% a 5% toda vez que move dinheiro entre países. Isso são milhares de reais por ano, jogados fora.',
        },
        {
          title: 'Suas economias estão perdendo valor',
          desc: 'Dinheiro parado numa conta tradicional rende menos de 2% ao ano — abaixo da inflação. O seu poder de compra está encolhendo.',
        },
        {
          title: 'Pagar contas com investimentos é um pesadelo',
          desc: 'Vender ativos para pagar uma conta exige vários apps e vários dias. Quando o dinheiro chega, o desconto já era.',
        },
      ],
      solutions: [
        {
          title: 'Ganhe mais, automaticamente',
          desc: 'Seu dinheiro vai para contas de alto rendimento no momento em que você deposita. Sem etapas, sem complexidade — só retorno.',
        },
        {
          title: 'Pague qualquer conta em segundos',
          desc: 'Escaneie um QR code. A Vants converte exatamente o que você precisa e liquida o pagamento via Pix, SPEI ou CBU — na hora.',
        },
        {
          title: 'Sempre seu dinheiro',
          desc: 'Você é dono dos seus ativos, 100%. A Vants move o dinheiro em seu nome — nunca guarda, nunca toca.',
        },
      ],
      loop: ['Investir', 'Ganhar', 'Pagar'],
    },

    bridge: {
      title1: 'Como a Vants',
      title2: 'paga por você',
      subtitle: 'É só tocar para pagar. A Vants descobre a melhor forma de liquidar — você só vai.',
      nodeYourAccount: 'Sua Conta',
      nodeVants: 'Vants',
      nodeMerchant: 'Estabelecimento',
      nodeRedeem: 'Resgatar Rendimentos',
      nodeRedeemSub: 'Melhor opção',
      nodeExchange: 'Câmbio de Moeda',
      nodeExchangeSub: 'Melhor taxa',
      nodeDirect: 'Transferência Direta',
      nodeDirectSub: 'Pix • CBU • SPEI',
      legendAuto: '// Roteamento de pagamento automático e instantâneo',
      legendSettled: '✓ Liquidado em menos de 5 segundos',
      badgeSmart: 'Pagamento Inteligente',
      badgeRouting: 'Motor de roteamento',
      badgeActive: 'ATIVO',
    },

    dashboard: {
      title1: 'Seu dinheiro,',
      title2: 'sempre trabalhando.',
      subtitle: 'Coloque suas economias para trabalhar. Ganhe todo dia. Pague qualquer conta em segundos — sem trocar de app.',
      features: [
        {
          title: 'Ganhe todo dia',
          desc: 'Seu saldo cresce automaticamente desde o momento em que você deposita. Sem nenhuma ação necessária.',
        },
        {
          title: 'Pague em segundos',
          desc: 'Escaneie um QR code. Pronto. Funciona com Pix, SPEI e CBU — onde quer que você esteja.',
        },
        {
          title: 'Sempre seu dinheiro',
          desc: 'É seu, 100%. Sempre. A Vants move o dinheiro em seu nome — e nunca o guarda.',
        },
      ],
      cardBalance: 'Saldo total',
      cardEarning: 'Rendendo 4,2% ao ano',
      cardAvailable: 'Disponível para gastar',
      cardRecent: 'Pagamentos recentes',
      cardPayButton: 'Pagar com Vants',
      transactions: [
        { label: 'Netflix', sublabel: 'Assinatura' },
        { label: 'Pix recebido', sublabel: 'De Wlad M.' },
        { label: 'Conta de luz', sublabel: 'Pix enviado' },
      ],
    },

    security: {
      title1: 'Feito para quem confia',
      title2: 'seu dinheiro',
      title3: 'a nós.',
      subtitle: 'Não levamos isso levianamente. Cada camada da Vants foi projetada para manter seu dinheiro seguro e sempre sob o seu controle.',
      badge: 'Em conformidade com BCB • SPEI • CBU • SOC2 Tipo II',
      features: [
        {
          title: 'Segurança bancária automatizada',
          description: 'Sua conta é protegida pelos mesmos padrões das principais instituições financeiras do mundo. Cada transação é verificada antes de se mover.',
        },
        {
          title: 'Você é dono dos seus ativos, 100%',
          description: 'A Vants nunca guarda seu dinheiro. Ele se move em seu nome, sob seu total controle. Nenhum terceiro pode acessar seus fundos — jamais.',
        },
        {
          title: 'Pronto para regulação',
          description: 'Operando dentro dos marcos regulatórios do BCB (Brasil), SPEI (México) e CBU (Argentina). Construído para o longo prazo.',
        },
        {
          title: 'Transparência total',
          description: 'Toda operação é verificável e auditável a qualquer momento. Publicamos nossos relatórios de segurança e certificações de conformidade abertamente.',
        },
      ],
    },

    team: {
      title1: 'Conheça o',
      title2: 'Time',
      subtitle: 'Um time de construtores experientes, engenheiros e líderes de produto apaixonados por tornar o acesso financeiro mais simples para todos.',
      members: {
        wlad: {
          role: "CEO & Tech Lead",
          bio: "Ex-Tech Lead na Sodexo/Lumx. Mais de 10 anos construindo infraestrutura de pagamentos na América Latina. Liderou times de engenharia em larga escala. Múltiplas vezes vencedor de hackathons da Stellar.",
        },
        vhendala: {
          role: "Engenharia",
          bio: "Engenheira de Software especializada em aplicações escaláveis. Anteriormente construiu infraestrutura no Grupo OLX servindo milhões de usuários. Vencedora do 2º lugar no hackathon Dev Connect 2025 em Buenos Aires com o projeto Vants.",
        },
        pedro: {
          role: "Produto e Parcerias",
          bio: "Líder de produto com profunda experiência em fintechs e longo histórico construindo ecossistemas na América Latina. VP do Programa de Embaixadores da Stellar no Brasil.",
        }
      }
    },

    faq: {
      title1: 'Perguntas',
      title2: 'frequentes',
      subtitle: 'Tudo o que você precisa saber antes de começar.',
      stillQuestion: 'Ainda tem dúvidas?',
      talkToUs: 'Fale com a gente',
      items: [
        {
          question: 'O que exatamente é a Vants?',
          answer: 'A Vants é um app financeiro global que permite colocar suas economias em contas de alto rendimento e usar esses mesmos recursos para pagar suas contas do dia a dia em segundos. Seu dinheiro rende até o exato momento em que você precisa fazer um pagamento.',
        },
        {
          question: 'Como pago uma conta usando meus investimentos?',
          answer: 'É totalmente transparente. Você só escaneia um QR code de Pix, SPEI ou CBU. A Vants calcula automaticamente o valor exato necessário, converte do seu saldo investido e liquida o pagamento em menos de 5 segundos. Sem saques manuais.',
        },
        {
          question: 'Perco o acesso ao meu dinheiro enquanto ele rende?',
          answer: 'De jeito nenhum. Seu dinheiro é sempre seu. Ao contrário de contas tradicionais que podem bloquear seus recursos por meses, seu saldo na Vants está sempre disponível para gastar ou sacar instantaneamente, 24 horas por dia, 7 dias por semana.',
        },
        {
          question: 'Meu dinheiro está seguro? A Vants guarda meus fundos?',
          answer: 'Usamos segurança automatizada de nível bancário para garantir que seus ativos estejam protegidos. Mais importante: você tem total propriedade do seu dinheiro. A Vants fornece a tecnologia para orquestrar seus pagamentos e rendimentos, mas nunca guarda, empresta ou bloqueia seus fundos.',
        },
        {
          question: 'Como os rendimentos se comparam ao meu banco tradicional?',
          answer: 'Os bancos tradicionais muitas vezes pagam abaixo da inflação sobre o dinheiro parado. A Vants conecta sua conta a dólares digitais globais e contas de alto rendimento, permitindo que seu dinheiro trabalhe mais e proteja seu poder de compra globalmente.',
        },
        {
          question: 'Existem taxas mensais?',
          answer: 'Não. Abrir uma conta e receber rendimentos é completamente gratuito. Aplicamos apenas uma taxa de conversão pequena e totalmente transparente no exato momento em que você faz um pagamento ou transferência.',
        },
      ],
    },

    footer: {
      tagline: 'Uma conta global que faz seu dinheiro trabalhar mais. Ganhe rendimentos nas suas economias e pague qualquer conta em segundos — em toda a América Latina.',
      navigation: 'Navegação',
      copyright: '© 2026 VANTS. Todos os direitos reservados.',
    },
  },

  es: {
    nav: {
      products: 'Productos',
      howItWorks: 'Cómo Funciona',
      appPreview: 'Ver App',
      security: 'Seguridad',
      team: 'Equipo',
      openApp: 'Abrir App',
    },

    hero: {
      badge: 'VANTS App — Acceso Anticipado',
      headline1: 'Una cuenta global para pagar el mundo real con',
      headline2: 'tus propias inversiones.',
      subheadline: 'Invierte mejor. Gana más. Paga en cualquier lugar — todo desde una sola app.',
      ctaPrimary: 'Abrir App',
      ctaSecondary: 'Cómo Funciona',
      metric1Value: '391M+',
      metric1Label: 'Usuarios potenciales',
      metric2Value: '< 5s',
      metric2Label: 'Tiempo de liquidación',
      metric3Value: '100%',
      metric3Label: 'Siempre tu dinero',
      cardBalance: 'Saldo total',
      cardLive: '● En vivo',
      cardYield: '+4,2% por año',
      cardOwnership: 'propiedad',
      cardOwnershipLabel: 'Siempre tu dinero',
      cardLastPayment: 'Último pago',
      cardPixSent: 'Pix enviado',
      cardJustNow: 'Ahora mismo',
      cardPayButton: 'Pagar con Vants',
      cardEarning: 'Generando ahora',
      cardNetworks: 'Pix • CBU • SPEI',
    },

    problemSolution: {
      title1: 'La forma antigua está',
      title2: 'rota.',
      subtitle: 'Tu dinero debería trabajar tanto como tú. Aquí te explicamos por qué no lo hace — y cómo Vants lo soluciona.',
      problemBadge: 'El Problema',
      solutionBadge: 'La Forma Vants',
      problems: [
        {
          title: 'Convertir dinero cuesta una fortuna',
          desc: 'Pierdes entre 3% y 5% cada vez que mueves dinero entre países. Eso son miles de dólares al año, perdidos.',
        },
        {
          title: 'Tus ahorros están perdiendo valor',
          desc: 'El dinero en una cuenta tradicional rinde menos del 2% anual — por debajo de la inflación. Tu poder adquisitivo está disminuyendo.',
        },
        {
          title: 'Pagar cuentas desde inversiones es una pesadilla',
          desc: 'Vender activos para pagar una cuenta requiere múltiples apps y días. Para cuando se liquida, el descuento ya venció.',
        },
      ],
      solutions: [
        {
          title: 'Gana más, automáticamente',
          desc: 'Tu dinero va a cuentas de alto rendimiento en el momento en que depositas. Sin pasos, sin complejidad — solo retornos.',
        },
        {
          title: 'Paga cualquier factura en segundos',
          desc: 'Escanea un código QR. Vants convierte exactamente lo que necesitas y liquida el pago vía Pix, SPEI o CBU — al instante.',
        },
        {
          title: 'Siempre tu dinero',
          desc: 'Eres dueño de tus activos al 100%. Vants mueve tu dinero en tu nombre — nunca lo guarda, nunca lo toca.',
        },
      ],
      loop: ['Invertir', 'Ganar', 'Pagar'],
    },

    bridge: {
      title1: 'Cómo Vants',
      title2: 'paga por ti',
      subtitle: 'Toca para pagar. Vants descubre la mejor forma de liquidar — tú solo ve.',
      nodeYourAccount: 'Tu Cuenta',
      nodeVants: 'Vants',
      nodeMerchant: 'Comercio',
      nodeRedeem: 'Rescatar Ganancias',
      nodeRedeemSub: 'Mejor opción',
      nodeExchange: 'Cambio de Divisa',
      nodeExchangeSub: 'Mejor tasa',
      nodeDirect: 'Transferencia Directa',
      nodeDirectSub: 'Pix • CBU • SPEI',
      legendAuto: '// Enrutamiento de pago automático e instantáneo',
      legendSettled: '✓ Liquidado en menos de 5 segundos',
      badgeSmart: 'Pago Inteligente',
      badgeRouting: 'Motor de enrutamiento',
      badgeActive: 'ACTIVO',
    },

    dashboard: {
      title1: 'Tu dinero,',
      title2: 'siempre trabajando.',
      subtitle: 'Pon tus ahorros a trabajar. Gana cada día. Paga cualquier factura en segundos — sin cambiar de app.',
      features: [
        {
          title: 'Gana cada día',
          desc: 'Tu saldo crece automáticamente desde el momento en que depositas. Sin ninguna acción requerida.',
        },
        {
          title: 'Paga en segundos',
          desc: 'Escanea un código QR. Listo. Funciona con Pix, SPEI y CBU — donde sea que estés.',
        },
        {
          title: 'Siempre tu dinero',
          desc: 'Tuyo, 100%. Siempre. Vants mueve el dinero en tu nombre — y nunca lo guarda.',
        },
      ],
      cardBalance: 'Saldo total',
      cardEarning: 'Ganando 4,2% por año',
      cardAvailable: 'Disponible para gastar',
      cardRecent: 'Pagos recientes',
      cardPayButton: 'Pagar con Vants',
      transactions: [
        { label: 'Netflix', sublabel: 'Suscripción' },
        { label: 'Pix recibido', sublabel: 'De Wlad M.' },
        { label: 'Factura de luz', sublabel: 'Pago Pix' },
      ],
    },

    security: {
      title1: 'Construido para quienes',
      title2: 'confían su dinero',
      title3: 'en nosotros.',
      subtitle: 'No nos lo tomamos a la ligera. Cada capa de Vants está diseñada para mantener tu dinero seguro y siempre bajo tu control.',
      badge: 'Conforme con BCB • SPEI • CBU • SOC2 Tipo II',
      features: [
        {
          title: 'Seguridad bancaria automatizada',
          description: 'Tu cuenta está protegida por los mismos estándares que usan las principales instituciones financieras del mundo. Cada transacción es verificada antes de moverse.',
        },
        {
          title: 'Eres dueño de tus activos, 100%',
          description: 'Vants nunca guarda tu dinero. Se mueve en tu nombre, bajo tu total control. Ningún tercero puede acceder a tus fondos — jamás.',
        },
        {
          title: 'Listo para regulación',
          description: 'Operando dentro de los marcos normativos del BCB (Brasil), SPEI (México) y CBU (Argentina). Construido para el largo plazo.',
        },
        {
          title: 'Transparencia total',
          description: 'Cada operación es verificable y auditable en cualquier momento. Publicamos nuestros informes de seguridad y certificaciones abiertamente.',
        },
      ],
    },

    team: {
      title1: 'Conoce al',
      title2: 'Equipo',
      subtitle: 'Un equipo de constructores experimentados, ingenieros y líderes de producto apasionados por hacer el acceso financiero más simple para todos.',
      members: {
        wlad: {
          role: "CEO & Tech Lead",
          bio: "Ex-Tech Lead en Sodexo/Lumx. Más de 10 años construyendo infraestructura de pagos en América Latina. Lideró equipos de ingeniería a gran escala. Múltiples veces ganador de hackathons de Stellar.",
        },
        vhendala: {
          role: "Ingeniería",
          bio: "Ingeniera de software especializada en aplicaciones escalables. Anteriormente construyó infraestructura en OLX Group sirviendo a millones de usuarios. Ganadora del 2º lugar en el hackathon Dev Connect 2025 en Buenos Aires con el proyecto Vants.",
        },
        pedro: {
          role: "Producto y Alianzas",
          bio: "Líder de producto con profunda experiencia en fintechs y un largo historial construyendo ecosistemas en América Latina. VP del Programa de Embajadores de Stellar en Brasil.",
        }
      }
    },

    faq: {
      title1: 'Preguntas',
      title2: 'frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de comenzar.',
      stillQuestion: '¿Tienes más preguntas?',
      talkToUs: 'Habla con nosotros',
      items: [
        {
          question: '¿Qué es exactamente Vants?',
          answer: 'Vants es una app financiera global que te permite poner tus ahorros a trabajar en cuentas de alto rendimiento y usar esos mismos fondos para pagar tus facturas del día a día en segundos. Tu dinero genera retornos hasta el momento exacto en que necesitas hacer un pago.',
        },
        {
          question: '¿Cómo pago una factura usando mis inversiones?',
          answer: 'Es completamente transparente. Solo escaneas un código QR de Pix, SPEI o CBU. Vants calcula automáticamente el monto exacto necesario, lo convierte desde tu saldo invertido y liquida el pago en menos de 5 segundos. Sin retiros manuales.',
        },
        {
          question: '¿Pierdo acceso a mi dinero mientras genera rendimientos?',
          answer: 'Para nada. Tu dinero es siempre tuyo. A diferencia de las cuentas tradicionales que pueden bloquear tus fondos durante meses, tu saldo en Vants siempre está disponible para gastar o retirar al instante, las 24 horas del día, los 7 días de la semana.',
        },
        {
          question: '¿Mi dinero está seguro? ¿Vants guarda mis fondos?',
          answer: 'Usamos seguridad bancaria automatizada para garantizar que tus activos estén protegidos. Más importante aún, tienes propiedad total de tu dinero. Vants proporciona la tecnología para orquestar tus pagos y ganancias, pero nunca guarda, presta ni bloquea tus fondos.',
        },
        {
          question: '¿Cómo se comparan los rendimientos con mi banco tradicional?',
          answer: 'Los bancos tradicionales suelen pagar por debajo de la inflación sobre el efectivo inactivo. Vants conecta tu cuenta a dólares digitales globales y cuentas de alto rendimiento, permitiendo que tu dinero trabaje más y proteja tu poder adquisitivo globalmente.',
        },
        {
          question: '¿Hay tarifas mensuales?',
          answer: 'No. Abrir una cuenta y generar rendimientos es completamente gratuito. Solo aplicamos una pequeña tasa de conversión totalmente transparente en el momento exacto en que realizas un pago o transferencia.',
        },
      ],
    },

    footer: {
      tagline: 'Una cuenta global que hace que tu dinero trabaje más. Genera retornos sobre tus ahorros y paga cualquier factura en segundos — en toda América Latina.',
      navigation: 'Navegación',
      copyright: '© 2026 VANTS. Todos los derechos reservados.',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;
