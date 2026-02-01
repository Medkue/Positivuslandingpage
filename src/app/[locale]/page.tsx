import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkingProcess } from '@/components/WorkingProcess';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { HeroNew } from '@/components/HeroNew';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Header />
      <main className="mt-20 ">
        {/* <HeroNew /> */}
        <Hero />
        <CaseStudies />
        <Services />

        <WorkingProcess />
        <Contact />
        <Team />
        <Testimonials />

      </main>
      <Footer />
    </div>
  );
}
