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
    footer_back_to_top: 'Volver arriba',

    // Filter Bar & Faceted Search
    filter_label_cat: 'Colección',
    filter_label_color: 'Color',
    filter_label_size: 'Formato',
    filter_cat_all: 'Todas',
    filter_cat_vaso: 'Vasos Aromáticos',
    filter_cat_escultura: 'Esculturales',
    filter_cat_botanica: 'Botánicas & Flores',
    filter_cat_regalo: 'Sets de Regalo',
    filter_color_all: 'Todos los colores',
    filter_color_blanco: 'Blanco / Neutro',
    filter_color_rosa: 'Rosa / Pastel',
    filter_color_rojo: 'Rojo / Pasión',
    filter_color_amarillo: 'Amarillo / Dorado',
    filter_color_cafe: 'Café / Tostado',
    filter_color_verde: 'Verde / Menta',
    filter_size_all: 'Todos los formatos',
    filter_size_vaso: 'Vaso Cristal (220g)',
    filter_size_escultura: 'Escultura Mediana',
    filter_size_ramo: 'Centro / Ramo Grande',
    filter_size_pack: 'Set / Pack Regalo',
    filter_search_placeholder: 'Buscar por aroma, flor o nombre (ej. Café, Tulipán, Bambú)...',
    filter_counter_prefix: 'Mostrando',
    filter_counter_of: 'de',
    filter_counter_suffix: 'creaciones artesanas',
    filter_reset_btn: 'Restablecer filtros',
    filter_empty_title: 'No encontramos velas con esos filtros',
    filter_empty_desc: 'Prueba a cambiar los criterios de color, tamaño o borra la búsqueda.',
    filter_empty_btn: 'Ver todas las creaciones'
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
    footer_back_to_top: 'Gora itzuli',

    // Filter Bar & Faceted Search
    filter_label_cat: 'Bilduma',
    filter_label_color: 'Kolorea',
    filter_label_size: 'Formatua',
    filter_cat_all: 'Guztiak',
    filter_cat_vaso: 'Ontzi Aromatikoak',
    filter_cat_escultura: 'Eskulturalak',
    filter_cat_botanica: 'Botanikoak & Loreak',
    filter_cat_regalo: 'Opari Setak',
    filter_color_all: 'Kolore guztiak',
    filter_color_blanco: 'Zuria / Neutroa',
    filter_color_rosa: 'Arrosa / Pastela',
    filter_color_rojo: 'Gorria / Pasioa',
    filter_color_amarillo: 'Horia / Urreztatua',
    filter_color_cafe: 'Kafea / Epelea',
    filter_color_verde: 'Berdea / Botanikoa',
    filter_size_all: 'Formatu guztiak',
    filter_size_vaso: 'Beirazko Ontzia (220g)',
    filter_size_escultura: 'Eskultura Ertaina',
    filter_size_ramo: 'Zentroa / Lore-sorta Handia',
    filter_size_pack: 'Opari Seta / Pack-a',
    filter_search_placeholder: 'Bilatu aromaz, lorez edo izenez (adib. Kafea, Tulipa, Banbua)...',
    filter_counter_prefix: 'Erakusten:',
    filter_counter_of: '/',
    filter_counter_suffix: 'artisau-sorkuntza',
    filter_reset_btn: 'Garbitu iragazkiak',
    filter_empty_title: 'Ez dugu aurkitu kandelarik iragazki horiekin',
    filter_empty_desc: 'Saiatu bilduma, kolorea edo bilaketa-hitza aldatzen.',
    filter_empty_btn: 'Ikusi sorkuntza guztiak'
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
    footer_back_to_top: 'Back to top',

    // Filter Bar & Faceted Search
    filter_label_cat: 'Collection',
    filter_label_color: 'Color',
    filter_label_size: 'Format',
    filter_cat_all: 'All',
    filter_cat_vaso: 'Aromatic Jars',
    filter_cat_escultura: 'Sculptural',
    filter_cat_botanica: 'Botanical & Floral',
    filter_cat_regalo: 'Gift Sets',
    filter_color_all: 'All colors',
    filter_color_blanco: 'White / Neutral',
    filter_color_rosa: 'Pink / Pastel',
    filter_color_rojo: 'Red / Passion',
    filter_color_amarillo: 'Yellow / Golden',
    filter_color_cafe: 'Coffee / Warm',
    filter_color_verde: 'Green / Botanical',
    filter_size_all: 'All formats',
    filter_size_vaso: 'Glass Jar (220g)',
    filter_size_escultura: 'Medium Sculpture',
    filter_size_ramo: 'Centerpiece / Large Bouquet',
    filter_size_pack: 'Gift Set / Pack',
    filter_search_placeholder: 'Search by scent, flower or name (e.g. Coffee, Tulip, Bamboo)...',
    filter_counter_prefix: 'Showing',
    filter_counter_of: 'of',
    filter_counter_suffix: 'artisan creations',
    filter_reset_btn: 'Reset filters',
    filter_empty_title: 'No candles match these filters',
    filter_empty_desc: 'Try adjusting your collection, color, or clearing the search box.',
    filter_empty_btn: 'View all creations'
  }
};

/**
 * Translations for individual Candle Items
 */
