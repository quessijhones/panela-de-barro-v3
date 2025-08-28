// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";

/* =========================================================
   Idiomas (PT padrão) + rótulos de navegação e UI
   ========================================================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

const dict = {
  pt: {
    brand: "Panela de Barro",
    nav: {
      home: "Início",
      clay: "Panela de Barro",
      woodfire: "Fogão a Lenha",
      menu: "Menu",
      gallery: "Galeria",
      location: "Localização",
      support: "Suporte",
    },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle:
        "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      soon: "Inauguração em Novembro — reservas online em breve.",
    },
    sections: {
      menuHighlights: "Destaques do Menu",
      back: "Voltar ao início",
    },
    location: { title: "Localização", addr: "Baraha Town — Doha, Qatar", map: "Ver no mapa" },
    support: {
      title: "Suporte",
      items: ["Pedidos e reservas em breve", "Eventos e encomendas", "Parcerias"],
      contactTitle: "Contato",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
  },
  en: {
    brand: "Panela de Barro",
    nav: {
      home: "Home",
      clay: "Panela de Barro",
      woodfire: "Wood-Fired Stove",
      menu: "Menu",
      gallery: "Gallery",
      location: "Location",
      support: "Support",
    },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle:
        "Family-run restaurant in Qatar. 20+ years of hospitality, wood fire and Brazilian roots.",
      cta: "View Menu",
      soon: "Opening in November — online reservations soon.",
    },
    sections: {
      menuHighlights: "Menu Highlights",
      back: "Back to start",
    },
    location: { title: "Location", addr: "Baraha Town — Doha, Qatar", map: "Open map" },
    support: {
      title: "Support",
      items: ["Orders & reservations soon", "Events & catering", "Partnerships"],
      contactTitle: "Contact",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
  },
  ar: {
    brand: "بانِيلا دي بارّو",
    nav: {
      home: "الرئيسية",
      clay: "بانيلا دي بارّو",
      woodfire: "موقد الحطب",
      menu: "القائمة",
      gallery: "المعرض",
      location: "الموقع",
      support: "الدعم",
    },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle:
        "مطعم عائلي في قطر — أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
      cta: "عرض القائمة",
      soon: "الافتتاح في نوفمبر — الحجوزات قريبًا.",
    },
    sections: {
      menuHighlights: "مختارات القائمة",
      back: "العودة للبداية",
    },
    location: { title: "الموقع", addr: "باراها تاون — الدوحة، قطر", map: "افتح الخريطة" },
    support: {
      title: "الدعم",
      items: ["الطلبات والحجوزات قريبًا", "الفعاليات والولائم", "شراكات"],
      contactTitle: "التواصل",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
  },
};

const t = (lang, key, fallback = "") => {
  const value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* =========================================================
   TEXTOS COMPLETOS (Fogão a Lenha + Panela de Barro)
   ========================================================= */

