# 84010 Pizzeria — landing page

Sito one-page in Astro + Tailwind con la stessa struttura di `mc8-edil-solutions`
(header a pillola con scrollspy, hero divisa, card numerate, gruppi a icone,
fascia CTA in parallasse, contatti con card e form, barra fissa su mobile).
Stile e palette: Moodboard «Stile moderno Vesuvio» + rame del logo, su sfondo «carta stropicciata».

```bash
npm install
npm run dev      # http://localhost:4360
npm run build    # output in dist/ (deploy Netlify: netlify.toml già pronto)
```

## Dove si modifica cosa

| Cosa | File |
| --- | --- |
| Recapiti, indirizzo, orari, social, dominio | `src/data/site.ts` |
| Testi delle sezioni, title/description SEO, FAQ | `src/data/content.ts` |
| Palette, font, bottoni, titoli in rame | `src/styles/global.css` |
| Dati strutturati Google (Restaurant, FAQ…) | `src/lib/seo.ts` |
| Riquadri «foto» disegnati (Vesuvio, nicchia, forno, candela) | `src/components/Scene.astro` |

Nei titoli le parole tra `*asterischi*` escono in grassetto ramato
(come «Per **info** e **prenotazioni**» delle grafiche).

## ⚠️ DA CONFERMARE prima del go-live

- [ ] **Dominio** definitivo → `src/data/site.ts`, `astro.config.mjs`, `public/robots.txt`
- [ ] **Link Facebook e Instagram** (ora sono segnaposto: `pizzeria84010`) → `src/data/site.ts`
- [ ] **Orari di apertura** e giorno di chiusura → `hours` / `closedLabel` in `src/data/site.ts`
      (finché sono vuoti il sito non li mostra e lo schema non li dichiara)
- [ ] **CAP** 40133 (ripreso da elenchi pubblici per Via Ruggero Grieco 7F)
- [ ] **Coordinate GPS** del locale → `address.geo` (migliorano la mappa su Google)
- [ ] **Ragione sociale e P.IVA** → `legal` (footer + privacy)
- [ ] Email (facoltativa)
- [ ] Frase nella nicchia «Un nome che è un indirizzo: quello di casa» — interpretazione del nome 84010 (CAP campano)

## Foto

⚠️ **Le 24 foto in `src/assets/foto/` sono DIMOSTRATIVE** (Unsplash, licenza gratuita:
elenco e fonti in `src/assets/foto/CREDITI.md`). Servono a far vedere al cliente il sito
con le immagini; prima del go-live vanno sostituite con le foto vere di locale, pizze e famiglia.
Per sostituirle basta sovrascrivere il file con lo stesso nome (oppure cambiare l'import
in `src/data/photos.ts`, dove ci sono anche gli alt). Le foto vere aiutano anche la SEO (Google Immagini).

Effetti foto ripresi da mc8:

| Sezione | Effetto |
| --- | --- |
| Hero | carosello in dissolvenza con Ken Burns, didascalia e trattini + profilo del Vesuvio che si disegna in rame |
| Chi siamo | Depth Carousel (carte in profondità, trascinabili, autoplay) |
| La pizza | tendina che scopre la foto dal basso |
| Galleria | card a tendina, zoom al passaggio, lightbox con frecce/tastiera/swipe |
| Seguici su | Coverflow Swiper stile Instagram |
| Prenotazioni | foto di sfondo in dissolvenza con parallasse |

## SEO — cosa è già nel sito

- Title e description con parole chiave locali («pizzeria Bologna», «pizza napoletana Bologna», indirizzo)
- Un solo H1 con «Pizza napoletana a Bologna», H2 per sezione, FAQ con domande di ricerca reali
- JSON-LD `Restaurant` (indirizzo, telefoni, cucina, prenotazioni via WhatsApp) + `WebSite` + `WebPage` + `FAQPage`
- Open Graph / Twitter con immagine social `public/og-84010.jpg` (1200×630)
- Canonical, robots, sitemap automatica, meta geo, favicon/manifest
- Font self-hosted, immagini WebP ottimizzate, nessun cookie di terze parti (sito veloce = ranking migliore)

## SEO — cosa fare fuori dal sito (fondamentale per una pizzeria)

1. **Google Business Profile**: rivendicare/creare la scheda «84010 Pizzeria» con lo stesso
   nome, indirizzo e telefono del sito (NAP identici), categoria «Pizzeria», orari, foto, link al sito.
   In quell'indirizzo risultava in passato un'altra pizzeria: verificare che la vecchia scheda sia chiusa o aggiornata.
2. **Google Search Console**: verificare il dominio e inviare `https://DOMINIO/sitemap-index.xml`.
3. Chiedere **recensioni** su Google ai clienti (il fattore più forte per la ricerca locale).
4. Stessi dati su TripAdvisor, TheFork, Facebook, Instagram (bio con link al sito).
