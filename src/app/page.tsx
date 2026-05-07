// Sections
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills';
import Experience from '@/components/Sections/Experience';
import Portfolio from '@/components/Sections/Portfolio';
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
        <Skills />
        <Portfolio />
        <Experience />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  )
}