// ---------- FOGÃO A LENHA ----------
const WOOD_TEXT = {
  pt: `**Título: O Fogão a Lenha: A Alma do Brasil em Chamas e Argila**

A história do fogão a lenha no Brasil é a própria história da formação do povo brasileiro. Muito antes de ser um ícone da gastronomia afetiva, ele foi uma ferramenta fundamental de sobrevivência e o epicentro da vida doméstica. Suas origens remontam aos colonizadores portugueses, que trouxeram a técnica da alvenaria e o hábito de cozinhar em lareiras fixas. No entanto, foi no solo brasileiro que esse instrumento se transformou, incorporando saberes indígenas e africanos, tornando-se único.

Os indígenas, com seu profundo conhecimento do fogo e das madeiras nativas, ensinaram quais eram as melhores lenhas para cada propósito. Os escravizados africanos, forçados a adaptar-se, foram os primeiros alquimistas desses fogões, transformando cortes de carne menos nobres e ingredientes negligenciados em pratos de uma riqueza cultural imensurável. A feijoada, hoje nosso prato nacional, nasceu nas senzalas, fervilhando pacientemente em grandes panelas de ferro sobre esses fogões.

Assim, o fogão a lenha se ergueu como o coração pulsante da casa brasileira. Era ao seu redor que as famílias se reuniam, as histórias eram contadas, o pão era amassado e o café, coado. Seu calor irregular não é uma falha, mas uma virtude. É essa imprevisibilidade que exige do cozinheiro paciência, sensibilidade e um conhecimento quase espiritual do fogo. O sabor "fumê" (o *smokey* natural) que impregna os alimentos não é um condimento que se adiciona; é a própria essência da memória, é o carvão e a madeira se transformando no sublime.

É essa alma ancestral, forjada a fogo e história, que nós do **Panela de Barro** transplantamos para o Qatar. Nosso fogão a lenha, visível em nossa cozinha aberta, não é uma peça de museu; é o artista principal da nossa cozinha. Cada prato que sai dele é uma carta de amor à tradição brasileira.

*   **Nossa Feijoada de Costela Bovina:** Resgatamos a origem do prato com um toque de sofisticação do sertão. A costela bovina é assada lentamente pela brasa da lenha, até desfiar-se ao toque, conferindo ao caldo do feijão preto uma profundidade e uma riqueza incomparáveis. Cada colher é um mergulho na história do Brasil, um sabor robusto e verdadeiro.

*   **Nossa Vaca Atolada:** Este clássico caipira, que narra poeticamente a vaca "atolada" na mandioca, ganha vida em nosso fogão. A mandioca cozinha na brasa branda, absorvendo todo o sabor da carne bovina macia, criando uma harmonia perfeita entre o doce do legume e o savor da carne. É um prato humilde em sua origem, mas de uma complexidade de sabores que só o cozimento lento e fumegante pode proporcionar.

*   **Nossa Farofa de Banana da Terra:** A farofa, a companheira indispensável, é elevada a outro patamar. A banana da terra é delicadamente fatiada e dourada, depois misturada à farinha de mandioca torrada no calor do nosso fogão. O resultado é um contraste celestial de texturas: a crocância da farofa e a maciez adocicada da banana, tudo com o aroma inconfundível de fogo de lenha.

No **Panela de Barro**, nossa cozinha aberta convida você a testemunhar a magia desse ritual secular. Deixe que o aroma inebriante de lenha queimada e comida caseira transporte os seus sentidos para o interior do Brasil. Aqui, você não fará apenas uma refeição; você vivenciará a autenticidade de uma tradição celebrada com os sabores mais puros da nossa terra.

*Venha. O fogo está aceso.*`,

  en: `**Title: The Wood-Fired Stove: The Soul of Brazil in Flames and Clay**

The history of the wood-fired stove in Brazil is the very history of the formation of the Brazilian people. Long before it became an icon of affective gastronomy, it was a fundamental tool for survival and the epicenter of domestic life. Its origins trace back to the Portuguese colonizers, who brought masonry techniques and the habit of cooking in fixed hearths. However, it was on Brazilian soil that this instrument transformed, incorporating Indigenous and African knowledge, becoming unique.

The Indigenous people, with their deep understanding of fire and native woods, taught which were the best logs for each purpose. Enslaved Africans, forced to adapt, were the first alchemists of these stoves, transforming lesser cuts of meat and neglected ingredients into dishes of immeasurable cultural richness. Feijoada, now our national dish, was born in the senzalas (slave quarters), patiently simmering in large iron pots over these stoves.

Thus, the wood-fired stove stood as the beating heart of the Brazilian home. It was around it that families gathered, stories were told, bread was kneaded, and coffee was brewed. Its irregular heat is not a flaw but a virtue. It is this unpredictability that demands from the cook patience, sensitivity, and an almost spiritual knowledge of fire. The natural "fumê" (the smoky flavor) that imbues the food is not an added seasoning; it is the very essence of memory — it is the charcoal and wood transforming into the sublime.

It is this ancestral soul, forged by fire and history, that we at **Panela de Barro** have transplanted to Qatar. Our wood-fired stove, visible in our open kitchen, is not a museum piece; it is the lead artist in our kitchen. Every dish that comes from it is a love letter to Brazilian tradition.

*   **Our Beef Rib Feijoada:** We rescue the origin of the dish with a touch of sertão sophistication. The beef ribs are slow-roasted by the wood embers until they fall apart at the touch, giving the black bean broth an unmatched depth and richness. Every spoonful is a dive into Brazil's history, a robust and true flavor.

*   **Our Vaca Atolada ("Cow Stuck in the Mud"):** This rustic classic, which poetically tells of a cow "stuck" in manioc, comes to life on our stove. The manioc cooks over gentle embers, absorbing all the flavor of the tender beef, creating a perfect harmony between the vegetable's sweetness and the meat's savor. It is a humble dish in origin but with a complexity of flavors that only slow, smoky cooking can provide.

*   **Our Farofa with Plantain:** Farofa, the indispensable companion, is elevated to another level. The plantain is delicately sliced and golden-fried, then mixed with manioc flour toasted in the heat of our stove. The result is a heavenly contrast of textures: the crunchiness of the farofa and the sweet softness of the plantain, all with the unmistakable aroma of wood fire.

At **Panela de Barro**, our open kitchen invites you to witness the magic of this centuries-old ritual. Let the intoxicating aroma of burning wood and home-cooked food transport your senses to the heart of rural Brazil. Here, you will not just have a meal; you will experience the authenticity of a tradition celebrated with the purest flavors of our land.

*Come. The fire is lit.*`,

  ar: `**موقد الحطب: روح البرازيل في ألسنة اللهب والطين**

تاريخ موقد الحطب في البرازيل هو نفسه تاريخ تكوين الشعب البرازيلي. قبل أن يصبح أيقونة للطهي العاطفي، كان أداة أساسية للبقاء ومحور الحياة المنزلية. تعود أصوله إلى المستعمرين البرتغاليين الذين جلبوا تقنيات البناء وعادة الطهي في مواقد ثابتة. لكنها في التربة البرازيلية حيث تحولت هذه الأداة، متضمنةً معرفة السكان الأصليين والأفارقة، لتصبح فريدة من نوعها.

علم السكان الأصليون، بمعرفتهم العميقة بالنار وأخشاب الغابات الأصلية، أي الحطب هو الأفضل لكل غرض. الأفارقة المستعبدون، المجبرون على التكيف، كانوا الخيميائيين الأوائل لهذه المواقد، محولين قطع اللحوم الأقل جودة والمكونات المهملة إلى أطباق ذات ثراء ثقافي لا يقاس. طبق الفيجوادا، الذي أصبح الآن الطبق الوطني، وُلد في السينزالات (أماكن عيش العبيد)، حيث كان يغلي بصبر في أواني حديدية كبيرة فوق هذه المواقد.

هكذا، ارتفع موقد الحطب كقلب نابض للبيت البرازيلي. حوله تجمعت العائلات، وحُكيت القصص، وُعُجن الخبز، وصُفي القهوة. حرارته غير المنتظمة ليست عيباً بل فضيلة. هذا التقلب هو ما يتطلب من الطاهي الصبر والحساسية ومعرفة روحية تقريباً بالنار. نكهة "الدخان" الطبيعية التي تتشربها الطعام ليست بهاراً يضاف؛ بل هي جوهر الذاكرة本身، هي الفحم والخشب يتحولان إلى السامي.

هذه الروح الأصيلة، المُشكلة بالنار والتاريخ، هي ما نقلناه في **بانيلا دي بارّو** إلى قطر. موقد الحطب لدينا، المرئي في مطبخنا المفتوح، ليس قطعة متحف؛ هو الفنان الرئيسي في مطبخنا. كل طبق يخرج منه هو رسالة حب إلى التقاليد البرازيلية.

*   **فيجوادا بأضلاع البقر:** نستعيد أصل الطبق ولكن بلمسة من تطور الـ"سيرتاو" (المناطق الداخلية). أضلاع البقر تُشوى ببطء على جمر الحطب حتى تتفكك بمجرد اللمس، معطية مرق الفاصوليا السوداء عمقاً وثراءً لا مثيل لهما. كل ملعقة هي غوص في تاريخ البرازيل، نكهة قوية وصادقة.
*   **فاكا أتولادا ("البقرة العالقة في الوحل"):** هذا الطبق التقليدي الريفي، الذي يحكي بشاعرية عن بقرة "عالقة" في المنيهوت (الكسافا)، يولد من جديد على موقدنا. المنيهوت يطهى على الجمر اللطيف، ممتصاً كل نكهة اللحم البقري الطري، خالقاً تناغماً مثالياً بين حلاوة الخضروات وطعم اللحم. هو طبق متواضع في أصله، لكنه ذو تعقيد في النكهات لا يمكن أن يتحقق إلا بالطهي البطيء المدخن.
*   **فاروفا بموز الجنة:** الفاروفا، الرفيق indispensável، تُرفع إلى مستوى آخر. موز الجنة يُقطع شرائح رقيقة ويُقلى إلى الذهبية، ثم يُمزج مع دقيق المنيهوت المحمص على حرارة موقدنا. النتيجة تباين سماوي في القوام: قرمشة الفاروفا وليونة حلاوة الموز، كل ذلك مع رائحة نار الحطب التي لا تخطئها الأذن.

في **بانيلا دي بارّو**، مطبخنا المفتوح يدعوكم لمشاهدة سحر هذا الطقوس القديمة. دع الرائحة المسكرة للخشب المحترق والطعام المنزلي تنقل حواسكم إلى عمق البرازيل الريفي. هنا، لن تتناولوا فقط وجبة؛ بل ستعيشون أصالة ت التقليد تُحتفل بها بأصفى نكهات أرضنا.

*تعالوا. النار مشتعلة.*`,
};

