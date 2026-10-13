import type { FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import { createWhatsAppUrl } from '../lib/whatsapp';
import s from '../styles/Site.module.css';
export function PlantInquiry() {
 function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const city = String(data.get('city') || '').trim();
  if (!city) { const input = event.currentTarget.elements.namedItem('city') as HTMLInputElement; input.setCustomValidity('Informe sua cidade e UF.'); input.reportValidity(); return; }
  const quantity = String(data.get('quantity') || '').trim();
  const message = `Olá! Conheci a Frutíferas João Pessoa pelo site. Gostaria de consultar ${data.get('category')}. Destino: ${city}.${quantity ? ` Quantidade aproximada: ${quantity}.` : ''} Poderiam informar disponibilidade e condições de envio?`;
  window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
 }
 return <form className={s.inquiry} onSubmit={submit}><h3>Conte o que você quer cultivar.</h3><p>Prepare sua consulta e continue a conversa pelo WhatsApp.</p><label htmlFor="category">Categoria desejada</label><select id="category" name="category">{products.map(product => <option key={product.name}>{product.name}</option>)}</select><div className={s.formRow}><div><label htmlFor="city">Cidade / UF de destino</label><input id="city" name="city" placeholder="Ex.: João Pessoa / PB" required maxLength={100} onInput={event => event.currentTarget.setCustomValidity('')}/></div><div><label htmlFor="quantity">Quantidade <span>(opcional)</span></label><input id="quantity" name="quantity" type="number" min="1" max="100000" placeholder="Ex.: 3"/></div></div><button className={s.button} type="submit">Solicitar informações<ArrowUpRight size={17}/></button><small>Esta consulta não é um pedido. Nenhum dado é armazenado no site.</small></form>;
}
