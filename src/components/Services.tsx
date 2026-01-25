import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string[];
  description: string;
  bgColor: string;
  textColor?: string;
}

function ServiceCard({ title, description, bgColor, textColor = 'text-black' }: ServiceCardProps) {
  return (
    <div className={`${bgColor} ${textColor} p-8 md:p-12 rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all`}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            {title.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < title.length - 1 && <br />}
              </span>
            ))}
          </h3>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`flex items-center gap-2 ${textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform" />
              <span className="text-lg">Learn more</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-48">
          <p className="text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: ['Search engine', 'optimization'],
      description: 'Boost your online visibility and drive organic traffic',
      bgColor: 'bg-gray-100',
    },
    {
      title: ['Pay-per-click', 'advertising'],
      description: 'Instant results with targeted ad campaigns',
      bgColor: 'bg-[#B9FF66]',
    },
    {
      title: ['Social Media', 'Marketing'],
      description: 'Engage your audience on social platforms',
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
    {
      title: ['Email', 'Marketing'],
      description: 'Personalized campaigns that convert',
      bgColor: 'bg-gray-100',
    },
    {
      title: ['Content', 'Creation'],
      description: 'Compelling content that tells your story',
      bgColor: 'bg-[#B9FF66]',
    },
    {
      title: ['Analytics and', 'Tracking'],
      description: 'Data-driven insights for better decisions',
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
  ];

  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#B9FF66] px-4 py-2 rounded-lg inline-block">
            Services
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
