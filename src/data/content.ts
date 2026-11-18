/**
 * Testi del sito.
 * - «Chi siamo» e le tre parti della filosofia (I, II, III) sono testi del
 *   cliente (solo punteggiatura sistemata).
 * - La pizza è «contemporanea tradizionale» (NON napoletana: richiesta cliente).
 * - La famiglia si racconta solo in «Chi siamo»; il resto del sito parla del prodotto.
 *
 * Nei titoli le parole tra *asterischi* escono in corsivo ramato (src/lib/rich.ts).
 */
import { address, contact } from './site';
import { photos } from './photos';

export const meta = {
  // ~60 caratteri: marchio + parola chiave principale + città
  title: '84010 Pizzeria Bologna | Pizza contemporanea tradizionale',
  // ~155 caratteri: cosa, dove, servizi
  description:
    'Pizzeria a Bologna in Via Ruggero Grieco 7F: pizza contemporanea di tradizione campana e ingredienti d’eccellenza. Sala, asporto e consegna a domicilio.',
  keywords: [
    'pizzeria Bologna',
    'pizza contemporanea Bologna',
    'pizza contemporanea tradizionale',
    'pizza a domicilio Bologna',
    'pizza da asporto Bologna',
    'pizzeria campana Bologna',
    'pizzeria Via Ruggero Grieco',
    'pizza Just Eat Deliveroo Glovo Bologna',
    '84010 Pizzeria',
  ],
};

export const hero = {
  kicker: 'Pizzeria contemporanea · Bologna',
  h1Line: 'Pizza contemporanea a Bologna',
  claimTop: 'Un impasto di classe,',
  claimBottom: 'un’anima verace.',
};

export const about = {
  kicker: 'Chi siamo',
  title: 'Casa, *in Campania.*',
  body: [
    'Ci sono luoghi che continui a chiamare casa, anche quando la vita ti porta lontano. Per noi, quel luogo è Casa, in Campania.',
    '84010 è il modo che abbiamo scelto per portarne un pezzetto qui, a Bologna. Dentro questo nome ci sono le nostre radici e la nostra famiglia. Ci sono le mani di un padre pizzaiolo, la passione di una madre cuoca e una figlia che ha scelto di dare il proprio cuore a questo nuovo capitolo, insieme a loro.',
    '84010 nasce da quel desiderio: dalla voglia di ricominciare insieme, con l’esperienza nelle mani e ancora l’emozione delle prime volte.',
    'Dietro queste porte ci sono stati giorni di fatica, attese, pensieri e piccoli traguardi che, vissuti in famiglia, sono sembrati grandissimi. Oggi tutto questo prende forma nel nostro modo di accogliervi, nella cura di ciò che prepariamo e nel piacere di vedervi stare bene a tavola.',
    'La nostra pizza parla campano, guarda al presente e custodisce il sapore delle nostre origini. Vorremmo che qui trovaste un posto in cui tornare.',
  ],
  sign: 'Benvenuti da 84010. La nostra storia continua, con voi.',
  values: ['Radici campane', 'Ingredienti d’eccellenza', 'Pizza contemporanea'],
  photoCaption: 'Pompei e il Vesuvio · le nostre radici',
};

/** Le tre parti della filosofia (testi del cliente). */
export const filosofia = {
  kicker: 'La nostra pizza',
  title: 'Maestria, qualità, *radici.*',
  parts: [
    {
      title: 'Le mani, la storia, il cuore',
      body: [
        'Al cuore di 84010 c’è Giovanni, il nostro mastro pizzaiolo.',
        'Nelle sue mani vive una storia di dedizione, fatta di gesti affinati nel tempo e di un’emozione rimasta intatta: quella della prima pizza infornata, dell’attesa davanti al forno, del desiderio di regalare qualcosa di buono. Oggi, alla sensibilità di allora si unisce la maestria di un pizzaiolo affermato, capace di trasformare acqua e farina in un’espressione autentica della nostra terra.',
        'È lui l’anima della pizzeria.',
      ],
      sign: 'Giovanni · Mastro pizzaiolo',
    },
    {
      title: 'La qualità ha un’origine',
      body: [
        'Ogni sapore nasce da una scelta. Per questo selezioniamo ingredienti di altissima qualità, dando valore alla freschezza, alla provenienza e al patrimonio del Made in Italy.',
        'Cerchiamo materie prime dalla personalità autentica, da accostare con sensibilità e valorizzare nel rispetto delle loro caratteristiche.',
        'Dalla semplicità del pomodoro alla delicatezza del fiordilatte, ogni ingrediente contribuisce a un equilibrio preciso: sapori riconoscibili, profumi pieni e abbinamenti in cui ogni dettaglio ha il suo perché.',
      ],
    },
    {
      title: 'Le nostre radici, una nuova espressione',
      body: [
        'Ogni pizza e ogni piatto raccontano il nostro modo di intendere l’ospitalità: cura, generosità e passione quotidiana.',
        'Partiamo dalla tradizione, dai sapori che ci appartengono e dalle ricette che sanno di casa, per interpretarli con uno sguardo contemporaneo. Nuovi accostamenti e presentazioni curate ne rinnovano l’espressione, custodendone l’anima.',
        'Così facciamo crescere 84010, giorno dopo giorno: con il desiderio di portare in tavola qualcosa che ci rappresenti e che lasci, oltre al gusto, il piacere di mangiare.',
      ],
    },
  ],
};

