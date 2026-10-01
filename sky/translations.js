/**
 * Sky Tu Luz — Sistema Multilingüe de Internacionalización (i18n)
 * Idiomas soportados:
 *  - 'es': Español (Castellano - Predeterminado)
 *  - 'eu': Euskara (Euskera - Zumarraga / Gipuzkoa)
 *  - 'en': English (Inglés)
 */

const TRANSLATIONS = {
  es: {
    // Brand & General
    lang_name: 'Español',
    lang_code: 'ES',
    lang_label: 'Idioma',
    toast_lang_changed: 'Idioma cambiado a Español 🇪🇸',

    // Navigation & Island
    nav_home: 'Inicio',
    nav_portfolio: 'Portafolio',
    nav_collections: 'Colecciones',
    nav_instagram: 'Instagram',
    nav_about: 'Nosotros',
    nav_faq: 'Preguntas',
    nav_contact: 'Contacto',
    nav_location: 'Ubicación',
    nav_location_title: 'Ubicación y Taller en Zumarraga',
    nav_portfolio_title: 'Catálogo de Velas Artesanales',
    nav_instagram_title: 'Instagram 3D @skytuluz.tu',
    nav_search_title: 'Buscar aromas',
    nav_favs_title: 'Mis Velas Favoritas',
    nav_menu_title: 'Menú de Navegación',

    // Hero Section
    hero_title_sr: 'Sky Tu Luz · Velas Artesanales de Cera de Soja en Zumarraga',
    hero_explore: 'Explorar Portafolio',
    hero_favs: 'Mis Favoritas',
    hero_scroll: 'Ir al portafolio',

    // Search Modal
    search_subtitle: 'Explorar Portafolio',
    search_title: 'Buscar en Sky Tu Luz',
    search_placeholder: 'Escribe un aroma, ingrediente o colección...',
    search_popular_label: 'Búsquedas populares:',
    search_no_results: 'No encontramos velas con ese término. Prueba con «vainilla», «lavanda» o «soja».',

    // Favorites Drawer
    fav_drawer_title: 'Tus Velas Favoritas',
    fav_empty_title: 'Tu selección está vacía',
    fav_empty_desc: 'Explora nuestro portafolio de creaciones y pulsa el corazón en las piezas que iluminen tu espacio.',
    fav_btn_explore: 'Explorar Portafolio',
    fav_btn_whatsapp: 'Consultar Selección por WhatsApp',
    fav_btn_clear: 'Vaciar lista',
    fav_toast_added: '¡Añadida a tus favoritas! ❤️',
    fav_toast_removed: 'Eliminada de tus favoritas',
    fav_toast_cleared: 'Lista de favoritas vaciada',

    // Portfolio Section
    portfolio_subtitle: 'Portafolio de Autor',
    portfolio_title: 'Galería de Velas Artesanales',
    portfolio_desc: 'Cada creación es vertida a mano en pequeñas tiradas utilizando cera de soja vegetal pura, esencias botánicas de alta gama y mechas de algodón ecológico. Guarda tus favoritas para inspirar tu hogar.',
    filter_all: 'Todas',
    filter_aromatic: 'Aromáticas',
    filter_botanical: 'Botánicas',
    filter_sculptural: 'Esculturales',
    filter_custom: 'Personalizadas',
    card_view_details: 'Ver Ficha Artística',
    card_favorite: 'Favorita',
    badge_author: 'Pieza de Autor',
    badge_clean_aroma: 'Aroma Limpio',
    badge_limited: 'Edición Limitada',
    badge_custom: 'Encargo de Autor',
    burn_time_suffix: 'Combustión Lenta',
    burn_pure_suffix: 'Combustión Pura',

    // Experience / Collections Section
    exp_subtitle: 'Colecciones',
    exp_title: 'Encuentra Tu Aroma Ideal',
    exp_c1_title: 'Velas Aromáticas',
    exp_c1_desc: 'Aromas que transforman el ambiente de tu hogar con serenidad.',
    exp_c1_btn: 'Ver Colección',
    exp_c2_title: 'Piezas Personalizadas',
    exp_c2_desc: 'Detalles únicos y velas con mensajes personalizados para momentos especiales.',
    exp_c2_btn: 'Descubrir Más',
    exp_c3_title: 'Ediciones Botánicas',
    exp_c3_desc: 'Colecciones de autor producidas en tiradas pequeñas y exclusivas.',
    exp_c3_btn: 'Explorar',
    exp_btn: 'Ver Colección',

    // Philosophy & Craftsmanship
    phil_tag: 'Elaboración en Zumarraga',
    phil_title: 'Filosofía 100% Cera de Soja Botánica',
    phil_p1: 'En Sky Tu Luz creemos en la luz que cuida de ti. A diferencia de las velas convencionales de parafina derivada del petróleo, nuestras velas de cera de soja vegetal no emiten toxinas, hollín negro ni sustancias nocivas al arder.',
    phil_p2: 'Con un punto de fusión bajo, la cera se consume lentamente y a menor temperatura, garantizando una difusión pura, continua y envolvente de cada esencia botánica.',
    phil_stat1_label: 'Vegetal y Biodegradable',
    phil_stat2_label: 'Toxinas ni Parafinas',
    phil_stat3_label: 'Llama Limpia',

    // About Us & Philosophy
    about_subtitle: 'Hechas con alma',
    about_title: 'Artesanía, Amor & Cuidado en Cada Detalle',
    about_desc: 'En Sky Tu Luz elaboramos cada vela a mano de forma artesanal. Seleccionamos cuidadosamente ceras vegetales de soya, esencias aromáticas puras de la más alta calidad y mechas de algodón ecológico. Ponemos alma en cada proceso para regalarte momentos inolvidables de calma y bienestar.',
    about_badge: '100% Cera Vegetal Natural',
    about_feat_handmade: 'Hecho a mano',
    about_feat_eco: 'Ecológico',
    about_feat_aromas: 'Aromas únicos',
    about_feat_purpose: 'Propósito',

    // Why Choose Us
    why_title: '¿Por qué elegir Sky Tu Luz?',
    why_r1_title: 'Elaboración Artesanal',
    why_r1_desc: 'Vertidas a mano una a una con máxima dedicación y supervisión de calidad.',
    why_r2_title: 'Ingredientes Botánicos',
    why_r2_desc: 'Sin parafinas ni tóxicos. Ceras de soya limpias para una combustión duradera.',
    why_r3_title: 'Empaque Elegante',
    why_r3_desc: 'Presentaciones cuidadas ideales para sorprender con un regalo especial.',
    why_r4_title: 'Experiencia Olfativa',
    why_r4_desc: 'Combinaciones de esencias pensadas para evocar emociones y recuerdos.',

    // Testimonials
    test_subtitle: 'Testimonios',
    test_title: 'Lo Que Dicen Nuestras Clientas',
    test_c1_text: '"Las velas huelen increíble incluso apagadas. El ambiente que crean en el salón es cálido e inigualable."',
    test_c1_role: 'Clienta Verificada',
    test_c2_text: '"Encargué velas personalizadas como recuerdo y fue el regalo perfecto. La presentación cuidada al máximo."',
    test_c2_role: 'Clienta Verificada',
    test_c3_text: '"Se nota el cariño en cada detalle. La mecha arde de forma limpia y duradera. Repetiré sin duda."',
    test_c3_role: 'Clienta Verificada',

    // FAQ Section
    faq_subtitle: 'Dudas Habituales',
    faq_title: 'Preguntas Frecuentes',
    faq_desc: 'Todo lo que necesitas saber sobre nuestras velas de cera de soja, elaboración artesanal y encargos.',
    faq_q1: '¿De qué están hechas las velas de Sky Tu Luz?',
    faq_a1: 'Todas nuestras velas artesanales están elaboradas con cera de soja vegetal 100% pura y biodegradable, mechas de algodón ecológico sin plomo y esencias botánicas de alta concentración olfativa. No contienen parafinas, colorantes tóxicos ni derivados del petróleo, garantizando un aire limpio en tu hogar.',
    faq_q2: '¿Cuánto dura una vela artesanal de cera de soja?',
    faq_a2: 'Nuestras velas tienen un tiempo de combustión lenta de entre 40 y 50 horas. La cera de soja tiene un punto de fusión más bajo que la parafina tradicional, lo que hace que arda hasta un 45% más de tiempo y libere el aroma de manera constante sin sobrecalentarse.',
    faq_q3: '¿Dónde está ubicado el taller de Sky Tu Luz?',
    faq_a3: 'Nuestro taller y tienda se encuentra en <strong>Piedad Kalea 4, Zumarraga, Guipúzcoa</strong>. Estaremos encantados de recibirte para que descubras nuestros aromas en persona. Abrimos de lunes a viernes de 10:00 a 14:00 y de 16:30 a 19:30, y los sábados de 10:00 a 14:00.',
    faq_q4: '¿Cómo puedo encargar una vela o solicitar piezas personalizadas?',
    faq_a4: 'Puedes explorar nuestro portafolio y pulsar en el corazón de las velas que más te gusten. Después, abre el panel de "Mis Favoritas" y pulsa en "Consultar Selección por WhatsApp" para enviarnos tu lista al instante. También creamos velas personalizadas con aromas a medida y mensajes especiales para bodas, aniversarios y regalos corporativos.',

    // Instagram 3D Section
    ig_badge: 'En directo desde el taller · Zumarraga',
    ig_title: 'La Experiencia Sky Tu Luz en Tu Móvil',
    ig_desc: 'Gira la vela 360°, siente la textura y descubre cómo cada llama ilumina momentos únicos.',
    ig_btn_3d: 'Modo 3D Interactivo',
    ig_btn_reel: 'Ver en Formato Reel',
    ig_follow_btn: 'Seguir en Instagram @skytuluz',

    // Contact & Workshop
    contact_subtitle: 'Visítanos o Escríbenos',
    contact_title: 'El Taller en Zumarraga',
    contact_schedule_title: 'Horario de Atención',
    contact_schedule_week: 'Lunes a Viernes: 10:00 - 14:00 | 16:30 - 19:30',
    contact_schedule_sat: 'Sábados: 10:00 - 14:00',
    contact_schedule_sun: 'Domingos: Cerrado',
    contact_btn_maps: 'Cómo Llegar (Google Maps)',
    contact_btn_whatsapp: 'Escribir por WhatsApp',
    newsletter_title: 'Únete al Círculo de Luz',
    newsletter_desc: 'Recibe lanzamientos exclusivos de autor, invitaciones a talleres y aromas de edición limitada.',
    newsletter_placeholder: 'Tu correo electrónico...',
    newsletter_btn: 'Suscribirme',

    // Candle Detail Modal
    modal_wax: 'Cera:',
    modal_wick: 'Mecha:',
    modal_origin: 'Origen:',
    modal_duration: 'Duración:',
    modal_story: 'Historia de Autor',
    modal_pyramid: 'Pirámide Olfativa',
    modal_top: 'Salida:',
    modal_heart: 'Corazón:',
    modal_base: 'Fondo:',
    modal_order_btn: 'Consultar Disponibilidad por WhatsApp',
    modal_fav_add: 'Añadir a Mis Favoritas',
    modal_fav_remove: 'Quitar de Favoritas',

    // Footer
    footer_rights: '© 2026 Sky Tu Luz. Portafolio de velas artesanales con alma.',
    footer_back_to_top: 'Volver arriba'
  },

  eu: {
    // Brand & General
    lang_name: 'Euskara',
    lang_code: 'EU',
    lang_label: 'Hizkuntza',
    toast_lang_changed: 'Hizkuntza euskarara aldatu da 🌿',

    // Navigation & Island
    nav_home: 'Hasiera',
    nav_portfolio: 'Portafolioa',
    nav_collections: 'Bildumak',
    nav_instagram: 'Instagram',
    nav_about: 'Guri Buruz',
    nav_faq: 'Galderak',
    nav_contact: 'Kontaktua',
    nav_location: 'Kokapena',
    nav_location_title: 'Zumarragako lantegia eta kokapena',
    nav_portfolio_title: 'Eskuz Egindako Kandelen Galeria',
    nav_instagram_title: 'Instagram 3D @skytuluz.tu',
    nav_search_title: 'Aromak bilatu',
    nav_favs_title: 'Nire Kandela Gogokoak',
    nav_menu_title: 'Nabigazio Menua',

    // Hero Section
    hero_title_sr: 'Sky Tu Luz · Zumarragan Eskuz Egindako Soja Argizari Kandelak',
    hero_explore: 'Arakatu Portafolioa',
    hero_favs: 'Nire Gogokoak',
    hero_scroll: 'Joan portafoliora',

    // Search Modal
    search_subtitle: 'Arakatu Portafolioa',
    search_title: 'Bilatu Sky Tu Luz-en',
    search_placeholder: 'Idatzi usain bat, osagaia edo bilduma...',
    search_popular_label: 'Bilaketa ezagunak:',
    search_no_results: 'Ez dugu aurkitu kandelarik bilaketa horrekin. Saiatu «banilla», «izpilikua» edo «soja» hitzekin.',

    // Favorites Drawer
    fav_drawer_title: 'Zure Kandela Gogokoak',
    fav_empty_title: 'Zure aukeraketa hutsik dago',
    fav_empty_desc: 'Arakatu gure portafolioa eta sakatu bihotzean zure espazioa argituko duten kandeletan.',
    fav_btn_explore: 'Arakatu Portafolioa',
    fav_btn_whatsapp: 'Galdetu Hautaketa WhatsApp bidez',
    fav_btn_clear: 'Zerrenda hustu',
    fav_toast_added: 'Gogokoetara gehituta! ❤️',
    fav_toast_removed: 'Gogokoetatik kenduta',
    fav_toast_cleared: 'Gogokoen zerrenda hustu da',

    // Portfolio Section
    portfolio_subtitle: 'Egile Portafolioa',
    portfolio_title: 'Eskuz Egindako Kandelen Galeria',
    portfolio_desc: 'Sorkuntza bakoitza eskuz egina da Zumarragan, soja-argizari naturalarekin, goi-mailako esentzia botanikoekin eta kotoi ekologikoko metxekin. Gorde gogokoenak zure etxea argitzeko.',
    filter_all: 'Guztiak',
    filter_aromatic: 'Aromatikoak',
    filter_botanical: 'Botanikoak',
    filter_sculptural: 'Eskulturalak',
    filter_custom: 'Pertsonalizatuak',
    card_view_details: 'Ikusi Fitxa Artistikoa',
    card_favorite: 'Gogokoa',
    badge_author: 'Egile Lana',
    badge_clean_aroma: 'Aroma Garbia',
    badge_limited: 'Edizio Mugatua',
    badge_custom: 'Egile Eskaria',
    burn_time_suffix: 'Errekuntza Motela',
    burn_pure_suffix: 'Errekuntza Garbia',

    // Experience / Collections Section
    exp_subtitle: 'Bildumak',
    exp_title: 'Aurkitu Zure Usain Ideala',
    exp_c1_title: 'Kandela Aromatikoak',
    exp_c1_desc: 'Zure etxeko giroa baretasunez eraldatzen duten aromak.',
    exp_c1_btn: 'Ikusi Bilduma',
    exp_c2_title: 'Pieza Pertsonalizatuak',
    exp_c2_desc: 'Xehetasun bereziak eta mezu pertsonalizatuekin egindako kandelak une berezietarako.',
    exp_c2_btn: 'Gehiago Ezagutu',
    exp_c3_title: 'Edizio Botanikoak',
    exp_c3_desc: 'Tirada txiki eta esklusiboetan egindako egile-bildumak.',
    exp_c3_btn: 'Arakatu',
    exp_btn: 'Ikusi Bilduma',

    // Philosophy & Craftsmanship
    phil_tag: 'Zumarragako Ekoizpena',
    phil_title: '%100 Soja Argizari Botanikoaren Filosofia',
    phil_p1: 'Sky Tu Luz-en zutaz zaintzen duen argian sinesten dugu. Petroliotik eratorritako parafina arruntaren aldean, gure soja-kandeletan ez dago toxinarik, ez kedar beltzik, ez substantzia kaltegarririk.',
    phil_p2: 'Fusio-puntu baxuarekin, argizaria poliki eta tenperatura baxuagoan erretzen da, esentzia botaniko bakoitzaren hedapen garbi, jarraitu eta inguratzailea bermatuz.',
    phil_stat1_label: 'Begetala eta Biodegradagarria',
    phil_stat2_label: 'Toxinarik gabe',
    phil_stat3_label: 'Sugar Garbia',

    // About Us & Philosophy
    about_subtitle: 'Arimaz eginda',
    about_title: 'Artisautza, Maitasuna eta Xehetasunak',
    about_desc: 'Sky Tu Luz-en kandela bakoitza eskuz egiten dugu artisau eran. Soja-argizari begetalak, kalitate gorenreko esentzia aromatiko garbiak eta kotoi ekologikoko metxak zorrotz hautatzen ditugu. Prozesu bakoitzean arima jartzen dugu lasaitasun eta ongizate une ahaztezinak oparitzeko.',
    about_badge: '%100 Landare Argizari Naturala',
    about_feat_handmade: 'Eskuz egina',
    about_feat_eco: 'Ekologikoa',
    about_feat_aromas: 'Aroma bakarrak',
    about_feat_purpose: 'Helburua',

    // Why Choose Us
    why_title: 'Zergatik aukeratu Sky Tu Luz?',
    why_r1_title: 'Artisau Elaborazioa',
    why_r1_desc: 'Banan-banan eskuz isuriak dedikazio handienarekin eta kalitate-ikuskapen zorrotzarekin.',
    why_r2_title: 'Osagai Botanikoak',
    why_r2_desc: 'Parafinarik eta toxikorik gabe. Soja-argizari garbiak iraupen luzeko errekuntzarako.',
    why_r3_title: 'Ontziratze Dotorea',
    why_r3_desc: 'Xehetasunez zaindutako aurkezpenak, opari berezi batekin harritzeko ezin hobeak.',
    why_r4_title: 'Usaimen Esperientzia',
    why_r4_desc: 'Emotzioak eta oroitzapenak pizteko pentsatutako esentzia konbinazioak.',

    // Testimonials
    test_subtitle: 'Testigantzak',
    test_title: 'Gure Bezeroek Diotena',
    test_c1_text: '"Kandelak itzalita daudenean ere usain zoragarria dute. Egongelan sortzen duten giroa gozoa eta paregabea da."',
    test_c1_role: 'Egiaztatutako Bezeroa',
    test_c2_text: '"Kandela pertsonalizatuak eskatu nituen oroigarri gisa eta opari ezin hobea izan zen. Aurkezpena bikaina da."',
    test_c2_role: 'Egiaztatutako Bezeroa',
    test_c3_text: '"Xehetasun bakoitzean maitasuna nabari da. Metxak modu garbian eta luze erretzen du. Zalantzarik gabe errepikatuko dut."',
    test_c3_role: 'Egiaztatutako Bezeroa',

    // FAQ Section
    faq_subtitle: 'Ohiko Zalantzak',
    faq_title: 'Maiz Egindako Galderak',
    faq_desc: 'Soja-kandelen, eskuzko elaborazioaren eta enkarguen inguruko guztia.',
    faq_q1: 'Zertaz eginda daude Sky Tu Luz kandelak?',
    faq_a1: 'Gure kandela guztiak %100 soja-argizari begetal garbi eta biodegradagarriarekin, berunik gabeko kotoi ekologikoko metxekin eta goi-kontzentrazioko esentzia botanikoekin eginda daude. Ez dute parafinarik, tindu toxikorik ez petrolioaren eratorririk, zure etxean aire garbia bermatuz.',
    faq_q2: 'Zenbat irauten du soja argizari kandelak?',
    faq_a2: 'Gure kandeletan errekuntza motela da, 40 eta 50 ordu artean irauten duelarik. Soja-argizariak fusio-puntu baxuagoa du parafina tradizionalak baino, beraz %45 gehiago irauten du eta usaina modu jarraituan askatzen du berotu gabe.',
    faq_q3: 'Non dago Sky Tu Luz lantegia?',
    faq_a3: 'Gure lantegi eta denda <strong>Piedad Kalea 4an dago, Zumarragan (Gipuzkoa)</strong>. Pozez hartuko zaitugu gure usainak bertatik bertara ezagut ditzazun. Astelehenetik ostiralera 10:00etatik 14:00etara eta 16:30etik 19:30era irekitzen dugu, eta larunbatetan 10:00etatik 14:00etara.',
    faq_q4: 'Nola egin dezaket enkargu bat edo neurrira egindako kandelak eskatu?',
    faq_a4: 'Arakatu gure portafolioa eta sakatu bihotzean gehien gustatzen zaizkizun kandeletan. Ondoren, ireki "Nire Gogokoak" panela eta sakatu "Galdetu WhatsApp bidez" zerrenda bidaltzeko. Neurrira egindako kandelak ere sortzen ditugu ezkontza, urteurren eta enpresa-oparietarako.',

    // Instagram 3D Section
    ig_badge: 'Zuzenean lantegitik · Zumarraga',
    ig_title: 'Sky Tu Luz Esperientzia Zure Telefonoan',
    ig_desc: 'Biratu kandela 360°, sentitu ehundura eta ikusi nola sugar bakoitzak une bereziak argitzen dituen.',
    ig_btn_3d: '3D Modu Interaktiboa',
    ig_btn_reel: 'Ikusi Reel Formatuan',
    ig_follow_btn: 'Jarraitu Instagramen @skytuluz',

    // Contact & Workshop
    contact_subtitle: 'Etorri bisitan edo idatzi',
    contact_title: 'Zumarragako Lantegia',
    contact_schedule_title: 'Ordutegia',
    contact_schedule_week: 'Astelehenetik Ostiralera: 10:00 - 14:00 | 16:30 - 19:30',
    contact_schedule_sat: 'Larunbatetan: 10:00 - 14:00',
    contact_schedule_sun: 'Igandeetan: Itxita',
    contact_btn_maps: 'Nola Heldu (Google Maps)',
    contact_btn_whatsapp: 'Idatzi WhatsApp bidez',
    newsletter_title: 'Batu Argiaren Zirkulura',
    newsletter_desc: 'Jaso egile-estreinaldi esklusiboak, lantegi-gonbidapenak eta edizio mugatuko usainak.',
    newsletter_placeholder: 'Zure posta elektronikoa...',
    newsletter_btn: 'Harpidetu',

    // Candle Detail Modal
    modal_wax: 'Argizaria:',
    modal_wick: 'Metxa:',
    modal_origin: 'Jatorria:',
    modal_duration: 'Iraupena:',
    modal_story: 'Egilearen Istorioa',
    modal_pyramid: 'Usain Piramidea',
    modal_top: 'Irteera:',
    modal_heart: 'Bihotza:',
    modal_base: 'Hondoa:',
    modal_order_btn: 'Eskuragarritasuna galdetu WhatsApp bidez',
    modal_fav_add: 'Gehitu Nire Gogokoetara',
    modal_fav_remove: 'Kendu Gogokoetatik',

    // Footer
    footer_rights: '© 2026 Sky Tu Luz. Arimadun eskuz egindako kandelen portafolioa.',
    footer_back_to_top: 'Gora itzuli'
  },

  en: {
    // Brand & General
    lang_name: 'English',
    lang_code: 'EN',
    lang_label: 'Language',
    toast_lang_changed: 'Language switched to English 🇬🇧',

    // Navigation & Island
    nav_home: 'Home',
    nav_portfolio: 'Portfolio',
    nav_collections: 'Collections',
    nav_instagram: 'Instagram',
    nav_about: 'About Us',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_location: 'Location',
    nav_location_title: 'Location & Workshop in Zumarraga',
    nav_portfolio_title: 'Handcrafted Candle Gallery',
    nav_instagram_title: 'Instagram 3D @skytuluz.tu',
    nav_search_title: 'Search scents',
    nav_favs_title: 'My Favorite Candles',
    nav_menu_title: 'Navigation Menu',

    // Hero Section
    hero_title_sr: 'Sky Tu Luz · Handcrafted Botanical Soy Wax Candles in Zumarraga',
    hero_explore: 'Explore Portfolio',
    hero_favs: 'My Favorites',
    hero_scroll: 'Scroll to portfolio',

    // Search Modal
    search_subtitle: 'Explore Portfolio',
    search_title: 'Search Sky Tu Luz',
    search_placeholder: 'Search by scent, ingredient, or collection...',
    search_popular_label: 'Popular searches:',
    search_no_results: 'No candles found matching your query. Try "vanilla", "lavender", or "soy".',

    // Favorites Drawer
    fav_drawer_title: 'Your Favorite Candles',
    fav_empty_title: 'Your selection is empty',
    fav_empty_desc: 'Explore our portfolio and click the heart on the candles that inspire your home.',
    fav_btn_explore: 'Explore Portfolio',
    fav_btn_whatsapp: 'Inquire Selection on WhatsApp',
    fav_btn_clear: 'Clear list',
    fav_toast_added: 'Added to your favorites! ❤️',
    fav_toast_removed: 'Removed from favorites',
    fav_toast_cleared: 'Favorites list cleared',

    // Portfolio Section
    portfolio_subtitle: 'Artisan Portfolio',
    portfolio_title: 'Handcrafted Candle Gallery',
    portfolio_desc: 'Each creation is hand-poured in small batches in Zumarraga using pure botanical soy wax, high-end botanical essences, and organic cotton wicks. Save your favorites to inspire your home.',
    filter_all: 'All',
    filter_aromatic: 'Aromatic',
    filter_botanical: 'Botanical',
    filter_sculptural: 'Sculptural',
    filter_custom: 'Custom',
    card_view_details: 'View Artisan Sheet',
    card_favorite: 'Favorite',
    badge_author: 'Signature Piece',
    badge_clean_aroma: 'Clean Scent',
    badge_limited: 'Limited Edition',
    badge_custom: 'Custom Order',
    burn_time_suffix: 'Slow Burn',
    burn_pure_suffix: 'Pure Burn',

    // Experience / Collections Section
    exp_subtitle: 'Collections',
    exp_title: 'Find Your Ideal Scent',
    exp_c1_title: 'Aromatic Candles',
    exp_c1_desc: 'Scents that transform your home ambiance with serenity.',
    exp_c1_btn: 'View Collection',
    exp_c2_title: 'Custom Pieces',
    exp_c2_desc: 'Unique details and candles with personalized messages for special moments.',
    exp_c2_btn: 'Discover More',
    exp_c3_title: 'Botanical Editions',
    exp_c3_desc: 'Author collections produced in small and exclusive batches.',
    exp_c3_btn: 'Explore',
    exp_btn: 'View Collection',

    // Philosophy & Craftsmanship
    phil_tag: 'Crafted in Zumarraga',
    phil_title: '100% Botanical Soy Wax Philosophy',
    phil_p1: 'At Sky Tu Luz we believe in light that cares for you. Unlike conventional petroleum-derived paraffin candles, our plant-based soy wax candles emit no toxins, black soot, or harmful substances.',
    phil_p2: 'With a low melting point, the wax burns slowly at lower temperatures, ensuring a pure, continuous, and comforting diffusion of every botanical essence.',
    phil_stat1_label: 'Plant-based & Biodegradable',
    phil_stat2_label: 'Zero Toxins or Paraffin',
    phil_stat3_label: 'Clean Burn',

    // About Us & Philosophy
    about_subtitle: 'Crafted with Soul',
    about_title: 'Artisanship, Love & Care in Every Detail',
    about_desc: 'At Sky Tu Luz, every candle is handcrafted with care. We meticulously select pure botanical soy waxes, premium aromatic essences, and organic cotton wicks to gift you unforgettable moments of peace and calm.',
    about_badge: '100% Pure Plant-Based Wax',
    about_feat_handmade: 'Handmade',
    about_feat_eco: 'Eco-Friendly',
    about_feat_aromas: 'Unique Scents',
    about_feat_purpose: 'Purpose',

    // Why Choose Us
    why_title: 'Why Choose Sky Tu Luz?',
    why_r1_title: 'Artisan Craftsmanship',
    why_r1_desc: 'Individually hand-poured with dedication and meticulous quality supervision.',
    why_r2_title: 'Botanical Ingredients',
    why_r2_desc: 'Zero paraffin or harsh toxins. Pure soy waxes for a long, clean burn.',
    why_r3_title: 'Elegant Packaging',
    why_r3_desc: 'Refined presentation designed to surprise someone with a memorable gift.',
    why_r4_title: 'Sensory Experience',
    why_r4_desc: 'Botanical aroma blends designed to evoke emotion and warm memories.',

    // Testimonials
    test_subtitle: 'Testimonials',
    test_title: 'What Our Clients Say',
    test_c1_text: '"These candles smell incredible even before being lit. The warm ambiance they bring to the living room is unmatched."',
    test_c1_role: 'Verified Client',
    test_c2_text: '"I ordered personalized candles for an event and it was the perfect gift. The attention to detail is remarkable."',
    test_c2_role: 'Verified Client',
    test_c3_text: '"You can feel the care poured into every piece. The wick burns cleanly and lasts for hours. Will order again!"',
    test_c3_role: 'Verified Client',

    // FAQ Section
    faq_subtitle: 'Common Questions',
    faq_title: 'Frequently Asked Questions',
    faq_desc: 'Everything you need to know about our soy wax candles, craftsmanship, and custom orders.',
    faq_q1: 'What are Sky Tu Luz candles made of?',
    faq_a1: 'All our artisan candles are crafted with 100% pure, biodegradable botanical soy wax, lead-free organic cotton wicks, and high-concentration botanical essences. Free from paraffin, toxic dyes, or petroleum derivatives, guaranteeing clean air in your home.',
    faq_q2: 'How long does a soy wax candle burn?',
    faq_a2: 'Our candles burn slowly for 40 to 50 hours. Soy wax has a lower melting point than traditional paraffin, allowing it to burn up to 45% longer while releasing fragrance steadily without overheating.',
    faq_q3: 'Where is the Sky Tu Luz workshop located?',
    faq_a3: 'Our workshop and boutique is located at <strong>Piedad Kalea 4, Zumarraga, Gipuzkoa</strong>. We would be delighted to welcome you to discover our scents in person. We are open Monday to Friday 10:00 to 14:00 and 16:30 to 19:30, and Saturdays 10:00 to 14:00.',
    faq_q4: 'How can I order a candle or request custom pieces?',
    faq_a4: 'Explore our portfolio and click the heart on your favorite candles. Then open "My Favorites" and click "Inquire on WhatsApp" to send your curated list instantly. We also craft custom candles with tailored fragrances for weddings, anniversaries, and corporate gifts.',

    // Instagram 3D Section
    ig_badge: 'Live from the workshop · Zumarraga',
    ig_title: 'The Sky Tu Luz Experience on Your Phone',
    ig_desc: 'Rotate the candle 360°, feel the texture, and discover how each flame illuminates unique moments.',
    ig_btn_3d: 'Interactive 3D Mode',
    ig_btn_reel: 'Watch as Reel',
    ig_follow_btn: 'Follow on Instagram @skytuluz',

    // Contact & Workshop
    contact_subtitle: 'Visit Us or Write to Us',
    contact_title: 'The Zumarraga Workshop',
    contact_schedule_title: 'Opening Hours',
    contact_schedule_week: 'Monday to Friday: 10:00 - 14:00 | 16:30 - 19:30',
    contact_schedule_sat: 'Saturdays: 10:00 - 14:00',
    contact_schedule_sun: 'Sundays: Closed',
    contact_btn_maps: 'Get Directions (Google Maps)',
    contact_btn_whatsapp: 'Chat on WhatsApp',
    newsletter_title: 'Join the Circle of Light',
    newsletter_desc: 'Receive exclusive artisan launches, workshop invitations, and limited-edition scents.',
    newsletter_placeholder: 'Your email address...',
    newsletter_btn: 'Subscribe',

    // Candle Detail Modal
    modal_wax: 'Wax:',
    modal_wick: 'Wick:',
    modal_origin: 'Origin:',
    modal_duration: 'Burn Time:',
    modal_story: 'Artisan Story',
    modal_pyramid: 'Olfactory Pyramid',
    modal_top: 'Top Notes:',
    modal_heart: 'Heart Notes:',
    modal_base: 'Base Notes:',
    modal_order_btn: 'Inquire Availability on WhatsApp',
    modal_fav_add: 'Add to My Favorites',
    modal_fav_remove: 'Remove from Favorites',

    // Footer
    footer_rights: '© 2026 Sky Tu Luz. Handcrafted candles with soul.',
    footer_back_to_top: 'Back to top'
  }
};

