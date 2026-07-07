// Per-route SEO meta helper — poziva se iz useEffect svake stranice.
// Postavlja title, description, canonical te og:/twitter: tagove (SPA ima
// statične OG tagove u index.html samo za naslovnicu).

const SITE = 'https://uciliste-suprastudium.hr';

interface PageMeta {
  title: string;
  description: string;
  /** putanja rute, npr. "/akupresura-trigger-point" */
  path: string;
  /** apsolutna ili site-relativna putanja slike za dijeljenje */
  ogImage?: string;
  ogType?: 'website' | 'article';
}

function upsert(selector: string, create: () => HTMLElement, set: (el: Element) => void) {
  let el = document.head.querySelector(selector);
  if (!el) { el = create(); document.head.appendChild(el); }
  set(el);
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  }, (el) => el.setAttribute('content', content));
}

export function setPageMeta({ title, description, path, ogImage, ogType = 'website' }: PageMeta) {
  const url = SITE + path;
  const image = ogImage ? (ogImage.startsWith('http') ? ogImage : SITE + ogImage) : `${SITE}/videos/home-hero-poster.jpg`;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsert('link[rel="canonical"]', () => {
    const l = document.createElement('link');
    l.setAttribute('rel', 'canonical');
    return l;
  }, (el) => el.setAttribute('href', url));

  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', image);
  upsertMeta('property', 'og:type', ogType);
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', image);
}

/** JSON-LD injektor — id sprječava duplikate pri client-side navigaciji */
export function setJsonLd(id: string, data: object) {
  let el = document.head.querySelector(`script[data-jsonld="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.dataset.jsonld = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** BreadcrumbList schema za course stranice */
export function courseBreadcrumb(courseName: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: courseName, item: SITE + path },
    ],
  };
}

interface CourseSchemaOpts {
  name: string;
  description: string;
  path: string;
  startDate?: string; // ISO, npr. "2026-10-09"
  endDate?: string;
  priceEUR?: number;
  location?: string;
}

/** Course + CourseInstance schema (Google course rich results) */
export function courseSchema({ name, description, path, startDate, endDate, priceEUR, location }: CourseSchemaOpts) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: SITE + path,
    inLanguage: 'hr',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Učilište Supra Studium',
      url: SITE,
    },
  };
  if (priceEUR) {
    schema.offers = {
      '@type': 'Offer',
      price: String(priceEUR),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: SITE + path,
    };
  }
  if (startDate) {
    schema.hasCourseInstance = {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      startDate,
      ...(endDate ? { endDate } : {}),
      location: {
        '@type': 'Place',
        name: location || 'Zagreb',
        address: { '@type': 'PostalAddress', addressLocality: 'Zagreb', addressCountry: 'HR' },
      },
    };
  }
  return schema;
}

/** FAQPage schema iz postojećih FAQ data arrayeva */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
