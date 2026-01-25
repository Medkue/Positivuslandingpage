import { ArrowUpRight } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    },
    {
      text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    },
    {
      text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-gray-50 rounded-3xl mx-6 md:mx-12 lg:mx-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#B9FF66] px-4 py-2 rounded-lg inline-block">
            Case Studies
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        <div className="bg-black text-white rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-[#B9FF66]">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="md:px-6 first:pl-0 last:pr-0">
                <p className="text-lg mb-4">{study.text}</p>
                <button className="text-[#B9FF66] flex items-center gap-2 hover:gap-3 transition-all group">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
