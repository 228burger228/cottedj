import Header from './components/Header';
import Hero from './components/Hero';
import Directions from './components/Directions';
import Projects from './components/Projects';
import Quiz from './components/Quiz';
import About from './components/About';
import Architecture from './components/Architecture';
import Steps from './components/Steps';
import WinterOffer from './components/WinterOffer';
import Portfolio from './components/Portfolio';
import Investors from './components/Investors';
import Geography from './components/Geography';
import Articles from './components/Articles';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Directions />
        <Projects />
        <Quiz />
        <About />
        <Architecture />
        <Steps />
        <WinterOffer />
        <Portfolio />
        <Investors />
        <Geography />
        <Articles />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
