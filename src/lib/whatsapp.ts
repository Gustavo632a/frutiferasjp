import { site } from '../config/site';
export function createWhatsAppUrl(message: string = site.inquiry): string {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}