/**
 * Translations for individual Candle Items
 */
const CANDLE_I18N = {
  c1: {
    title: { es: 'Ámbar & Vainilla Imperial', eu: 'Ámbar & Vainilla Imperiala', en: 'Imperial Amber & Vanilla' },
    category: { es: 'Aromáticas', eu: 'Aromatikoak', en: 'Aromatic' },
    tag: { es: 'Pieza de Autor', eu: 'Egile Lana', en: 'Signature Piece' },
    burnTime: { es: '45h de llama limpia', eu: '45 orduko sugar garbia', en: '45h clean burn' },
    essence: {
      es: 'Notas dulces de vainilla bourbon y cálidas ráfagas de ámbar silvestre.',
      eu: 'Bourbon banillaren nota gozoak eta anbar basatiaren ukitu beroak.',
      en: 'Sweet notes of bourbon vanilla and warm breezes of wild amber.'
    },
    story: {
      es: 'Nuestra creación insignia. Nace inspirada en las tardes pausadas de lectura junto al calor de una taza de café. La vainilla de Madagascar se entrelaza de manera armónica con las resinas de ámbar báltico, llenando el espacio con un ambiente acogedor y relajante.',
      eu: 'Gure sorkuntza adierazgarriena. Kafe bero batekin egindako irakurketa arratsalde lasaietan inspiratua. Madagaskarreko banilla eta anbar erretxinak modu harmonikoan uztartzen dira, giro goxo eta lasaigarria sortuz.',
      en: 'Our flagship creation. Inspired by quiet reading afternoons by the warmth of a coffee cup. Madagascar vanilla harmoniously blends with Baltic amber resins, filling the space with a cozy, relaxing aura.'
    },
    pyramid: {
      salida: { es: 'Flor de vainilla, orquídea silvestre, bergamota.', eu: 'Banilla lorea, orkidea basatia, bergamota.', en: 'Vanilla flower, wild orchid, bergamot.' },
      corazon: { es: 'Vainilla bourbon pura, benjuí de Sumatra, caramelo tostado.', eu: 'Bourbon banilla garbia, Sumatralar bentzoina, karamelo txigortua.', en: 'Pure bourbon vanilla, Sumatra benzoin, toasted caramel.' },
      fondo: { es: 'Ámbar dorado silvestre, sándalo cálido, haba tonka.', eu: 'Urrezko anbar basatia, sandalo beroa, tonka.', en: 'Wild golden amber, warm sandalwood, tonka bean.' }
    }
  },
  c2: {
    title: { es: 'Brisa de Algodón Silvestre', eu: 'Kotoi Basatiaren Haizea', en: 'Wild Cotton Breeze' },
    category: { es: 'Aromáticas', eu: 'Aromatikoak', en: 'Aromatic' },
    tag: { es: 'Aroma Limpio', eu: 'Aroma Garbia', en: 'Clean Scent' },
    burnTime: { es: '40h de combustión pura', eu: '40 orduko errekuntza garbia', en: '40h pure burn' },
    essence: {
      es: 'Frescura pura de lino blanco secado al sol y jazmín silvestre.',
      eu: 'Eguzkitan lehortutako liho zuriaren eta jasmin basatiaren freskura garbia.',
      en: 'Pure freshness of sun-dried white linen and wild jasmine.'
    },
    story: {
      es: 'La reconfortante sensación de sábanas blancas secadas al sol de primavera y flores recién cortadas. Purifica el ambiente con delicada frescura botánica.',
      eu: 'Udaberriko eguzkitan lehortutako izara zurien eta lore moztu berrien sentsazio lasaigarria. Giroa freskura botaniko finarekin garbitzen du.',
      en: 'The comforting feeling of crisp white sheets dried in the spring sun and fresh blossoms. Purifies the atmosphere with delicate botanical freshness.'
    },
    pyramid: {
      salida: { es: 'Brisa marina suave, lino blanco, rocío matinal.', eu: 'Itsas haize leuna, liho zuria, goizeko ihintza.', en: 'Gentle sea breeze, white linen, morning dew.' },
      corazon: { es: 'Jazmín blanco, flor de azahar, muguet.', eu: 'Jasmin zuria, laranjondo-lorea, mugueta.', en: 'White jasmine, orange blossom, lily of the valley.' },
      fondo: { es: 'Almizcle blanco, madera de cedro suave.', eu: 'Almizkle zuria, zedro-egur leuna.', en: 'White musk, soft cedarwood.' }
    }
  },
  c3: {
    title: { es: 'Bosque Boreal & Pino Silvestre', eu: 'Ipar Basoa & Pinu Basatia', en: 'Boreal Forest & Wild Pine' },
    category: { es: 'Botánicas', eu: 'Botanikoak', en: 'Botanical' },
    tag: { es: 'Esencia Botánica', eu: 'Esentzia Botanikoa', en: 'Botanical Essence' },
    burnTime: { es: '48h de aroma boscoso', eu: '48 orduko baso-aroma', en: '48h woodland aroma' },
    essence: {
      es: 'Hojas de pino silvestre, musgo húmedo y resinas de cedro.',
      eu: 'Pinu-orratzak, goroldio hezea eta zedro-erretxinak.',
      en: 'Wild pine needles, damp moss, and noble cedar resins.'
    },
    story: {
      es: 'Un paseo revitalizante por los frondosos pinares tras una llovizna suave. Su fragancia profunda conecta con la serenidad de los valles del País Vasco.',
      eu: 'Euri arinaren ondoko euskal baso hostotsuetan zehar egindako ibilaldi suspertzailea. Bere usain sakonak mendien barealdi naturalarekin lotzen gaitu.',
      en: 'A revitalizing walk through lush pine groves after a gentle drizzle. Its deep fragrance connects with the natural serenity of the Basque valleys.'
    },
    pyramid: {
      salida: { es: 'Acículas de pino, eucalipto silvestre, enebro.', eu: 'Pinu-orratzak, eukalipto basatia, ipurua.', en: 'Pine needles, wild eucalyptus, juniper.' },
      corazon: { es: 'Resina de abeto, cedro noble, musgo de roble.', eu: 'Izei-erretxina, zedro noblea, haritz-goroldioa.', en: 'Fir resin, noble cedar, oakmoss.' },
      fondo: { es: 'Vetiver ahumado, corteza de pino, pachulí terroso.', eu: 'Vetiver ketua, pinu-azala, patxuli lurtsua.', en: 'Smoky vetiver, pine bark, earthy patchouli.' }
    }
  },
  c4: {
    title: { es: 'Flor de Cerezo & Sakura', eu: 'Gereziondo Lorea & Sakura', en: 'Cherry Blossom & Sakura' },
    category: { es: 'Esculturales', eu: 'Eskulturalak', en: 'Sculptural' },
    tag: { es: 'Diseño Floral', eu: 'Lore Diseinua', en: 'Floral Design' },
    burnTime: { es: '35h de sutileza floral', eu: '35 orduko lore-fintasuna', en: '35h floral subtlety' },
    essence: {
      es: 'Pétalos de cerezo japonés, néctar de melocotón y té blanco.',
      eu: 'Japoniar gereziondo-pétaloak, mertxika-nektarra eta te zuria.',
      en: 'Japanese cherry petals, peach nectar, and delicate white tea.'
    },
    story: {
      es: 'El renacer de la primavera encapsulado en cera vegetal. Un homenaje a la belleza efímera y a los comienzos llenos de luz y optimismo.',
      eu: 'Udaberriaren berpizkundea landare-argizaritan bilduta. Edertasun iragankorrari eta argiz betetako hasiera berriei egindako omenaldia.',
      en: 'The rebirth of spring captured in vegetable wax. An homage to transient beauty and new beginnings full of light and optimism.'
    },
    pyramid: {
      salida: { es: 'Pétalos de sakura, té blanco, manzana verde.', eu: 'Sakura petalok, te zuria, sagar berdea.', en: 'Sakura petals, white tea, green apple.' },
      corazon: { es: 'Flor de cerezo, peonía rosa, néctar de melocotón.', eu: 'Gereziondo lorea, peonia arrosa, mertxika.', en: 'Cherry blossom, pink peony, peach nectar.' },
      fondo: { es: 'Almizcle sedoso, madera de sándalo blanco.', eu: 'Almizkle zetatsua, sandalo zuri egurra.', en: 'Silky musk, white sandalwood.' }
    }
  },
  c5: {
    title: { es: 'Lavanda Serena & Azahar', eu: 'Izpiliku Barea & Azahar', en: 'Serene Lavender & Orange Blossom' },
    category: { es: 'Aromáticas', eu: 'Aromatikoak', en: 'Aromatic' },
    tag: { es: 'Pieza de Autor', eu: 'Egile Lana', en: 'Signature Piece' },
    burnTime: { es: '45h de calma absoluta', eu: '45 orduko lasaitasun osoa', en: '45h absolute calm' },
    essence: {
      es: 'Lavanda de Provenza, azahar mediterráneo y cedro claro.',
      eu: 'Proventzako izpilikua, laranjondo-lorea eta zedro argia.',
      en: 'Provence lavender, Mediterranean orange blossom, and light cedar.'
    },
    story: {
      es: 'Creada para apaciguar el ritmo acelerado del día. Combina la flor de lavanda más pura con gotas de azahar para propiciar un descanso reparador y un ambiente libre de estrés.',
      eu: 'Eguneko erritmo bizia baretzeko sortua. Izpiliku garbienaren lorea eta laranjondo-lore tanta freskoak uztartzen ditu atseden lasaia sustatzeko.',
      en: 'Crafted to calm the fast pace of the day. Combines purest lavender blossoms with drops of orange blossom to invite restful sleep and peaceful moments.'
    },
    pyramid: {
      salida: { es: 'Lavandín silvestre, bergamota, salvia.', eu: 'Izpiliku basatia, bergamota, salbia.', en: 'Wild lavandin, bergamot, clary sage.' },
      corazon: { es: 'Flor de lavanda, azahar puro, manzanilla.', eu: 'Izpiliku lorea, azahar garbia, kamamila.', en: 'Lavender blossom, pure orange blossom, chamomile.' },
      fondo: { es: 'Cedro claro, vainilla suave, ámbar gris.', eu: 'Zedro argia, banilla gozoa, anbar grisa.', en: 'Light cedar, gentle vanilla, ambergris.' }
    }
  },
  c6: {
    title: { es: 'Canela & Naranja de Autor', eu: 'Kanela & Laranjondo Egile Lana', en: 'Cinnamon & Artisan Orange' },
    category: { es: 'Personalizadas', eu: 'Pertsonalizatuak', en: 'Custom' },
    tag: { es: 'Encargo de Autor', eu: 'Egile Eskaria', en: 'Custom Order' },
    burnTime: { es: '50h de fuego especiado', eu: '50 orduko su espeziatua', en: '50h spiced fire' },
    essence: {
      es: 'Canela de Ceilán, corteza de naranja confitada y clavo dulce.',
      eu: 'Zeilango kanela, laranja-azal gozatua eta iltzea.',
      en: 'Ceylon cinnamon, candied orange peel, and sweet clove.'
    },
    story: {
      es: 'La esencia de los hogares vivos y las celebraciones. Una armonía chispeante de corteza de naranja confitada, clavo dulce y auténtica canela tostada.',
      eu: 'Etxe bizien eta ospakizunen usain goxoa. Laranja-azal gozatuaren, iltze gozoaren eta txigortutako kanela naturalaren harmonia dirdiratsua.',
      en: 'The essence of lively homes and warm gatherings. A sparkling harmony of candied orange peel, sweet clove, and toasted cinnamon.'
    },
    pyramid: {
      salida: { es: 'Corteza de naranja dulce, mandarina, jengibre.', eu: 'Laranja-azal gozoa, mandarina, jengibrea.', en: 'Sweet orange peel, mandarin, ginger.' },
      corazon: { es: 'Canela en rama de Ceilán, clavo, nuez moscada.', eu: 'Zeilango kanela-makila, iltzea, intxaur muskatua.', en: 'Ceylon cinnamon stick, clove, nutmeg.' },
      fondo: { es: 'Vainilla bourbon, azúcar moreno, sándalo.', eu: 'Bourbon banilla, azukre beltza, sandaloa.', en: 'Bourbon vanilla, brown sugar, sandalwood.' }
    }
  }
};

