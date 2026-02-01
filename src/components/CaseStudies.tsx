'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function CaseStudies() {
  const t = useTranslations('caseStudies');

  const caseStudies = [
    { textKey: 'newZealand' as const, image: '/images/new-zealand-photos/1.jpg', country: 'newzealand' },
    { textKey: 'ireland' as const, image: '/images/ireland-photos/1.jpeg', country: 'ireland' },
    { textKey: 'china' as const, image: '/images/china-photos/1.JPG', country: 'china' },
    { textKey: 'usa' as const, image: '/images/usa-photos/1.jpg', country: 'usa' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block text-gray-700">
          {t('title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-8 px-4 md:px-0">
        {caseStudies.map((study, idx) => (
          <Link key={idx} href={`/countries?country=${study.country}`}>
            <div className="md:px-6 first:pl-0  shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] last:pr-0 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all rounded-3xl overflow-hidden">
              <div className="relative w-full h-[150px]  md:h-[300px] rounded-3xl overflow-hidden ">
                <Image
                  src={study.image}
                  alt={t(study.textKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="px-4 flex flex-col justify-between h-full items-center p-4">
                <p className=" text-dark mb-4 text-black text-sm md:text-xl font-bold" style={{ textAlign: 'center' }}>
                  {t(study.textKey)}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs md:text-sm text-black font-bold hover:text-dark hover:underline">{t('learnMore')}</span>
                  <ArrowUpRight className="w-4 h-4" color="#195700" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
