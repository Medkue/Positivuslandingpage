import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      quote: "Positivus transformed our digital strategy completely. Their innovative approach and dedication to understanding our brand helped us achieve a 200% increase in engagement. The results speak for themselves, and we couldn't be happier with the partnership.",
      author: "Sarah Johnson",
      position: "CEO at Tech Innovations"
    },
    {
      quote: "Working with Positivus has been a game-changer for our business. Their team's expertise in SEO and content marketing has helped us reach new audiences and convert more leads than ever before. Truly a five-star agency!",
      author: "Michael Chen",
      position: "Founder of StartupXYZ"
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold bg-[#B9FF66] px-4 py-2 rounded-lg inline-block">
            Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        <div className="bg-black text-white rounded-3xl p-8 md:p-12 relative">
          <div className="max-w-4xl">
            <div className="mb-8 relative">
              <div className="absolute -top-6 -left-2 text-[#B9FF66] text-6xl font-bold">"</div>
              <p className="text-lg md:text-xl leading-relaxed pl-8">
                {testimonials[currentIndex].quote}
              </p>
            </div>
            
            <div>
              <p className="font-bold text-[#B9FF66] text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-400">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-[#B9FF66]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
