'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
}

function ServiceCard({ title, description, bgColor, textColor = 'text-black' }: ServiceCardProps) {
  return (
    <div className={`${bgColor} ${textColor} p-8 md:p-12 rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all`}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          <div className="w-full">
            <p className="text-sm md:text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      title: t('educationConsulting.title'),
      description: t('educationConsulting.description'),
      bgColor: 'bg-gray-100',
    },
    {
      title: t('schoolSelection.title'),
      description: t('schoolSelection.description'),
      bgColor: 'bg-[#f9dc6b]',
    },
    {
      title: t('visaService.title'),
      description: t('visaService.description'),
      bgColor: 'bg-gray-100',
    },
    {
      title: t('financialDocs.title'),
      description: t('financialDocs.description'),
      bgColor: 'bg-gray-100',
    },
  ];

  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