// ---------- PANELA DE BARRO ----------
const CLAY_TEXT = {
  pt: `**Título: Panela de Barro: O Útero da Culinária Brasileira**

Mais do que um simples recipiente, a panela de barro é um símbolo arquetípico da alimentação brasileira. Sua história se confunde com a própria formação do nosso povo, sendo uma das mais antigas e sagradas tecnologias culinárias das Américas.

Antes da chegada dos europeus, os povos indígenas já dominavam a arte da cerâmica, moldando com as mãos e cozendo no fogo panelas, potes e alguidares que eram o centro de sua vida comunitária. Eram nestas vasilhas de barro que se cozinhava o peixe moqueado, se preparava o beiju e se fermentava a caiçuma. Cada panela carregava a identidade e o saber de seu povo.

Com a colonização, a panela de barro foi adotada e adaptada. Nas senzalas, tornou-se instrumento de resistência e criatividade. Foi no seu bojo quente e generoso que nasceram alguns dos pilares de nossa gastronomia: o feijão guisado, o angu, os ensopados. A ela se atribui a qualidade única de cozinhar os alimentos de forma lenta e uniforme, conservando seus sucos e nutrientes como nenhuma outra panela de metal é capaz. O barro respira, interage com o fogo e com a comida, cedendo minerais e conferindo um sabor terroso e singular, conhecido carinhosamente como "sabor de roça".

A panela de barro é, portanto, o útero onde se gestaram os sabores mais autênticos do Brasil. Ela representa a simplicidade, a tradição, a conexão com a terra e a generosidade de compartilhar o alimento.

Foi inspirado por toda essa carga cultural e afetiva que escolhemos o nome **Panela de Barro** para o nosso restaurante no Qatar. Não é apenas uma referência ao utensílio, mas uma declaração de intenções.

Queremos que cada cliente sinta que está sendo servido diretamente daquelas panelas quentes que ecoam séculos de história. Nossos pratos, preparados com a mesma dedicação e amor que exigiam as cozinheiras de outrora, buscam capturar essa alma. O barro é nossa fonte de inspiração: rústico, autêntico, acolhedor e cheio de histórias para contar.

No **Panela de Barro**, servimos mais que uma refeição; servimos uma herança. Convidamos você a experimentar o sabor aconchegante e verdadeiro que só uma boa comida, feita com alma e história, pode oferecer.

*Do nosso barro para o seu paladar.*`,

  en: `**Title: Panela de Barro: The Womb of Brazilian Cuisine**

More than a simple pot, the "panela de barro" (clay pot) is an archetypal symbol of Brazilian food culture. Its history is intertwined with the very formation of our people, being one of the oldest and most sacred culinary technologies in the Americas.

Long before the arrival of Europeans, Indigenous peoples had already mastered the art of pottery, hand-shaping and firing clay pots, bowls, and platters that were the center of their community life. It was in these clay vessels that fish was moqueado (smoked-cooked), beiju (cassava flatbread) was prepared, and caiçuma (a fermented drink) was made. Each pot carried the identity and knowledge of its people.

With colonization, the clay pot was adopted and adapted. In the senzalas (slave quarters), it became an instrument of resistance and creativity. It was in its warm and generous belly that some of the pillars of our gastronomy were born: stewed beans, angu (a polenta-like dish), and hearty stews. It is credited with the unique quality of cooking food slowly and evenly, preserving its juices and nutrients like no metal pot can. The clay breathes, interacts with the fire and the food, releasing minerals and imparting an earthy, unique flavor, affectionately known as "sabor de roça" (countryside flavor).

The clay pot is, therefore, the womb where the most authentic flavors of Brazil were gestated. It represents simplicity, tradition, connection to the land, and the generosity of sharing food.

Inspired by all this cultural and emotional significance, we chose the name **Panela de Barro** for our restaurant in Qatar. It is not just a reference to the utensil, but a statement of intent.

We want every customer to feel like they are being served directly from those warm pots that echo centuries of history. Our dishes, prepared with the same dedication and love required of cooks of yesteryear, seek to capture this soul. The clay is our source of inspiration: rustic, authentic, welcoming, and full of stories to tell.

At **Panela de Barro**, we serve more than a meal; we serve a heritage. We invite you to experience the comforting and genuine flavor that only good food, made with soul and history, can provide.

*From our clay to your palate.*`,

  ar: `**بانيلا دي بارّو: رحم المطبخ البرازيلي**

أكثر من مجرد وعاء، "بانيلا دي بارّو" (القدر الفخاري) هو رمز أساسي في ثقافة الطهي البرازيلية. تاريخها متشابك مع نشأة شعبنا نفسه، حيث تُعد واحدة من أقدم تقنيات الطهي قدسية في الأمريكتين.

قبل وصول الأوروبيين بوقت طويل، كان السكان الأصليون قد أتقنوا بالفعل فن صناعة الفخار، يشكلون بأيديهم الأواني الفخارية والطاسات والأطباق التي كانت مركز حياتهم المجتمعية. في هذه الأواني الفخارية كان يُطهى السمك "موكيادو" (مدخن-مطبوخ)، ويُحضّر "بيجو" (خبز الكسافا المسطح)، ويُصنع "كايصوما" (مشروب مخمّر). كل قدر حمل هوية ومعرفة شعبه.

مع الاستعمار، تم تبنّي القدر الفخاري والتكيّف معه. في السينزالات (أماكن عيش العبيد)، أصبح أداة للمقاومة والإبداع. في أحشائه الدافئة وُلدت بعض أعمدة مطبخنا: الفاصوليا المطهية، و"أنغو" (طبق يشبه البولنتا)، واليخنات الغنية. ويُنسب إليه طهي الطعام ببطء وبشكل متساوٍ، محافظًا على العصارة والعناصر الغذائية على نحو لا تقدر عليه الأواني المعدنية. الطين يتنفس، ويتفاعل مع النار والطعام، مطلقًا معادن ومضفيًا نكهة ترابية فريدة تُعرف بمحبة باسم "نكهة الريف".

لذلك فالقدر الفخاري هو الرحم الذي تخلّقت فيه أشهى نكهات البرازيل. إنّه يُجسّد البساطة والتقاليد والاتصال بالأرض وكرم مشاركة الطعام.

مستلهمين هذه الدلالات الثقافية والعاطفية، اخترنا اسم **بانيلا دي بارّو** لمطعمنا في قطر. ليس مجرّد إشارة إلى الأداة، بل إعلان عن نوايانا.

نريد لكلّ زبون أن يشعر كأن الطعام يُقدَّم له مباشرة من تلك القدور الدافئة التي تصدح بقرون من التاريخ. أطباقنا، المصنوعة بنفس الحبّ والإخلاص، تحاول التقاط هذه الروح. الطين مصدر إلهامنا: ريفيّ، أصيل، مرحّب، ومفعم بالقصص.

في **بانيلا دي بارّو**، نحن لا نقدّم وجبة فحسب؛ بل إرثًا حيًّا. ندعوكم لتذوّق النكهة الدافئة الصادقة التي لا يمنحها إلا طعام مصنوع بروح وتاريخ.

*من طيننا إلى paladarكم.*`,
};

