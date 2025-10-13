// Sections
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Experience from '@/components/Sections/Experience';
import Portfolio from '@/components/Sections/Portfolio';
import Contact from '@/components/Sections/Contact';
// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/Common/BackToTopButton';

export default function Home() {
  return (
    <div className="ml-auto lg:ml-64">
      <Header />
      <main className="block">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  )
}
