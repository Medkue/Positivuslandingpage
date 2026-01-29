'use client';

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
          <span className="text-4xl md:text-5xl font-bold text-gray-700">{number}</span>
          <span className="text-xl md:text-2xl font-bold text-left text-gray-700">{title}</span>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#f9dc6b]' : 'bg-gray-300'}`}>
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
      title: 'Ямар улс руу суралцах боломжтой вэ?',
      description: 'Манай байгууллагаар дамжуулан Ирланд, Шинэ Зеланд, Хятад, мөн Америк улс руу суралцах боломжтой.',
    },
    {
      number: '02',
      title: 'Суралцах хугацаандаа ажиллах боломжтой юу?',
      description: 'Ирланд, Шинэ Зеланд улсад оюутнууд суралцах хугацаандаа албан ёсоор ажиллах эрхтэй.Work & Travel USA хөтөлбөрөөр зуны амралтаараа Америкт ажиллангаа хэлээ сайжруулах боломжтой байдаг.',
    },
    {
      number: '03',
      title: 'Сургуулийн урилгыг та нар авч өгдөг үү?',
      description: 'Тийм ээ. Бид тухайн оюутны зорилго, хэлний түвшинд тохирсон сургуулийг санал болгож, албан ёсны урилга авах болон визний бүх процессыг хариуцан ажилладаг.',
    },
    {
      number: '04',
      title: 'Сургалтын төлбөрийг урьдчилж төлөх шаардлагатай юу?',
      description: 'Сургууль болон улсаас хамаарна. Зарим тохиолдолд урьдчилан төлдөг бол зарим тохиолдолд виз гарсны дараа төлөх боломжтой. ',
    },
    {
      number: '05',
      title: 'Англи хэлний оноо заавал шаардлагатай юу?',
      description: 'Таны ямар хөтөлбөрт сурахаар төлөвлөж буйгаас хамаарна. Хэлний бэлтгэлд оноо шаардлагагүй бол коллеж, их сургуульд IELTS-н оноо, англи хэлний бусад оноо шаардагдаж болно.',
    },
    {
      number: '06',
      title: 'Виз хэр удаж байж гарах вэ?',
      description: 'Визний хугацаа улс, ямар улирлаас шалтгаална. Дунджаар 4–8 долоо хоног байдаг. ',
    },
    {
      number: '07',
      title: 'Виз гарсны дараа ямар дэмжлэг үзүүлэх вэ?',
      description: 'Виз гарсны дараа байр, даатгал, нислэгийн үнэ, тухайн улсад очоод амьдрах байрны талаарх бодит визний дараах зөвлөгөөг өгдөг.',
    },
    {
      number: '08',
      title: 'Виз татгалзвал яах вэ?',
      description: 'Виз татгалзсан тохиолдолд шалтгааныг нарийвчлан шинжилж, дахин мэдүүлэх эсвэл давж заалдах боломжийг мэргэжлийн түвшинд зөвлөнө.',
    }
  ];

  return (
    <section id="process" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block text-gray-700">
            Түгээмэл асуулт – Хариулт
          </h2>

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
