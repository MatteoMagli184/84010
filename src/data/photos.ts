/**
 * Foto del sito.
 * ⚠️ FOTO DIMOSTRATIVE da Unsplash (vedi src/assets/foto/CREDITI.md): servono a
 * mostrare al cliente il sito con le immagini. Prima del go-live vanno
 * sostituite con le foto vere del locale, delle pizze e della famiglia
 * (stessi nomi file = nessuna modifica al codice).
 * Gli alt descrivono la foto e contengono parole chiave locali in modo naturale.
 */
import type { ImageMetadata } from 'astro';

import impastoMani from '@/assets/foto/impasto-mani.jpg';
import pizzeTavoloScuro from '@/assets/foto/pizze-tavolo-scuro.jpg';
import pizzaNapoletanaBasilico from '@/assets/foto/pizza-napoletana-basilico.jpg';
import pizzaTaglieroForno from '@/assets/foto/pizza-tagliere-forno.jpg';
import margheritaDettaglio from '@/assets/foto/margherita-dettaglio.jpg';
import impastoFarina from '@/assets/foto/impasto-farina.jpg';
import pizzaNelForno from '@/assets/foto/pizza-nel-forno.jpg';
import margheritaLegno from '@/assets/foto/margherita-legno.jpg';
import fiammaForno from '@/assets/foto/fiamma-forno.jpg';
import pizzeBancone from '@/assets/foto/pizze-bancone.jpg';
import fornoALegna from '@/assets/foto/forno-a-legna.jpg';
import fornoCupola from '@/assets/foto/forno-cupola.jpg';
import margheritaPiatto from '@/assets/foto/margherita-piatto.jpg';
import fornoPizzeCottura from '@/assets/foto/forno-pizze-cottura.jpg';
import pizzaPala from '@/assets/foto/pizza-pala.jpg';
import fornoFuoco from '@/assets/foto/forno-fuoco.jpg';
import salaCalda from '@/assets/foto/sala-calda.jpg';
import fornoPizzaBrace from '@/assets/foto/forno-pizza-brace.jpg';
import salaApplique from '@/assets/foto/sala-applique.jpg';
import pizzeFinestra from '@/assets/foto/pizze-finestra.jpg';
import vesuvioGolfo from '@/assets/foto/vesuvio-golfo.jpg';
import vesuvioMare from '@/assets/foto/vesuvio-mare.jpg';
import pizzaInSala from '@/assets/foto/pizza-in-sala.jpg';
import salaPareteePietra from '@/assets/foto/sala-parete-pietra.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** object-position quando la foto viene ritagliata */
  pos?: string;
}

const p = (src: ImageMetadata, alt: string, pos?: string): Photo => ({ src, alt, pos });

export const photos = {
  impastoMani: p(impastoMani, 'Mani infarinate che reggono un panetto di impasto per pizza napoletana', '50% 40%'),
  pizzeTavoloScuro: p(pizzeTavoloScuro, 'Due pizze napoletane appena sfornate su un tavolo scuro'),
  pizzaNapoletanaBasilico: p(pizzaNapoletanaBasilico, 'Pizza napoletana con pomodoro, mozzarella e basilico fresco'),
  pizzaTaglieroForno: p(pizzaTaglieroForno, 'Pizza margherita su tagliere di legno davanti al forno acceso', '50% 60%'),
  margheritaDettaglio: p(margheritaDettaglio, 'Dettaglio di una margherita con cornicione alto e basilico'),
  impastoFarina: p(impastoFarina, 'Pizzaiolo che lavora l’impasto sul banco infarinato'),
  pizzaNelForno: p(pizzaNelForno, 'Pizza napoletana che cuoce nel forno a legna tra le fiamme', '50% 60%'),
  margheritaLegno: p(margheritaLegno, 'Pizza margherita servita su un tavolo di legno'),
  fiammaForno: p(fiammaForno, 'Fiamma viva nella bocca di un forno a legna'),
  pizzeBancone: p(pizzeBancone, 'Pizze pronte sul bancone della pizzeria'),
  fornoALegna: p(fornoALegna, 'Forno a legna in mattoni con il fuoco acceso'),
  fornoCupola: p(fornoCupola, 'Cupola del forno per pizza napoletana con il fuoco acceso'),
  margheritaPiatto: p(margheritaPiatto, 'Margherita napoletana servita al tavolo'),
  fornoPizzeCottura: p(fornoPizzeCottura, 'Due pizze in cottura nel forno a legna accanto al fuoco'),
  pizzaPala: p(pizzaPala, 'Pizza sulla pala davanti alla bocca del forno', '50% 60%'),
  fornoFuoco: p(fornoFuoco, 'Fuoco di legna nel forno della pizzeria'),
  salaCalda: p(salaCalda, 'Sala della pizzeria con luci calde e bancone in legno'),
  fornoPizzaBrace: p(fornoPizzaBrace, 'Pizza che cuoce sulla brace del forno a legna'),
  salaApplique: p(salaApplique, 'Applique dalla luce calda sulle pareti della sala'),
  pizzeFinestra: p(pizzeFinestra, 'Pizze napoletane servite al tavolo vicino alla vetrata'),
  vesuvioGolfo: p(vesuvioGolfo, 'Il Vesuvio visto dal golfo di Napoli'),
  vesuvioMare: p(vesuvioMare, 'Il Vesuvio che domina il mare di Napoli', '50% 70%'),
  pizzaInSala: p(pizzaInSala, 'Pizza napoletana in primo piano nella sala della pizzeria'),
  salaPareteePietra: p(salaPareteePietra, 'Sala con parete in pietra lavica scura e lampade a sospensione', '50% 50%'),
};
