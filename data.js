/* ============================================================
   МАЛИ ТРГ · Brunch & Pizza  —  podaci menija
   ------------------------------------------------------------
   Hrana: prevedena na 7 jezika (me/en/ru/fr/de/it/es)
   Pića: internacionalni nazivi + prevedene grupe/opisi
   Cijene i gramaže iz zvaničnog menija (PDF).
   Za fotografije: dodaj  img:"images/ime.jpg"  uz stavku.
   ============================================================ */

/* ---- nazivi pod-grupa (po jeziku) ---- */
window.MENU_GROUPS = {
  arabica:{me:"Арабика мијешана кафа",en:"Arabica blend",ru:"Арабика бленд",fr:"Mélange arabica",de:"Arabica-Mischung",it:"Miscela arabica",es:"Mezcla arábica"},
  classic:{me:"Класичне кафе",en:"Classic coffee",ru:"Классический кофе",fr:"Cafés classiques",de:"Klassische Kaffees",it:"Caffè classici",es:"Cafés clásicos"},
  latteflavors:{me:"Кафе лате са укусима",en:"Flavoured latte",ru:"Латте со вкусами",fr:"Lattes aromatisés",de:"Aromatisierte Latte",it:"Latte aromatizzati",es:"Lattes con sabores"},
  tea:{me:"Чајеви",en:"Tea",ru:"Чай",fr:"Thés",de:"Tee",it:"Tè",es:"Tés"},
  coffeeextras:{me:"Додаци",en:"Extras",ru:"Добавки",fr:"Suppléments",de:"Extras",it:"Aggiunte",es:"Extras"},
  icetea:{me:"Домаћи ледени чајеви",en:"Homemade iced tea",ru:"Домашний холодный чай",fr:"Thé glacé maison",de:"Hausgemachter Eistee",it:"Tè freddo della casa",es:"Té helado casero"},
  water:{me:"Вода",en:"Water",ru:"Вода",fr:"Eau",de:"Wasser",it:"Acqua",es:"Agua"},
  fresh:{me:"Свјеже цијеђени сокови",en:"Fresh juices",ru:"Свежевыжатые соки",fr:"Jus frais",de:"Frische Säfte",it:"Succhi freschi",es:"Zumos naturales"},
  lemonade:{me:"Лимунада са укусима",en:"Flavoured lemonade",ru:"Лимонад со вкусами",fr:"Limonades aromatisées",de:"Aromatisierte Limonade",it:"Limonate aromatizzate",es:"Limonadas con sabores"},
  softdrinks:{me:"Сокови",en:"Soft drinks",ru:"Безалкогольные напитки",fr:"Sodas",de:"Erfrischungsgetränke",it:"Bibite",es:"Refrescos"},
  energy:{me:"Енергетско пиће",en:"Energy drink",ru:"Энергетик",fr:"Boisson énergisante",de:"Energydrink",it:"Energy drink",es:"Bebida energética"},
  draft:{me:"Точено пиво",en:"Draft beer",ru:"Разливное пиво",fr:"Bière pression",de:"Bier vom Fass",it:"Birra alla spina",es:"Cerveza de barril"},
  bottlebeer:{me:"Пиво флаширано",en:"Bottled beer",ru:"Бутылочное пиво",fr:"Bière en bouteille",de:"Flaschenbier",it:"Birra in bottiglia",es:"Cerveza en botella"},
  rakija:{me:"Ракија",en:"Rakija",ru:"Ракия",fr:"Rakija (eau-de-vie)",de:"Rakija (Obstbrand)",it:"Rakija (acquavite)",es:"Rakija (aguardiente)"},
  premiumrakija:{me:"Премиум ракија",en:"Premium rakija",ru:"Премиум ракия",fr:"Rakija premium",de:"Premium-Rakija",it:"Rakija premium",es:"Rakija premium"},
  whiskey:{me:"Виски",en:"Whiskey",ru:"Виски",fr:"Whisky",de:"Whiskey",it:"Whiskey",es:"Whisky"},
  brandy:{me:"Бренди",en:"Brandy",ru:"Бренди",fr:"Brandy",de:"Brandy",it:"Brandy",es:"Brandy"},
  cognac:{me:"Коњак",en:"Cognac",ru:"Коньяк",fr:"Cognac",de:"Cognac",it:"Cognac",es:"Coñac"},
  vodka:{me:"Вотка",en:"Vodka",ru:"Водка",fr:"Vodka",de:"Wodka",it:"Vodka",es:"Vodka"},
  gin:{me:"Џин",en:"Gin",ru:"Джин",fr:"Gin",de:"Gin",it:"Gin",es:"Ginebra"},
  tequila:{me:"Текила 100% агава",en:"Tequila 100% agave",ru:"Текила 100% агава",fr:"Tequila 100% agave",de:"Tequila 100% Agave",it:"Tequila 100% agave",es:"Tequila 100% agave"},
  digestive:{me:"Дижестиви",en:"Digestives",ru:"Дижестивы",fr:"Digestifs",de:"Digestifs",it:"Digestivi",es:"Digestivos"},
  rum:{me:"Рум",en:"Rum",ru:"Ром",fr:"Rhum",de:"Rum",it:"Rum",es:"Ron"},
  vermouth:{me:"Вермути",en:"Vermouth",ru:"Вермут",fr:"Vermouth",de:"Wermut",it:"Vermouth",es:"Vermut"},
  cider:{me:"Сајдер",en:"Cider",ru:"Сидр",fr:"Cidre",de:"Cider",it:"Sidro",es:"Sidra"},
  cocktails:{me:"Коктели",en:"Cocktails",ru:"Коктейли",fr:"Cocktails",de:"Cocktails",it:"Cocktail",es:"Cócteles"},
  glass:{me:"На чашу",en:"By the glass",ru:"Бокал",fr:"Au verre",de:"Offener Wein",it:"Al calice",es:"Por copa"},
  sparkling:{me:"Пјенушава вина",en:"Sparkling wines",ru:"Игристые вина",fr:"Vins effervescents",de:"Schaumweine",it:"Spumanti",es:"Vinos espumosos"},
  white:{me:"Бијела вина",en:"White wines",ru:"Белые вина",fr:"Vins blancs",de:"Weißweine",it:"Vini bianchi",es:"Vinos blancos"},
  rose:{me:"Розе вина",en:"Rosé wines",ru:"Розовые вина",fr:"Vins rosés",de:"Roséweine",it:"Vini rosati",es:"Vinos rosados"},
  red:{me:"Црвена вина",en:"Red wines",ru:"Красные вина",fr:"Vins rouges",de:"Rotweine",it:"Vini rossi",es:"Vinos tintos"},
  champagne:{me:"Шампањац",en:"Champagne",ru:"Шампанское",fr:"Champagne",de:"Champagner",it:"Champagne",es:"Champán"},
};

