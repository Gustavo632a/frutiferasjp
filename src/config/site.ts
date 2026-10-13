export const site = {
  name: 'Frutíferas João Pessoa', phone: '5583993523501', phoneLabel: '(83) 99352-3501',
  instagram: 'https://www.instagram.com/frutiferasjoaopessoa/',
  address: 'Rua Manoel Cândido Soares, 25', neighborhood: 'Praia de Jacarapé', city: 'João Pessoa', state: 'PB',
  url: import.meta.env.VITE_SITE_URL?.trim() || '',
  inquiry: 'Olá! Conheci a Frutíferas João Pessoa pelo site e gostaria de consultar as mudas disponíveis.',
} as const;
export const navigation = [{ href: '#inicio', label: 'Início' }, { href: '#mudas', label: 'Mudas' }, { href: '#sobre', label: 'Sobre' }, { href: '#viveiro', label: 'Viveiro' }, { href: '#contato', label: 'Contato' }];
