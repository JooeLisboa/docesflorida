export type FeaturedProduct = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
};

export const siteContent = {
  brand: {
    name: 'Flórida Doces',
    subtitle: 'Brigaderia artesanal para deixar sua vida ainda mais doce',
    instagram: ['@elisafloridac__', '@taaay_florida', '@milhenaflorida'],
    bio: 'Criado por mãe e filhas para transformar celebrações em memórias afetivas com doçura e elegância.',
    shortTagline: 'Doçura artesanal com carinho de família',
    footerLine: 'Feito com amor para uma Páscoa mais doce e inesquecível.'
  },
  contact: {
    phoneDisplay: '+55 14 99602-0347',
    phoneRaw: '5514996020347',
    prefilledMessage:
      'Olá! Vim pelo cartão interativo da Flórida Doces e gostaria de fazer uma encomenda.',
    primaryCTA: 'Fazer encomenda no WhatsApp',
    secondaryCTA: 'Ver destaques'
  },
  intro: {
    title: 'Uma doceria familiar com alma artesanal',
    text: 'Somos mãe e filhas unidas pelo mesmo propósito: criar doces delicados para presentear, celebrar e tornar a Páscoa ainda mais especial. Cada detalhe é feito com cuidado, afeto e ingredientes selecionados.'
  },
  products: [
    {
      id: 'ovo-colher-premium',
      name: 'Ovo de Colher Premium',
      description: 'Casca nobre, recheio cremoso e finalização elegante para presentear com sofisticação.',
      image: '/images/product-ovo.svg',
      imageAlt: 'Ovo de colher premium decorado',
      ctaLabel: 'Pedir este produto'
    },
    {
      id: 'caixa-brigadeiros',
      name: 'Caixa de Brigadeiros Especiais',
      description: 'Seleção artesanal com sabores clássicos e autorais, ideal para compartilhar afeto.',
      image: '/images/product-brigadeiro.svg',
      imageAlt: 'Caixa de brigadeiros especiais',
      ctaLabel: 'Quero essa caixa'
    },
    {
      id: 'kit-pascoa',
      name: 'Kit Páscoa Flórida',
      description: 'Combinação exclusiva para uma experiência delicada, doce e memorável.',
      image: '/images/product-kit.svg',
      imageAlt: 'Kit páscoa florida doces',
      ctaLabel: 'Reservar meu kit'
    }
  ] as FeaturedProduct[],
  colors: {
    background: '#FBF7F0',
    surface: '#FFFDF8',
    primary: '#B9925D',
    text: '#503729',
    accent: '#C9A696'
  }
};

export const getWhatsAppLink = (message?: string) => {
  const text = encodeURIComponent(message ?? siteContent.contact.prefilledMessage);
  return `https://wa.me/${siteContent.contact.phoneRaw}?text=${text}`;
};