/**
 * Idioma activo actual ('es', 'eu', 'en')
 */
let currentLanguage = 'es';

/**
 * Inicializar idioma desde localStorage o preferencias del navegador
 */
function initLanguage() {
  const saved = localStorage.getItem('skytuluz_lang');
  if (saved && ['es', 'eu', 'en'].includes(saved)) {
    currentLanguage = saved;
  } else {
    // Detectar idioma del navegador
    const navLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    if (navLang.startsWith('eu')) {
      currentLanguage = 'eu';
    } else if (navLang.startsWith('en')) {
      currentLanguage = 'en';
    } else {
      currentLanguage = 'es';
    }
  }
  applyTranslations();
  updateLangUI();
}

/**
 * Cambiar idioma activo
 */
function changeLanguage(lang) {
  if (!['es', 'eu', 'en'].includes(lang)) return;
  currentLanguage = lang;
  localStorage.setItem('skytuluz_lang', lang);
  
  applyTranslations();
  updateLangUI();
  toggleLangMenu(false);

  // Mostrar toast en el nuevo idioma
  if (typeof showToast === 'function') {
    showToast(TRANSLATIONS[lang].toast_lang_changed, 'success');
  }
}

/**
 * Aplicar traducciones a todos los elementos del DOM con data-i18n
 */
