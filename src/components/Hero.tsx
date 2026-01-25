import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg text-gray-700">
            Our digital marketing agency helps businesses grow and succeed online through data-driven strategies and creative campaigns.
          </p>
          <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Book a consultation
          </button>
        </div>
        
        <div className="relative">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758691736542-c437fea2c673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjkzMzg3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Marketing illustration"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Logo strip */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 grayscale opacity-50">
          {['Amazon', 'Dribbble', 'HubSpot', 'Notion', 'Netflix', 'Zoom'].map((company) => (
            <div key={company} className="text-2xl font-bold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
