'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const TESTIMONIAL_KEYS = ['margad', 'bilguun', 'nominzul', 'sodbileg', 'ynjinlham'] as const;
const images: Record<string, string> = {
  margad: '/images/testimonials/margad.png',
  bilguun: '/images/testimonials/bilguun.png',
  nominzul: '/images/testimonials/nominzul.png',
  sodbileg: '/images/sodbileg.png',
  ynjinlham: '/images/testimonials/ynjinlham.png',
};

export function Testimonials() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = TESTIMONIAL_KEYS.map((key) => ({
    quote: t(`items.${key}.quote`),
    author: t(`items.${key}.author`),
    position: t(`items.${key}.position`),
    image: images[key],
  }));

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-gray-50 rounded-3xl mx-6 md:mx-12 lg:mx-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl text-gray-700 md:text-4xl md:text-gray-700 font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block">
            {t('title')}
          </h2>
        </div>

        <div className="bg-black text-white rounded-3xl p-4 md:p-12 relative flex flex-row justify-between items-end">
          <div className="flex flex-col md:flex-col justify-end items-start gap-6">
            <div className="max-w-4xl">
              <div className="mb-8 relative">
                <div className="absolute -top-6 -left-2 text-[#f9dc6b] text-6xl font-bold">&quot;</div>
                <p className="text-sm md:text-xl leading-relaxed pl-0 md:pl-8">{testimonials[currentIndex].quote}</p>
              </div>

              <div className="flex flex-row gap-4">
                <div>
                  <p className="font-bold text-[#f9dc6b] text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-[#ffb800]">{testimonials[currentIndex].position}</p>
                </div>
              </div>
              <div className="flex md:hidden justify-end items-end">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  width={100}
                  height={100}
                  className="rounded-full"
                  style={{ filter: 'grayscale(10%)', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f9dc6b] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#f9dc6b]' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f9dc6b] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start hidden md:flex">
            <div>
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                width={200}
                height={200}
                className="rounded-full"
                style={{ filter: 'grayscale(10%)', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
