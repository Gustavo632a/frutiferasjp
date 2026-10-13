import { useEffect, useRef } from 'react';
export function useScrollReveal() {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const element = ref.current;
  if (!element || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(([entry]) => {
   if (entry.isIntersecting) { element.dataset.visible = 'true'; observer.disconnect(); }
  }, { threshold: 0.08 });
  element.dataset.visible = 'false'; observer.observe(element);
  return () => observer.disconnect();
 }, []);
 return ref;
}