/* ============================== ХРАНА ============================== */
const FOOD = [

/* ---------- ДОРУЧАК / BREAKFAST ---------- */
{cat:"breakfast",price:"8.90€",img:"images/dorucak-mali-trg.jpg",t:{
  me:{n:"Доручак „Мали Трг“",d:"Кроасан, кајгана, печурке, кобасица, помфрит, микс зелене салате, сос"},
  en:{n:"„Mali Trg“ Breakfast",d:"Croissant, scrambled eggs, mushrooms, sausage, fries, mixed green salad, sauce"},
  ru:{n:"Завтрак «Мали Трг»",d:"Круассан, яичница-болтунья, грибы, колбаски, картофель фри, микс зелёного салата, соус"},
  fr:{n:"Petit-déjeuner « Mali Trg »",d:"Croissant, œufs brouillés, champignons, saucisse, frites, salade verte, sauce"},
  de:{n:"Frühstück „Mali Trg“",d:"Croissant, Rührei, Pilze, Wurst, Pommes, gemischter Blattsalat, Sauce"},
  it:{n:"Colazione „Mali Trg“",d:"Croissant, uova strapazzate, funghi, salsiccia, patatine fritte, insalata mista, salsa"},
  es:{n:"Desayuno «Mali Trg»",d:"Cruasán, huevos revueltos, champiñones, salchicha, patatas fritas, ensalada verde mixta, salsa"}}},

{cat:"breakfast",price:"9.80€",img:"images/losos.jpg",t:{
  me:{n:"Доручак са димљеним лососом",d:"Кроасан, кајгана, димљени лосос, шпаргле, помфрит, микс зелене салате"},
  en:{n:"Breakfast with smoked salmon",d:"Croissant, scrambled eggs, smoked salmon, asparagus, fries, mixed green salad"},
  ru:{n:"Завтрак с копчёным лососем",d:"Круассан, яичница-болтунья, копчёный лосось, спаржа, картофель фри, микс салата"},
  fr:{n:"Petit-déjeuner au saumon fumé",d:"Croissant, œufs brouillés, saumon fumé, asperges, frites, salade verte"},
  de:{n:"Frühstück mit Räucherlachs",d:"Croissant, Rührei, Räucherlachs, Spargel, Pommes, gemischter Blattsalat"},
  it:{n:"Colazione con salmone affumicato",d:"Croissant, uova strapazzate, salmone affumicato, asparagi, patatine, insalata mista"},
  es:{n:"Desayuno con salmón ahumado",d:"Cruasán, huevos revueltos, salmón ahumado, espárragos, patatas fritas, ensalada mixta"}}},

{cat:"breakfast",price:"8.90€",img:"images/crnogorski-dorucak.jpg",t:{
  me:{n:"Црногорски доручак",d:"Два јаја, домаћа кобасица, пршут, сир, ајвар, проја, помфрит, микс зелене салате"},
  en:{n:"Montenegrin breakfast",d:"Two eggs, homemade sausage, prosciutto, cheese, ajvar, cornbread, fries, mixed green salad"},
  ru:{n:"Черногорский завтрак",d:"Два яйца, домашняя колбаса, прошутто, сыр, айвар, кукурузный хлеб, картофель фри, микс салата"},
  fr:{n:"Petit-déjeuner monténégrin",d:"Deux œufs, saucisse maison, prosciutto, fromage, ajvar, pain de maïs, frites, salade verte"},
  de:{n:"Montenegrinisches Frühstück",d:"Zwei Eier, hausgemachte Wurst, Prosciutto, Käse, Ajvar, Maisbrot, Pommes, Blattsalat"},
  it:{n:"Colazione montenegrina",d:"Due uova, salsiccia fatta in casa, prosciutto, formaggio, ajvar, pane di mais, patatine, insalata mista"},
  es:{n:"Desayuno montenegrino",d:"Dos huevos, salchicha casera, prosciutto, queso, ajvar, pan de maíz, patatas fritas, ensalada mixta"}}},

{cat:"breakfast",price:"7.80€",img:"images/omlet-povrce.jpg",t:{
  me:{n:"Омлет са поврћем",d:"Јаја, тиквице, плави патлиџан, црвена и зелена паприка, проја, ајвар, рукола, сос"},
  en:{n:"Vegetable omelette",d:"Eggs, zucchini, eggplant, red and green peppers, cornbread, ajvar, arugula, sauce"},
  ru:{n:"Овощной омлет",d:"Яйца, цукини, баклажан, красный и зелёный перец, кукурузный хлеб, айвар, руккола, соус"},
  fr:{n:"Omelette aux légumes",d:"Œufs, courgette, aubergine, poivrons rouge et vert, pain de maïs, ajvar, roquette, sauce"},
  de:{n:"Gemüse-Omelett",d:"Eier, Zucchini, Aubergine, rote und grüne Paprika, Maisbrot, Ajvar, Rucola, Sauce"},
  it:{n:"Omelette di verdure",d:"Uova, zucchine, melanzane, peperoni rossi e verdi, pane di mais, ajvar, rucola, salsa"},
  es:{n:"Tortilla de verduras",d:"Huevos, calabacín, berenjena, pimientos rojo y verde, pan de maíz, ajvar, rúcula, salsa"}}},

{cat:"breakfast",price:"9.80€",img:"images/omlet-burger.jpg",t:{
  me:{n:"Омлет бургер",d:"Бургер лепиња, гауда, јаја, пршут, сирни намаз, домаћа кобасица, чедар, помфрит, микс салате"},
  en:{n:"Omelette burger",d:"Burger bun, gouda, eggs, prosciutto, cream cheese, homemade sausage, cheddar, fries, salad"},
  ru:{n:"Омлет-бургер",d:"Булочка, гауда, яйца, прошутто, сливочный сыр, домашняя колбаса, чеддер, картофель фри, салат"},
  fr:{n:"Burger-omelette",d:"Pain à burger, gouda, œufs, prosciutto, fromage frais, saucisse maison, cheddar, frites, salade"},
  de:{n:"Omelett-Burger",d:"Burgerbrötchen, Gouda, Eier, Prosciutto, Frischkäse, hausgemachte Wurst, Cheddar, Pommes, Salat"},
  it:{n:"Burger omelette",d:"Pane da burger, gouda, uova, prosciutto, formaggio spalmabile, salsiccia, cheddar, patatine, insalata"},
  es:{n:"Hamburguesa omelette",d:"Pan de burger, gouda, huevos, prosciutto, queso crema, salchicha casera, cheddar, patatas, ensalada"}}},

{cat:"breakfast",price:"6.90€",img:"images/omlet-sunka.jpg",t:{
  me:{n:"Омлет са шунком",d:"Јаја, шунка, гауда, ајвар, проја, сир, микс зелене салате"},
  en:{n:"Ham omelette",d:"Eggs, ham, gouda, ajvar, cornbread, cheese, mixed green salad"},
  ru:{n:"Омлет с ветчиной",d:"Яйца, ветчина, гауда, айвар, кукурузный хлеб, сыр, микс салата"},
  fr:{n:"Omelette au jambon",d:"Œufs, jambon, gouda, ajvar, pain de maïs, fromage, salade verte"},
  de:{n:"Schinken-Omelett",d:"Eier, Schinken, Gouda, Ajvar, Maisbrot, Käse, gemischter Blattsalat"},
  it:{n:"Omelette al prosciutto cotto",d:"Uova, prosciutto cotto, gouda, ajvar, pane di mais, formaggio, insalata mista"},
  es:{n:"Tortilla con jamón",d:"Huevos, jamón, gouda, ajvar, pan de maíz, queso, ensalada verde mixta"}}},

{cat:"breakfast",price:"9.40€",img:"images/avokado.jpg",t:{
  me:{n:"Авокадо",d:"Кајгана, авокадо, интегрални хлеб, сирни намаз, микс салате, шери, сос"},
  en:{n:"Avocado",d:"Scrambled eggs, avocado, whole grain bread, cream cheese, salad, cherry tomatoes, sauce"},
  ru:{n:"Авокадо",d:"Яичница-болтунья, авокадо, цельнозерновой хлеб, сливочный сыр, салат, черри, соус"},
  fr:{n:"Avocat",d:"Œufs brouillés, avocat, pain complet, fromage frais, salade, tomates cerises, sauce"},
  de:{n:"Avocado",d:"Rührei, Avocado, Vollkornbrot, Frischkäse, Salat, Kirschtomaten, Sauce"},
  it:{n:"Avocado",d:"Uova strapazzate, avocado, pane integrale, formaggio spalmabile, insalata, pomodorini, salsa"},
  es:{n:"Aguacate",d:"Huevos revueltos, aguacate, pan integral, queso crema, ensalada, tomates cherry, salsa"}}},

{cat:"breakfast",price:"9.80€",img:"images/proteinski.jpg",t:{
  me:{n:"Протеински доручак",d:"Бјеланца, пилећи филе, парадајз, моцарела, интегрални хлеб"},
  en:{n:"Protein breakfast",d:"Egg whites, chicken fillet, tomato, mozzarella, whole grain bread"},
  ru:{n:"Протеиновый завтрак",d:"Яичные белки, куриное филе, помидор, моцарелла, цельнозерновой хлеб"},
  fr:{n:"Petit-déjeuner protéiné",d:"Blancs d'œufs, filet de poulet, tomate, mozzarella, pain complet"},
  de:{n:"Protein-Frühstück",d:"Eiweiß, Hähnchenfilet, Tomate, Mozzarella, Vollkornbrot"},
  it:{n:"Colazione proteica",d:"Albumi, filetto di pollo, pomodoro, mozzarella, pane integrale"},
  es:{n:"Desayuno proteico",d:"Claras de huevo, filete de pollo, tomate, mozzarella, pan integral"}}},

{cat:"breakfast",price:"6.80€",img:"images/priganice-dzem.jpg",t:{
  me:{n:"Приганице са џемом",d:"Домаће приганице са домаћим џемом"},
  en:{n:"Fritters with jam",d:"Homemade fritters with homemade jam"},
  ru:{n:"Пышки с джемом",d:"Домашние пышки с джемом"},
  fr:{n:"Beignets à la confiture",d:"Beignets maison à la confiture"},
  de:{n:"Krapfen mit Marmelade",d:"Hausgemachte Krapfen mit Marmelade"},
  it:{n:"Frittelle con marmellata",d:"Frittelle fatte in casa con marmellata"},
  es:{n:"Buñuelos con mermelada",d:"Buñuelos caseros con mermelada"}}},

{cat:"breakfast",price:"6.80€",img:"images/priganice-krem.jpg",t:{
  me:{n:"Приганице са кремом",d:"Домаће приганице са слатким кремом"},
  en:{n:"Fritters with cream",d:"Homemade fritters with sweet cream"},
  ru:{n:"Пышки с кремом",d:"Домашние пышки со сладким кремом"},
  fr:{n:"Beignets à la crème",d:"Beignets maison à la crème sucrée"},
  de:{n:"Krapfen mit Creme",d:"Hausgemachte Krapfen mit süßer Creme"},
  it:{n:"Frittelle con crema",d:"Frittelle fatte in casa con crema dolce"},
  es:{n:"Buñuelos con crema",d:"Buñuelos caseros con crema dulce"}}},

{cat:"breakfast",price:"6.80€",img:"images/priganice-pistaci.jpg",t:{
  me:{n:"Приганице са пистаћима",d:"Домаће приганице са кремом од пистаћа"},
  en:{n:"Fritters with pistachio",d:"Homemade fritters with pistachio cream"},
  ru:{n:"Пышки с фисташками",d:"Домашние пышки с фисташковым кремом"},
  fr:{n:"Beignets à la pistache",d:"Beignets maison à la crème de pistache"},
  de:{n:"Krapfen mit Pistazie",d:"Hausgemachte Krapfen mit Pistaziencreme"},
  it:{n:"Frittelle al pistacchio",d:"Frittelle fatte in casa con crema di pistacchio"},
  es:{n:"Buñuelos con pistacho",d:"Buñuelos caseros con crema de pistacho"}}},

{cat:"breakfast",price:"6.80€",img:"images/priganice-sir.jpg",t:{
  me:{n:"Приганице са сиром",d:"Домаће приганице са сиром"},
  en:{n:"Fritters with cheese",d:"Homemade fritters with cheese"},
  ru:{n:"Пышки с сыром",d:"Домашние пышки с сыром"},
  fr:{n:"Beignets au fromage",d:"Beignets maison au fromage"},
  de:{n:"Krapfen mit Käse",d:"Hausgemachte Krapfen mit Käse"},
  it:{n:"Frittelle con formaggio",d:"Frittelle fatte in casa con formaggio"},
  es:{n:"Buñuelos con queso",d:"Buñuelos caseros con queso"}}},

{cat:"breakfast",price:"6.80€",img:"images/priganice-med.jpg",t:{
  me:{n:"Приганице са медом",d:"Домаће приганице са медом"},
  en:{n:"Fritters with honey",d:"Homemade fritters with honey"},
  ru:{n:"Пышки с мёдом",d:"Домашние пышки с мёдом"},
  fr:{n:"Beignets au miel",d:"Beignets maison au miel"},
  de:{n:"Krapfen mit Honig",d:"Hausgemachte Krapfen mit Honig"},
  it:{n:"Frittelle al miele",d:"Frittelle fatte in casa con miele"},
  es:{n:"Buñuelos con miel",d:"Buñuelos caseros con miel"}}},

{cat:"breakfast",price:"6.80€",img:"images/ovsena-kasa.jpg",t:{
  me:{n:"Овсена каша",d:"Овсене пахуљице, шумско воће, банана, мед, бадеми"},
  en:{n:"Oatmeal",d:"Oat flakes, forest fruits, banana, honey, almonds"},
  ru:{n:"Овсяная каша",d:"Овсяные хлопья, лесные ягоды, банан, мёд, миндаль"},
  fr:{n:"Porridge",d:"Flocons d'avoine, fruits des bois, banane, miel, amandes"},
  de:{n:"Haferbrei",d:"Haferflocken, Waldfrüchte, Banane, Honig, Mandeln"},
  it:{n:"Porridge d'avena",d:"Fiocchi d'avena, frutti di bosco, banana, miele, mandorle"},
  es:{n:"Avena (porridge)",d:"Copos de avena, frutos del bosque, plátano, miel, almendras"}}},

{cat:"breakfast",price:"9.90€",img:"images/pohovane-tortilje.jpg",t:{
  me:{n:"Поховане тортиље",d:"Пилетина, гауда, чедар, тортиље, микс зелене салате, сос"},
  en:{n:"Breaded tortillas",d:"Chicken, gouda, cheddar, tortillas, mixed green salad, sauce"},
  ru:{n:"Тортильи в панировке",d:"Курица, гауда, чеддер, тортильи, микс салата, соус"},
  fr:{n:"Tortillas panées",d:"Poulet, gouda, cheddar, tortillas, salade verte, sauce"},
  de:{n:"Panierte Tortillas",d:"Hähnchen, Gouda, Cheddar, Tortillas, gemischter Blattsalat, Sauce"},
  it:{n:"Tortillas impanate",d:"Pollo, gouda, cheddar, tortillas, insalata mista, salsa"},
  es:{n:"Tortillas empanadas",d:"Pollo, gouda, cheddar, tortillas, ensalada verde mixta, salsa"}}},

{cat:"breakfast",price:"9.90€",img:"images/kroasan-prsut.jpg",t:{
  me:{n:"Кроасан са пршутом",d:"Кросан, пршут, моцарела, песто, парадајз, микс зелене салате"},
  en:{n:"Croissant with prosciutto",d:"Croissant, prosciutto, mozzarella, pesto, tomato, mixed green salad"},
  ru:{n:"Круассан с прошутто",d:"Круассан, прошутто, моцарелла, песто, помидор, микс салата"},
  fr:{n:"Croissant au prosciutto",d:"Croissant, prosciutto, mozzarella, pesto, tomate, salade verte"},
  de:{n:"Croissant mit Prosciutto",d:"Croissant, Prosciutto, Mozzarella, Pesto, Tomate, Blattsalat"},
  it:{n:"Croissant con prosciutto",d:"Croissant, prosciutto, mozzarella, pesto, pomodoro, insalata mista"},
  es:{n:"Cruasán con prosciutto",d:"Cruasán, prosciutto, mozzarella, pesto, tomate, ensalada verde mixta"}}},

{cat:"breakfast",price:"9.90€",img:"images/sendvic-piletina.jpg",t:{
  me:{n:"Сендвич са похованом пилетином",d:"Интегрална лепиња, похана пилетина, јаја, сирни намаз, гауда, помфрит, парадајз, сос"},
  en:{n:"Fried chicken sandwich",d:"Whole grain bun, fried chicken, eggs, cream cheese, gouda, fries, tomato, sauce"},
  ru:{n:"Сэндвич с курицей в панировке",d:"Цельнозерновая булочка, курица в панировке, яйца, сливочный сыр, гауда, картофель фри, помидор, соус"},
  fr:{n:"Sandwich au poulet pané",d:"Pain complet, poulet pané, œufs, fromage frais, gouda, frites, tomate, sauce"},
  de:{n:"Sandwich mit paniertem Hähnchen",d:"Vollkornbrötchen, paniertes Hähnchen, Eier, Frischkäse, Gouda, Pommes, Tomate, Sauce"},
  it:{n:"Sandwich con pollo impanato",d:"Panino integrale, pollo impanato, uova, formaggio spalmabile, gouda, patatine, pomodoro, salsa"},
  es:{n:"Sándwich de pollo empanado",d:"Pan integral, pollo empanado, huevos, queso crema, gouda, patatas, tomate, salsa"}}},

{cat:"breakfast",price:"9.90€",img:"images/sendvic-burata.jpg",t:{
  me:{n:"Сендвич бурата",d:"Бурата, песто сос, пршут, рукола, шери, босиљак, ајвар"},
  en:{n:"Burrata sandwich",d:"Burrata, pesto sauce, prosciutto, arugula, cherry tomatoes, basil, ajvar"},
  ru:{n:"Сэндвич с бурратой",d:"Буррата, соус песто, прошутто, руккола, черри, базилик, айвар"},
  fr:{n:"Sandwich à la burrata",d:"Burrata, sauce pesto, prosciutto, roquette, tomates cerises, basilic, ajvar"},
  de:{n:"Burrata-Sandwich",d:"Burrata, Pesto-Sauce, Prosciutto, Rucola, Kirschtomaten, Basilikum, Ajvar"},
  it:{n:"Sandwich con burrata",d:"Burrata, salsa al pesto, prosciutto, rucola, pomodorini, basilico, ajvar"},
  es:{n:"Sándwich de burrata",d:"Burrata, salsa pesto, prosciutto, rúcula, tomates cherry, albahaca, ajvar"}}},

{cat:"breakfast",price:"8.60€",t:{
  me:{n:"Америчке палачинке",d:"Нутела или пистаћи"},
  en:{n:"American pancakes",d:"Nutella or pistachio"},
  ru:{n:"Американские панкейки",d:"Нутелла или фисташка"},
  fr:{n:"Pancakes américains",d:"Nutella ou pistache"},
  de:{n:"American Pancakes",d:"Nutella oder Pistazie"},
  it:{n:"Pancake americani",d:"Nutella o pistacchio"},
  es:{n:"Tortitas americanas",d:"Nutella o pistacho"}}},

{cat:"breakfast",price:"1.90€",img:"images/kroasan-badem.jpg",t:{
  me:{n:"Кроасан са бадемом и наранџом"},en:{n:"Croissant with almond & orange"},ru:{n:"Круассан с миндалём и апельсином"},
  fr:{n:"Croissant amande & orange"},de:{n:"Croissant Mandel & Orange"},it:{n:"Croissant mandorla e arancia"},es:{n:"Cruasán de almendra y naranja"}}},

{cat:"breakfast",price:"1.90€",unit:"1 ком / pc",img:"images/kroasan.jpg",t:{
  me:{n:"Кроасан"},en:{n:"Croissant"},ru:{n:"Круассан"},fr:{n:"Croissant"},de:{n:"Croissant"},it:{n:"Croissant"},es:{n:"Cruasán"}}},

{cat:"breakfast",price:"1.00€",unit:"1 ком / pc",img:"images/proja.jpg",t:{
  me:{n:"Проја"},en:{n:"Cornbread"},ru:{n:"Кукурузный хлеб"},fr:{n:"Pain de maïs"},de:{n:"Maisbrot"},it:{n:"Pane di mais"},es:{n:"Pan de maíz"}}},

/* ---------- ХЛАДНА ПРЕДЈЕЛА / COLD ---------- */
{cat:"cold",price:"24.00€",unit:"500 g",t:{
  me:{n:"„Велики Трг“ предјело",d:"Пршут, мортадела, кулен, кувана шунка, маслине, микс сирева"},
  en:{n:"„Veliki Trg“ platter",d:"Prosciutto, mortadella, kulen, cooked ham, olives, cheese selection"},
  ru:{n:"Тарелка «Велики Трг»",d:"Прошутто, мортаделла, кулен, варёная ветчина, оливки, ассорти сыров"},
  fr:{n:"Plateau « Veliki Trg »",d:"Prosciutto, mortadelle, kulen, jambon cuit, olives, assortiment de fromages"},
  de:{n:"„Veliki Trg“ Platte",d:"Prosciutto, Mortadella, Kulen, Kochschinken, Oliven, Käseauswahl"},
  it:{n:"Tagliere „Veliki Trg“",d:"Prosciutto, mortadella, kulen, prosciutto cotto, olive, selezione di formaggi"},
  es:{n:"Tabla « Veliki Trg »",d:"Prosciutto, mortadela, kulen, jamón cocido, aceitunas, selección de quesos"}}},

{cat:"cold",price:"13.00€",unit:"250 g",t:{
  me:{n:"„Мали Трг“ предјело",d:"Пршут 100 г, капрезе салата"},
  en:{n:"„Mali Trg“ platter",d:"Prosciutto 100 g, caprese salad"},
  ru:{n:"Тарелка «Мали Трг»",d:"Прошутто 100 г, салат капрезе"},
  fr:{n:"Plateau « Mali Trg »",d:"Prosciutto 100 g, salade caprese"},
  de:{n:"„Mali Trg“ Platte",d:"Prosciutto 100 g, Caprese-Salat"},
  it:{n:"Tagliere „Mali Trg“",d:"Prosciutto 100 g, insalata caprese"},
  es:{n:"Tabla « Mali Trg »",d:"Prosciutto 100 g, ensalada caprese"}}},

{cat:"cold",price:"13.00€",unit:"250 g",t:{
  me:{n:"Бурата",d:"Бурата, свјежи босиљак, шери, песто ђеновезе, маслиново уље"},
  en:{n:"Burrata",d:"Burrata, fresh basil, cherry tomatoes, genovese pesto, olive oil"},
  ru:{n:"Буррата",d:"Буррата, свежий базилик, черри, песто дженовезе, оливковое масло"},
  fr:{n:"Burrata",d:"Burrata, basilic frais, tomates cerises, pesto genovese, huile d'olive"},
  de:{n:"Burrata",d:"Burrata, frisches Basilikum, Kirschtomaten, Pesto Genovese, Olivenöl"},
  it:{n:"Burrata",d:"Burrata, basilico fresco, pomodorini, pesto genovese, olio d'oliva"},
  es:{n:"Burrata",d:"Burrata, albahaca fresca, tomates cherry, pesto genovés, aceite de oliva"}}},

/* ---------- ТОПЛА ПРЕДЈЕЛА / HOT ---------- */
{cat:"hot",price:"16.00€",unit:"200 g",t:{
  me:{n:"Гриловани сир шкрипавац",d:"Гриловани халуми сир"},
  en:{n:"Grilled halloumi",d:"Grilled halloumi cheese"},
  ru:{n:"Сыр халуми на гриле",d:"Сыр халуми, приготовленный на гриле"},
  fr:{n:"Halloumi grillé",d:"Fromage halloumi grillé"},
  de:{n:"Gegrillter Halloumi",d:"Gegrillter Halloumi-Käse"},
  it:{n:"Halloumi alla griglia",d:"Formaggio halloumi grigliato"},
  es:{n:"Halloumi a la parrilla",d:"Queso halloumi a la parrilla"}}},

{cat:"hot",price:"9.00€",unit:"200 g",t:{
  me:{n:"Поховани сир",d:"Сир у презлама, пржен"},
  en:{n:"Fried cheese",d:"Breaded fried cheese"},
  ru:{n:"Сыр в панировке",d:"Жареный сыр в панировке"},
  fr:{n:"Fromage pané",d:"Fromage pané et frit"},
  de:{n:"Panierter Käse",d:"Panierter, frittierter Käse"},
  it:{n:"Formaggio impanato",d:"Formaggio impanato e fritto"},
  es:{n:"Queso empanado",d:"Queso empanado y frito"}}},

{cat:"hot",price:"16.00€",unit:"200 g",t:{
  me:{n:"Црни рижото",d:"Сипа, рижа, црнило сипе, пармезан, зачини"},
  en:{n:"Black risotto",d:"Cuttlefish, rice, cuttlefish ink, parmesan, spices"},
  ru:{n:"Чёрное ризотто",d:"Каракатица, рис, чернила каракатицы, пармезан, специи"},
  fr:{n:"Risotto noir",d:"Seiche, riz, encre de seiche, parmesan, épices"},
  de:{n:"Schwarzes Risotto",d:"Tintenfisch, Reis, Tintenfischtinte, Parmesan, Gewürze"},
  it:{n:"Risotto al nero di seppia",d:"Seppia, riso, nero di seppia, parmigiano, spezie"},
  es:{n:"Risotto negro",d:"Sepia, arroz, tinta de sepia, parmesano, especias"}}},

{cat:"hot",price:"15.00€",unit:"200 g",t:{
  me:{n:"Рижото спанаћ и козји сир",d:"Козји сир, рижа, спанаћ, пармезан, зачини"},
  en:{n:"Spinach & goat cheese risotto",d:"Goat cheese, rice, spinach, parmesan, spices"},
  ru:{n:"Ризотто со шпинатом и козьим сыром",d:"Козий сыр, рис, шпинат, пармезан, специи"},
  fr:{n:"Risotto épinards & chèvre",d:"Fromage de chèvre, riz, épinards, parmesan, épices"},
  de:{n:"Spinat-Ziegenkäse-Risotto",d:"Ziegenkäse, Reis, Spinat, Parmesan, Gewürze"},
  it:{n:"Risotto spinaci e caprino",d:"Caprino, riso, spinaci, parmigiano, spezie"},
  es:{n:"Risotto de espinacas y queso de cabra",d:"Queso de cabra, arroz, espinacas, parmesano, especias"}}},

{cat:"hot",price:"14.00€",unit:"300 g",t:{
  me:{n:"Паста са печуркама",d:"Вргањ, лисичарка, шампињони"},
  en:{n:"Pasta with mushrooms",d:"Porcini, chanterelles, button mushrooms"},
  ru:{n:"Паста с грибами",d:"Белые грибы, лисички, шампиньоны"},
  fr:{n:"Pâtes aux champignons",d:"Cèpes, girolles, champignons de Paris"},
  de:{n:"Pasta mit Pilzen",d:"Steinpilze, Pfifferlinge, Champignons"},
  it:{n:"Pasta ai funghi",d:"Porcini, finferli, champignon"},
  es:{n:"Pasta con setas",d:"Boletus, rebozuelos, champiñones"}}},

{cat:"hot",price:"13.00€",unit:"300 g",t:{
  me:{n:"Паста пилетина, тиквице, кари",d:"Пилетина, тиквице, кари"},
  en:{n:"Pasta chicken, zucchini, curry",d:"Chicken, zucchini, curry"},
  ru:{n:"Паста с курицей, цукини и карри",d:"Курица, цукини, карри"},
  fr:{n:"Pâtes poulet, courgette, curry",d:"Poulet, courgette, curry"},
  de:{n:"Pasta Hähnchen, Zucchini, Curry",d:"Hähnchen, Zucchini, Curry"},
  it:{n:"Pasta pollo, zucchine, curry",d:"Pollo, zucchine, curry"},
  es:{n:"Pasta pollo, calabacín, curri",d:"Pollo, calabacín, curri"}}},

{cat:"hot",price:"17.00€",unit:"300 g",t:{
  me:{n:"Паста бурата, шери",d:"Бурата, шери парадајз"},
  en:{n:"Pasta burrata, cherry tomato",d:"Burrata, cherry tomatoes"},
  ru:{n:"Паста с бурратой и черри",d:"Буррата, помидоры черри"},
  fr:{n:"Pâtes burrata, tomates cerises",d:"Burrata, tomates cerises"},
  de:{n:"Pasta Burrata, Kirschtomaten",d:"Burrata, Kirschtomaten"},
  it:{n:"Pasta burrata e pomodorini",d:"Burrata, pomodorini"},
  es:{n:"Pasta burrata y cherry",d:"Burrata, tomates cherry"}}},

{cat:"hot",price:"16.00€",unit:"300 g",t:{
  me:{n:"Паста са бифтеком и тартуфима",d:"Бифтек, тартуфи"},
  en:{n:"Pasta with steak & truffles",d:"Beef steak, truffles"},
  ru:{n:"Паста со стейком и трюфелями",d:"Говяжий стейк, трюфели"},
  fr:{n:"Pâtes au steak et truffes",d:"Steak de bœuf, truffes"},
  de:{n:"Pasta mit Steak und Trüffeln",d:"Rindersteak, Trüffel"},
  it:{n:"Pasta con filetto e tartufo",d:"Filetto di manzo, tartufo"},
  es:{n:"Pasta con solomillo y trufas",d:"Solomillo de ternera, trufas"}}},

/* ---------- ГЛАВНА ЈЕЛА / MAIN ---------- */
{cat:"main",price:"22.00€",unit:"280 g",t:{
  me:{n:"Туна стек",d:"Гриловани туна, рукола, шери, сос од малине"},
  en:{n:"Tuna steak",d:"Grilled tuna, arugula, cherry tomatoes, raspberry sauce"},
  ru:{n:"Стейк из тунца",d:"Тунец на гриле, руккола, черри, малиновый соус"},
  fr:{n:"Steak de thon",d:"Thon grillé, roquette, tomates cerises, sauce framboise"},
  de:{n:"Thunfischsteak",d:"Gegrillter Thunfisch, Rucola, Kirschtomaten, Himbeersauce"},
  it:{n:"Trancio di tonno",d:"Tonno grigliato, rucola, pomodorini, salsa ai lamponi"},
  es:{n:"Steak de atún",d:"Atún a la parrilla, rúcula, tomates cherry, salsa de frambuesa"}}},

{cat:"main",price:"24.00€",unit:"280 g",t:{
  me:{n:"Хоботница на жару",d:"Хоботница, пире, поврће, џем од лука, маслац, зачини"},
  en:{n:"Grilled octopus",d:"Octopus, mashed potatoes, vegetables, onion jam, butter, spices"},
  ru:{n:"Осьминог на гриле",d:"Осьминог, картофельное пюре, овощи, луковый джем, масло, специи"},
  fr:{n:"Poulpe grillé",d:"Poulpe, purée, légumes, confit d'oignon, beurre, épices"},
  de:{n:"Gegrillter Oktopus",d:"Oktopus, Kartoffelpüree, Gemüse, Zwiebelmarmelade, Butter, Gewürze"},
  it:{n:"Polpo alla griglia",d:"Polpo, purè, verdure, confettura di cipolle, burro, spezie"},
  es:{n:"Pulpo a la parrilla",d:"Pulpo, puré, verduras, mermelada de cebolla, mantequilla, especias"}}},

{cat:"main",price:"18.00€",unit:"350 g",img:"images/burger-dry-aged.jpg",t:{
  me:{n:"Бургер Dry Aged у џему од лука",d:"Бургер, чедар, намаз, парадајз, џем од лука, ајсберг салата, помфрит"},
  en:{n:"Dry aged burger in onion jam",d:"Burger, cheddar, spread, tomato, onion jam, iceberg lettuce, fries"},
  ru:{n:"Бургер Dry Aged в луковом джеме",d:"Котлета, чеддер, соус, помидор, луковый джем, айсберг, картофель фри"},
  fr:{n:"Burger Dry Aged au confit d'oignon",d:"Steak haché, cheddar, sauce, tomate, confit d'oignon, laitue iceberg, frites"},
  de:{n:"Dry Aged Burger in Zwiebelmarmelade",d:"Burger, Cheddar, Aufstrich, Tomate, Zwiebelmarmelade, Eisbergsalat, Pommes"},
  it:{n:"Burger Dry Aged con confettura di cipolle",d:"Burger, cheddar, salsa, pomodoro, confettura di cipolle, lattuga iceberg, patatine"},
  es:{n:"Hamburguesa Dry Aged con mermelada de cebolla",d:"Hamburguesa, cheddar, salsa, tomate, mermelada de cebolla, lechuga iceberg, patatas fritas"}}},

{cat:"main",price:"15.00€",unit:"350 g",t:{
  me:{n:"Веган бургер",d:"Намаз, парадајз, зелена салата, џем од лука"},
  en:{n:"Vegan burger",d:"Spread, tomato, green lettuce, onion jam"},
  ru:{n:"Веган-бургер",d:"Соус, помидор, зелёный салат, луковый джем"},
  fr:{n:"Burger végan",d:"Sauce, tomate, salade verte, confit d'oignon"},
  de:{n:"Veganer Burger",d:"Aufstrich, Tomate, grüner Salat, Zwiebelmarmelade"},
  it:{n:"Burger vegano",d:"Salsa, pomodoro, insalata verde, confettura di cipolle"},
  es:{n:"Hamburguesa vegana",d:"Salsa, tomate, lechuga, mermelada de cebolla"}}},

{cat:"main",price:"22.00€",unit:"250 g",t:{
  me:{n:"Таљата рамстек у креми од тартуфа",d:"Рамстек, кромпир, тартуфи, зачини"},
  en:{n:"Tagliata ribeye in truffle cream",d:"Ribeye, potatoes, truffles, spices"},
  ru:{n:"Тальята рибай в трюфельном креме",d:"Рибай, картофель, трюфели, специи"},
  fr:{n:"Tagliata de faux-filet à la crème de truffe",d:"Faux-filet, pommes de terre, truffes, épices"},
  de:{n:"Tagliata Ribeye in Trüffelcreme",d:"Ribeye, Kartoffeln, Trüffel, Gewürze"},
  it:{n:"Tagliata di controfiletto in crema al tartufo",d:"Controfiletto, patate, tartufo, spezie"},
  es:{n:"Tagliata de entrecot en crema de trufa",d:"Entrecot, patatas, trufas, especias"}}},

{cat:"main",price:"14.00€",unit:"200 g",t:{
  me:{n:"Веганска пилетина са помфритом",d:"Биљна пилетина, помфрит"},
  en:{n:"Vegan chicken with fries",d:"Plant-based chicken, fries"},
  ru:{n:"Веган-курица с картофелем фри",d:"Растительная курица, картофель фри"},
  fr:{n:"Poulet végan avec frites",d:"Poulet végétal, frites"},
  de:{n:"Veganes Hähnchen mit Pommes",d:"Pflanzliches Hähnchen, Pommes"},
  it:{n:"Pollo vegano con patatine",d:"Pollo vegetale, patatine fritte"},
  es:{n:"Pollo vegano con patatas fritas",d:"Pollo vegetal, patatas fritas"}}},

/* ---------- ОБРОК САЛАТЕ / SALADS ---------- */
{cat:"salads",price:"16.00€",unit:"250 g",t:{
  me:{n:"Туна салата",d:"Туна, ајсберг, ђумбир, црни сусам"},
  en:{n:"Tuna salad",d:"Tuna, iceberg, ginger, black sesame"},
  ru:{n:"Салат с тунцом",d:"Тунец, айсберг, имбирь, чёрный кунжут"},
  fr:{n:"Salade de thon",d:"Thon, iceberg, gingembre, sésame noir"},
  de:{n:"Thunfischsalat",d:"Thunfisch, Eisberg, Ingwer, schwarzer Sesam"},
  it:{n:"Insalata di tonno",d:"Tonno, iceberg, zenzero, sesamo nero"},
  es:{n:"Ensalada de atún",d:"Atún, iceberg, jengibre, sésamo negro"}}},

{cat:"salads",price:"10.00€",unit:"350 g",t:{
  me:{n:"Цезар салата",d:"Пилетина, панчета, крутони, шери, микс салате, пармезан, дресинг"},
  en:{n:"Caesar salad",d:"Chicken, pancetta, croutons, cherry tomatoes, mixed greens, parmesan, dressing"},
  ru:{n:"Салат Цезарь",d:"Курица, панчетта, крутоны, черри, микс салата, пармезан, заправка"},
  fr:{n:"Salade César",d:"Poulet, pancetta, croûtons, tomates cerises, salade mêlée, parmesan, sauce"},
  de:{n:"Caesar Salat",d:"Hähnchen, Pancetta, Croutons, Kirschtomaten, Blattsalat, Parmesan, Dressing"},
  it:{n:"Insalata Caesar",d:"Pollo, pancetta, crostini, pomodorini, insalata mista, parmigiano, salsa"},
  es:{n:"Ensalada César",d:"Pollo, panceta, picatostes, cherry, hojas mixtas, parmesano, aderezo"}}},

{cat:"salads",price:"9.00€",unit:"250 g",t:{
  me:{n:"Грчка салата",d:"Парадајз, краставац, црвена и зелена паприка, маслине, фета, оригано"},
  en:{n:"Greek salad",d:"Tomato, cucumber, red and green peppers, olives, feta, oregano"},
  ru:{n:"Греческий салат",d:"Помидор, огурец, красный и зелёный перец, оливки, фета, орегано"},
  fr:{n:"Salade grecque",d:"Tomate, concombre, poivrons rouge et vert, olives, feta, origan"},
  de:{n:"Griechischer Salat",d:"Tomate, Gurke, rote und grüne Paprika, Oliven, Feta, Oregano"},
  it:{n:"Insalata greca",d:"Pomodoro, cetriolo, peperoni rossi e verdi, olive, feta, origano"},
  es:{n:"Ensalada griega",d:"Tomate, pepino, pimientos rojo y verde, aceitunas, feta, orégano"}}},

{cat:"salads",price:"9.00€",unit:"200 g",t:{
  me:{n:"Капрезе салата",d:"Моцарела, парадајз, песто"},
  en:{n:"Caprese salad",d:"Mozzarella, tomato, pesto"},
  ru:{n:"Салат капрезе",d:"Моцарелла, помидор, песто"},
  fr:{n:"Salade caprese",d:"Mozzarella, tomate, pesto"},
  de:{n:"Caprese-Salat",d:"Mozzarella, Tomate, Pesto"},
  it:{n:"Insalata caprese",d:"Mozzarella, pomodoro, pesto"},
  es:{n:"Ensalada caprese",d:"Mozzarella, tomate, pesto"}}},

/* ---------- ПИЦА / PIZZA  (440 g) ---------- */
{cat:"pizza",price:"11.00€",unit:"440 g",t:{
  me:{n:"Маргарита",d:"Сан Марцано пелат, моцарела, свјежи босиљак, Капуто брашно"},
  en:{n:"Margherita",d:"San Marzano tomato, mozzarella, fresh basil, Caputo flour"},
  ru:{n:"Маргарита",d:"Томаты Сан-Марцано, моцарелла, свежий базилик, мука Caputo"},
  fr:{n:"Margherita",d:"Tomate San Marzano, mozzarella, basilic frais, farine Caputo"},
  de:{n:"Margherita",d:"San-Marzano-Tomaten, Mozzarella, frisches Basilikum, Caputo-Mehl"},
  it:{n:"Margherita",d:"Pomodoro San Marzano, mozzarella, basilico fresco, farina Caputo"},
  es:{n:"Margarita",d:"Tomate San Marzano, mozzarella, albahaca fresca, harina Caputo"}}},

{cat:"pizza",price:"13.50€",unit:"440 g",t:{
  me:{n:"Капричоза",d:"Сан Марцано пелат, моцарела, Гранроса кувана шунка, артичоке, босиљак"},
  en:{n:"Capricciosa",d:"San Marzano tomato, mozzarella, Granrosa cooked ham, artichokes, basil"},
  ru:{n:"Капричоза",d:"Томаты Сан-Марцано, моцарелла, варёная ветчина Granrosa, артишоки, базилик"},
  fr:{n:"Capricciosa",d:"Tomate San Marzano, mozzarella, jambon cuit Granrosa, artichauts, basilic"},
  de:{n:"Capricciosa",d:"San-Marzano-Tomaten, Mozzarella, Granrosa Kochschinken, Artischocken, Basilikum"},
  it:{n:"Capricciosa",d:"Pomodoro San Marzano, mozzarella, prosciutto cotto Granrosa, carciofi, basilico"},
  es:{n:"Capricciosa",d:"Tomate San Marzano, mozzarella, jamón cocido Granrosa, alcachofas, albahaca"}}},

{cat:"pizza",price:"15.00€",unit:"440 g",t:{
  me:{n:"Диаволо",d:"Сан Марцано пелат, моцарела, вентричина салама, феферони"},
  en:{n:"Diavolo",d:"San Marzano tomato, mozzarella, ventricina salami, hot peppers"},
  ru:{n:"Дьяволо",d:"Томаты Сан-Марцано, моцарелла, салями вентричина, острый перец"},
  fr:{n:"Diavolo",d:"Tomate San Marzano, mozzarella, salami ventricina, piments"},
  de:{n:"Diavolo",d:"San-Marzano-Tomaten, Mozzarella, Ventricina-Salami, Peperoni"},
  it:{n:"Diavola",d:"Pomodoro San Marzano, mozzarella, salame ventricina, peperoncino"},
  es:{n:"Diavolo",d:"Tomate San Marzano, mozzarella, salami ventricina, guindillas"}}},

{cat:"pizza",price:"15.00€",unit:"440 g",t:{
  me:{n:"Пршута",d:"Сан Марцано пелат, моцарела, Парма пршут, рукола"},
  en:{n:"Prosciutto",d:"San Marzano tomato, mozzarella, Parma prosciutto, arugula"},
  ru:{n:"Прошутто",d:"Томаты Сан-Марцано, моцарелла, пармская ветчина, руккола"},
  fr:{n:"Prosciutto",d:"Tomate San Marzano, mozzarella, prosciutto de Parme, roquette"},
  de:{n:"Prosciutto",d:"San-Marzano-Tomaten, Mozzarella, Parmaschinken, Rucola"},
  it:{n:"Prosciutto",d:"Pomodoro San Marzano, mozzarella, prosciutto di Parma, rucola"},
  es:{n:"Prosciutto",d:"Tomate San Marzano, mozzarella, prosciutto de Parma, rúcula"}}},

{cat:"pizza",price:"16.00€",unit:"440 g",t:{
  me:{n:"Мортадела",d:"Песто од пистаћа, моцарела, Мортадела Болоња, страчатела"},
  en:{n:"Mortadella",d:"Pistachio pesto, mozzarella, Mortadella Bologna, stracciatella"},
  ru:{n:"Мортаделла",d:"Фисташковый песто, моцарелла, мортаделла Болонья, страчателла"},
  fr:{n:"Mortadelle",d:"Pesto de pistache, mozzarella, mortadelle de Bologne, stracciatella"},
  de:{n:"Mortadella",d:"Pistazienpesto, Mozzarella, Mortadella Bologna, Stracciatella"},
  it:{n:"Mortadella",d:"Pesto di pistacchio, mozzarella, mortadella di Bologna, stracciatella"},
  es:{n:"Mortadela",d:"Pesto de pistacho, mozzarella, mortadela Bolonia, stracciatella"}}},

{cat:"pizza",price:"16.00€",unit:"440 g",t:{
  me:{n:"Бресаола",d:"Сан Марцано пелат, моцарела, Грана Падано, бресаола, рукола"},
  en:{n:"Bresaola",d:"San Marzano tomato, mozzarella, Grana Padano, bresaola, arugula"},
  ru:{n:"Брезаола",d:"Томаты Сан-Марцано, моцарелла, Грана Падано, брезаола, руккола"},
  fr:{n:"Bresaola",d:"Tomate San Marzano, mozzarella, Grana Padano, bresaola, roquette"},
  de:{n:"Bresaola",d:"San-Marzano-Tomaten, Mozzarella, Grana Padano, Bresaola, Rucola"},
  it:{n:"Bresaola",d:"Pomodoro San Marzano, mozzarella, Grana Padano, bresaola, rucola"},
  es:{n:"Bresaola",d:"Tomate San Marzano, mozzarella, Grana Padano, bresaola, rúcula"}}},

{cat:"pizza",price:"15.00€",unit:"440 g",t:{
  me:{n:"Песто бурата (бијела)",d:"Моцарела, песто, сушени шери, бурата"},
  en:{n:"Pesto burrata (white)",d:"Mozzarella, pesto, sun-dried cherry tomatoes, burrata"},
  ru:{n:"Песто буррата (белая)",d:"Моцарелла, песто, вяленые черри, буррата"},
  fr:{n:"Pesto burrata (blanche)",d:"Mozzarella, pesto, tomates cerises séchées, burrata"},
  de:{n:"Pesto Burrata (weiß)",d:"Mozzarella, Pesto, getrocknete Kirschtomaten, Burrata"},
  it:{n:"Pesto burrata (bianca)",d:"Mozzarella, pesto, pomodorini secchi, burrata"},
  es:{n:"Pesto burrata (blanca)",d:"Mozzarella, pesto, cherry secos, burrata"}}},

{cat:"pizza",price:"12.00€",unit:"440 g",t:{
  me:{n:"Веган",d:"Сан Марцано пелат, моцарела, пармезан, тиквице, паприка, маслине"},
  en:{n:"Vegan",d:"San Marzano tomato, mozzarella, parmesan, zucchini, peppers, olives"},
  ru:{n:"Веган",d:"Томаты Сан-Марцано, моцарелла, пармезан, цукини, перец, оливки"},
  fr:{n:"Végan",d:"Tomate San Marzano, mozzarella, parmesan, courgette, poivrons, olives"},
  de:{n:"Vegan",d:"San-Marzano-Tomaten, Mozzarella, Parmesan, Zucchini, Paprika, Oliven"},
  it:{n:"Vegana",d:"Pomodoro San Marzano, mozzarella, parmigiano, zucchine, peperoni, olive"},
  es:{n:"Vegana",d:"Tomate San Marzano, mozzarella, parmesano, calabacín, pimientos, aceitunas"}}},

{cat:"pizza",price:"15.00€",unit:"440 g",t:{
  me:{n:"Нџуџа кобасица",d:"Сан Марцано пелат, моцарела, пармезан, нџуџа"},
  en:{n:"Nduja sausage",d:"San Marzano tomato, mozzarella, parmesan, nduja"},
  ru:{n:"Колбаса ндуйя",d:"Томаты Сан-Марцано, моцарелла, пармезан, ндуйя"},
  fr:{n:"Saucisse nduja",d:"Tomate San Marzano, mozzarella, parmesan, nduja"},
  de:{n:"Nduja-Wurst",d:"San-Marzano-Tomaten, Mozzarella, Parmesan, Nduja"},
  it:{n:"Nduja",d:"Pomodoro San Marzano, mozzarella, parmigiano, nduja"},
  es:{n:"Salchicha nduja",d:"Tomate San Marzano, mozzarella, parmesano, nduja"}}},

{cat:"pizza",price:"14.00€",unit:"440 g",t:{
  me:{n:"Сремуш",d:"Крем од сремуша, моцарела, пармезан, страчатела"},
  en:{n:"Wild garlic",d:"Wild garlic cream, mozzarella, parmesan, stracciatella"},
  ru:{n:"Черемша",d:"Крем из черемши, моцарелла, пармезан, страчателла"},
  fr:{n:"Ail des ours",d:"Crème d'ail des ours, mozzarella, parmesan, stracciatella"},
  de:{n:"Bärlauch",d:"Bärlauchcreme, Mozzarella, Parmesan, Stracciatella"},
  it:{n:"Aglio orsino",d:"Crema di aglio orsino, mozzarella, parmigiano, stracciatella"},
  es:{n:"Ajo de oso",d:"Crema de ajo de oso, mozzarella, parmesano, stracciatella"}}},

/* ---------- ПИЦА СЕНДВИЧИ / PIZZA SANDWICHES (370 g) ---------- */
{cat:"pizzasand",price:"10.00€",unit:"370 g",t:{
  me:{n:"Шунка",d:"Гранроса кувана шунка, гауда, моцарела, микс салате, маслиново уље"},
  en:{n:"Ham",d:"Granrosa cooked ham, gouda, mozzarella, mixed greens, olive oil"},
  ru:{n:"Ветчина",d:"Варёная ветчина Granrosa, гауда, моцарелла, микс салата, оливковое масло"},
  fr:{n:"Jambon",d:"Jambon cuit Granrosa, gouda, mozzarella, salade mêlée, huile d'olive"},
  de:{n:"Schinken",d:"Granrosa Kochschinken, Gouda, Mozzarella, Blattsalat, Olivenöl"},
  it:{n:"Prosciutto cotto",d:"Prosciutto cotto Granrosa, gouda, mozzarella, insalata mista, olio d'oliva"},
  es:{n:"Jamón",d:"Jamón cocido Granrosa, gouda, mozzarella, ensalada mixta, aceite de oliva"}}},

{cat:"pizzasand",price:"13.50€",unit:"370 g",t:{
  me:{n:"Пршута",d:"Пршут, гауда, моцарела, парадајз, рукола, маслиново уље"},
  en:{n:"Prosciutto",d:"Prosciutto, gouda, mozzarella, tomato, arugula, olive oil"},
  ru:{n:"Прошутто",d:"Прошутто, гауда, моцарелла, помидор, руккола, оливковое масло"},
  fr:{n:"Prosciutto",d:"Prosciutto, gouda, mozzarella, tomate, roquette, huile d'olive"},
  de:{n:"Prosciutto",d:"Prosciutto, Gouda, Mozzarella, Tomate, Rucola, Olivenöl"},
  it:{n:"Prosciutto",d:"Prosciutto, gouda, mozzarella, pomodoro, rucola, olio d'oliva"},
  es:{n:"Prosciutto",d:"Prosciutto, gouda, mozzarella, tomate, rúcula, aceite de oliva"}}},

{cat:"pizzasand",price:"12.00€",unit:"370 g",t:{
  me:{n:"Мортадела",d:"Мортадела Болоња, гауда, проволоне, песто од пистаћа, страчатела, маслиново уље"},
  en:{n:"Mortadella",d:"Mortadella Bologna, gouda, provolone, pistachio pesto, stracciatella, olive oil"},
  ru:{n:"Мортаделла",d:"Мортаделла Болонья, гауда, проволоне, фисташковый песто, страчателла, оливковое масло"},
  fr:{n:"Mortadelle",d:"Mortadelle de Bologne, gouda, provolone, pesto de pistache, stracciatella, huile d'olive"},
  de:{n:"Mortadella",d:"Mortadella Bologna, Gouda, Provolone, Pistazienpesto, Stracciatella, Olivenöl"},
  it:{n:"Mortadella",d:"Mortadella di Bologna, gouda, provolone, pesto di pistacchio, stracciatella, olio d'oliva"},
  es:{n:"Mortadela",d:"Mortadela Bolonia, gouda, provolone, pesto de pistacho, stracciatella, aceite de oliva"}}},

{cat:"pizzasand",price:"13.00€",unit:"370 g",t:{
  me:{n:"Диаволо",d:"Вентричина салама, моцарела, гауда, микс салате, маслиново уље"},
  en:{n:"Diavolo",d:"Ventricina salami, mozzarella, gouda, mixed greens, olive oil"},
  ru:{n:"Дьяволо",d:"Салями вентричина, моцарелла, гауда, микс салата, оливковое масло"},
  fr:{n:"Diavolo",d:"Salami ventricina, mozzarella, gouda, salade mêlée, huile d'olive"},
  de:{n:"Diavolo",d:"Ventricina-Salami, Mozzarella, Gouda, Blattsalat, Olivenöl"},
  it:{n:"Diavola",d:"Salame ventricina, mozzarella, gouda, insalata mista, olio d'oliva"},
  es:{n:"Diavolo",d:"Salami ventricina, mozzarella, gouda, ensalada mixta, aceite de oliva"}}},

{cat:"pizzasand",price:"15.00€",unit:"370 g",t:{
  me:{n:"Бурата",d:"Бурата, моцарела, песто, шери, свјежи босиљак, маслиново уље"},
  en:{n:"Burrata",d:"Burrata, mozzarella, pesto, cherry tomatoes, fresh basil, olive oil"},
  ru:{n:"Буррата",d:"Буррата, моцарелла, песто, черри, свежий базилик, оливковое масло"},
  fr:{n:"Burrata",d:"Burrata, mozzarella, pesto, tomates cerises, basilic frais, huile d'olive"},
  de:{n:"Burrata",d:"Burrata, Mozzarella, Pesto, Kirschtomaten, frisches Basilikum, Olivenöl"},
  it:{n:"Burrata",d:"Burrata, mozzarella, pesto, pomodorini, basilico fresco, olio d'oliva"},
  es:{n:"Burrata",d:"Burrata, mozzarella, pesto, cherry, albahaca fresca, aceite de oliva"}}},

/* ---------- ДОДАЦИ / ADD-ONS ---------- */
{cat:"addons",price:"4.40€",unit:"30 g",t:{me:{n:"Парма пршут"},en:{n:"Parma prosciutto"},ru:{n:"Пармская ветчина"},fr:{n:"Prosciutto de Parme"},de:{n:"Parmaschinken"},it:{n:"Prosciutto di Parma"},es:{n:"Prosciutto de Parma"}}},
{cat:"addons",price:"3.70€",unit:"30 g",t:{me:{n:"Гранроса шунка"},en:{n:"Granrosa ham"},ru:{n:"Ветчина Granrosa"},fr:{n:"Jambon Granrosa"},de:{n:"Granrosa Schinken"},it:{n:"Prosciutto cotto Granrosa"},es:{n:"Jamón Granrosa"}}},
{cat:"addons",price:"3.50€",unit:"250 g",t:{me:{n:"Фокача"},en:{n:"Focaccia"},ru:{n:"Фокачча"},fr:{n:"Focaccia"},de:{n:"Focaccia"},it:{n:"Focaccia"},es:{n:"Focaccia"}}},
{cat:"addons",price:"3.90€",unit:"30 g",t:{me:{n:"Вентричина салама"},en:{n:"Ventricina salami"},ru:{n:"Салями вентричина"},fr:{n:"Salami ventricina"},de:{n:"Ventricina-Salami"},it:{n:"Salame ventricina"},es:{n:"Salami ventricina"}}},
{cat:"addons",price:"4.90€",unit:"30 g",t:{me:{n:"Бурата"},en:{n:"Burrata"},ru:{n:"Буррата"},fr:{n:"Burrata"},de:{n:"Burrata"},it:{n:"Burrata"},es:{n:"Burrata"}}},

/* ---------- КОЛАЧИ / CAKES ---------- */
{cat:"cakes",price:"4.80€",unit:"180 g",t:{me:{n:"Чоко љешник тарт"},en:{n:"Chocolate hazelnut tart"},ru:{n:"Шоколадно-ореховый тарт"},fr:{n:"Tarte chocolat-noisette"},de:{n:"Schoko-Haselnuss-Tarte"},it:{n:"Crostata cioccolato e nocciola"},es:{n:"Tarta de chocolate y avellana"}}},
{cat:"cakes",price:"5.80€",unit:"200 g",t:{me:{n:"Пистаћ малина тарт"},en:{n:"Pistachio raspberry tart"},ru:{n:"Тарт фисташка-малина"},fr:{n:"Tarte pistache-framboise"},de:{n:"Pistazien-Himbeer-Tarte"},it:{n:"Crostata pistacchio e lampone"},es:{n:"Tarta de pistacho y frambuesa"}}},
{cat:"cakes",price:"4.80€",unit:"180 g",t:{me:{n:"Лимун тарт"},en:{n:"Lemon tart"},ru:{n:"Лимонный тарт"},fr:{n:"Tarte au citron"},de:{n:"Zitronentarte"},it:{n:"Crostata al limone"},es:{n:"Tarta de limón"}}},
{cat:"cakes",price:"3.90€",unit:"140 g",t:{me:{n:"Еклер кикирики"},en:{n:"Peanut butter éclair"},ru:{n:"Эклер с арахисовой пастой"},fr:{n:"Éclair au beurre de cacahuète"},de:{n:"Erdnussbutter-Éclair"},it:{n:"Éclair al burro d'arachidi"},es:{n:"Éclair de mantequilla de cacahuete"}}},
{cat:"cakes",price:"3.90€",unit:"140 g",t:{me:{n:"Еклер ванила"},en:{n:"Vanilla éclair"},ru:{n:"Эклер ваниль"},fr:{n:"Éclair vanille"},de:{n:"Vanille-Éclair"},it:{n:"Éclair alla vaniglia"},es:{n:"Éclair de vainilla"}}},
{cat:"cakes",price:"3.00€",unit:"90 g",t:{me:{n:"Шу"},en:{n:"Choux"},ru:{n:"Шу"},fr:{n:"Chou"},de:{n:"Windbeutel"},it:{n:"Bignè"},es:{n:"Petisú"}}},
{cat:"cakes",price:"5.00€",unit:"200 g",t:{me:{n:"Сан Себастиан"},en:{n:"San Sebastián cheesecake"},ru:{n:"Чизкейк Сан-Себастьян"},fr:{n:"Cheesecake San Sebastián"},de:{n:"San-Sebastián-Käsekuchen"},it:{n:"Cheesecake San Sebastián"},es:{n:"Tarta de queso San Sebastián"}}},
];

