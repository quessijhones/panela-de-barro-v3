export const LOCALES = {
  pt: "PT",
  en: "EN",
  ar: "AR",
};

export const STRINGS = {
  pt: {
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", woodfire: "Fogão a Lenha", location: "Localização", support:"Suporte", back:"Voltar ao início" },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      soon: "Inauguração em Novembro — reservas online em breve.",
      cta: "Ver Menu"
    },
    home: { preview: "Menu (prévia)" },
    gallery: { title:"Galeria" },
    about: {
      title: "Panela de Barro: O Sabor que Veio da Terra",
      owner: "Proprietário: Quessi",
      headchef: "Head Chef: Alex",
      mother: "Mãe & Guardiã da Tradição: Cleusa",
    },
    woodfire: { title:"Fogão a Lenha — fogo, tempo e memória" },
    location: { title:"Localização", area:"Baraha Town, Doha, Qatar (Baraha Town)", mapSoon:"Mapa interativo" },
    support: { title:"Suporte ao Restaurante", text:"Gostou do projeto? Em breve abriremos opções de apoio e vouchers para os nossos primeiros clientes." }
  },

  en: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", woodfire:"Wood-Fire", location: "Location", support:"Support", back:"Back to Home" },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      soon: "Opening in November — online reservations soon.",
      cta: "View Menu"
    },
    home: { preview: "Menu (preview)" },
    gallery: { title:"Gallery" },
    about: {
      title: "Clay Pot: Flavor That Comes from the Earth",
      owner: "Owner: Quessi",
      headchef: "Head Chef: Alex",
      mother: "Mother & Tradition Keeper: Cleusa",
    },
    woodfire: { title:"Wood-Fire — flame, time and memory" },
    location: { title:"Location", area:"Baraha Town, Doha, Qatar (Baraha Town)", mapSoon:"Interactive map" },
    support: { title:"Support the Restaurant", text:"Love the project? We’ll soon open early-support options and gift vouchers for first guests." }
  },

  ar: {
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", woodfire:"الطهي بالحطب", location:"الموقع", support:"الدعم", back:"العودة للرئيسية" },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle: "مطعم عائلي في قطر – أكثر من 20 سنة من الضيافة والطهي على الحطب والجذور البرازيلية.",
      soon: "الافتتاح في نوفمبر — الحجوزات عبر الإنترنت قريبًا.",
      cta: "عرض القائمة"
    },
    home: { preview: "القائمة (معاينة)" },
    gallery: { title:"المعرض" },
    about: {
      title: "قدر الطين: نكهة جاءت من الأرض",
      owner: "المالك: كيسي",
      headchef: "كبير الطهاة: أليكس",
      mother: "الأم وحافظة التقاليد: كليوزا",
    },
    woodfire: { title:"الطهي بالحطب — لهب ووقت وذاكرة" },
    location: { title:"الموقع", area:"باراحة تاون، الدوحة، قطر", mapSoon:"خريطة تفاعلية" },
    support: { title:"دعم المطعم", text:"أعجبتك الفكرة؟ قريبًا سنفتح خيارات الدعم المبكر وبطاقات الهدايا." }
  }
};

// idioma da URL + estado
export function getLangFromURL() {
  const u = new URL(window.location.href);
  const p = (u.searchParams.get("lang") || "pt").toLowerCase();
  return LOCALES[p] ? p : "pt";
}