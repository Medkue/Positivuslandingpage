'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { useTranslations } from 'next-intl';

const countryStaticData: Record<string, { images: string[]; schools?: Array<{ name: string; image?: string }> }> = {
  usa: {
    images: ['/images/usa-photos/1.jpg', '/images/usa-photos/2.jpg', '/images/usa-photos/3.jpg', '/images/usa-photos/4.jpg', '/images/usa-photos/5.jpg'],
    schools: [
      { name: 'Wisconsin Dells, WI' },
      { name: 'Branson, MO' },
      { name: 'Pigeon Forge, TN' },
      { name: 'Gatlinburg, TN' },
      { name: 'Cape Cod, MA' },
    ],
  },
  ireland: {
    images: ['/images/ireland-photos/1.jpeg', '/images/ireland-photos/2.jpeg', '/images/ireland-photos/3.jpeg', '/images/ireland-photos/4.jpeg', '/images/ireland-photos/5.jpg'],
    schools: [
      { name: 'Erin College', image: '/images/ireland-schools/Erin logo.png' },
      { name: 'Ned College', image: '/images/ireland-schools/Ned college.png' },
      { name: 'iBat college', image: '/images/ireland-schools/ibat.png' },
      { name: 'Babel Academy of English', image: '/images/ireland-schools/babel academy logo.jpg' },
      { name: 'Griffith College', image: '/images/ireland-schools/Griffith-College-Black-Logo.png' },
      { name: 'Student campus', image: '/images/ireland-schools/Student campus logoo.jpg' },
      { name: 'Seda College', image: '/images/ireland-schools/Seda-Logo.png' },
      { name: 'ISE', image: '/images/ireland-schools/ise logo.jpg' },
      { name: 'Dorset College', image: '/images/ireland-schools/Dorset college.png' },
      { name: 'Dublin Cultural Institute', image: '/images/ireland-schools/DCI logo.jpg' },
    ],
  },
  china: {
    images: ['/images/china-photos/1.jpg', '/images/china-photos/2.jpg', '/images/china-photos/3.jpeg', '/images/china-photos/4.JPG', '/images/china-photos/5.JPG'],
    schools: [
      { name: 'Nanjing Aeronautics And Astronautics University', image: '/images/china-schools/NUAA_logo.png' },
      { name: 'Shanghai University of Traditional Chinese Medicine', image: '/images/china-schools/Traditional chinese medicine.png' },
      { name: 'Shanghai Normal University', image: '/images/china-schools/Shanghai-Normal-University-Logo.png' },
      { name: 'Beijing Normal University', image: '/images/china-schools/Beijing_Normal_University_logo.png' },
      { name: 'International Business School, Beijing Foreign Studies University', image: '/images/china-schools/International Business School, Beijing Foreign Studies University logo.jpg' },
      { name: 'Capital University of Economics and Business', image: '/images/china-schools/Capital_University_of_Economics_and_Business_logo.png' },
      { name: 'Shanghai Institute of Technology', image: '/images/china-schools/Shanghai_Institute_of_Technology_Emblem.png' },
      { name: 'Chongqing Normal University', image: '/images/china-schools/Chongqing normal university logo.png' },
      { name: 'Chongqing University of Technology', image: '/images/china-schools/Chongqing University of Technology.png' },
      { name: 'Civil Aviation University of China', image: '/images/china-schools/Civil_Aviation_University_of_China_logo.png' },
    ],
  },
  newzealand: {
    images: ['/images/new-zealand-photos/1.jpg', '/images/new-zealand-photos/2.jpg', '/images/new-zealand-photos/3.jpg', '/images/new-zealand-photos/4.jpg', '/images/new-zealand-photos/5.jpg'],
    schools: [
      { name: 'English Teaching College', image: '/images/new-zealand-schools/ETc logo.png' },
      { name: "Nelson's International School", image: '/images/new-zealand-schools/Nelson College logo.jpeg' },
      { name: 'ICL Auckland', image: '/images/new-zealand-schools/ICL-Logo-Colour.png' },
      { name: 'Seafield Auckland', image: '/images/new-zealand-schools/Seafield Auckland logo.png' },
      { name: 'World Tesol Academy', image: '/images/new-zealand-schools/Tesol logo.png' },
      { name: 'Future Skills', image: '/images/new-zealand-schools/Future skill logo.png' },
      { name: 'LSNZ', image: '/images/new-zealand-schools/LSNZ logo.jpg' },
      { name: 'AGI Education', image: '/images/new-zealand-schools/AGI Education logo.png' },
      { name: 'Bridge International College', image: '/images/new-zealand-schools/Bridge International College logo.png' },
      { name: 'Kauri Academy', image: '/images/new-zealand-schools/Kauri Academy logo.jpg' },
    ],
  },
};

function CountriesPageContent() {
  const t = useTranslations('countries');
  const searchParams = useSearchParams();
  const countryCode = searchParams?.get('country') || '';
  const staticData = countryStaticData[countryCode.toLowerCase()];

  if (!staticData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="px-6 md:px-12 lg:px-20 py-12 md:py-20 mt-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t('notFound')}</h1>
            <p className="text-lg text-gray-700">{t('notFoundDescription')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const name = t(`${countryCode.toLowerCase()}.name`);
  const longText = t(`${countryCode.toLowerCase()}.longText`);
  const { images, schools } = staticData;
  const displayImages = images.slice(0, 5);
  const schoolsTitle = countryCode === 'usa' ? t('citiesTitle') : t('schoolsTitle');

  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <main className="mt-20">
        <section className="px-6 md:px-12 lg:px-20 py-4 md:py-4 bg-gray-50 pt-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{name}</h1>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-4 md:py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-col gap-8 md:gap-12">
              <div className="flex">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{longText}</p>
                </div>
              </div>

              {displayImages.length > 0 && (
                <div className="flex">
                  <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-4">
                    {displayImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full h-[400px] md:h-[700px] rounded-2xl overflow-hidden border-2 border-[#F9DC6B] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <ImageWithFallback src={image} alt={`${name} - Image ${index + 1}`} width={400} height={700} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {schools && schools.length > 0 && (
          <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{schoolsTitle}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {schools.map((school, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-white rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-full overflow-hidden px-4 py-2 gap-4"
                  >
                    {school.image ? (
                      <Image src={school.image} alt={school.name} width={60} height={60} className="object-cover rounded-full" />
                    ) : null}
                    <h3 className="text-sm md:text-base font-semibold text-center text-gray-800">{school.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function CountriesPage() {
  const t = useTranslations('countries');
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <Header />
          <main className="mt-20 flex-1 flex items-center justify-center">
            <p className="text-lg text-gray-600">{t('loading')}</p>
          </main>
          <Footer />
        </div>
      }
    >
      <CountriesPageContent />
    </Suspense>
  );
}
