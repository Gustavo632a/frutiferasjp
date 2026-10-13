import type { ReactNode } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { createWhatsAppUrl } from '../lib/whatsapp';
import s from '../styles/Site.module.css';
export function Button({ children, href = createWhatsAppUrl(), secondary = false }: { children: ReactNode; href?: string; secondary?: boolean }) {
 const external = href.startsWith('https://');
 return <a className={`${s.button} ${secondary ? s.secondary : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>;
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
 const ref = useScrollReveal(); return <div ref={ref} className={`${s.reveal} ${className}`}>{children}</div>;
}
export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
 return <div className={s.sectionHeading}><span className={s.eyebrow}>{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}
export function PlantImage({ name, alt, hero = false, className = '', width = 960, height = 1200 }: { name: string; alt: string; hero?: boolean; className?: string; width?: number; height?: number }) {
 return <img className={className} src={`/images/${name}-960.webp`} srcSet={`/images/${name}-480.webp 480w, /images/${name}-960.webp 960w`} sizes="(max-width: 767px) 100vw, 50vw" alt={alt} width={width} height={height} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : 'auto'} decoding="async"/>;
}
export function WhatsAppButton() { return <a className={s.floating} href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Consultar mudas disponíveis pelo WhatsApp"><MessageCircle size={25}/></a>; }