export const poesiaIntro = {
  kicker: '’A poesia',
  sign: 'Dalla prima pagina del nostro menù',
};

export const menuIntro = {
  kicker: 'Il menù',
  title: 'Dal nostro forno, *alla tua tavola.*',
  lead: 'Pizze contemporanee e grandi classici della tradizione, fritti, panuozzi e dolci: ogni ricetta nasce da ingredienti scelti uno a uno.',
};

export const consegna = {
  kicker: 'Asporto e consegna',
  title: 'La nostra pizza, *anche a casa tua.*',
  lead: 'Ordina e passa a ritirarla al locale, oppure ricevila direttamente a casa con i nostri partner di consegna.',
  ritiro: {
    title: 'Ritiro al locale',
    body: `Ordina per telefono o su WhatsApp e passa a prenderla in ${address.street}: la trovi pronta, appena uscita dal forno.`,
  },
  delivery: {
    title: 'Consegna a domicilio',
    body: 'Ci appoggiamo ai migliori servizi di consegna di Bologna: scegli il tuo e ordina dall’app.',
  },
};

export const seguici = {
  kicker: 'Social',
  title: '*Seguici* su',
  lead: 'Facebook e Instagram: novità, nuove pizze e tutto quello che esce dal nostro forno.',
};

export const faq = {
  kicker: 'Domande frequenti',
  title: 'Prima di *venirci a trovare*',
  items: [
    {
      q: 'Dove si trova 84010 Pizzeria a Bologna?',
      a: `Siamo in ${address.street}, ${address.postalCode} ${address.city}. Puoi aprire le indicazioni stradali direttamente da Google Maps con il pulsante nella sezione contatti.`,
    },
    {
      q: 'Che tipo di pizza fate?',
      a: 'Una pizza contemporanea tradizionale: partiamo dai sapori della tradizione campana e li interpretiamo con uno sguardo contemporaneo. L’impasto è curato da Giovanni, il nostro mastro pizzaiolo, con ingredienti di altissima qualità come pomodoro San Marzano, fiordilatte e bufala DOP.',
    },
    {
      q: 'Fate asporto e consegna a domicilio?',
      a: `Sì. Puoi ordinare per telefono (${contact.phone.label}) o su WhatsApp (${contact.whatsapp.label}) e ritirare al locale, oppure riceverla a casa con Just Eat, Deliveroo e Glovo.`,
    },
    {
      q: 'Ci sono alternative senza lattosio o senza glutine?',
      a: 'Pizze, cuzzitielli, panuozzi e insalate hanno l’alternativa senza lattosio (+ 2 €); crocchè e frittatine sono disponibili anche senza glutine e lattosio (+ 1 €). In caso di allergie avvisa il personale prima di ordinare.',
    },
    {
      q: 'Come posso prenotare un tavolo?',
      a: `Il modo più veloce è scriverci su WhatsApp al ${contact.whatsapp.label}, con il pulsante «Prenota un tavolo». Oppure puoi chiamare il numero fisso ${contact.phone.label}.`,
    },
  ],
};

export const prenota = {
  kicker: 'Prenotazioni',
  title: 'Per *info* e *prenotazioni*',
  lead: 'Scrivici su WhatsApp o chiamaci: ti teniamo un posto a tavola.',
};

export const contatti = {
  kicker: 'Contatti',
  title: 'Vieni a *trovarci*',
  lead: 'Ti aspettiamo in Via Ruggero Grieco 7F, a Bologna. Per prenotare scrivici su WhatsApp o chiamaci.',
};

/** Galleria (lightbox). Foto dimostrative: titoli e testi da adattare alle foto vere. */
export const galleria = {
  kicker: 'Galleria',
  title: 'Dal forno *alla tavola*',
  projects: [
    { cover: photos.margheritaDettaglio, title: 'Margherita', body: 'Pomodoro San Marzano, fiordilatte, olio EVO e basilico fresco: la semplicità fatta bene.' },
    { cover: photos.fornoALegna, title: 'Il forno', body: 'Il cuore della pizzeria: fuoco vivo e cottura veloce.' },
    { cover: photos.impastoMani, title: 'L’impasto', body: 'Lavorato a mano ogni giorno da Giovanni, il nostro mastro pizzaiolo.' },
    { cover: photos.pizzaNapoletanaBasilico, title: 'Le nostre proposte', body: 'Accostamenti contemporanei, nel rispetto della tradizione.' },
    { cover: photos.salaCalda, title: 'La sala', body: 'Luci calde e un posto a tavola per ogni occasione.' },
    { cover: photos.vesuvioMare, title: 'Le radici', body: 'Il Vesuvio all’orizzonte: da lì arriva tutto quello che portiamo a Bologna.' },
  ],
};

/** Foto «stile Instagram» del carosello Seguici (Coverflow di mc8). */
export const instagramPhotos = [
  photos.pizzeTavoloScuro,
  photos.margheritaLegno,
  photos.fiammaForno,
  photos.pizzaPala,
  photos.pizzeBancone,
  photos.margheritaPiatto,
  photos.fornoPizzaBrace,
  photos.pizzaInSala,
];
