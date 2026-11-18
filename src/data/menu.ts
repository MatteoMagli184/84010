/**
 * Menù di 84010 Pizzeria, trascritto dal PDF del cliente (public/menu-84010.pdf).
 * Prezzi in euro. Per aggiornare il sito basta modificare questo file:
 * la sezione Menù e i dati strutturati per Google (schema Menu) si rigenerano.
 *
 * ⚠️ DA CONFERMARE con il cliente:
 * - CRIATÙ: nel PDF ha la stessa descrizione di «Würstel e patate» (probabile refuso).
 * - Birre: nel PDF «0,2 CL / 0,4 CL / 0,5 CL» → qui scritto in litri (0,2 l …).
 */

export interface MenuItem {
  name: string;
  price: number;
  desc?: string;
}
export interface MenuGroup {
  title?: string;
  note?: string;
  items: MenuItem[];
}
export interface MenuSection {
  id: string;
  /** Etichetta breve della linguetta */
  tab: string;
  title: string;
  note?: string;
  groups: MenuGroup[];
}

const NO_LATTOSIO = 'Alternativa senza lattosio disponibile: + 2 €';

export const menu: MenuSection[] = [
  {
    id: 'proposte',
    tab: 'Proposte',
    title: 'Le nostre proposte',
    note: NO_LATTOSIO,
    groups: [
      {
        items: [
          { name: 'Valico', price: 12, desc: 'Mozzarella fiordilatte, melanzane a funghetto, scamorza affumicata, olio all’aglio.' },
          { name: 'Luna di Sorrento', price: 12, desc: 'Ricotta di bufala DOP, pomodoro San Marzano, mozzarella fiordilatte, salame Napoli, scamorza affumicata, filetti di funghi porcini, basilico fresco.' },
          { name: 'Vulcan', price: 14, desc: 'Mozzarella fiordilatte, salame piccante, filetti di funghi porcini, stracciata di bufala, olio EVO, flakes di peperoncino, basilico fresco.' },
          { name: 'Sciurella', price: 13, desc: 'Mozzarella fiordilatte, crema di zucca violina, guanciale croccante, fiori di zucca, scaglie di pecorino di grotta stagionato.' },
          { name: 'A’ Mulignan', price: 13, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, chips di melanzane fritte, prosciutto cotto affumicato, cialde di Parmigiano Reggiano.' },
          { name: 'Cetara', price: 13, desc: 'Mozzarella fiordilatte, filetti di tonno, crudité di scarola riccia, olive di Gaeta DOP, colatura di alici di Cetara, zest di limone.' },
          { name: 'Scapece', price: 15, desc: 'Mozzarella fiordilatte, zucchine alla scapece, tartare di gambero rosso, mousse di ricotta di bufala.' },
          { name: 'Ravello', price: 12, desc: 'Sugo di datterino giallo, filetto di datterino rosso, pinoli tostati, provola di Agerola, olio EVO, gel al basilico fresco.' },
        ],
      },
    ],
  },
  {
    id: 'tradizione',
    tab: 'Tradizione',
    title: 'La tradizione',
    note: NO_LATTOSIO,
    groups: [
      {
        items: [
          { name: 'Margherita', price: 7, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, olio EVO, basilico fresco.' },
          { name: 'Napoli', price: 8, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, alici, origano, olio EVO, basilico fresco.' },
          { name: 'Margherita DOP', price: 9, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, ciliegine di bufala DOP, olio EVO, basilico fresco.' },
          { name: 'Marinara', price: 6, desc: 'Pomodoro San Marzano, aglio fresco, origano, olio EVO.' },
          { name: 'Cosacca', price: 7, desc: 'Pomodoro San Marzano, pecorino, olio EVO, basilico fresco.' },
          { name: 'Provola e pepe', price: 8, desc: 'Pomodoro San Marzano, provola di Agerola, pepe, olio EVO, basilico fresco.' },
          { name: 'Salsiccia e friarielli', price: 10, desc: 'Mozzarella fiordilatte, salsiccia, broccolo napoletano, olio EVO, basilico fresco.' },
          { name: 'Würstel e patate', price: 8, desc: 'Mozzarella fiordilatte, würstel artigianali, patate fritte.' },
          { name: 'Capricciosa', price: 10, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, prosciutto cotto, olive nere, carciofi, funghi champignon.' },
          { name: 'Ortolana', price: 9.5, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, zucchine, melanzane, peperoni, cipolla, olio EVO, basilico fresco.' },
          { name: '4 formaggi', price: 9.5, desc: 'Mozzarella fiordilatte, gorgonzola dolce, scamorza, Parmigiano Reggiano.' },
          { name: 'Sole', price: 9, desc: 'Mozzarella fiordilatte, panna, mais, prosciutto cotto.' },
          { name: 'Diavola', price: 9, desc: 'Pomodoro San Marzano, mozzarella fiordilatte, salame piccante, olio EVO, basilico fresco.' },
          { name: 'Principe', price: 11, desc: 'Mozzarella fiordilatte, crocchè di patate artigianale, pancetta e scamorza affumicata.' },
        ],
      },
    ],
  },
  {
    id: 'fritte',
    tab: 'Pizze fritte',
    title: 'Le pizze fritte',
    note: NO_LATTOSIO,
    groups: [
      {
        items: [
          { name: 'Classic', price: 12, desc: 'Ricotta di bufala DOP, pepe nero, cicoli.' },
          { name: 'Criatù', price: 10, desc: 'Mozzarella fiordilatte, würstel artigianali, patate fritte.' },
          { name: 'Corbara', price: 10, desc: 'Mozzarella fiordilatte, pomodorino Corbarino, origano, basilico fresco.' },
        ],
      },
    ],
  },
  {
    id: 'antipasti',
    tab: 'Antipasti',
    title: 'Gli antipasti',
    groups: [
      {
        items: [
          { name: 'Polpette tricolore', price: 10, desc: 'Polpette di macinato di bovino e suino al sugo di pomodoro, Parmigiano Reggiano e basilico fresco.' },
          { name: 'Parmigiana', price: 8, desc: 'Parmigiana di melanzane con crostone di pane cafone croccante.' },
          { name: 'Tagliere 84010 – per 2 persone', price: 22, desc: 'Salumi, formaggi e sottoli artigianali tipici della Costiera Amalfitana con side di panificati artigianali campani.' },
          { name: 'Paestum', price: 12, desc: 'Prosciutto crudo San Daniele, mozzarella di bufala Campana DOP, taralli artigianali sugna, pepe e mandorle.' },
          { name: 'Fresella', price: 8, desc: 'Pane biscottato di grano duro, filetti di pomodoro, alici di Cetara, olio EVO e basilico fresco.' },
        ],
      },
    ],
  },
  {
    id: 'fritti',
    tab: 'Fritti',
    title: 'I fritti',
    groups: [
      {
        items: [
          { name: 'Tris di montanarine', price: 9, desc: 'Ragù napoletano, Genovese, stracciata di bufala e alici di Cetara.' },
          { name: 'Crocchè artigianale', price: 3, desc: 'Crocchè di patate con cuore di provola filante. Alternativa senza glutine e lattosio + 1 €.' },
          { name: 'Frittatina di pasta', price: 3.5, desc: 'Classica, Nerano, salsiccia e friarielli e cacio e pepe. Alternativa senza glutine e lattosio + 1 €.' },
          { name: 'Cuoppo fritto', price: 17 },
          { name: 'Frittura di ciuffi, calamari e gamberi', price: 20 },
          { name: 'Frittura di alici', price: 10 },
          { name: 'Fiori di zucca (3 pz)', price: 6 },
          { name: 'Mozzarella in carrozza', price: 4 },
          { name: 'Patatine fritte', price: 4 },
          { name: 'Zeppoline di alghe artigianali', price: 3 },
        ],
      },
    ],
  },
  {
    id: 'insalate',
    tab: 'Insalate',
    title: 'Le insalate',
    note: 'Tutte le insalate sono accompagnate da un cestino di panificati. Alternativa senza lattosio disponibile: + 2 €',
    groups: [
      {
        items: [
          { name: 'Caprese', price: 10, desc: 'Mozzarella di bufala DOP, pomodoro cuore di bue, origano, sale, olio EVO, basilico fresco.' },
          { name: 'Amalfi', price: 13, desc: 'Foglioline di soncino, carpaccio di salmone selvaggio affumicato, filetto di tonno al naturale, pomodorini ciliegini, semi di zucca, sale, olio EVO.' },
          { name: 'Pompei', price: 12, desc: 'Insalata lattuga, filetti di petto di pollo, olive verdi, cetrioli, sale, olio EVO.' },
          { name: 'Insalata verde', price: 5, desc: 'Insalata lattuga, rucola, radicchio.' },
        ],
      },
    ],
  },
  {
    id: 'cuzzitielli',
    tab: 'Panuozzi',
    title: 'Cuzzitielli e panuozzi',
    note: NO_LATTOSIO,
    groups: [
      {
        title: 'I cuzzitielli',
        items: [
          { name: 'A’ Scarpetta', price: 10, desc: 'Polpettine di bovino e suino in ragù napoletano con pecorino.' },
          { name: 'A’ Malafemmena', price: 10, desc: 'Parmigiana di melanzane e Provolone del Monaco alla piastra.' },
          { name: 'O’ Scugnizzo', price: 10, desc: 'Salsiccia, broccolo napoletano e provola filante.' },
        ],
      },
      {
        title: 'I panuozzi',
        items: [
          { name: 'Loren', price: 10, desc: 'Salsiccia, provola, melanzane a funghetto, maionese.' },
          { name: 'De Filippo', price: 12, desc: 'Taglio nobile, mozzarella fiordilatte filante, chutney di cipolla di Montoro, lattuga e salsa 84010.' },
          { name: 'De Curtis', price: 10, desc: 'Polpette di melanzane, scamorza affumicata, salsa di fiori di aglio orsino, basilico.' },
          { name: 'Maradona', price: 12, desc: 'Porchetta arrosto, Provolone del Monaco, crema di patate al rosmarino e cipolla rossa croccante.' },
        ],
      },
    ],
  },
  {
    id: 'dolci',
    tab: 'Dolci',
    title: 'I dolci',
    groups: [
      {
        items: [
          { name: '79 d.C.', price: 8, desc: 'Fondant al cioccolato, crema al cioccolato intenso, salsa e sorbetto di lampone.' },
          { name: 'Babà al rhum', price: 5 },
          { name: 'Pastiera', price: 7 },
          { name: 'Tiramisù', price: 7 },
          { name: 'Ricotta e pere', price: 7 },
          { name: 'Delizia al limone', price: 7 },
        ],
      },
    ],
  },
  {
    id: 'bevande',
    tab: 'Bevande',
    title: 'Da bere',
    groups: [
      {
        title: 'Birre artigianali alla spina',
        items: [
          { name: '0,2 l', price: 4 },
          { name: '0,4 l', price: 6 },
          { name: '0,5 l', price: 7 },
        ],
      },
      {
        title: 'Birre artigianali in bottiglia',
        items: [{ name: '0,5 l', price: 7 }],
      },
      {
        title: 'Le bibite',
        items: [
          { name: 'Acqua 750 ml', price: 3 },
          { name: 'Coca-Cola', price: 4 },
          { name: 'Coca-Cola Zero', price: 4 },
          { name: 'Fanta', price: 4 },
          { name: 'Sprite', price: 4 },
          { name: 'Estathé pesca o limone', price: 4 },
          { name: 'Chinotto', price: 4 },
        ],
      },
      {
        title: 'Amari e distillati',
        items: [
          { name: 'Limoncello', price: 4 },
          { name: 'San Marzano', price: 4 },
          { name: 'Strega', price: 4 },
          { name: 'Amaro del Capo', price: 4 },
          { name: 'Concerto', price: 4 },
          { name: 'Grappe / Whisky / Rhum', price: 8 },
        ],
      },
      {
        title: 'Caffetteria',
        items: [
          { name: 'Caffè', price: 1.5 },
          { name: 'Caffè decaffeinato', price: 2 },
          { name: 'Caffè macchiato', price: 1.5 },
          { name: 'Caffè corretto', price: 2.5 },
          { name: 'Ginseng', price: 2 },
          { name: 'Orzo', price: 2 },
        ],
      },
    ],
  },
];

export const menuAllergeni =
  'In caso di allergie o intolleranze informa il personale prima di ordinare. Le informazioni sugli allergeni (Reg. UE 1169/2011) sono disponibili presso il personale e nella documentazione del locale. Possibili contaminazioni crociate.';

/** 7 → «7», 9.5 → «9,50» */
export const formatPrice = (n: number) =>
  Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',');

/** La poesia in napoletano della seconda pagina del menù. */
export const poesia = [
  ['Ce stanno suonne ca costano fatica,', 'e fatica ca nisciuno po’ vedé.'],
  ['Ce stanno mmane ca sanno ’e farina,', 'ma pure ’e sacrificie e ’e dulure.'],
  ['E ce sta ’nu furno ca ogni sera', 's’appiccia comme ’na speranza.'],
  ['Pecché ’sta pizza nun è nata', 'sulo pe’ essere mangiata.'],
  ['È nata pe’ tené viva ’na storia,', 'pe’ nun scurdà chi ce ha ’mparato,', 'pe’ dà ’nu futuro', 'a chello ca avimmo ereditato.'],
  ['E finché ’e mmane nostre', 'tenarranno ’a forza ’e ’mpastà,', 'chistu suonno cuntinuarrà a campà.'],
];
