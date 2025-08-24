// minúsculo, sem caracteres especiais no nome do arquivo
export const LOCALES = ["pt", "en", "ar"];

export const STRINGS = {
  siteName: "Panela de Barro", // NUNCA traduzimos o nome
  nav: {
    pt: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato" },
    en: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact" },
    ar: { about: "نبذة", menu: "القائمة", gallery: "المعرض", location: "الموقع", contact: "اتصال" },
  },
  hero: {
    pt: {
      title: "Sabores brasileiros, calor de família",
      subtitle:
        "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
    },
    en: {
      title: "Brazilian flavors, family warmth",
      subtitle:
        "Family restaurant in Qatar. 20+ years in hospitality, wood-fired cooking and Brazilian roots.",
      cta: "View Menu",
    },
    ar: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle:
        "مطعم عائلي في قطر. أكثر من 20 عامًا من الضيافة ومشاوي الحطب وجذور برازيلية.",
      cta: "عرض القائمة",
    },
  },
  filters: {
    pt: ["Todos", "Pratos Principais", "Acompanhamentos", "Sobremesas", "Bebidas", "Sazonal", "Do Chef"],
    en: ["All", "Mains", "Sides", "Desserts", "Beverages", "Seasonal", "Chef's"],
    ar: ["الكل", "أطباق رئيسية", "مقبلات", "حلويات", "مشروبات", "موسمي", "طبق الشيف"],
  },
  badges: {
    pt: { halal: "Halal", spicy: "Picante", vegan: "Vegano", shellfish: "Mariscos", beef: "Carne" },
    en: { halal: "Halal", spicy: "Spicy", vegan: "Vegan", shellfish: "Shellfish", beef: "Beef" },
    ar: { halal: "حلال", spicy: "حار", vegan: "نباتي", shellfish: "مأكولات بحرية", beef: "لحم بقر" },
  },
  about: {
    pt: {
      heading: "Nossa casa, seu sabor de interior",
      ownerTitle: "Proprietário & Chef",
      text: [
        "Nascido em Rondônia, cresci em fazenda: plantávamos e colhíamos feijão, café, milho, mandioca — tudo que forma a base da gastronomia brasileira. Naquele ambiente aprendi a essência do ingrediente e o respeito pelo tempo de fogo.",
        "Trabalhei 6 anos como chef de cozinha brasileira nos Emirados (Abu Dhabi) e no Qatar. Em Foz do Iguaçu tivemos um restaurante de comida caipira, comandado pela minha mãe, Dona Cleusa, e meu irmão Alex. Decidimos trazer essa vivência para Doha, com fogão a lenha e panelas que contam histórias.",
        "A Panela de Barro é união: do interior do Brasil ao Oriente Médio. A mesma panela usada por povos originários segue viva em culturas árabe e indiana — perfeita para moquecas, feijoadas, guisados e arrozes que pedem calor constante.",
      ],
      team: [
        {
          name: "Quessi Jhones",
          role: "Proprietário & Chef",
          bio: "10 anos de cozinha; 6 anos focado em culinária brasileira no Golfo. Defensor do produto de origem e do fogo de chão.",
          img: "/images/placeholder.jpg",
        },
        {
          name: "Alex",
          role: "Head Chef",
          bio: "Mais de 10 anos de cozinha brasileira e italiana. Cresceu no interior e domina grelhas e massas.",
          img: "/images/placeholder.jpg",
        },
        {
          name: "Dona Cleusa Gonçalves",
          role: "Matriarca & Guardiã das Receitas",
          bio: "Cozinheira há 25+ anos. Mineira, aprendeu no fogão a lenha com a mãe (de ascendência italiana).",
          img: "/images/placeholder.jpg",
        },
      ],
    },
    en: {
      heading: "Our home, your countryside flavor",
      ownerTitle: "Owner & Chef",
      text: [
        "Born in Rondônia on a farm, we grew beans, coffee, corn and cassava — the backbone of Brazilian cuisine. That’s where we learned to respect ingredients and fire.",
        "I worked 6 years as a Brazilian chef in Abu Dhabi and Qatar. In Foz do Iguaçu we ran a rustic restaurant led by my mother Dona Cleusa and my brother Alex. Now we bring that story to Doha with wood-fired cooking and clay pots.",
        "Clay pots unite cultures: from Brazil’s native peoples to Arab and Indian kitchens. Perfect for moquecas, feijoadas, stews and rice that love steady heat.",
      ],
      team: [
        { name: "Quessi Jhones", role: "Owner & Chef", bio: "10 years cooking; 6 years focused on Brazilian cuisine in the Gulf.", img: "/images/placeholder.jpg" },
        { name: "Alex", role: "Head Chef", bio: "10+ years of Brazilian & Italian kitchens. Grill and pasta master.", img: "/images/placeholder.jpg" },
        { name: "Dona Cleusa Gonçalves", role: "Matriarch", bio: "25+ years cooking. Wood-fire wisdom from her mother with Italian roots.", img: "/images/placeholder.jpg" },
      ],
    },
    ar: {
      heading: "بيتنا ونكهة الريف لديك",
      ownerTitle: "المالك والطاهي",
      text: [
        "وُلدنا في روندوﻧيا على مزرعة حيث زرعنا الفول والقهوة والذرة والكسافا — أساس المطبخ البرازيلي. هناك تعلمنا احترام المكوّن والنار.",
        "عملتُ ست سنوات طاهياً للمطبخ البرازيلي في أبوظبي وقطر. في فوز دو إيغواسو أدرنا مطعماً ريفياً تقوده والدتي دونا كليوزا وأخي أليكس. واليوم ننقل هذه القصة إلى الدوحة بطهي الحطب وقدور الفخار.",
        "قدور الفخار تجمع الثقافات: من الشعوب الأصلية في البرازيل إلى المطابخ العربية والهندية. مثالية للموكيكا والفيجوادا واليخنات والأرز.",
      ],
      team: [
        { name: "كيسي جونز", role: "المالك والطاهي", bio: "10 سنوات في المطبخ؛ 6 سنوات في الخليج تركز على المطبخ البرازيلي.", img: "/images/placeholder.jpg" },
        { name: "أليكس", role: "الشيف التنفيذي", bio: "أكثر من 10 سنوات في المطبخ البرازيلي والإيطالي.", img: "/images/placeholder.jpg" },
        { name: "دونا كليوزا غونسالفيش", role: "الأم الحافظة للوصفات", bio: "أكثر من 25 سنة في المطبخ على موقد الحطب.", img: "/images/placeholder.jpg" },
      ],
    },
  },
  location: {
    pt: { title: "Localização", address: "Baraha Town, Doha — Qatar", note: "Estacionamento no local. Em breve reservas online." },
    en: { title: "Location", address: "Baraha Town, Doha — Qatar", note: "On-site parking. Online reservations soon." },
    ar: { title: "الموقع", address: "باراحة تاون، الدوحة — قطر", note: "موقف سيارات متاح. الحجوزات عبر الإنترنت قريباً." },
  },
  contact: {
    pt: { title: "Contato", email: "restaurant@paneladebarroqatar.com", phone: "+974 3047 5279" },
    en: { title: "Contact", email: "restaurant@paneladebarroqatar.com", phone: "+974 3047 5279" },
    ar: { title: "اتصال", email: "restaurant@paneladebarroqatar.com", phone: "+974 3047 5279" },
  },
};
