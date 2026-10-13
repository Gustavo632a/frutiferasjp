import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { gallery } from '../data/gallery';
import s from '../styles/Site.module.css';
export function ImageLightbox({ index, onClose, onChange }: { index: number; onClose: () => void; onChange: (index: number) => void }) {
 const dialog = useRef<HTMLDialogElement>(null);
 useEffect(() => { const element = dialog.current; const previous = document.activeElement as HTMLElement | null; element?.showModal(); const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { element?.close(); document.body.style.overflow = overflow; previous?.focus(); }; }, []);
 const item = gallery[index]; const move = (direction: number) => onChange((index + direction + gallery.length) % gallery.length);
 return <dialog ref={dialog} className={s.lightbox} aria-labelledby="lightbox-caption" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); }}>
  <button className={s.lightboxClose} onClick={onClose} aria-label="Fechar fotografia" autoFocus onKeyDown={event => { if (event.key === 'Tab' && event.shiftKey) { event.preventDefault(); dialog.current?.querySelector<HTMLButtonElement>('[aria-label="Próxima fotografia"]')?.focus(); } }}><X/></button>
  <div className={s.lightboxBody}><button onClick={() => move(-1)} aria-label="Fotografia anterior"><ChevronLeft/></button><figure><img src={`/images/${item.image}-960.webp`} alt={item.alt} width="960" height="1200"/><figcaption id="lightbox-caption" aria-live="polite">{item.caption} · {index + 1}/{gallery.length}<small>Fotografia ilustrativa — não retrata a produção da empresa.</small></figcaption></figure><button onClick={() => move(1)} aria-label="Próxima fotografia" onKeyDown={event => { if (event.key === 'Tab' && !event.shiftKey) { event.preventDefault(); dialog.current?.querySelector<HTMLButtonElement>('[aria-label="Fechar fotografia"]')?.focus(); } }}><ChevronRight/></button></div>
 </dialog>;
}
