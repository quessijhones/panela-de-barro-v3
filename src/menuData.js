// menuData.js — cardápio PT/EN + nutrição + alergênicos (Halal)

export const CATEGORIES = ["mains", "sides", "desserts", "beverages", "seasonal", "chef"];

export const MENU = [
  {
    id: "vaca-atolada",
    image: "/images/vaca-atolada.jpg",
    category: "mains",
    tag: "🥩",
    title: { pt: "Vaca Atolada (Ossobuco)", en: "Vaca Atolada (Beef Ossobuco)" },
    summary: {
      pt: "Ossobuco lentamente cozido, polenta cremosa e rúcula cítrica.",
      en: "Slow-braised ossobuco with creamy polenta and citrus arugula.",
    },
    description: {
      pt: "Clássico mineiro de dias festivos. O ossobuco cozinha por horas até desmanchar, puxando alho, cebola e ervas. Servido com polenta cremosa e rúcula cítrica — conforto e raiz no mesmo prato.",
      en: "A Minas Gerais classic for feast days. Beef ossobuco braises for hours until tender, infused with garlic, onions, and herbs. Served with creamy polenta and citrus arugula — comfort and heritage on one plate.",
    },
    nutrition: { kcal: 680, carbs: 18, protein: 42, fat: 48 },
    allergens: ["gluten-free"], // naturalmente sem glúten
  },
  {
    id: "feijoada-costela",
    image: "/images/feijoada-costela.jpg",
    category: "mains",
    tag: "🥩",
    title: { pt: "Feijoada de Costela", en: "Black Bean Stew with Ribs" },
    summary: {
      pt: "Feijão preto com costela bovina, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
    },
    description: {
      pt: "Feijoada de quintal: o feijão cozinha devagar, a costela bovina fica macia e a farofa de banana traz o toque doce-salgado do Brasil central. 100% halal.",
      en: "Backyard-style feijoada: slow-cooked black beans, tender beef ribs, and banana farofa for that sweet-savory note from Brazil’s heartland. 100% halal.",
    },
    nutrition: { kcal: 720, carbs: 52, protein: 36, fat: 38 },
    allergens: [], // sem porco, sem álcool
  },
  {
    id: "picanha-grelhada",
    image: "/images/picanha-grelhada.jpg",
    category: "chef",
    tag: "🥩⭐",
    title: { pt: "Picanha Grelhada", en: "Grilled Picanha" },
    summary: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta-do-reino.",
      en: "With mushroom risotto, green-corn polenta and peppercorn sauce.",
    },
    description: {
      pt: "Corte-ícone do churrasco brasileiro, selado quente para manter a suculência. Acompanha risoto de cogumelos e polenta de milho verde — assinatura do chef. Halal.",
      en: "An icon of Brazilian barbecue, seared hot to keep it juicy. Served with mushroom risotto and green-corn polenta — chef’s signature. Halal.",
    },
    nutrition: { kcal: 640, carbs: 28, protein: 45, fat: 36 },
    allergens: [],
  },
  {
    id: "pao-de-queijo",
    image: "/images/pao-de-queijo.jpg",
    category: "sides",
    tag: "🌾🚫",
    title: { pt: "Pão de Queijo", en: "Cheese Bread (GF)" },
    summary: { pt: "Tradicional, macio e quentinho.", en: "Traditional, soft and warm." },
    description: {
      pt: "Receita mineira com polvilho e queijo curado. Naturalmente sem glúten — abraço em forma de pão.",
      en: "Minas-style recipe using cassava starch and aged cheese. Naturally gluten-free — a warm hug in bread form.",
    },
    nutrition: { kcal: 210, carbs: 22, protein: 5, fat: 10 },
    allergens: ["dairy"],
  },
  {
    id: "polenta-frita",
    image: "/images/polenta-frita.jpg",
    category: "sides",
    tag: "🌽",
    title: { pt: "Polenta Frita", en: "Crispy Polenta Fries" },
    summary: { pt: "Dourada por fora, cremosa por dentro.", en: "Golden outside, creamy inside." },
    description: {
      pt: "Herança italiana no Brasil: milho, fogo baixo e tempo. Depois, cortes firmes que viram crocância perfeita.",
      en: "Italian heritage in Brazil: cornmeal, low heat and time. Then firm cuts turned into perfect crunch.",
    },
    nutrition: { kcal: 310, carbs: 30, protein: 4, fat: 18 },
    allergens: [],
  },
  {
    id: "pamonha",
    image: "/images/pamonha.jpg",
    category: "seasonal",
    tag: "🌽",
    title: { pt: "Pamonha (Sazonal)", en: "Pamonha (Seasonal)" },
    summary: { pt: "Clássico de milho verde — doce ou salgada.", en: "Green-corn classic — sweet or savory." },
    description: {
      pt: "Feita na palha, cozida lentamente. Sabor de festa junina e de roça.",
      en: "Wrapped in corn husks and gently simmered. Tastes like countryside fairs.",
    },
    nutrition: { kcal: 380, carbs: 62, protein: 7, fat: 10 },
    allergens: [],
  },
  {
    id: "encanto-de-coco",
    image: "/images/encanto-de-coco.jpg",
    category: "desserts",
    tag: "🥥",
    title: { pt: "Encanto de Coco", en: "Coconut Pudim" },
    summary: { pt: "Pudim de coco com caramelo claro.", en: "Coconut flan with light caramel." },
    description: {
      pt: "Sobremesa de domingo: textura sedosa, perfume de coco e doçura equilibrada.",
      en: "Sunday dessert: silky texture, coconut aroma and balanced sweetness.",
    },
    nutrition: { kcal: 290, carbs: 36, protein: 6, fat: 12 },
    allergens: ["dairy", "eggs"],
  },
  {
    id: "doce-da-roca-com-gelo",
    image: "/images/doce-da-roca-com-gelo.jpg",
    category: "desserts",
    tag: "🎃",
    title: { pt: "Doce da Roça com Gelo", en: "Country Pumpkin Sweet w/ Ice Cream" },
    summary: { pt: "Abóbora cremosa, especiarias e sorvete artesanal.", en: "Creamy pumpkin, spices and artisan ice cream." },
    description: {
      pt: "Abóbora cozida com cravo e canela, lembrança doce das cozinhas do interior.",
      en: "Pumpkin cooked with clove and cinnamon — a sweet memory from country kitchens.",
    },
    nutrition: { kcal: 340, carbs: 54, protein: 5, fat: 10 },
    allergens: ["dairy"],
  },
  {
    id: "amazon-breeze",
    image: "/images/amazon-breeze.jpg",
    category: "beverages",
    tag: "🥤",
    title: { pt: "Amazon Breeze", en: "Amazon Breeze" },
    summary: { pt: "Abacaxi, hortelã e limão (sem álcool).", en: "Pineapple, mint & lime (non-alcoholic)." },
    description: {
      pt: "Refresco brilhante com toque herbal, inspirado no Norte do Brasil. 0% álcool.",
      en: "Bright, herbal refreshment inspired by Brazil’s North. 0% alcohol.",
    },
    nutrition: { kcal: 120, carbs: 28, protein: 1, fat: 0 },
    allergens: [],
  },
  {
    id: "uva-limao-gelo",
    image: "/images/uva-limao-gelo.jpg",
    category: "beverages",
    tag: "🥤",
    title: { pt: "Uva & Limão Gelo", en: "Grape & Lemon Ice" },
    summary: { pt: "Suco de uva integral com limão e hortelã (sem álcool).", en: "Grape juice with lemon & mint (non-alcoholic)." },
    description: {
      pt: "Ácido, frutado e gelado — companhia leve para os pratos. 0% álcool.",
      en: "Tart, fruity and icy — a light companion to food. 0% alcohol.",
    },
    nutrition: { kcal: 110, carbs: 26, protein: 1, fat: 0 },
    allergens: [],
  },
  {
    id: "pe-de-serra",
    image: "/images/pe-de-serra.jpg",
    category: "beverages",
    tag: "🧉",
    title: { pt: "Pé de Serra", en: "Pé de Serra (Mate Iced Tea)" },
    summary: { pt: "Chá-mate gelado com limão e gengibre (sem álcool).", en: "Iced yerba mate with lemon & ginger (non-alcoholic)." },
    description: {
      pt: "Bebida refrescante, cara de tarde nordestina e vento de varanda.",
      en: "Refreshing, an afternoon breeze from Brazil’s Northeast.",
    },
    nutrition: { kcal: 35, carbs: 9, protein: 0, fat: 0 },
    allergens: [],
  },
];