/**
 * Testi del sito. «Chi siamo» è il testo fornito dal cliente (solo punteggiatura
 * sistemata). Gli altri testi sono costruiti su quello, senza inventare dati
 * (niente menu, prezzi o orari che il cliente non ha dato).
 *
 * Nei titoli le parole tra *asterischi* escono in grassetto ramato, come nella
 * grafica «Per *info* e *prenotazioni*» (vedi src/lib/rich.ts).
 */
import { address } from './site';
import { photos } from './photos';

export const meta = {
  // ~60 caratteri: marchio + parola chiave principale + città
  title: '84010 Pizzeria Bologna | Pizza napoletana e sapori campani',
  // ~155 caratteri: chi, cosa, dove, invito all'azione
  description:
    'Pizzeria napoletana a Bologna in Via Ruggero Grieco 7F: pizza campana fatta in famiglia, da un padre pizzaiolo e una madre cuoca. Prenota su WhatsApp.',
  keywords: [
    'pizzeria Bologna',
    'pizza napoletana Bologna',
    'pizzeria napoletana Bologna',
    'pizza campana Bologna',
    'pizzeria Via Ruggero Grieco',
    'pizzeria a conduzione familiare Bologna',
    'dove mangiare la pizza a Bologna',
    '84010 Pizzeria',
  ],
};

export const hero = {
  kicker: 'Pizzeria napoletana · Bologna',
  h1Line: 'Pizza napoletana a Bologna',
  claimTop: 'La nostra pizza parla campano,',
  claimBottom: 'con il cuore di casa.',
  lead: 'Un pezzetto di Campania in Via Ruggero Grieco: le mani di un padre pizzaiolo, la passione di una madre cuoca e una figlia che ha scelto questo nuovo capitolo insieme a loro.',
  caption: 'Il Vesuvio, sempre all’orizzonte',
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
  values: ['Radici campane', 'Cucina di famiglia', 'Accoglienza di casa'],
  niche: {
    title: '84010',
    text: 'Un nome che è un indirizzo: quello di casa.',
  },
};

export const famiglia = {
  kicker: 'La famiglia',
  title: 'Tre cuori, *un forno.*',
  cards: [
    {
      title: 'Le mani del pizzaiolo',
      body: 'Un padre pizzaiolo, con l’esperienza nelle mani e ancora l’emozione delle prime volte. È lui a dare forma alla nostra pizza napoletana.',
      items: ['Pizza napoletana', 'Tradizione campana'],
    },
    {
      title: 'La passione della cuoca',
      body: 'Una madre cuoca che porta in tavola i sapori con cui siamo cresciuti: la cucina di casa, fatta con cura.',
      items: ['Sapori di casa', 'Cura in ogni piatto'],
    },
    {
      title: 'Il cuore di una figlia',
      body: 'Una figlia che ha scelto di dare il proprio cuore a questo nuovo capitolo, insieme a loro, per accogliervi come a casa.',
      items: ['Accoglienza', 'Un posto in cui tornare'],
    },
  ],
};

export const pizza = {
  kicker: 'La pizza',
  title: 'Il sapore delle origini, *a Bologna.*',
  groups: [
    {
      id: 'dal-forno',
      title: 'Dal forno',
      scene: 'oven' as const,
      caption: 'Pizza napoletana',
      items: [
        { icon: 'pizza' as const, title: 'Pizza napoletana', body: 'Parla campano, guarda al presente e custodisce il sapore delle nostre origini.' },
        { icon: 'leaf' as const, title: 'Sapori campani', body: 'Il gusto di casa, portato in Emilia senza perdere nulla per strada.' },
        { icon: 'hand' as const, title: 'Fatta a mano, in famiglia', body: 'La cura di ciò che prepariamo è il nostro modo di dirvi benvenuti.' },
      ],
    },
    {
      id: 'a-tavola',
      title: 'A tavola',
      scene: 'candle' as const,
      caption: 'Ogni occasione',
      items: [
        { icon: 'glass' as const, title: 'Una serata da festeggiare', body: 'Compleanni, ricorrenze, buone notizie: c’è sempre un buon motivo.' },
        { icon: 'users' as const, title: 'Ritrovare qualcuno', body: 'Una tavola condivisa, una pizza al centro e il tempo che rallenta.' },
        { icon: 'heart' as const, title: 'Anche da soli', body: 'Per il semplice piacere di gustarsi una pizza in solitudine: qui c’è posto.' },
      ],
    },
  ],
};

export const seguici = {
  kicker: 'Social',
  title: '*Seguici* su',
  lead: 'Facebook e Instagram: novità, serate e tutto quello che esce dal nostro forno.',
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
      a: 'Pizza napoletana, nel rispetto della tradizione campana da cui veniamo: la prepara un padre pizzaiolo, accanto alla cucina di una madre cuoca.',
    },
    {
      q: 'Come posso prenotare un tavolo?',
      a: 'Il modo più veloce è scriverci su WhatsApp al 351 937 4062, con il pulsante «Prenota un tavolo». Oppure puoi chiamare il numero fisso 051 430128.',
    },
    {
      q: 'Posso venire per una festa o una cena di gruppo?',
      a: 'Certo: per una serata da festeggiare o per ritrovare qualcuno scrivici in anticipo su WhatsApp, così prepariamo tutto al meglio.',
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
    { cover: photos.margheritaDettaglio, title: 'Margherita', body: 'Pomodoro, mozzarella e basilico: la regina della pizza napoletana.' },
    { cover: photos.fornoALegna, title: 'Il forno', body: 'Il cuore della pizzeria: fuoco vivo e cottura veloce, come a Napoli.' },
    { cover: photos.impastoMani, title: 'L’impasto', body: 'Lavorato a mano ogni giorno, con l’esperienza di un padre pizzaiolo.' },
    { cover: photos.pizzaNapoletanaBasilico, title: 'Pizza napoletana', body: 'Cornicione alto e morbido, il sapore delle nostre origini.' },
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
