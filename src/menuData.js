// Dados do menu. Img deve existir em /public/images
export const MENU = [
  {
    id: "vaca-atolada",
    img: "/images/vaca-atolada.jpg",
    cat: "mains",
    name: { pt: "Vaca Atolada (Ossobuco)", en: "Vaca Atolada (Ossobuco)", ar: "ڤاكا أتولادا (أوسوبوكو)" },
    short: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Ossobuco with creamy polenta and citrus arugula.",
      ar: "أوسوبوكو مع بولينتا كريمية وجرجير حمضي."
    },
    full: {
      pt: "Clássico caipira: ossobuco cozido lentamente em panela de barro, caldo encorpado, servido com polenta cremosa e vinagrete de rúcula.",
      en: "Rural classic: beef shank slow-cooked in clay pot, rich broth, creamy polenta and arugula vinaigrette.",
      ar: "طبق ريفي: ساق بقري مطهو ببطء في قدر فخار مع مرق غني وبولينتا كريمية وخس الجرجير المتبّل."
    },
    tags: ["halal","beef","gluten","dairy"],
    nutrition: { kcal: 820, carbs: 45, protein: 52 }
  },
  {
    id: "feijoada-costela",
    img: "/images/feijoada-costela.jpg",
    cat: "mains",
    name: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا بالضلوع" },
    short: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصوليا سوداء مع ضلوع بقري وفاروفا الموز والصلصة."
    },
    full: {
      pt: "Nossa versão halal homenageia os sabores da senzala e das ruas do Rio – cozimento lento em panela de barro, acompanhada de arroz, farofa de banana e couve.",
      en: "Our halal take honors the dish’s roots — slow clay-pot cooking, served with rice, banana farofa and collard greens.",
      ar: "نسختنا الحلال تكرّم جذور الطبق بطهو بطيء في قدر فخار وتقدَّم مع الأرز وفاروفا الموز والكرنب."
    },
    tags: ["halal","beef","gluten"],
    nutrition: { kcal: 900, carbs: 60, protein: 48 }
  },
  {
    id: "picanha",
    img: "/images/picanha-grelhada.jpg",
    cat: "chef",
    name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
    short: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta-do-reino.",
      en: "With mushroom risotto, green polenta and black-pepper sauce.",
      ar: "مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    },
    full: {
      pt: "Corte-símbolo do churrasco brasileiro, consagrado no século XX. Selada na brasa, suculenta e macia.",
      en: "An icon of Brazilian barbecue, perfected in the 20th century. Flame-kissed, juicy and tender.",
      ar: "أشهر قطع الشواء البرازيلي؛ محمّرة على الفحم بطراوة وعصارة."
    },
    tags: ["halal","beef","dairy","gluten"],
    nutrition: { kcal: 780, carbs: 35, protein: 55 }
  },
  {
    id: "moqueca",
    img: "/images/moqueca-baiana.jpg",
    cat: "mains",
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موكيكا بايانا" },
    short: {
      pt: "Peixe no leite de coco, urucum/dendê e coentro.",
      en: "Fish in coconut milk, annatto/dendê and cilantro.",
      ar: "سمك في حليب جوز الهند مع دندرِه والأناتو والكزبرة."
    },
    full: {
      pt: "Herança afro-brasileira cozida em panela de barro: caldo dourado de dendê e leite de coco, perfume do litoral.",
      en: "Afro-Brazilian heritage in a clay pot: golden dendê and coconut broth with the perfume of the coast.",
      ar: "تراث أفرو-برازيلي في قدر فخار: مرق ذهبي من الدندرِه وحليب جوز الهند بنكهة الساحل."
    },
    tags: ["halal","sea","gluten","dairy"],
    nutrition: { kcal: 640, carbs: 22, protein: 42 }
  },
  {
    id: "pamonha",
    img: "/images/pamonha.jpg",
    cat: "seasonal",
    name: { pt: "Pamonha (Sazonal)", en: "Pamonha (Seasonal)", ar: "بامونيا (موسمي)" },
    short: {
      pt: "Clássico de milho verde — doce ou salgado.",
      en: "Green-corn classic — sweet or savory.",
      ar: "ذرة خضراء كلاسيكية — حلوة أو مالحة."
    },
    full: {
      pt: "Do roçado ao fogão: milho ralado, cozido na própria palha. Memória afetiva do interior do Brasil.",
      en: "From field to fire: grated corn cooked in its own husk — countryside comfort.",
      ar: "من الحقل إلى النار: ذرة مبشورة تُطهى في قشرتها — دفء الريف."
    },
    tags: ["veg","gluten","dairy"],
    nutrition: { kcal: 420, carbs: 68, protein: 9 }
  },
  {
    id: "cerrado-sun",
    img: "/images/sol-do-cerrado.jpg",
    cat: "beverages",
    name: { pt: "Sol do Cerrado", en: "Cerrado Sun", ar: "شمس السِّيرادو" },
    short: {
      pt: "Manga, maracujá, hortelã e cítricos.",
      en: "Mango, passion fruit, mint and citrus.",
      ar: "مانجو، باشن فروت، نعناع وحمضيات."
    },
    full: {
      pt: "Sem álcool. Refresco brasileiro luminoso, perfeito para acompanhar nossos pratos.",
      en: "Non-alcoholic. Bright Brazilian refresher — perfect with our food.",
      ar: "بدون كحول. منعش برازيلي مشرق، مثالي مع الأطباق."
    },
    tags: ["veg"],
    nutrition: { kcal: 160, carbs: 38, protein: 1 }
  }
];

export default MENU;