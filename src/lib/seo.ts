import { site, contact, address, hours, social, legal, delivery } from '@/data/site';
import { meta, hero, about, faq } from '@/data/content';
import { menu } from '@/data/menu';

const id = (frag: string) => `${site.url}/#${frag}`;

/**
 * JSON-LD della home: Restaurant (sottotipo di LocalBusiness) + WebSite +
 * FAQPage, collegati tra loro con @id. È quello che Google usa per scheda
 * locale, risultati arricchiti e Knowledge Panel.
 * I campi DA CONFERMARE (orari, coordinate, email, P.IVA) entrano solo se compilati.
 */
export function homeJsonLd() {
  const restaurant: Record<string, unknown> = {
    '@type': 'Restaurant',
    '@id': id('pizzeria'),
    name: site.name,
    alternateName: ['84010', 'Pizzeria 84010', '84010 Pizzeria Bologna'],
    description: meta.description,
    slogan: `${hero.claimTop} ${hero.claimBottom}`,
    url: `${site.url}/`,
    logo: `${site.url}/icon-512.png`,
    image: [`${site.url}/og-84010.jpg`, `${site.url}/icon-512.png`],
    telephone: contact.phone.e164,
    ...(contact.email ? { email: contact.email } : {}),
    ...(legal.vat ? { vatID: legal.vat } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressRegion: address.province,
      addressCountry: address.country,
    },
    ...(address.geo
      ? { geo: { '@type': 'GeoCoordinates', latitude: address.geo.lat, longitude: address.geo.lng } }
      : {}),
    hasMap: address.mapsHref,
    areaServed: { '@type': 'City', name: 'Bologna' },
    servesCuisine: ['Pizza', 'Pizza contemporanea', 'Cucina campana', 'Cucina italiana'],
    hasMenu: { '@id': id('menu') },
    priceRange: '€€',
    acceptsReservations: true,
    potentialAction: [
      {
        '@type': 'ReserveAction',
        target: { '@type': 'EntryPoint', urlTemplate: contact.whatsapp.href, actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'] },
        result: { '@type': 'FoodEstablishmentReservation', name: 'Prenotazione tavolo' },
      },
      // Consegna a domicilio tramite partner + ritiro al locale
      ...delivery.map((d) => ({
        '@type': 'OrderAction',
        name: `Ordina su ${d.name}`,
        target: { '@type': 'EntryPoint', urlTemplate: d.href },
      })),
      {
        '@type': 'OrderAction',
        name: 'Ordina da asporto (ritiro al locale)',
        target: { '@type': 'EntryPoint', urlTemplate: contact.phone.href },
        deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModePickUp',
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: contact.phone.e164, contactType: 'reservations', availableLanguage: ['Italian'] },
      { '@type': 'ContactPoint', telephone: contact.whatsapp.e164, contactType: 'reservations', contactOption: 'WhatsApp', availableLanguage: ['Italian'] },
    ],
    ...(hours.length
      ? {
          openingHoursSpecification: hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    knowsAbout: ['Pizza contemporanea', 'Pizza tradizionale', 'Pizza fritta', 'Cucina campana', about.values].flat(),
    sameAs: [social.instagram.href, social.facebook.href],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      restaurant,
      {
        '@type': 'WebSite',
        '@id': id('sito'),
        url: `${site.url}/`,
        name: site.name,
        inLanguage: 'it-IT',
        publisher: { '@id': id('pizzeria') },
      },
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#pagina`,
        url: `${site.url}/`,
        name: meta.title,
        description: meta.description,
        inLanguage: 'it-IT',
        isPartOf: { '@id': id('sito') },
        about: { '@id': id('pizzeria') },
        primaryImageOfPage: `${site.url}/og-84010.jpg`,
      },
      {
        '@type': 'Menu',
        '@id': id('menu'),
        name: 'Menù di 84010 Pizzeria',
        url: `${site.url}/#menu`,
        inLanguage: 'it-IT',
        hasMenuSection: menu.map((sec) => ({
          '@type': 'MenuSection',
          name: sec.title,
          ...(sec.note ? { description: sec.note } : {}),
          hasMenuItem: sec.groups.flatMap((g) =>
            g.items.map((it) => ({
              '@type': 'MenuItem',
              name: g.title && /birre/i.test(g.title) ? `${g.title} ${it.name}` : it.name,
              ...(it.desc ? { description: it.desc } : {}),
              offers: { '@type': 'Offer', price: it.price.toFixed(2), priceCurrency: 'EUR' },
            })),
          ),
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': id('faq'),
        inLanguage: 'it-IT',
        mainEntity: faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}
