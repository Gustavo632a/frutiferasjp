import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../config/site';
import { Button } from './UI';
import s from '../styles/Site.module.css';
export function Header() {
 const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null); const nav = useRef<HTMLElement>(null);
 useEffect(() => { const scroll = () => setScrolled(window.scrollY > 20); scroll(); window.addEventListener('scroll', scroll, { passive: true }); return () => window.removeEventListener('scroll', scroll); }, []);
 useEffect(() => {
  if (!open) return;
  nav.current?.querySelector('a')?.focus();
  const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
  const resize = () => { if (window.innerWidth >= 1000) setOpen(false); };
  document.addEventListener('keydown', close); window.addEventListener('resize', resize);
  return () => { document.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
 }, [open]);
 return <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}><div className={s.headerInner}>
  <a className={s.wordmark} href="#inicio" aria-label="Frutíferas João Pessoa, início">frutíferas<span>JOÃO PESSOA · SEMENTEIRA</span></a>
  <nav ref={nav} id="main-menu" aria-label="Navegação principal" className={`${s.nav} ${open ? s.navOpen : ''}`}>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
  <div className={s.headerCta}><Button>Consultar mudas</Button></div>
  <button ref={toggle} className={s.menuToggle} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
 </div></header>;
}
