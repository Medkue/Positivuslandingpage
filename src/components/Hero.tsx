import { GraduationCap, Code2, UserCircle, Briefcase, Heart, Users } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className='w-screen'>
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center justify-between">
          <div className="space-y-6  w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark">
              Дэлхийн боловсролд хүрэх гарц
            </h1>
            <p className="text-2xl text-gray-700">

              Your Gateway to Global Education
            </p>

          </div>

          <div className="relative flex justify-center">
            <Image
              src='/images/euroasia.png'
              alt="Marketing illustration"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section >

      <div className="w-screen px-6 md:px-12 lg:px-20 py-12 md:py-16 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block">
            Бидний туршлага
          </h2>

          <div className=" w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-3xl md:text-4xl font-bold text-black">5</span>
              <span className="text-black text-lg">Улс</span>
            </div>

            <div className="w-full md:w-auto bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-3xl md:text-4xl font-bold text-black">95%</span>
              <span className="text-black text-lg">Виз гаралт</span>
            </div>

            <div className="w-full md:w-auto bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-3xl md:text-4xl font-bold text-black">150+</span>
              <span className="text-black text-lg">Хөтөлбөр</span>
            </div>

            <div className="w-full md:w-auto bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-3xl md:text-4xl font-bold text-black">2600+</span>
              <span className="text-black text-lg">Оюутан</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
