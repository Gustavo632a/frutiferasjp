import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero, Products, About, NurseryGallery, ContactLocation } from './components/Sections';
import { WhatsAppButton } from './components/UI';
export default function App() { return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo"><Hero/><Products/><About/><NurseryGallery/><ContactLocation/></main><Footer/><WhatsAppButton/></>; }
