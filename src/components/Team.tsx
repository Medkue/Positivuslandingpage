import { Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-8 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-black"
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Linkedin className="w-5 h-5 text-[#B9FF66]" />
          </div>
        </div>
        
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-1">{name}</h4>
          <p className="text-gray-600 mb-3">{role}</p>
          <p className="text-gray-700">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO and Founder',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2OTI2OTM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    },
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI5NzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '7+ years of experience in project management and team leadership. Strong organizational skills',
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2OTI2OTM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    },
    {
      name: 'Emily Johnson',
      role: 'PPC Manager',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI5NzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    },
    {
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2OTI2OTM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, tracking metrics, and building engagement',
    },
    {
      name: 'Sarah Kim',
      role: 'Content Creator',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI5NzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    },
  ];

  return (
    <section id="team" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#B9FF66] px-4 py-2 rounded-lg inline-block">
            Team
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {team.map((member, idx) => (
            <TeamMember key={idx} {...member} />
          ))}
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}
