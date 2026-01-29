import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkingProcess } from '@/components/WorkingProcess';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Header />
      <main className="mt-20 pt-8">
        <Hero />
        <CaseStudies />
        <Services />

        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
