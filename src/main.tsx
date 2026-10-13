import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/outfit/latin-400.css';
import '@fontsource/outfit/latin-500.css';
import '@fontsource/cormorant-garamond/latin-500-italic.css';
import './styles/tokens.css';
import './styles/global.css';
import App from './App';
import { site } from './config/site';
const favicon = import.meta.env.VITE_FAVICON_URL;
if (favicon && (favicon.startsWith('/') || favicon.startsWith('https://'))) document.querySelector<HTMLLinkElement>('link[rel="icon"]')!.href = favicon;
if (site.url) {
 try { const url = new URL(site.url); if (url.protocol === 'https:') { const canonical = document.createElement('link'); canonical.rel = 'canonical'; canonical.href = url.href; document.head.append(canonical); for (const [property, content] of [['og:url',url.href],['og:image',new URL('/images/laranjas-960.webp',url).href]]) { const meta = document.createElement('meta'); meta.setAttribute('property',property); meta.content=content; document.head.append(meta); } } } catch { /* An invalid domain is omitted. */ }
}
const schema = document.createElement('script'); schema.type='application/ld+json'; schema.textContent=JSON.stringify({ '@context':'https://schema.org','@type':'Store',name:site.name,telephone:`+${site.phone}`,description:'Produção e comercialização de mudas frutíferas, enxertia e alporquia.',sameAs:[site.instagram],address:{'@type':'PostalAddress',streetAddress:`${site.address}, ${site.neighborhood}`,addressLocality:site.city,addressRegion:site.state,addressCountry:'BR'} }); document.head.append(schema);
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
