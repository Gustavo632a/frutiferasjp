export interface PlantCategory { name: string; description: string; image: string; alt: string; inquiry: string }
export const products: PlantCategory[] = [
  { name: 'Mudas frutíferas', description: 'Opções para quem deseja cultivar árvores frutíferas em diferentes espaços.', image: 'folhas', alt: 'Folhas verdes de uma planta ao sol', inquiry: 'mudas frutíferas' },
  { name: 'Mudas enxertadas', description: 'Conheça as opções produzidas com técnicas de enxertia.', image: 'planta', alt: 'Ferramentas e terra para cultivo', inquiry: 'mudas enxertadas' },
  { name: 'Acerolas e cítricos', description: 'Consulte variedades de acerolas, laranjas e outras frutíferas.', image: 'laranjas', alt: 'Laranjas maduras com folhas', inquiry: 'variedades de acerolas e cítricos' },
  { name: 'Outras variedades', description: 'Descubra outras espécies e opções disponíveis para cultivo.', image: 'verde', alt: 'Folhagem verde em detalhe', inquiry: 'outras variedades frutíferas' },
];
