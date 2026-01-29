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
          <div className="w-full">
            <p className="text-sm md:text-lg">
              {description}
            </p>
          </div>
          {/* <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`flex items-center gap-2 ${textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform" />
              <span className="text-lg">Learn more</span>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: ['Боловсролын зөвлөх үйлчилгээ'],
      description: 'Олон улсын боловсролын мэргэшсэн зөвлөхүүд нь таны академик зорилго, хэлний түвшин, санхүүгийн нөхцөлд тохируулан суралцах улс орон болон тохирох хөтөлбөрийг санал болгодог.  ',
      bgColor: 'bg-gray-100',
    },
    {
      title: ['Сургууль сонголт'],
      description: 'Манай байгууллага нь 4 улсын 150 гаруй сургалтын хөтөлбөртэй албан ёсны агентын гэрээтэй хамтран ажилладаг бөгөөд сургуулийн бүртгэл хийж, албан ёсны урилга авах бүх процессыг хариуцан гүйцэтгэдэг.',
      bgColor: 'bg-[#f9dc6b]',
    },
    {
      title: ['Виз мэдүүлгийн цогц үйлчилгээ'],
      description: ' Виз мэдүүлэгчийн баримт бичигт нарийвчилсан анализ хийж, визний эрсдэлийг бага байлгахад чиглэсэн мэргэжлийн визний зөвлөгөөний дагуу бичиг баримтыг бүрдүүлнэ. Мөн сургалтын визэнд шаардлагатай визний захидал болон бусад бичиг баримтын баталгаат орчуулгыг хариуцан гүйцэтгэдэг.',
      bgColor: 'bg-gray-100',
      // textColor: 'text-white',
    },
    {
      title: ['Санхүүгийн баримт бичгийн зөвлөгөө'],
      description: 'Сургалтын төлбөр, амьжиргааны зардал, банкны баталгаа болон батлан даагчийн орлогыг нотлохтой холбоотой баримт бичгүүдэд мэргэжлийн зөвлөгөө өгч, элчин сайдын яамны шаардлагад бүрэн нийцүүлэн бүрдүүлнэ.',
      bgColor: 'bg-gray-100',
    },
    // {
    //   title: ['Content', 'Creation'],
    //   description: 'Compelling content that tells your story',
    //   bgColor: 'bg-[#f9dc6b]',
    // },
    // {
    //   title: ['Analytics and', 'Tracking'],
    //   description: 'Data-driven insights for better decisions',
    //   bgColor: 'bg-black',
    //   textColor: 'text-white',
    // },
  ];

  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block">
            Бидний үйлчилгээ
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