/* ============================== ПИЋА ============================== */
/* nazivi pića su internacionalni; me/en + prevedene grupe/opisi */
const D = (cat,group,price,unit,me,en,dme,den)=>({cat,group,price,unit,
  t:{me:{n:me,d:dme||""},en:{n:en||me,d:den||dme||""}}});

const DRINKS = [
/* --- КАФА --- */
D("coffee","arabica","2.40€","0.03 l","Биолошка органика","Biological organic","Бленд арабике из Бразила; арома бадема и чоколаде, кремаста структура","Brazilian arabica blend; almond & chocolate aroma, creamy texture"),
D("coffee","arabica","2.00€","0.03 l","Кремозо","Cremoso","Вијетнам/Бразил; љешник и карамела (арабика 50% / робуста 50%)","Vietnam/Brazil; hazelnut & caramel (arabica 50% / robusta 50%)"),
D("coffee","classic","2.00€","0.03 l","Еспресо","Espresso"),
D("coffee","classic","2.30€","0.04 l","Макијато","Macchiato"),
D("coffee","classic","2.80€","0.10 l","Капучино","Cappuccino"),
D("coffee","classic","2.80€","0.10 l","Еспресо са топлим млијеком","Espresso with hot milk"),
D("coffee","classic","3.30€","0.10 l","Еспресо са сојиним млијеком","Espresso with soy milk"),
D("coffee","classic","3.00€","0.03 l","Кафа без кофеина","Decaffeinated coffee"),
D("coffee","classic","3.00€","0.20 l","Лате","Latte"),
D("coffee","classic","2.30€","0.20 l","Американо","Americano"),
D("coffee","classic","2.50€","0.10 l","Кувана кафа","Turkish coffee"),
D("coffee","classic","3.20€","0.20 l","Нескафе","Nescafé"),
D("coffee","classic","3.90€","0.20 l","Нескафе са сојиним млијеком","Nescafé with soy milk"),
D("coffee","classic","3.30€","0.20 l","Кафа са шлагом","Coffee with whipped cream"),
D("coffee","classic","3.30€","0.20 l","Топла чоколада","Hot chocolate"),
D("coffee","latteflavors","4.90€","","Чоколадни кекс","Chocolate cookie"),
D("coffee","latteflavors","4.90€","","Бијела чоколада","White chocolate"),
D("coffee","latteflavors","4.90€","","Печени љешник","Roasted hazelnut"),
D("coffee","latteflavors","4.90€","","Карамела","Caramel"),
D("coffee","tea","2.90€","0.20 l","Селекција чајева","Tea selection"),
D("coffee","coffeeextras","0.40€","0.10 l","Екстра млијеко","Extra milk"),
D("coffee","coffeeextras","0.70€","0.10 l","Екстра сојино млијеко","Extra soy milk"),
D("coffee","coffeeextras","0.40€","30 g","Шлаг","Whipped cream"),
D("coffee","coffeeextras","2.00€","120 g","Шлаг — порција","Whipped cream — portion"),

/* --- СОКОВИ И ПИЋА --- */
D("drinks","icetea","5.50€","0.30 l","Тропско воће","Tropical fruit"),
D("drinks","icetea","5.50€","0.30 l","Малина","Raspberry"),
D("drinks","icetea","5.50€","0.30 l","Бресква","Peach"),
D("drinks","icetea","5.50€","0.30 l","Јагода","Strawberry"),
D("drinks","water","2.00€","0.25 l","Негазирана вода","Still water"),
D("drinks","water","2.00€","0.25 l","Газирана вода","Sparkling water"),
D("drinks","water","1.60€","0.20 l","Сода вода","Soda water"),
D("drinks","fresh","4.60€","0.25 l","Поморанџа","Orange"),
D("drinks","fresh","4.60€","0.25 l","Грејпфрут","Grapefruit"),
D("drinks","fresh","3.30€","0.30 l","Лимунада","Lemonade"),
D("drinks","fresh","5.50€","0.30 l","Ананас","Pineapple"),
D("drinks","fresh","5.50€","0.30 l","Јабука","Apple"),
D("drinks","fresh","4.40€","0.30 l","Америчка лимунада","American lemonade"),
D("drinks","fresh","4.90€","0.30 l","Микс здравља","Healthy mix","Ананас, поморанџа, јабука, ђумбир","Pineapple, orange, apple, ginger"),
D("drinks","fresh","4.90€","0.30 l","Микс баланс","Mix balance","Шаргарепа, јабука, поморанџа, лимун","Carrot, apple, orange, lemon"),
D("drinks","fresh","4.90€","0.30 l","Микс витамин","Mix vitamin","Лимета, ђумбир, поморанџа, грејп","Lime, ginger, orange, grapefruit"),
D("drinks","lemonade","5.50€","0.30 l","Бресква","Peach"),
D("drinks","lemonade","5.50€","0.30 l","Јагода","Strawberry"),
D("drinks","lemonade","5.50€","0.30 l","Малина","Raspberry"),
D("drinks","lemonade","5.50€","0.30 l","Тропско воће","Tropical fruit"),
D("drinks","softdrinks","3.20€","0.25 l","Pepsi","Pepsi"),
D("drinks","softdrinks","3.20€","0.25 l","Pepsi Max","Pepsi Max"),
D("drinks","softdrinks","3.20€","0.25 l","Mirinda Orange","Mirinda Orange"),
D("drinks","softdrinks","3.20€","0.25 l","7Up","7Up"),
D("drinks","softdrinks","3.20€","0.25 l","Evervess Bitter Lemon","Evervess Bitter Lemon"),
D("drinks","softdrinks","4.90€","0.20 l","Fever-Tree Tonic","Fever-Tree Tonic Water"),
D("drinks","softdrinks","4.90€","0.20 l","Fever-Tree Ginger Beer","Fever-Tree Ginger Beer"),
D("drinks","softdrinks","4.90€","0.20 l","Fever-Tree Sicilian Lemonade","Fever-Tree Sicilian Lemonade"),
D("drinks","softdrinks","4.90€","0.20 l","Fever-Tree Pink Grapefruit","Fever-Tree Pink Grapefruit"),
D("drinks","softdrinks","2.80€","0.25 l","Негазирани сокови","Non-carbonated juices","Јабука, поморанџа, бресква, јагода, боровница","Apple, orange, peach, strawberry, blueberry"),
D("drinks","softdrinks","3.00€","0.20 l","Cedevita","Cedevita"),
D("drinks","energy","5.50€","0.20 l","Red Bull","Red Bull"),
D("drinks","draft","3.20€","0.30 l","Nikšićko","Nikšićko"),
D("drinks","draft","3.90€","0.25 l","Guinness","Guinness"),
D("drinks","draft","6.80€","0.50 l","Guinness","Guinness"),
D("drinks","draft","4.60€","0.33 l","Hoegaarden","Hoegaarden"),
D("drinks","bottlebeer","3.80€","0.33 l","Никшићко свијетло","Nikšićko Light"),
D("drinks","bottlebeer","3.80€","0.33 l","Никшићко тамно","Nikšićko Dark"),
D("drinks","bottlebeer","5.90€","0.35 l","Corona","Corona"),
D("drinks","bottlebeer","3.80€","0.25 l","Bavaria","Bavaria"),

/* --- ЖЕСТОКА ПИЋА --- */
D("spirits","rakija","4.60€","0.03 l","Дуња","Quince rakija"),
D("spirits","rakija","4.60€","0.03 l","Кајсија","Apricot rakija"),
D("spirits","rakija","4.60€","0.03 l","Виљамовка","Williams pear rakija"),
D("spirits","rakija","4.60€","0.03 l","Шљива","Plum rakija"),
D("spirits","rakija","4.60€","0.03 l","Завет Медица","Zavet Medica (honey)"),
D("spirits","premiumrakija","5.90€","0.03 l","Завет 5 г. — специјална едиција","Zavet 5 Y.O. Special Edition"),
D("spirits","premiumrakija","14.00€","0.03 l","Завет 10 г. — лимитирана едиција","Zavet 10 Y.O. Limited Edition"),
D("spirits","premiumrakija","20.00€","0.03 l","Завет 190 — лимитирана едиција 15 г.","Zavet 190 Limited Edition 15 Y.O."),
D("spirits","whiskey","3.70€","0.03 l","Jameson","Jameson"),
D("spirits","whiskey","4.40€","0.03 l","Jameson Black Barrel","Jameson Black Barrel"),
D("spirits","whiskey","7.50€","0.03 l","Chivas Regal 12","Chivas Regal 12 Y.O."),
D("spirits","whiskey","6.80€","0.03 l","Redbreast 12","Redbreast 12"),
D("spirits","whiskey","8.20€","0.03 l","Aberlour","Aberlour"),
D("spirits","brandy","5.80€","0.03 l","Ararat Akhtamar 10","Ararat Akhtamar 10 Y.O."),
D("spirits","brandy","13.00€","0.03 l","Ararat Nairi 20","Ararat Nairi 20 Y.O."),
D("spirits","cognac","4.70€","0.03 l","Martell VS","Martell VS"),
D("spirits","cognac","7.40€","0.03 l","Martell VSOP","Martell VSOP"),
D("spirits","cognac","24.00€","0.03 l","Martell XO","Martell XO"),
D("spirits","vodka","3.30€","0.03 l","Absolut","Absolut"),
D("spirits","vodka","6.50€","0.03 l","Grey Goose","Grey Goose"),
D("spirits","gin","3.30€","0.03 l","Beefeater London Dry","Beefeater London Dry"),
D("spirits","gin","6.50€","0.03 l","Malfy Originale","Malfy Originale"),
D("spirits","gin","9.00€","0.03 l","Monkey 47","Monkey 47"),
D("spirits","tequila","3.50€","0.03 l","Olmeca Altos Plata","Olmeca Altos Plata"),
D("spirits","tequila","3.50€","0.03 l","Olmeca Altos Reposado","Olmeca Altos Reposado"),
D("spirits","digestive","3.50€","0.03 l","Jägermeister","Jägermeister"),
D("spirits","digestive","3.20€","0.03 l","Pelinkovac","Pelinkovac"),
D("spirits","digestive","3.50€","0.03 l","Ramazzotti","Ramazzotti"),
D("spirits","digestive","3.50€","0.03 l","Amaro Montenegro","Amaro Montenegro"),
D("spirits","digestive","3.50€","0.03 l","Limoncello","Limoncello"),
D("spirits","digestive","3.50€","0.03 l","Campari","Campari"),
D("spirits","digestive","3.50€","0.03 l","Aperol","Aperol"),
D("spirits","digestive","3.50€","0.03 l","Baileys","Baileys"),
D("spirits","rum","3.50€","0.03 l","Havana Club 3 Años","Havana Club 3 Años"),
D("spirits","rum","4.50€","0.03 l","Havana Club 7 Años","Havana Club 7 Años"),
D("spirits","vermouth","3.50€","0.05 l","Martini Bianco","Martini Bianco"),
D("spirits","vermouth","3.50€","0.05 l","Martini Rosso","Martini Rosso"),
D("spirits","vermouth","3.50€","0.05 l","Martini Extra Dry","Martini Extra Dry"),
D("spirits","cider","4.50€","0.33 l","Aspall","Aspall","Јабука и малина","Apple & raspberry"),
D("spirits","cider","4.50€","0.33 l","Somersby","Somersby","Јабука, крушка, боровница, манго","Apple, pear, blueberry, mango"),
D("spirits","cider","4.50€","0.33 l","Somersby 0.0%","Somersby 0.0%","Безалкохолни — јагода и лајм","Non-alcoholic — strawberry & lime"),
D("spirits","cocktails","8.50€","0.30 l","Limoncello Spritz","Limoncello Spritz","Лимончело, просеко, сода","Limoncello, prosecco, soda"),
D("spirits","cocktails","8.50€","0.30 l","Campari Spritz","Campari Spritz","Кампари, просеко, сода","Campari, prosecco, soda"),
D("spirits","cocktails","8.50€","0.30 l","Hugo","Hugo","St-Germain, мента, просеко, сода","St-Germain, mint, prosecco, soda"),
D("spirits","cocktails","8.50€","0.30 l","Mimosa","Mimosa","Просеко, сок од поморанџе, сода","Prosecco, orange juice, soda"),
D("spirits","cocktails","8.50€","0.30 l","Aperol Spritz","Aperol Spritz","Аперол, просеко, сода","Aperol, prosecco, soda"),
D("spirits","cocktails","9.00€","0.30 l","Mojito","Mojito","Рум, мента, лимета, сода","Rum, mint, lime, soda"),
D("spirits","cocktails","8.00€","0.30 l","Jameson, Ginger Ale & Lime","Jameson, Ginger Ale & Lime"),

/* --- ВИНСКА КАРТА --- */
/* по чаши (0.15 l) */
D("wine","glass","6.50€","0.15 l","Prosecco Extra Dry — Scanavino, Piemonte, IT","Prosecco Extra Dry — Scanavino, Piemonte, IT"),
D("wine","glass","6.00€","0.15 l","Paradigma — Milović, Briška gora, ME (Chardonnay)","Paradigma — Milović, Briška gora, ME (Chardonnay)"),
D("wine","glass","6.50€","0.15 l","Malvazija — Patrimonio, Bobija, ME","Malvazija — Patrimonio, Bobija, ME"),
D("wine","glass","6.50€","0.15 l","Pinot Grigio — Cesari, Venezie, IT","Pinot Grigio — Cesari, Venezie, IT"),
D("wine","glass","6.00€","0.15 l","Arhonto Rosé — Krgović, Rogami, ME","Arhonto Rosé — Krgović, Rogami, ME"),
D("wine","glass","6.00€","0.15 l","Status Barrique — Milović, Briška gora, ME (Vranac)","Status Barrique — Milović, Briška gora, ME (Vranac)"),
D("wine","glass","6.50€","0.15 l","Barbera d'Asti — Scanavino, Piemonte, IT","Barbera d'Asti — Scanavino, Piemonte, IT"),
D("wine","glass","28.00€","1.00 l","Cava Sangria","Cava Sangria"),
/* пјенушава (0.75 l) */
D("wine","sparkling","28.50€","0.75 l","Prosecco Extra Dry — Scanavino, Piemonte, IT","Prosecco Extra Dry — Scanavino, Piemonte, IT"),
D("wine","sparkling","26.00€","0.75 l","Prosecco Extra Dry — Costaros, Veneto, IT (Glera)","Prosecco Extra Dry — Costaros, Veneto, IT (Glera)"),
D("wine","sparkling","32.00€","0.75 l","Prosecco — Lars, Veneto, IT (Glera)","Prosecco — Lars, Veneto, IT (Glera)"),
D("wine","sparkling","45.00€","0.75 l","Chandon Garden Spritz","Chandon Garden Spritz"),
/* бијела (0.75 l) */
D("wine","white","29.00€","0.75 l","Paradigma — Milović, Briška gora, ME","Paradigma — Milović, Briška gora, ME"),
D("wine","white","34.00€","0.75 l","Chardonnay Zrak — Patrimonio, Bobija, ME","Chardonnay Zrak — Patrimonio, Bobija, ME"),
D("wine","white","31.00€","0.75 l","Malvazija — Patrimonio, Bobija, ME","Malvazija — Patrimonio, Bobija, ME"),
D("wine","white","42.00€","0.75 l","Miander — Patrimonio, Bobija, ME (Sauvignon)","Miander — Patrimonio, Bobija, ME (Sauvignon)"),
D("wine","white","38.00€","0.75 l","Pinot Grigio — Cesari, Venezie, IT","Pinot Grigio — Cesari, Venezie, IT"),
D("wine","white","44.00€","0.75 l","Malvazija — Deklić, Istra, HR","Malvazija — Deklić, Istra, HR"),
D("wine","white","47.00€","0.75 l","Muškat žuti — Damjanić, Istra, HR","Muškat žuti — Damjanić, Istra, HR"),
D("wine","white","46.00€","0.75 l","Sauvignon Blanc Reserva — Casillero del Diablo, CL","Sauvignon Blanc Reserva — Casillero del Diablo, CL"),
/* розе (0.75 l) */
D("wine","rose","33.00€","0.75 l","Arhonto Rosé — Krgović, Rogami, ME","Arhonto Rosé — Krgović, Rogami, ME"),
D("wine","rose","33.00€","0.75 l","Ali Rosé — Frescobaldi, Toscana, IT (Syrah, Vermentino)","Ali Rosé — Frescobaldi, Toscana, IT (Syrah, Vermentino)"),
/* црвена (0.75 l) */
D("wine","red","28.00€","0.75 l","Status — Milović, Briška gora, ME (Vranac)","Status — Milović, Briška gora, ME (Vranac)"),
D("wine","red","36.00€","0.75 l","Status Barrique — Milović, Briška gora, ME","Status Barrique — Milović, Briška gora, ME"),
D("wine","red","64.00€","0.75 l","Status Rezerva — Milović, Briška gora, ME","Status Rezerva — Milović, Briška gora, ME"),
D("wine","red","39.00€","0.75 l","Barbera d'Asti — Scanavino, Piemonte, IT","Barbera d'Asti — Scanavino, Piemonte, IT"),
D("wine","red","68.00€","0.75 l","Barolo — Scanavino, Piemonte, IT (Nebbiolo)","Barolo — Scanavino, Piemonte, IT (Nebbiolo)"),
D("wine","red","41.00€","0.75 l","Cabernet Sauvignon — Casillero del Diablo, CL","Cabernet Sauvignon — Casillero del Diablo, CL"),
/* шампањац */
D("wine","champagne","150.00€","0.75 l","Moët & Chandon Impérial Brut — Champagne, FR","Moët & Chandon Impérial Brut — Champagne, FR"),
];

window.MENU = FOOD.concat(DRINKS);
