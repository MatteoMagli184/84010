/**
 * Dati della pizzeria: unica fonte per recapiti, indirizzo, social e dati legali.
 * Recapiti e indirizzo presi dalla grafica «Seguici su / Per info e prenotazioni».
 * ⚠️ I campi marcati DA CONFERMARE vanno verificati con il cliente prima del
 * go-live (vedi README): finché sono vuoti il sito semplicemente non li mostra.
 */
export const site = {
  name: '84010 Pizzeria',
  shortName: '84010',
  // DA CONFERMARE: dominio definitivo (tenere allineato con astro.config.mjs e public/robots.txt)
  url: 'https://www.84010pizzeria.it',
};

export const contact = {
  whatsapp: {
    label: '351 937 4062',
    e164: '+393519374062',
    href: 'https://wa.me/393519374062',
  },
  phone: {
    label: '051 430128',
    e164: '+39051430128',
    href: 'tel:+39051430128',
  },
  // DA CONFERMARE: email (se c'è viene mostrata nei contatti e nella privacy)
  email: '',
};

export const address = {
  street: 'Via Ruggero Grieco 7F',
  // DA CONFERMARE: CAP (40133 risulta da elenchi pubblici per questo civico)
  postalCode: '40133',
  city: 'Bologna',
  province: 'BO',
  region: 'Emilia-Romagna',
  country: 'IT',
  // DA CONFERMARE: coordinate precise del locale (servono a Google per la mappa).
  // Lasciare null finché non si hanno: lo schema le omette.
  geo: null as null | { lat: number; lng: number },
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('84010 Pizzeria, Via Ruggero Grieco 7F, 40133 Bologna BO'),
};

/**
 * Orari di apertura. DA CONFERMARE con il cliente: finché la lista è vuota il
 * sito non mostra orari e lo schema non li dichiara (meglio niente che sbagliati).
 * Formato: giorni in inglese schema.org, orari HH:MM.
 * Esempio:
 *   { days: ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '19:00', closes: '23:30', label: 'Mar – Dom' }
 */
export const hours: { days: string[]; opens: string; closes: string; label: string }[] = [];
export const closedLabel = ''; // es. 'Lunedì chiuso' — DA CONFERMARE

export const social = {
  // DA CONFERMARE: link esatti delle pagine (la grafica dice «Seguici su Facebook e Instagram»)
  instagram: { handle: 'pizzeria84010', href: 'https://www.instagram.com/pizzeria84010/' },
  facebook: { handle: '84010 Pizzeria', href: 'https://www.facebook.com/pizzeria84010' },
};

export const legal = {
  // DA CONFERMARE: ragione sociale, sede legale e P.IVA
  company: '84010 Pizzeria',
  vat: '',
  credit: { label: 'Matteo Magli Digital Design', href: 'https://maglidesign.com/' },
};

/** Voci della navigazione (ancore della one-page). */
export const nav = [
  { id: 'chi-siamo', label: 'Chi siamo', icon: 'home' },
  { id: 'famiglia', label: 'Famiglia', icon: 'heart' },
  { id: 'la-pizza', label: 'La pizza', icon: 'pizza' },
  { id: 'galleria', label: 'Galleria', icon: 'camera' },
  { id: 'contatti', label: 'Contatti', icon: 'pin' },
] as const;

/** Messaggio WhatsApp precompilato (link «Prenota» generici). */
export const waBooking = `${contact.whatsapp.href}?text=${encodeURIComponent('Ciao 84010! Vorrei prenotare un tavolo.')}`;
