export const categories = [
  { id: "mains", label: { pt: "Pratos Principais", en: "Mains", ar: "الأطباق الرئيسية" } },
  { id: "sides", label: { pt: "Acompanhamentos", en: "Sides", ar: "الأطباق الجانبية" } },
  { id: "desserts", label: { pt: "Sobremesas", en: "Desserts", ar: "حلويات" } },
  { id: "drinks", label: { pt: "Bebidas", en: "Drinks", ar: "مشروبات" } },
];

export const dishes = [
  {
    id: "picanha",
    category: "mains",
    name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
    description: {
      pt: "Picanha grelhada com risoto de cogumelos e polenta.",
      en: "Grilled picanha with mushroom risotto and polenta.",
      ar: "بيكانيا مشوية مع ريزوتو الفطر وبولنتا."
    },
    price: 120,
    currency: "QAR",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "feijoada",
    category: "mains",
    name: { pt: "Feijoada de Costela", en: "Rib Feijoada", ar: "فيجوادا بالأضلاع" },
    description: {
      pt: "Feijoada tradicional com farofa de banana, arroz e laranja.",
      en: "Traditional feijoada with banana farofa, rice and orange.",
      ar: "فيجوادا تقليدية مع فاروفا الموز والأرز والبرتقال."
    },
    price: 95,
    currency: "QAR",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "moqueca",
    category: "mains",
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موكيكا باهيا" },
    description: {
      pt: "Peixe cozido com leite de coco e dendê.",
      en: "Fish stew with coconut milk and dendê oil.",
      ar: "سمك مطهو بحليب جوز الهند وزيت الدنديه."
    },
    price: 110,
    currency: "QAR",
    image: "https://images.unsplash.com/photo-1562158070-4b4a2f5a64fb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "brigadeiro",
    category: "desserts",
    name: { pt: "Brigadeiro Gourmet", en: "Gourmet Brigadeiro", ar: "بريغادييرو" },
    description: {
      pt: "Clássico brasileiro cremoso de chocolate.",
      en: "Brazilian creamy chocolate classic.",
      ar: "تحلية شوكولاتة برازيلية كريمية."
    },
    price: 25,
    currency: "QAR",
    image: "https://images.unsplash.com/photo-1611042553484-d61b7c30c5a1?q=80&w=1200&auto=format&fit=crop"
  }
];