/* =========================================================
   HOME (hero + destaques simples)
   ========================================================= */
const heroImage = "/images/picanha-grelhada.jpg";
const highlights = [
  { label: "Fraldinha Inteira", src: "/images/fraldinha-inteira.jpg" },
  { label: "Galinhada Caipira", src: "/images/galinhada-caipira.jpg" },
  { label: "Moqueca Baiana", src: "/images/moqueca-baiana.jpg" },
  { label: "Pão de Queijo da Casa", src: "/images/pao-de-queijo.jpg" },
];

/* =========================================================
   Router por hash
   ========================================================= */
const useHashRoute = () => {
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.hash.replace("#/", "") || "home" : "home"
  );
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return [route, (r) => (window.location.hash = `#/${r}`)];
};

/* =========================================================
   Utilitários de UI
   ========================================================= */
const SectionTitle = ({ children }) => <h2 className="title">{children}</h2>;
const Card = ({ children, style }) => <div className="card" style={style}>{children}</div>;

const Img = ({ src, alt, ratio = "16/9", round = true }) => {
  const [err, setErr] = useState(false);
  const path = !err ? src : "/images/placeholder.jpg";
  return (
    <div className={`imgwrap ${round ? "round" : ""}`} style={{ aspectRatio: ratio }}>
      <img
        src={path}
        alt={alt}
        loading="lazy"
        onError={() => setErr(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

const Carousel = ({ items, renderItem, auto = 5000 }) => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  useEffect(() => { if (!auto) return; const id = setInterval(next, auto); return () => clearInterval(id); }, [auto, items.length]);
  return (
    <div className="carousel">
      <button className="cbtn left" onClick={prev} aria-label="prev">‹</button>
      <div className="cinner">{renderItem(items[i], i)}</div>
      <button className="cbtn right" onClick={next} aria-label="next">›</button>
    </div>
  );
};

/* =========================================================
   Drawer (mobile)
   ========================================================= */
const Drawer = ({ open, onClose, lang, setLang }) => {
  const go = (to) => { window.location.hash = `#/${to}`; onClose(); };
  return (
    <div className={`drawerWrap ${open ? "open" : ""}`} onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawerhead">
          <div className="dbrand">
            <img src="/logo.png" alt="logo" />
            <span>Panela de Barro</span>
          </div>
          <button className="dclose" onClick={onClose} aria-label="close">×</button>
        </div>

        <nav className="dlinks">
          <button onClick={() => go("home")}>{t(lang,"nav.home","Início")}</button>
          <button onClick={() => go("clay")}>{t(lang,"nav.clay","Panela de Barro")}</button>
          <button onClick={() => go("wood")}>{t(lang,"nav.woodfire","Fogão a Lenha")}</button>
          <button onClick={() => go("menu")}>{t(lang,"nav.menu","Menu")}</button>
          <button onClick={() => go("gallery")}>{t(lang,"nav.gallery","Galeria")}</button>
          <button onClick={() => go("location")}>{t(lang,"nav.location","Localização")}</button>
          <button onClick={() => go("support")}>{t(lang,"nav.support","Suporte")}</button>
        </nav>

        <div className="dsection">
          <div className="dtitle">Idiomas / Languages / اللغات</div>
          <div className="dlangs">
            {LANGS.map((l) => (
              <button key={l} className={`chip ${l===lang?"active":""}`} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

/* =========================================================
   Páginas
   ========================================================= */
const Home = ({ lang }) => (
  <>
    <div className="hero">
      <Img src={heroImage} alt="Hero" ratio="21/9" />
      <div className="herooverlay" />
      <div className="heroinfo">
        <h1>{t(lang,"hero.title")}</h1>
        <p className="sub">{t(lang,"hero.subtitle")}</p>
        <p className="soon">{t(lang,"hero.soon")}</p>
        <a className="btn" href="#/menu">{t(lang,"hero.cta")}</a>
      </div>
    </div>

    <SectionTitle>{t(lang,"sections.menuHighlights")}</SectionTitle>
    <Carousel
      items={highlights}
      renderItem={(item) => (
        <Card>
          <Img src={item.src} alt={item.label} ratio="4/3" />
          <div className="caption">{item.label}</div>
        </Card>
      )}
      auto={4200}
    />
  </>
);

const Article = ({ lang, title, blocks }) => {
  // blocks: [{type:'p'|'h'|'img'|'hr', content:'...', alt:'', ratio:'', caption:''}, ...]
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <article className="article">
        {blocks.map((b, idx) => {
          if (b.type === "h") return <h3 key={idx} className="subtitle">{b.content}</h3>;
          if (b.type === "p") return <p key={idx} className="p">{b.content}</p>;
          if (b.type === "img")
            return (
              <figure key={idx} className="figure">
                <Img src={b.src} alt={b.alt || ""} ratio={b.ratio || "16/9"} />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          if (b.type === "hr") return <hr key={idx} className="sep" />;
          return null;
        })}
      </article>
      <a className="back" href="#/home">{t(lang,"sections.back")}</a>
    </>
  );
};

const ClayFull = ({ lang }) => {
  const text = CLAY_TEXT[lang];
  const blocks = [
    { type: "p", content: text },
    { type: "img", src: "/images/panela-1.jpg", alt: "Panela artesanal", caption: "Panelas artesanais (representação)", ratio: "4/3" },
  ];
  return <Article lang={lang} title={t(lang,"nav.clay")} blocks={blocks} />;
};

const WoodFull = ({ lang }) => {
  const text = WOOD_TEXT[lang];
  const blocks = [
    { type: "p", content: text },
    { type: "img", src: "/images/fogao-lenha.jpg", alt: "Fogão a lenha", caption: "Nosso fogão a lenha (ilustração)", ratio: "4/3" },
    { type: "hr" },
    { type: "h", content: lang==="ar" ? "أطباق من الموقد" : lang==="en" ? "Plates from the Stove" : "Pratos do Fogão" },
    { type: "img", src: "/images/feijoada-costela.jpg", alt: "Feijoada de Costela", caption: "Feijoada de Costela", ratio: "16/9" },
    { type: "img", src: "/images/vaca-atolada.jpg", alt: "Vaca Atolada", caption: "Vaca Atolada", ratio: "16/9" },
    { type: "img", src: "/images/farofa-banana.jpg", alt: "Farofa de Banana da Terra", caption: "Farofa de Banana da Terra", ratio: "16/9" },
  ];
  return <Article lang={lang} title={t(lang,"nav.woodfire")} blocks={blocks} />;
};

const Gallery = ({ lang }) => {
  const photos = highlights.map(i => ({ src: i.src, alt: i.label }));
  return (
    <>
      <SectionTitle>{t(lang,"nav.gallery")}</SectionTitle>
      <div className="gallery">
        {photos.map((p, i) => (
          <Card key={i}><Img src={p.src} alt={p.alt} ratio="1/1" /></Card>
        ))}
      </div>
      <a className="back" href="#/home">{t(lang,"sections.back")}</a>
    </>
  );
};

const Location = ({ lang }) => {
  const d = dict[lang].location;
  const mapsQ = encodeURIComponent(d.addr);
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <Card>
        <div className="mapwrap">
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="p">
          {d.addr} —{" "}
          <a className="link" href={`https://maps.google.com/?q=${mapsQ}`} target="_blank" rel="noreferrer">
            {d.map}
          </a>
        </p>
      </Card>
      <a className="back" href="#/home">{t(lang,"sections.back")}</a>
    </>
  );
};

const Support = ({ lang }) => {
  const d = dict[lang].support;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <ul className="list">{d.items.map((it, i) => (<li key={i}>{it}</li>))}</ul>
      <h3 className="subtitle">{d.contactTitle}</h3>
      <p className="p">WhatsApp: <a className="link" href="https://wa.me/97430475279">+{d.phone}</a></p>
      <p className="p">Email: <a className="link" href={`mailto:${d.email}`}>{d.email}</a></p>
      <a className="back" href="#/home">{t(lang,"sections.back")}</a>
    </>
  );
};

/* =========================================================
   App
   ========================================================= */
const App = () => {
  const [route] = useHashRoute();
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });
  const [splash, setSplash] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => { const t = setTimeout(() => setSplash(false), 900); return () => clearTimeout(t); }, []);
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  useEffect(() => { setOpenDrawer(false); }, [route]);

  // mede a altura real do header e aplica em --navh
  useEffect(() => {
    const setNavHeight = () => {
      const el = document.querySelector('.nav');
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--navh', `${h}px`);
    };
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, [lang]);

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Styles />
      {splash && <div className="splash"><img src="/logo.png" alt="Panela de Barro" /></div>}

      <header className="nav">
        <button className="hamb" onClick={() => setOpenDrawer(true)} aria-label="menu">☰</button>
        <a className="brand" href="#/home">
          <img src="/logo.png" alt="logo" />
          <span>{t(lang,"brand")}</span>
        </a>
        <nav className="links">
          <a href="#/home">{t(lang,"nav.home")}</a>
          <a href="#/clay">{t(lang,"nav.clay")}</a>
          <a href="#/wood">{t(lang,"nav.woodfire")}</a>
          <a href="#/gallery">{t(lang,"nav.gallery")}</a>
          <a href="#/location">{t(lang,"nav.location")}</a>
          <a href="#/support">{t(lang,"nav.support")}</a>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`chip ${l===lang?"active":""}`}>{l.toUpperCase()}</button>
          ))}
        </div>
      </header>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} lang={lang} setLang={setLang} />

      <main className="container">
        {route === "home" && <Home lang={lang} />}
        {route === "clay" && <ClayFull lang={lang} />}
        {route === "wood" && <WoodFull lang={lang} />}
        {route === "gallery" && <Gallery lang={lang} />}
        {route === "location" && <Location lang={lang} />}
        {route === "support" && <Support lang={lang} />}
      </main>

      <footer className="foot">© 2025 Panela de Barro</footer>
    </div>
  );
};

