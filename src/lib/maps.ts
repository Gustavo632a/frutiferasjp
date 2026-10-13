import { site } from '../config/site';
const address = encodeURIComponent(`${site.address}, ${site.neighborhood}, ${site.city}, ${site.state}`);
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
export const mapUrl = `https://maps.google.com/maps?q=${address}&output=embed`;
