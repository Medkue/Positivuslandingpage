import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
        className="w-full p-8 flex items-center justify-between hover:bg-gray-200 transition-colors"
      >
        <div className="flex items-center gap-6">
          <span className="text-4xl md:text-5xl font-bold">{number}</span>
          <span className="text-xl md:text-2xl font-bold text-left">{title}</span>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#B9FF66]' : 'bg-gray-300'}`}>
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-8 pb-8 border-t-2 border-black pt-6">
          <p className="text-lg text-gray-700 max-w-3xl">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  const processes = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description: 'We conduct in-depth research on your industry, competitors, and target market. Based on our findings, we develop a comprehensive strategy that aligns with your business objectives and maximizes your ROI.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Once the strategy is approved, our team of experts will execute the plan using the latest tools and techniques. We ensure every campaign element is carefully crafted and optimized for success.',
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      description: 'We continuously monitor campaign performance and make data-driven adjustments to improve results. Our team provides regular reports and insights to keep you informed of progress and ROI.',
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      description: 'We believe in complete transparency. You will receive detailed reports on campaign performance, and our team is always available to discuss results, answer questions, and plan future strategies.',
    },
    {
      number: '06',
      title: 'Continual Improvement',
      description: 'Digital marketing is an ongoing process. We continually refine and improve our strategies based on performance data, industry trends, and your evolving business needs to ensure sustained growth.',
    },
  ];

  return (
    <section id="process" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#B9FF66] px-4 py-2 rounded-lg inline-block">
            Our Working Process
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="space-y-6">
          {processes.map((process, idx) => (
            <ProcessStep
              key={idx}
              {...process}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