/* =========================================================
   CSS (desktop e mobile caprichados)
   ========================================================= */
const Styles = () => (
  <style>{`
  :root{
    --bg:#f0e2cf; --paper:#f6eadb; --ink:#2d241c; --muted:#7b6a5c;
    --pill:#b8644e; --pill-ghost:#e7d6c5; --shadow: 0 8px 24px rgba(0,0,0,.08);
    --radius:18px; --navh:64px; --safeTop: env(safe-area-inset-top, 0px);
  }
  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Noto Sans",sans-serif}
  a{color:var(--pill)}
  .app{min-height:100%}

  /* Nav */
  .nav{
    position:sticky; top:0; z-index:30;
    background:rgba(246,234,219,.88);
    backdrop-filter:saturate(140%) blur(8px);
    display:flex; gap:16px; align-items:center; justify-content:space-between;
    padding: calc(8px + var(--safeTop)) 14px 8px 14px;
    border-bottom:1px solid #e5d5c2; min-height:64px;
  }
  .hamb{display:none;border:0;background:var(--pill-ghost);width:40px;height:36px;border-radius:10px;font-size:20px;cursor:pointer}
  .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-weight:800}
  .brand img{width:28px;height:28px}
  .brand span{font-size:20px;letter-spacing:.2px;white-space:nowrap}
  .links a{margin:0 10px;text-decoration:none;color:var(--ink)}
  .langs .chip{margin-left:6px}

  /* Desktop container mais estreito (melhor leitura) */
  .container{max-width:980px;margin:0 auto;padding:18px}

  /* Títulos */
  .title{font-size:32px;margin:26px 6px}
  .subtitle{margin:10px 6px 12px 6px}

  /* Cards e imagens */
  .card{background:var(--paper);border-radius:var(--radius);box-shadow:var(--shadow);padding:10px}
  .imgwrap{width:100%;overflow:hidden}
  .imgwrap.round{border-radius:var(--radius)}
  .imgwrap img{display:block;width:100%;height:100%;object-fit:cover}

  /* Texto */
  .caption{padding:8px 10px 10px 10px;color:var(--ink);font-weight:600}
  .p{margin:8px 6px 12px 6px;line-height:1.7;color:var(--ink);white-space:pre-wrap}
  .list{margin:0 6px 18px 28px}
  .link{color:var(--pill);text-decoration:underline}

  /* Grid menor no desktop para fotos ficarem elegantes */
  .gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}
  @media (min-width:1024px){
    .grid{grid-template-columns:repeat(auto-fill,minmax(240px,1fr));}
  }

  /* HERO com overlay forte p/ legibilidade */
  .hero{position:relative}
  .hero .imgwrap{border-radius:var(--radius)}
  .herooverlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.25),rgba(0,0,0,.55));border-radius:var(--radius)}
  .heroinfo{position:absolute;inset:auto 18px 18px 18px;color:#fff}
  .heroinfo h1{font-size:clamp(22px,3.6vw,40px);margin:0 0 8px 0}
  .heroinfo .sub{margin:0 0 6px 0;max-width:820px}
  .heroinfo .soon{opacity:.95;margin:0 0 10px 0}
  .btn{display:inline-block;background:var(--pill);color:#fff;text-decoration:none;padding:12px 18px;border-radius:14px;font-weight:700}

  /* HERO mobile */
  @media (max-width: 520px) {
    .hero .imgwrap { height: 60vh !important; aspect-ratio: auto !important; }
    .herooverlay { background: linear-gradient(180deg, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.7) 100%); }
    .heroinfo { left: 16px; right: 16px; bottom: 18px; top: auto; max-width: 100%; }
    .heroinfo h1 { font-size: clamp(20px, 6vw, 26px); line-height: 1.2; }
    .heroinfo .sub, .heroinfo .soon { font-size: clamp(12px, 3.5vw, 14px); line-height: 1.35; }
  }

  /* Carousel */
  .carousel{position:relative;margin:12px 6px}
  .cinner{overflow:hidden}
  .cbtn{position:absolute;top:50%;transform:translateY(-50%);border:0;background:rgba(0,0,0,.35);color:#fff;width:40px;height:40px;border-radius:50%;cursor:pointer}
  .cbtn.left{left:8px}.cbtn.right{right:8px}

  /* Map */
  .mapwrap{position:relative;width:100%;aspect-ratio:16/9;border-radius:14px;overflow:hidden}
  .mapwrap iframe{position:absolute;inset:0;border:0;width:100%;height:100%}

  /* Article (páginas longas) */
  .article{background:var(--paper);border-radius:var(--radius);box-shadow:var(--shadow);padding:14px}
  .figure{margin:14px 6px}
  .figure figcaption{font-size:13px;color:var(--muted);margin-top:6px}
  .sep{border:0;border-top:1px solid #e6d7c8;margin:16px 0}

  .back{display:inline-block;margin:14px 6px 0;color:var(--pill);text-decoration:none;font-weight:700}
  .foot{padding:30px 18px;color:#7a6b5c;text-align:center}

  /* Splash (logo pequeno) */
  .splash{position:fixed;inset:0;background:var(--bg);display:flex;align-items:center;justify-content:center;z-index:100}
  .splash img{width:56px;height:56px;filter:drop-shadow(0 6px 18px rgba(0,0,0,.18))}

  /* Drawer */
  .drawerWrap{position:fixed;inset:0;background:rgba(0,0,0,.25);opacity:0;pointer-events:none;transition:.2s;z-index:60}
  .drawerWrap.open{opacity:1;pointer-events:auto}
  .drawer{position:absolute;top:0;bottom:0;left:0;width:84%;max-width:360px;background:var(--paper);box-shadow:var(--shadow);transform:translateX(-100%);transition:.22s;border-top-right-radius:16px;border-bottom-right-radius:16px;display:flex;flex-direction:column}
  .drawerWrap.open .drawer{transform:translateX(0)}
  .drawerhead{display:flex;align-items:center;justify-content:space-between;padding:14px;border-bottom:1px solid #e6d7c8}
  .dbrand{display:flex;align-items:center;gap:10px;font-weight:800}
  .dbrand img{width:28px;height:28px}
  .dclose{border:0;background:#eee;border-radius:10px;width:36px;height:32px;cursor:pointer}
  .dlinks{display:flex;flex-direction:column;padding:10px}
  .dlinks button{all:unset;padding:12px 10px;border-radius:10px;cursor:pointer}
  .dlinks button:hover{background:#efdfcf}
  .dsection{padding:10px}
  .dtitle{font-weight:800;margin:8px 0}
  .dlangs{display:flex;gap:8px;flex-wrap:wrap}

  /* Mobile header centralizado */
  @media (max-width:920px){
    .links{display:none !important;}
    .hamb{display:inline-block}
    .brand{flex:1;justify-content:center}
    .brand img{width:34px;height:34px}
    .brand span{font-size:clamp(18px,5.2vw,22px)}
    .langs{display:flex;flex-direction:column;gap:6px;align-items:flex-end;margin-left:6px}
    .langs .chip{padding:6px 10px;font-size:12px;margin:0}
  }
  `}</style>
);

/* =========================================================
   export
   ========================================================= */
export default App;