function applyTranslations() {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.es;

  // Actualizar atributo lang en <html>
  document.documentElement.lang = currentLanguage;

  // Actualizar elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Actualizar placeholders con data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Actualizar titles con data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key]) {
      el.setAttribute('title', t[key]);
    }
  });

  // Actualizar aria-labels con data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key]) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  // Actualizar velas en CANDLES_DATA activas
  if (typeof CANDLES_DATA !== 'undefined') {
    Object.keys(CANDLE_I18N).forEach(id => {
      if (CANDLES_DATA[id]) {
        const item = CANDLE_I18N[id];
        if (item.title && item.title[currentLanguage]) CANDLES_DATA[id].title = item.title[currentLanguage];
        if (item.category && item.category[currentLanguage]) CANDLES_DATA[id].category = item.category[currentLanguage];
        if (item.tag && item.tag[currentLanguage]) CANDLES_DATA[id].tag = item.tag[currentLanguage];
        if (item.burnTime && item.burnTime[currentLanguage]) CANDLES_DATA[id].burnTime = item.burnTime[currentLanguage];
        if (item.essence && item.essence[currentLanguage]) CANDLES_DATA[id].essence = item.essence[currentLanguage];
        if (item.story && item.story[currentLanguage]) CANDLES_DATA[id].story = item.story[currentLanguage];
        if (item.pyramid) {
          if (item.pyramid.salida && item.pyramid.salida[currentLanguage]) CANDLES_DATA[id].pyramid.salida = item.pyramid.salida[currentLanguage];
          if (item.pyramid.corazon && item.pyramid.corazon[currentLanguage]) CANDLES_DATA[id].pyramid.corazon = item.pyramid.corazon[currentLanguage];
          if (item.pyramid.fondo && item.pyramid.fondo[currentLanguage]) CANDLES_DATA[id].pyramid.fondo = item.pyramid.fondo[currentLanguage];
        }
      }
    });
  }

  // Actualizar tarjetas de portafolio estáticas en el DOM
  document.querySelectorAll('.portfolio-card[data-id]').forEach(card => {
    const id = card.getAttribute('data-id');
    if (id && CANDLE_I18N[id]) {
      const item = CANDLE_I18N[id];
      const titleEl = card.querySelector('h3');
      if (titleEl && item.title && item.title[currentLanguage]) {
        titleEl.textContent = item.title[currentLanguage];
      }
      const descEl = card.querySelector('p.text-xs');
      if (descEl && item.story && item.story[currentLanguage]) {
        descEl.textContent = item.essence ? item.essence[currentLanguage] : item.story[currentLanguage];
      }
      const badgeEl = card.querySelector('span.absolute.top-3.left-3');
      if (badgeEl && item.tag && item.tag[currentLanguage]) {
        const icon = badgeEl.querySelector('i');
        badgeEl.innerHTML = (icon ? icon.outerHTML + ' ' : '') + item.tag[currentLanguage];
      }
      const burnEl = card.querySelector('span.absolute.bottom-3.left-3');
      if (burnEl && item.burnTime && item.burnTime[currentLanguage]) {
        burnEl.innerHTML = `<i class="fa-regular fa-clock text-amber-400"></i> ${item.burnTime[currentLanguage]}`;
      }
    }
  });

  // Refrescar drawer y botones de favoritos
  if (typeof renderFavorites === 'function') {
    renderFavorites();
  } else if (typeof renderFavoritesDrawer === 'function') {
    renderFavoritesDrawer();
  }
  if (typeof updateFavoritesUI === 'function') {
    updateFavoritesUI();
  }
}

