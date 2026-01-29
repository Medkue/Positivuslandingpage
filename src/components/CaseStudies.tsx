
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CaseStudies() {
  const caseStudies = [
    {
      text: 'Шинэ Зеланд улс',
      image: '/images/new-zealand-photos/1.jpg',
      country: 'newzealand',
    },
    {
      text: "Ирланд улс",
      image: '/images/ireland-photos/1.jpeg',
      country: 'ireland',
    },

    {
      text: 'Хятад улс',
      image: '/images/china-photos/1.JPG',
      country: 'china',
    },
    {
      text: ' Work & Travel USA',
      image: '/images/usa-photos/1.jpg',
      country: 'usa',
    },
  ];

  return (
    // <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-gray-50 rounded-3xl mx-6 md:mx-12 lg:mx-20">
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block text-gray-700">
          Суралцах улсууд
        </h2>

      </div>

      {/* <div className="bg-gray-100 text-white rounded-3xl p-8 md:p-12 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" > */}
      <div className="grid grid-cols-1 md:grid-cols-4  gap-8 px-4 md:px-0">
        {caseStudies.map((study, idx) => (
          <Link key={idx} href={`/countries?country=${study.country}`}>
            <div className="md:px-6 first:pl-0  shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] last:pr-0 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all rounded-3xl overflow-hidden">
              <div className='relative w-full h-[150px]  md:h-[300px] rounded-3xl overflow-hidden '>
                <Image
                  src={study.image}
                  alt={study.text}
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='px-4 flex flex-col justify-between h-full items-center p-4'>
                <p className=" text-dark mb-4 text-black text-sm md:text-xl font-bold" style={{ textAlign: 'center' }}>{study.text}</p>
                <div className='flex items-center gap-1'>
                  <span className="text-xs md:text-sm text-black font-bold hover:text-dark hover:underline">Дэлгэрэнгүй</span>
                  <ArrowUpRight className='w-4 h-4' color='#195700' />
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    // </div>
    // </div >
  );
}