const CANDLE_I18N = {
  "c1": {
    "title": {
      "es": "Café Espresso & Avellana Tostada",
      "eu": "Kafe Txigortua & Hur Eztia",
      "en": "Roasted Espresso & Hazelnut"
    },
    "category": {
      "es": "Vasos Aromáticos",
      "eu": "Ontzi Aromatikoak",
      "en": "Aromatic Jars"
    },
    "tag": {
      "es": "Gourmand de Autor",
      "eu": "Egile Gourmand-a",
      "en": "Signature Gourmand"
    },
    "burnTime": {
      "es": "45h de combustión pura",
      "eu": "45 orduko sugar garbia",
      "en": "45h pure burn time"
    },
    "essence": {
      "es": "Intenso aroma a granos de café tostado, notas de avellana crujiente y fondo de vainilla de Madagascar.",
      "eu": "Kafe ale txigortu berrien aroma sakona, hur kurruskaria eta Madagaskarko banilla epelez biribildua.",
      "en": "Rich notes of freshly roasted espresso beans, crunchy toasted hazelnuts, and warm Madagascar vanilla."
    },
    "story": {
      "es": "Inspirada en el despertar pausado con un café humeante recién molido en el taller de Zumarraga. La intensidad del café tostado se suaviza con acordes de crema dulce y avellanas.",
      "eu": "Zumarragako lantegian prestatutako goizeko kafe usaintsuan inspiratuta. Txigortutako kafearen indarra esne-apar gozoarekin eta hurrekin orekatzen da.",
      "en": "Inspired by slow mornings with a freshly brewed cup of coffee in our Zumarraga atelier. Bold roasted coffee notes balanced with creamy hazelnut warmth."
    },
    "pyramid": {
      "salida": {
        "es": "Granos de café arábica tostado, toque de cacao amargo.",
        "eu": "Arabika kafe ale txigortuak, kakao mingots ukitua.",
        "en": "Roasted arabica beans, touch of dark cocoa."
      },
      "corazon": {
        "es": "Avellana tostada, espuma de leche tibia, canela suave.",
        "eu": "Hur txigortua, esne epela, kanela leuna.",
        "en": "Toasted hazelnut, warm milk froth, gentle cinnamon."
      },
      "fondo": {
        "es": "Vainilla bourbon, haba tonka, caramelo tostado.",
        "eu": "Bourbon banilla, tonka haba, karamelu txigortua.",
        "en": "Bourbon vanilla, tonka bean, caramelized amber."
      }
    }
  },
  "c2": {
    "title": {
      "es": "Bambú Silvestre & Flor de Cerezo",
      "eu": "Banbu Basatia & Gerezi Lorea",
      "en": "Wild Bamboo & Cherry Blossom"
    },
    "category": {
      "es": "Vasos Aromáticos",
      "eu": "Ontzi Aromatikoak",
      "en": "Aromatic Jars"
    },
    "tag": {
      "es": "Zen Botánico",
      "eu": "Zen Botanikoa",
      "en": "Botanical Zen"
    },
    "burnTime": {
      "es": "45h de combustión noble",
      "eu": "45 orduko errekuntza noblea",
      "en": "45h serene clean burn"
    },
    "essence": {
      "es": "Frescura verde de tallos de bambú japonés entrelazada con delicados pétalos de sakura y rocío matinal.",
      "eu": "Banbu zurtoin berdeen freskotasuna eta sakura gerezi loreen petalo delikatuak goizeko ihintzarekin.",
      "en": "Lush green Japanese bamboo shoots interwoven with delicate cherry blossom petals and morning dew."
    },
    "story": {
      "es": "Una oda a la calma oriental y la meditación serena. Su fragancia limpia abre la mente y aporta una sensación de pureza natural en cualquier estancia.",
      "eu": "Baretasun orientala eta meditazio lasaia omentzen ditu. Bere usain garbiak gogoa argitzen du eta naturaren bakea ekartzen du etxera.",
      "en": "A tribute to mindfulness and serene harmony. Its crisp, leafy fragrance purifies the air and creates an inviting sanctuary at home."
    },
    "pyramid": {
      "salida": {
        "es": "Hojas verdes de bambú, rocío de la mañana, bergamota fresca.",
        "eu": "Banbu hosto berdeak, goizeko ihintza, bergamota freskoa.",
        "en": "Fresh green bamboo leaves, morning dew, crisp bergamot."
      },
      "corazon": {
        "es": "Flor de cerezo (sakura), peonía de agua, lirio blanco.",
        "eu": "Gerezi lorea (sakura), ur peonia, lili zuria.",
        "en": "Cherry blossom petals (sakura), water peony, white lily."
      },
      "fondo": {
        "es": "Madera de bambú claro, musgo blanco suave, cedro limpio.",
        "eu": "Banbu zura arina, goroldio zuri leuna, zedro garbia.",
        "en": "Pale bamboo wood, soft white moss, clean cedar."
      }
    }
  },
  "c3": {
    "title": {
      "es": "Coco de Tahití & Lima Cítrica",
      "eu": "Tahiti Kokoa & Lima Zitrikoa",
      "en": "Tahitian Coconut & Citrus Lime"
    },
    "category": {
      "es": "Vasos Aromáticos",
      "eu": "Ontzi Aromatikoak",
      "en": "Aromatic Jars"
    },
    "tag": {
      "es": "Cítrico Tropical",
      "eu": "Zitriko Tropikala",
      "en": "Tropical Citrus"
    },
    "burnTime": {
      "es": "45h de llama limpia",
      "eu": "45 orduko sugar garbia",
      "en": "45h clean flame"
    },
    "essence": {
      "es": "Ralladura de lima verde recién exprimida sobre leche de coco cremosa y un toque chispeante de verbena.",
      "eu": "Lima berdearen azal birrindua koko-esne gozoarekin eta berbena ukitu distiratsu batekin nahastua.",
      "en": "Zesty crushed green lime rind poured over velvety coconut cream with an invigorating splash of verbena."
    },
    "story": {
      "es": "Evoca una tarde soleada de brisa marina tropical. La dulzura untuosa del coco se equilibra a la perfección con la energía viva de los cítricos.",
      "eu": "Itsasoko brisa tropikal eguzkitsua gogorarazten du. Kokoaren leuntasunak limaren freskotasun bizi eta energiaz beterikoarekin bat egiten du.",
      "en": "Evokes a sun-drenched afternoon caressed by tropical ocean breezes. Rich coconut cream harmonizes with sparkling citrus vitality."
    },
    "pyramid": {
      "salida": {
        "es": "Ralladura de lima de Tahití, limón verde, verbena.",
        "eu": "Tahiti lima azala, limoi berdea, berbena.",
        "en": "Tahitian lime zest, kaffir lime, lemon verbena."
      },
      "corazon": {
        "es": "Pulpa de coco fresca, crema de leche de coco, jazmín suave.",
        "eu": "Koko mamia, koko esne gozoa, jazmin leuna.",
        "en": "Fresh coconut pulp, coconut cream, gentle jasmine."
      },
      "fondo": {
        "es": "Vainilla suave, azúcar de caña tostado, almizcle blanco.",
        "eu": "Banilla gozoa, kanabera azukrea, almizkle zuria.",
        "en": "Subtle sweet vanilla, cane sugar, clean white musk."
      }
    }
  },
  "c4": {
    "title": {
      "es": "Gelato Cremoso de Pistacho",
      "eu": "Pistatxo Gelato Krematsua",
      "en": "Creamy Pistachio Gelato"
    },
    "category": {
      "es": "Vasos Aromáticos",
      "eu": "Ontzi Aromatikoak",
      "en": "Aromatic Jars"
    },
    "tag": {
      "es": "Edición Gourmet",
      "eu": "Gourmet Edizioa",
      "en": "Gourmet Edition"
    },
    "burnTime": {
      "es": "45h de combustión dulce",
      "eu": "45 orduko sugar gozoa",
      "en": "45h sweet burn time"
    },
    "essence": {
      "es": "Pistacho siciliano molido, crema dulce de almendra amarga y sutiles acordes de mantequilla tostada.",
      "eu": "Siziliako pistatxo txigortua, almendra gozoa eta gurin gozoaren ukitu goxo liluragarriak.",
      "en": "Crushed Sicilian pistachios, velvety sweet almond cream, and warm hints of browned butter."
    },
    "story": {
      "es": "Inspirada en las heladerías artesanales del norte de Italia. Un aroma adictivo y cremoso que envuelve el salón en un abrazo cálido y apetecible.",
      "eu": "Italiako artisau-izozkitegietan inspiratutako edizio goxoa. Egongela giro bero, gozo eta atsegin batez betetzen duen aroma berezia.",
      "en": "Inspired by authentic Italian gelato parlors. An irresistibly warm, velvety fragrance that turns any room into an inviting retreat."
    },
    "pyramid": {
      "salida": {
        "es": "Pistacho tostado crujiente, licor de amaretto suave.",
        "eu": "Pistatxo txigortu kurruskaria, amaretto likore leuna.",
        "en": "Roasted crushed pistachio, gentle amaretto hint."
      },
      "corazon": {
        "es": "Crema batida dulce, flor de almendro, leche de avena.",
        "eu": "Esnegain harrotua, almendrondo lorea, olo-esnea.",
        "en": "Whipped sweet cream, almond blossom, oat milk."
      },
      "fondo": {
        "es": "Vainilla cremosa, azúcar moreno, haba tonka tostada.",
        "eu": "Banilla krematsua, azukre beltza, tonka haba.",
        "en": "Creamy Madagascar vanilla, brown sugar, roasted tonka."
      }
    }
  },
  "c5": {
    "title": {
      "es": "Brisa de Algodón & Lino Puro",
      "eu": "Kotoi Brisa & Liho Garbia",
      "en": "Cotton Breeze & Pure Linen"
    },
    "category": {
      "es": "Vasos Aromáticos",
      "eu": "Ontzi Aromatikoak",
      "en": "Aromatic Jars"
    },
    "tag": {
      "es": "Aroma Limpio",
      "eu": "Aroma Garbia",
      "en": "Clean Breeze"
    },
    "burnTime": {
      "es": "40h de pureza",
      "eu": "40 orduko garbitasuna",
      "en": "40h pure clean burn"
    },
    "essence": {
      "es": "Sensación reconfortante de sábanas blancas secadas al sol, flor de algodón y una ligera brisa de lavanda silvestre.",
      "eu": "Eguzkitan lehortutako maindire zurien usain gozoa, kotoi lorea eta izpilikuzko brisa freskagarria.",
      "en": "Crisp sun-dried white linen, blooming cotton flowers, and an airy whisper of gentle mountain lavender."
    },
    "story": {
      "es": "Un homenaje al orden, la paz y la frescura de un hogar recién ventilado. Ideal para momentos de descanso, lectura o teletrabajo.",
      "eu": "Etxeko bakea, baretasuna eta garbitasuna omentzen dituen kandelarik maitatuena. Ezin hobea deskantsatzeko edo irakurtzeko.",
      "en": "A celebration of clarity, peace, and freshly aired rooms. Ideal for creating an atmosphere of untroubled serenity and renewal."
    },
    "pyramid": {
      "salida": {
        "es": "Brisa de montaña, aire fresco matutino, flores de lino.",
        "eu": "Mendiko brisa, goizeko aire freskoa, liho loreak.",
        "en": "Mountain air breeze, morning dew, flax blossom."
      },
      "corazon": {
        "es": "Flor de algodón blanco, lirio de los valles, brotes de lavanda.",
        "eu": "Kotoi lore zuria, ibarreko lilia, izpiliku kimuak.",
        "en": "White cotton bloom, lily of the valley, lavender sprigs."
      },
      "fondo": {
        "es": "Almizcle blanco transparente, madera de cedro suave.",
        "eu": "Almizkle zuri gardena, zedro zur leuna.",
        "en": "Clean sheer musk, light blond cedarwood."
      }
    }
  },
  "c6": {
    "title": {
      "es": "Sandía Fresca de Verano",
      "eu": "Udako Angurri Freskoa",
      "en": "Fresh Summer Watermelon"
    },
    "category": {
      "es": "Vasos Aromáticos",
      "eu": "Ontzi Aromatikoak",
      "en": "Aromatic Jars"
    },
    "tag": {
      "es": "Frutal Festivo",
      "eu": "Fruta Bizia",
      "en": "Vibrant Fruity"
    },
    "burnTime": {
      "es": "45h de llama viva",
      "eu": "45 orduko sugar alaia",
      "en": "45h radiant burn"
    },
    "essence": {
      "es": "Jugosa sandía roja recién cortada con notas de melón cantalupo, frambuesas silvestres y un toque mentolado.",
      "eu": "Ebaki berriko angurri gorri mamitsua, kantalupo meloia, basoko mugurdiak eta menda ukitu freskagarria.",
      "en": "Crisp slices of juicy red watermelon paired with honeydew melon, ripe wild raspberries, and a cool mint breeze."
    },
    "story": {
      "es": "La alegría de las tardes de verano condensada en cera de soja vegetal pura. Un aroma vibrante, fresco y lleno de energía positiva.",
      "eu": "Udako arratsalde eguzkitsuen poza soja-argizari garbian bilduta. Usain alaia, bizigarria eta energiaz betea.",
      "en": "The uplifting spirit of golden summer days captured in pure botanical soy wax. Lively, effervescent, and bursting with cheer."
    },
    "pyramid": {
      "salida": {
        "es": "Sandía roja jugosa, ralladura de lima, menta verde.",
        "eu": "Angurri gorri mamitsua, lima azala, menda berdea.",
        "en": "Juicy chilled watermelon, lime zest, garden mint."
      },
      "corazon": {
        "es": "Melón dulce cantalupo, fresitas silvestres, pepino fresco.",
        "eu": "Kantalupo meloi gozoa, basamugurdiak, pepino freskoa.",
        "en": "Sweet cantaloupe melon, wild berries, crisp cucumber."
      },
      "fondo": {
        "es": "Azúcar glas suave, almizcle blanco frutal.",
        "eu": "Glas azukre leuna, fruta-almizkle garbia.",
        "en": "Soft spun sugar, clean sheer musk."
      }
    }
  },
  "c7": {
    "title": {
      "es": "Arco Escultural Nórdico",
      "eu": "Iparraldeko Arku Eskulturala",
      "en": "Nordic Arch Sculpture"
    },
    "category": {
      "es": "Esculturales",
      "eu": "Eskulturalak",
      "en": "Sculptural"
    },
    "tag": {
      "es": "Diseño Arquitectónico",
      "eu": "Arkitektura Diseinua",
      "en": "Architectural Art"
    },
    "burnTime": {
      "es": "35h de diseño puro",
      "eu": "35 orduko diseinua",
      "en": "35h sculpture burn"
    },
    "essence": {
      "es": "Pieza de diseño en forma de arco doble U. Notas sutiles de vainilla blanca natural y madera de haya.",
      "eu": "U bikoitzeko arku forma duen arte-pieza eskulturala. Banilla zuri leunaren eta pago-zuraren usain sotila.",
      "en": "Double-arched architectural statement candle carrying faint whispering notes of ivory vanilla and white beechwood."
    },
    "story": {
      "es": "Inspirada en la arquitectura minimalista escandinava. Su silueta pura funciona como objeto de arte contemporáneo tanto encendida como apagada.",
      "eu": "Eskandinaviako arkitektura minimalistatik edaten duen sorkuntza modernoa. Bere forma garbiak dotorezia berezia ematen dio edozein gelari.",
      "en": "Inspired by Scandinavian modernism. Its striking silhouette serves as a chic contemporary art piece whether glowing or styled on a shelf."
    },
    "pyramid": {
      "salida": {
        "es": "Aire blanco, lino nórdico, sutil flor de loto.",
        "eu": "Aire zuria, iparraldeko lihoa, loto lorea.",
        "en": "Clean white air, Nordic linen, lotus petal."
      },
      "corazon": {
        "es": "Vainilla suave aterciopelada, cera de soja virgen.",
        "eu": "Banilla leun belusduna, soja-argizari birjina.",
        "en": "Velvety vanilla blossom, virgin botanical soy."
      },
      "fondo": {
        "es": "Madera de sándalo rubio, almizcle blanco.",
        "eu": "Sandalo arina, almizkle zuria.",
        "en": "Blond sandalwood, sheer cashmere musk."
      }
    }
  },
  "c8": {
    "title": {
      "es": "Cubo Bubble Geométrico",
      "eu": "Burbuila Kubo Geometrikoa",
      "en": "Geometric Bubble Cube"
    },
    "category": {
      "es": "Esculturales",
      "eu": "Eskulturalak",
      "en": "Sculptural"
    },
    "tag": {
      "es": "Tendencia Minimalista",
      "eu": "Joera Minimalista",
      "en": "Minimalist Icon"
    },
    "burnTime": {
      "es": "30h de llama suave",
      "eu": "30 orduko sugar leuna",
      "en": "30h steady glow"
    },
    "essence": {
      "es": "Vela cúbica esférica elaborada con esferas de cera de soja. Fragancia equilibrada de jazmín blanco y algodón.",
      "eu": "Soja-argizarizko burbuila esferikoz osatutako kubo dotorea. Jazmin zuri eta kotoiaren arteko oreka lurrintsua.",
      "en": "Iconic spherical cube crafted with pure soy spheres, lightly scented with fresh white jasmine and cotton blossom."
    },
    "story": {
      "es": "La pieza que revolucionó el interiorismo moderno. Vertida meticulosamente en Zumarraga para lograr una textura impecable y sedosa al tacto.",
      "eu": "Barne-diseinuan joera handia sortu duen pieza eskulturala. Zumarragan eskuz isuria, akabera leun eta distiratsua lortzeko.",
      "en": "The darling of modern aesthetic decor. Individually poured by hand in our Zumarraga workshop to achieve a silky, velvet-matte surface."
    },
    "pyramid": {
      "salida": {
        "es": "Rocío limpio, flor de algodón, bergamota ligera.",
        "eu": "Ihintz garbia, kotoi lorea, bergamota arina.",
        "en": "Clean morning dew, cotton bloom, whisper of bergamot."
      },
      "corazon": {
        "es": "Jazmín de Grasse, lirio blanco, pétalos de magnolia.",
        "eu": "Grasseko jazmina, lili zuria, magnolia petaloak.",
        "en": "Grasse jasmine, white lily petals, magnolia."
      },
      "fondo": {
        "es": "Cera botánica cremosa, sándalo blanco.",
        "eu": "Soja-argizari krematsua, sandalo zuria.",
        "en": "Creamy botanical soy, white sandalwood."
      }
    }
  },
  "c9": {
    "title": {
      "es": "Columna Cilíndrica Acanalada",
      "eu": "Zutabe Zilindriko Urduritsua",
      "en": "Fluted Cylinder Column"
    },
    "category": {
      "es": "Esculturales",
      "eu": "Eskulturalak",
      "en": "Sculptural"
    },
    "tag": {
      "es": "Elegancia Clásica",
      "eu": "Dotorezia Klasikoa",
      "en": "Classical Grace"
    },
    "burnTime": {
      "es": "40h de presencia",
      "eu": "40 orduko itzal dotorea",
      "en": "40h pillar burn"
    },
    "essence": {
      "es": "Elegante vela cilíndrica con acanalado vertical de inspiración dórica y notas cálidas de cedro y flor blanca.",
      "eu": "Zutabe dorikoen urdintasun bertikala gogorarazten duen kandela zilindrikoa, zedro eta lore zurien usainarekin.",
      "en": "Fluted classical pillar candle with Doric ribbed texture, releasing quiet undertones of blonde cedar and white blossoms."
    },
    "story": {
      "es": "Su relieve estriado capta la luz natural creando un juego de sombras bellísimo sobre mesas, repisas o consolas de entrada.",
      "eu": "Bere erliebe marradunak argi naturalaren distirak harrapatzen ditu, itzal joko liluragarria sortuz edozein altzariren gainean.",
      "en": "Its architectural vertical grooves catch ambient light beautifully, casting warm, geometric shadows across any dining table or mantle."
    },
    "pyramid": {
      "salida": {
        "es": "Brisa de montaña, incienso blanco, ciprés.",
        "eu": "Mendiko brisa, intsentsu zuria, altzifrea.",
        "en": "Mountain mist, white frankincense, cypress."
      },
      "corazon": {
        "es": "Flores blancas de almendro, madera de cedro fino.",
        "eu": "Almendrondo lore zuriak, zedro finaren zura.",
        "en": "White almond blossom, fine cedarwood."
      },
      "fondo": {
        "es": "Ámbar seco, mirra sutil, almizcle noble.",
        "eu": "Anbar lehorra, mirra sotila, almizkle noblea.",
        "en": "Dry amber, warm myrrh, refined botanical musk."
      }
    }
  },
  "c10": {
    "title": {
      "es": "Camelia Botánica Nívea",
      "eu": "Kamelia Botaniko Zuria",
      "en": "Pure White Botanical Camellia"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Escultura Floral",
      "eu": "Lore Eskultura",
      "en": "Sculpted Blossom"
    },
    "burnTime": {
      "es": "25h de floración",
      "eu": "25 orduko loraldi gozoa",
      "en": "25h floral glow"
    },
    "essence": {
      "es": "Flor circular esculpida con pétalos concéntricos. Esencia delicada de camelia blanca, orquídea y flor de loto.",
      "eu": "Petalo zentrokideekin zizelkatutako lore borobila. Kamelia zuri, orkidea eta loto lorearen usain liluragarria.",
      "en": "Sculpted concentric floral blossom releasing ethereal notes of rare white camellia, orchid mist, and water lotus."
    },
    "story": {
      "es": "Cada pétalo está modelado para emular la perfección geométrica de las camelias de los jardines centenarios de Guipúzcoa.",
      "eu": "Petalo bakoitza Gipuzkoako jauregi zaharretako lorategietako kamelien simetria perfektua omentzeko landua dago.",
      "en": "Modeled after the ancient camellias blooming in historic Basque coastal estates, sculpted with loving anatomical precision."
    },
    "pyramid": {
      "salida": {
        "es": "Pétalos de camelia blanca, rocío matinal, té blanco.",
        "eu": "Kamelia zuri petaloak, goizeko ihintza, te zuria.",
        "en": "White camellia petals, morning garden mist, white tea."
      },
      "corazon": {
        "es": "Orquídea silvestre, flor de loto, jazmín sambac.",
        "eu": "Orkidea basatia, loto lorea, sambac jazmina.",
        "en": "Wild orchid, sacred lotus blossom, sambac jasmine."
      },
      "fondo": {
        "es": "Almizcle blanco transparente, madera de peral.",
        "eu": "Almizkle zuri gardena, udareondo zura.",
        "en": "Sheer silk musk, soft pearwood."
      }
    }
  },
  "c11": {
    "title": {
      "es": "Girasol Silvestre del Valle",
      "eu": "Haraneko Eguzki-lore Basatia",
      "en": "Valley Wild Sunflower"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Luz & Vitalidad",
      "eu": "Argia & Bizitasuna",
      "en": "Sunlight & Joy"
    },
    "burnTime": {
      "es": "25h de calor solar",
      "eu": "25 orduko eguzki-berotasuna",
      "en": "25h solar warmth"
    },
    "essence": {
      "es": "Vela de girasol con centro texturizado de semillas. Fragancia cálida de miel de flores, polen silvestre y ámbar.",
      "eu": "Eguzki-lore kandelaren forma xehea. Lore-eztiaren, basoko polenaren eta anbar urreztatuaren usain gozoa.",
      "en": "Textured sunflower bloom releasing radiant aromas of wild wildflower honey, golden pollen, and sunlit amber."
    },
    "story": {
      "es": "Símbolo de luz inagotable, energía positiva y gratitud. Llena el ambiente de luminosidad estival incluso en los días más fríos.",
      "eu": "Argiaren, zorte onaren eta babesaren ikur unibertsala. Egun hotzenetan ere udako berotasuna ekartzen du gelara.",
      "en": "An enduring symbol of gratitude, radiant energy, and hope. Brings a joyful burst of summer sunshine into your home year-round."
    },
    "pyramid": {
      "salida": {
        "es": "Miel silvestre, flor de girasol, néctar de naranja.",
        "eu": "Basoko eztia, eguzki-lorea, laranja nektarra.",
        "en": "Wildflower honey, sunflower blossom, orange nectar."
      },
      "corazon": {
        "es": "Polen floral, manzanilla dorada, pétalos de caléndula.",
        "eu": "Lore polena, kamamila urreztatua, kalendula petaloak.",
        "en": "Golden pollen, chamomile tea, calendula petals."
      },
      "fondo": {
        "es": "Cera de abeja botánica, ámbar cálido, vainilla dorada.",
        "eu": "Argizari botanikoa, anbar epelea, banilla urreztatua.",
        "en": "Botanical beeswax note, warm amber, spun vanilla."
      }
    }
  },
  "c12": {
    "title": {
      "es": "Rosa Carmesí Imperial",
      "eu": "Errege Arrosa Gorri Bizizale",
      "en": "Imperial Crimson Rose"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Pasión Botánica",
      "eu": "Pasio Botanikoa",
      "en": "Botanical Passion"
    },
    "burnTime": {
      "es": "25h de aroma envolvente",
      "eu": "25 orduko aroma inguratzailea",
      "en": "25h intoxicating rose"
    },
    "essence": {
      "es": "Rosa roja en plena floración con pétalos aterciopelados. Fragancia clásica de rosa damascena y toques de peonía.",
      "eu": "Arrosa gorri zabaldua petalo belusdunekin. Damasko arrosaren eta peoniaren usain erromantiko sakona.",
      "en": "Velvet-petaled crimson garden rose releasing rich, authentic Bulgarian damask rose and peony undertones."
    },
    "story": {
      "es": "La reina indiscutible de las flores recreada con pigmentos minerales naturales y esencias florales de alta fijación olfativa.",
      "eu": "Loreen erregina dotorea, mineral naturalekin tindatua eta esentzia botaniar puruekin aberastua Zumarragan.",
      "en": "The undisputed queen of flowers sculpted by hand with natural botanical pigments and masterfully balanced floral absolutes."
    },
    "pyramid": {
      "salida": {
        "es": "Pétalos de rosa húmedos, bergamota, pimienta rosa.",
        "eu": "Arrosa petalo hezeak, bergamota, piperbeltz arrosa.",
        "en": "Dew-kissed rosebuds, Italian bergamot, pink peppercorn."
      },
      "corazon": {
        "es": "Rosa damascena de Bulgaria, peonía roja, clavel suave.",
        "eu": "Bulgariako Damasko arrosa, peonia gorria, iltzea.",
        "en": "Bulgarian Damask rose, crimson peony, soft carnation."
      },
      "fondo": {
        "es": "Almizcle floral aterciopelado, madera de cedro, pachulí dulce.",
        "eu": "Almizkle belusduna, zedro zura, patxuli gozoa.",
        "en": "Velvety floral musk, cedarwood, sheer sweet patchouli."
      }
    }
  },
  "c13": {
    "title": {
      "es": "Rosa de Grasse en Estuche de Regalo",
      "eu": "Grasse Arrosa Opari Kaxan",
      "en": "Grasse Rose in Gift Box"
    },
    "category": {
      "es": "Sets de Regalo",
      "eu": "Opari Multzoak",
      "en": "Gift Sets"
    },
    "tag": {
      "es": "Edición Regalo",
      "eu": "Opari Edizioa",
      "en": "Gift Presentation"
    },
    "burnTime": {
      "es": "25h de encanto",
      "eu": "25 orduko xarma",
      "en": "25h romantic flame"
    },
    "essence": {
      "es": "Elegante rosa pastel presentada en estuche especial para regalo con cinta de seda y aroma floral empolvado.",
      "eu": "Arrosa pastel dotorea opari-kaxa zainduan aurkeztua, zetazko xingola eta hauts-lore usain gozoarekin.",
      "en": "Blush pink sculpted rose nestled in a boutique gift box with satin ribbon and powdery floral whispers."
    },
    "story": {
      "es": "El detalle perfecto para aniversarios, bodas y ocasiones memorables. Lista para regalar y deleitar los sentidos.",
      "eu": "Ezkontzetarako, urteurrenetarako eta une ahaztezinetarako opari ezin hobea. Zuzenean oparitzeko prest.",
      "en": "A heartfelt handcrafted treasure designed for weddings, anniversaries, and unforgettable milestones."
    },
    "pyramid": {
      "salida": {
        "es": "Agua de rosas de mayo, lichi dulce, flor de mandarina.",
        "eu": "Maiatzeko arrosa-ura, litxi gozoa, mandarina lorea.",
        "en": "May rosewater, sweet lychee, mandarin blossom."
      },
      "corazon": {
        "es": "Rosa centifolia, violeta de Parma, flor de almendro.",
        "eu": "Zentifolia arrosa, Parmako bioleta, almendrondo lorea.",
        "en": "Rose Centifolia, Parma violet, sweet almond flower."
      },
      "fondo": {
        "es": "Vainilla suave, almizcle empolvado, ámbar blanco.",
        "eu": "Banilla leuna, almizkle hautsitua, anbar zuria.",
        "en": "Creamy soft vanilla, powdery musk, white amber."
      }
    }
  },
  "c14": {
    "title": {
      "es": "Cúpula Floral Sinfonía de Primavera",
      "eu": "Udaberriko Kupula Floral Anitza",
      "en": "Spring Symphony Floral Dome"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Centro de Mesa",
      "eu": "Mahai Zentroa",
      "en": "Centerpiece Masterpiece"
    },
    "burnTime": {
      "es": "50h de resplandor",
      "eu": "50 orduko distira",
      "en": "50h radiant centerpiece"
    },
    "essence": {
      "es": "Composición floral en cúpula con rosas, dalias y peonías multicolores con esencias de jardín botánico.",
      "eu": "Kupula formako lore-konposizioa arrosa, dalia eta peonia koloretsuekin, lorategi botanikoaren aromaz betea.",
      "en": "Dome-shaped floral centerpiece blooming with multicolored roses, dahlias, and peonies kissed by botanical garden air."
    },
    "story": {
      "es": "Nuestra obra más elaborada. Decora majestuosamente mesas de comedor, dormitorios y salones con un festín de color.",
      "eu": "Gure piezarik landuena eta ikusgarriena. Egongelak eta jantokiak dotoreziaz eta kolorez janzten ditu.",
      "en": "Our crowning artisanal creation. A centerpiece that commands admiration on dining tables, credenzas, and consoles."
    },
    "pyramid": {
      "salida": {
        "es": "Brisa de jardín inglés, pétalos de rosa, pera verde.",
        "eu": "Ingalaterrako lorategi-brisa, arrosa petaloak, udare berdea.",
        "en": "English garden breeze, fresh rose petals, green bosc pear."
      },
      "corazon": {
        "es": "Peonía rosa, magnolia en flor, jazmín silvestre.",
        "eu": "Peonia arrosa, magnolia loreduna, basako jazmina.",
        "en": "Pink peony, magnolia blossom, wild climbing jasmine."
      },
      "fondo": {
        "es": "Maderas nobles, musgo de roble blanco, ámbar claro.",
        "eu": "Zur nobleak, haritz goroldio zuria, anbar argia.",
        "en": "Fine noble woods, soft white moss, sheer amber."
      }
    }
  },
  "c15": {
    "title": {
      "es": "Sobre Botánico Carta de Amor",
      "eu": "Maitasun Gutun Botanikoa",
      "en": "Botanical Love Letter Envelope"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Diseño Poético",
      "eu": "Diseinu Poetikoa",
      "en": "Poetic Design"
    },
    "burnTime": {
      "es": "35h de poesía",
      "eu": "35 orduko poesia",
      "en": "35h romantic burn"
    },
    "essence": {
      "es": "Vela en forma de sobre postal abierto desbordando ramilletes de flores en relieve. Notas de lino, lirios y violeta.",
      "eu": "Gutun-azal irekiaren formako kandela, lore-sortak gainezka dituela. Liho, lili eta bioleta usain gozoa.",
      "en": "Open postal letter candle overflowing with sculpted relief wildflower bouquets, infused with linen and iris."
    },
    "story": {
      "es": "Inspirada en las cartas de amor manuscritas de antaño. Un diseño lírico que celebra las palabras sentidas y el cariño auténtico.",
      "eu": "Eskuz idatzitako antzinako maitasun-gutunetan inspiratua. Bihotzetik idatzitako hitzak eta oroitzapenak omentzen dituen diseinua.",
      "en": "Inspired by timeless handwritten love letters. A poetic design celebrating romantic nostalgia and sincere connection."
    },
    "pyramid": {
      "salida": {
        "es": "Papel de lino blanco, rocío matinal, flor de azahar.",
        "eu": "Lihozko paper zuria, goizeko ihintza, laranjondo lorea.",
        "en": "Crisp linen parchment, morning dew, orange blossom."
      },
      "corazon": {
        "es": "Rosas miniatura, violeta silvestre, lirio blanco.",
        "eu": "Arrosa txikiak, basabioleta, lili zuria.",
        "en": "Miniature garden roses, sweet violet, white iris."
      },
      "fondo": {
        "es": "Almizcle poético, madera de haya, ámbar suave.",
        "eu": "Almizkle poetikoa, pago zura, anbar leuna.",
        "en": "Poetic musk, pale beechwood, whisper of amber."
      }
    }
  },
  "c16": {
    "title": {
      "es": "Bouquet de Tulipanes Silvestres",
      "eu": "Tulipa Basatien Bouquet-a",
      "en": "Wild Pink Tulips Bouquet"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Pieza de Autor",
      "eu": "Egile Pieza",
      "en": "Signature Bouquet"
    },
    "burnTime": {
      "es": "45h de llama floral",
      "eu": "45 orduko lore-sugarra",
      "en": "45h floral candle bouquet"
    },
    "essence": {
      "es": "Ramo de tulipanes rosa esculpidos con flores secas decorativas y aroma a tallos verdes y pétalos frescos.",
      "eu": "Tulipa arrosaz osatutako sorta zizelkatua, lore lehor apaingarriekin eta zurtoin berdeen usain freskoarekin.",
      "en": "Sculpted pink tulip bouquet accented with baby's breath dried florals and dewy fresh-cut botanical greens."
    },
    "story": {
      "es": "El frescor de los campos de tulipanes en primavera. Una pieza sublime que embellece y llena de aroma cualquier estancia.",
      "eu": "Udaberriko tulipa zelaien freskotasun bizia. Etxeko edozein bazter usain eta argi ederrez betetzen duen sorkuntza bikaina.",
      "en": "Captures the buoyant freshness of spring tulip fields at dawn. An opulent centerpiece that breathes vibrancy into any interior."
    },
    "pyramid": {
      "salida": {
        "es": "Tallos verdes de tulipán, aire fresco de rocío, mandarina.",
        "eu": "Tulipa zurtoin berdeak, ihintz aire freskoa, mandarina.",
        "en": "Crisp green tulip stems, cool morning breeze, mandarin leaf."
      },
      "corazon": {
        "es": "Tulipán rosa en flor, jacinto silvestre, flor de manzano.",
        "eu": "Tulipa arrosa zabaldua, basajazintoa, sagarrondo lorea.",
        "en": "Blooming pink tulips, wild hyacinth, apple blossom."
      },
      "fondo": {
        "es": "Musgo blanco, cedro limpio, almizcle floral.",
        "eu": "Goroldio zuria, zedro garbia, lore-almizklea.",
        "en": "White musk, sheer cedarwood, soft garden moss."
      }
    }
  },
  "c17": {
    "title": {
      "es": "Conjunto Armonía Tulipanes & Esfera",
      "eu": "Tulipa & Esfera Harmonia Multzoa",
      "en": "Tulips & Orb Harmony Set"
    },
    "category": {
      "es": "Botánicas",
      "eu": "Botanikoak",
      "en": "Botanical"
    },
    "tag": {
      "es": "Edición Escultórica",
      "eu": "Edizio Eskultorikoa",
      "en": "Sculptural Harmony"
    },
    "burnTime": {
      "es": "55h de calma",
      "eu": "55 orduko baretasuna",
      "en": "55h dual burn time"
    },
    "essence": {
      "es": "Composición de ramo de tulipanes en tonos pastel combinada con esfera aromática de cera de soja texturizada.",
      "eu": "Tulipa lore-sortaren eta soja-argizarizko esfera geometriko baten arteko uztarketa liluragarria.",
      "en": "Harmonious duo pairing sculpted pastel tulips with a textured geometric soy orb infused with white peach and orchid."
    },
    "story": {
      "es": "Equilibrio perfecto entre escultura geométrica y belleza botánica orgánica. Una presencia imponente y sofisticada.",
      "eu": "Geometria eskultorikoaren eta lore-naturaren arteko oreka gorena. Edonon jartzeko moduko pieza berezia.",
      "en": "The delicate union of floral romanticism and geometric serenity. Brings commanding sophistication to coffee tables and consoles."
    },
    "pyramid": {
      "salida": {
        "es": "Flores de loto, melocotón blanco, brisa fresca.",
        "eu": "Loto loreak, mertxika zuria, brisa freskoa.",
        "en": "Water lotus, white peach nectar, morning breeze."
      },
      "corazon": {
        "es": "Tulipán holandés, orquídea rosa, lirio de agua.",
        "eu": "Herbehereetako tulipa, orkidea arrosa, ur lilia.",
        "en": "Dutch pink tulip, blush orchid, water lily."
      },
      "fondo": {
        "es": "Sándalo cálido, ámbar dorado, almizcle de seda.",
        "eu": "Sandalo epelea, anbar urreztatua, zeta-almizklea.",
        "en": "Warm sandalwood, golden amber, sheer silk musk."
      }
    }
  },
  "c18": {
    "title": {
      "es": "Oso Amoroso Carmesí con Bouquet",
      "eu": "Hartz Maitekor Gorria Bouquet-arekin",
      "en": "Crimson Bear with Rose Bouquet"
    },
    "category": {
      "es": "Sets de Regalo",
      "eu": "Opari Multzoak",
      "en": "Gift Sets"
    },
    "tag": {
      "es": "Edición Romántica",
      "eu": "Edizio Erromantikoa",
      "en": "Romantic Keepsake"
    },
    "burnTime": {
      "es": "35h de ternura",
      "eu": "35 orduko gozotasuna",
      "en": "35h tender glow"
    },
    "essence": {
      "es": "Tierno osito modelado en cera de soja roja sosteniendo un ramillete de rosas. Aroma a frutos rojos y pétalos dulces.",
      "eu": "Arrosa-sorta bat eskuetan duen hartz kuttuna soja-argizari gorriz egina. Basafruitu eta lore gozoen usainarekin.",
      "en": "Adorably detailed crimson teddy bear holding a bouquet of sculpted roses, releasing wild berry and sweet rose nectar."
    },
    "story": {
      "es": "La pieza favorita para San Valentín, aniversarios y demostraciones de cariño sincero. Modelado con minucioso detalle en cada rosa.",
      "eu": "Maitasunaren, urteurrenen eta xehetasun berezien piezarik maitatuena. Arrosa bakoitza xehetasun handiz landua dago.",
      "en": "A heartfelt romantic gift for anniversaries and declarations of affection. Each individual rosebud in the bear's paws is meticulously hand-finished."
    },
    "pyramid": {
      "salida": {
        "es": "Grosella roja, fresas silvestres, frambuesa.",
        "eu": "Marrubi basatiak, andere-mahats gorria, mugurdia.",
        "en": "Red currant, wild strawberry, raspberry nectar."
      },
      "corazon": {
        "es": "Ramillete de rosas rojas, flor de cerezo, violeta.",
        "eu": "Arrosa gorri sorta, gerezi lorea, bioleta.",
        "en": "Crimson rose bouquet, cherry blossom, sweet violet."
      },
      "fondo": {
        "es": "Vainilla cremosa, caramelo dulce, almizcle suave.",
        "eu": "Banilla krematsua, karamelu gozoa, almizkle leuna.",
        "en": "Creamy vanilla, warm spun sugar, gentle musk."
      }
    }
  },
  "c19": {
    "title": {
      "es": "Oso Solar Dorado con Bouquet",
      "eu": "Hartz Eguzkitsu Urreztatua",
      "en": "Golden Sun Bear with Bouquet"
    },
    "category": {
      "es": "Sets de Regalo",
      "eu": "Opari Multzoak",
      "en": "Gift Sets"
    },
    "tag": {
      "es": "Alegría & Cariño",
      "eu": "Poza & Kuttuntasuna",
      "en": "Joy & Warmth"
    },
    "burnTime": {
      "es": "35h de calidez",
      "eu": "35 orduko berotasuna",
      "en": "35h sunny warmth"
    },
    "essence": {
      "es": "Osito de cera de soja en tono amarillo mostaza cálido con ramillete de flores. Notas dulces de miel, flor de azahar y vainilla.",
      "eu": "Hori epeleko hartz kuttuna lore-sortarekin. Ezti, laranjondo lore eta banillaren usain gozo eta alaia.",
      "en": "Charming golden teddy bear holding a floral bouquet, emitting cozy notes of wildflower honey, orange blossom, and vanilla."
    },
    "story": {
      "es": "Transmite felicidad, optimismo y compañía. Un regalo entrañable que ilumina habitaciones infantiles, salones o despachos.",
      "eu": "Zoriontasuna, baikortasuna eta goxotasuna transmititzen ditu. Etxeko edozein gela alaitzeko opari maitagarria.",
      "en": "Brings sunshine, optimism, and warm companionship into any home. A delightful gift for loved ones of all ages."
    },
    "pyramid": {
      "salida": {
        "es": "Flor de azahar, mandarina dulce, miel dorada.",
        "eu": "Laranjondo lorea, mandarina gozoa, urre-eztia.",
        "en": "Orange blossom, sweet clementine, golden honey."
      },
      "corazon": {
        "es": "Flores silvestres amarillas, flor de almendro, manzanilla.",
        "eu": "Basalore horiak, almendrondo lorea, kamamila.",
        "en": "Yellow garden blossoms, almond flower, chamomile."
      },
      "fondo": {
        "es": "Vainilla bourbon, cera de soja pura, madera suave.",
        "eu": "Bourbon banilla, soja-argizari garbia, zur leuna.",
        "en": "Bourbon vanilla, natural soy wax, warm soft woods."
      }
    }
  },
  "c20": {
    "title": {
      "es": "Trío de Ositos Afecto Eterno",
      "eu": "Hiru Hartz Betiereko Maitasuna",
      "en": "Eternal Love Bear Trio Set"
    },
    "category": {
      "es": "Sets de Regalo",
      "eu": "Opari Multzoak",
      "en": "Gift Sets"
    },
    "tag": {
      "es": "Set Trío de Regalo",
      "eu": "Hiru Piezen Oparia",
      "en": "Three-Piece Set"
    },
    "burnTime": {
      "es": "3x15h de llama dulce",
      "eu": "3x15 orduko sugar gozoa",
      "en": "3x15h soft burn"
    },
    "essence": {
      "es": "Set de tres ositos de cera de soja con corazón en relieve. Fragancia suave a talco de bebé, vainilla y flor de algodón.",
      "eu": "Bihotza duten hiru hartz kuttunen multzoa. Haur-talko, banilla eta kotoi lorearen usain leun eta gozoa.",
      "en": "Set of three adorable soy teddy bears holding relief love hearts, scented with gentle baby powder, sweet vanilla, and cotton flower."
    },
    "story": {
      "es": "El trío más dulce de nuestro catálogo. Se presentan juntos para repartir armonía y encanto en varios rincones de la casa.",
      "eu": "Gure katalogoko hirukoterik maitagarriena. Elkarrekin aurkezten dira etxeko bazterrak goxotasunez betetzeko.",
      "en": "Our most endearing gift bundle. Styled together or placed in different corners of the home to spread sweet serenity."
    },
    "pyramid": {
      "salida": {
        "es": "Talco suave de bebé, flor de algodón, bergamota ligera.",
        "eu": "Talko leuna, kotoi lorea, bergamota arina.",
        "en": "Gentle baby powder, cotton bloom, whisper of bergamot."
      },
      "corazon": {
        "es": "Flor de azahar, rosa empolvada, crema batida.",
        "eu": "Laranjondo lorea, arrosa hautsitua, esnegaina.",
        "en": "Orange blossom, dusted pink rose, whipped cream."
      },
      "fondo": {
        "es": "Vainilla dulce, almizcle blanco, azúcar glas.",
        "eu": "Banilla gozoa, almizkle zuria, azukre leuna.",
        "en": "Sweet vanilla bean, white baby musk, spun sugar."
      }
    }
  },
  "c21": {
    "title": {
      "es": "Set 3 Monos Sabios de la Sabiduría",
      "eu": "Hiru Tximino Jakintsuen Multzoa",
      "en": "Three Wise Monkeys Wisdom Set"
    },
    "category": {
      "es": "Sets de Regalo",
      "eu": "Opari Multzoak",
      "en": "Gift Sets"
    },
    "tag": {
      "es": "Filosofía & Sabiduría",
      "eu": "Filosofia & Jakituria",
      "en": "Mindfulness & Wisdom"
    },
    "burnTime": {
      "es": "3x20h de serenidad",
      "eu": "3x20 orduko baretasuna",
      "en": "3x20h contemplative burn"
    },
    "essence": {
      "es": "Los tres monos sabios: No ver el mal, no oír el mal, no hablar el mal. Notas místicas de sándalo oriental, mirra y cedro.",
      "eu": "Hiru tximino jakintsuen eskultura multzoa: gaizkirik ez ikusi, ez entzun, ez esan. Sandalo eta mirra usain mistikoa.",
      "en": "The iconic Three Wise Monkeys (See No Evil, Hear No Evil, Speak No Evil) carrying sacred notes of Eastern sandalwood, myrrh, and aged cedar."
    },
    "story": {
      "es": "Representación en cera de soja de la milenaria filosofía Toshogu. Una pieza llena de significado espiritual y profundidad interior.",
      "eu": "Ekialdeko filosofia sakonaren irudikapena soja-argizari noblean. Zentzumenak baretzeko eta gogoeta egiteko ezin hobea.",
      "en": "A sculptural manifestation of ancient Toshogu wisdom. Creates a mindful, grounded ambience for yoga, reading, and contemplative spaces."
    },
    "pyramid": {
      "salida": {
        "es": "Incienso blanco, nuez moscada, corteza de canela.",
        "eu": "Intsentsu zuria, intxaur muskatua, kanela azala.",
        "en": "White frankincense, crushed nutmeg, cinnamon bark."
      },
      "corazon": {
        "es": "Madera de sándalo oriental, clavo de olor, cedro del Atlas.",
        "eu": "Ekialdeko sandalo zura, iltzea, Atlas zedroa.",
        "en": "Sacred oriental sandalwood, clove bud, Atlas cedar."
      },
      "fondo": {
        "es": "Mirra balsámica, resina de ámbar, almizcle amaderado.",
        "eu": "Mirra baltsamikoa, anbar erretxina, almizkle amaderatua.",
        "en": "Balsamic myrrh, warm amber resin, smoky woody musk."
      }
    }
  }
};

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
      const badgeEl = card.querySelector('.candle-tag-badge') || card.querySelector('span.absolute.top-3.left-3');
      if (badgeEl && item.tag && item.tag[currentLanguage]) {
        const icon = badgeEl.querySelector('i');
        badgeEl.innerHTML = (icon ? icon.outerHTML + ' ' : '') + item.tag[currentLanguage];
      }
      const burnEl = card.querySelector('.candle-burn-badge') || card.querySelector('span.absolute.bottom-3.left-3');
      if (burnEl && item.burnTime && item.burnTime[currentLanguage]) {
        burnEl.innerHTML = `<i class="fa-regular fa-clock text-amber-400"></i> ${item.burnTime[currentLanguage]}`;
      }
    }
  });

    if (typeof updateFilterCounterDisplay === 'function') {
    updateFilterCounterDisplay();
  }

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