/**
 * Actualizar estados activos de los botones de idioma en la interfaz
 */
function updateLangUI() {
  const codeEl = document.getElementById('current-lang-code');
  if (codeEl) {
    codeEl.textContent = currentLanguage.toUpperCase();
  }

  // Marcar opción activa en el dropdown de la isla
  document.querySelectorAll('.lang-opt-btn').forEach(btn => {
    const l = btn.getAttribute('data-lang');
    if (l === currentLanguage) {
      btn.classList.add('bg-[#b89b72]', 'text-white');
      btn.classList.remove('text-[#2c2c2c]');
    } else {
      btn.classList.remove('bg-[#b89b72]', 'text-white');
      btn.classList.add('text-[#2c2c2c]');
    }
  });

  // Marcar opción activa en el menú móvil
  ['eu', 'es', 'en'].forEach(l => {
    const mBtn = document.getElementById(`mobile-lang-${l}`);
    if (mBtn) {
      if (l === currentLanguage) {
        mBtn.className = 'px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#b89b72] text-white shadow-sm transition-all';
      } else {
        mBtn.className = 'px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#5c4632] hover:bg-white/60 transition-all';
      }
    }
  });
}

/**
 * Abrir / cerrar menú flotante de idiomas en la Isla Dinámica
 */
function toggleLangMenu(forceState) {
  const dropdown = document.getElementById('lang-dropdown');
  if (!dropdown) return;
  const isCurrentlyOpen = !dropdown.classList.contains('hidden');
  const shouldOpen = forceState !== undefined ? forceState : !isCurrentlyOpen;

  if (shouldOpen) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('flex');
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('flex');
  }
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
  const container = document.getElementById('lang-switcher-container');
  if (container && !container.contains(e.target)) {
    toggleLangMenu(false);
  }
});
