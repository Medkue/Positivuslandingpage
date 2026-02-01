'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

function ProcessStep({ number, title, description, isOpen, onToggle }: ProcessStepProps) {
  return (
    <div className="bg-gray-100 rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-8 flex items-center justify-between hover:bg-gray-200 transition-colors"
      >
        <div className="flex items-center gap-6">
          <span className="text-2xl md:text-4xl font-bold text-gray-700">{number}</span>
          <span className="text-lg md:text-2xl font-bold text-left text-gray-700">{title}</span>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#f9dc6b]' : 'bg-gray-300'}`}>
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-8 pb-8 border-t-2 border-black pt-6">
          <p className="text-sm md:text-lg text-gray-700 max-w-3xl">{description}</p>
        </div>
      )}
    </div>
  );
}

export function WorkingProcess() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState(0);

  const processes = [
    { number: '01', questionKey: 'q1' as const },
    { number: '02', questionKey: 'q2' as const },
    { number: '03', questionKey: 'q3' as const },
    { number: '04', questionKey: 'q4' as const },
    { number: '05', questionKey: 'q5' as const },
    { number: '06', questionKey: 'q6' as const },
    { number: '07', questionKey: 'q7' as const },
    { number: '08', questionKey: 'q8' as const },
  ];

  return (
    <section id="process" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block text-gray-700">
            {t('title')}
          </h2>
        </div>

        <div className="space-y-6">
          {processes.map((process, idx) => (
            <ProcessStep
              key={idx}
              number={process.number}
              title={t(`${process.questionKey}.question`)}
              description={t(`${process.questionKey}.answer`)}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
