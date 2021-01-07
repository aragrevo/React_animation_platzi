import './css/invie.css';
import { Hero } from './components/Hero';
import Guitars from './components/Guitars';
import Footer from './components/Footer';
import logoHero from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

const data = {
  menu: [
    { path: 'index.html', title: 'Home' },
    { path: '#guitarras', title: 'Guitarras' },
    { path: 'precios.html', title: 'Precios' },
  ],
  logoHero: logoHero,
  guitars: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ],
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: ['Estilo vintage', 'Liviana', 'Inicia tu camino como Rockstar'],
    },
  ],
};

function App() {
  return (
    <section className='Invie'>
      <Hero menu={data.menu} logo={data.logoHero} />
      <Guitars guitars={data.guitars} />
      <Footer />
    </section>
  );
}

export default App;
