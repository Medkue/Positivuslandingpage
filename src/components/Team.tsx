'use client';

import { Linkedin, Smile } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
        <div className="relative ">
          <Image
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-black"
            width={96}
            height={96}
            style={{ filter: 'grayscale(10%)', objectFit: 'cover' }}
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Smile className="w-5 h-5 text-[#f9dc6b]" />
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

const TEAM_KEYS = ['munhshur', 'oyunbolor', 'enhtuya', 'munhhuslen', 'otgeonerdene', 'namuulan'] as const;

export function Team() {
  const t = useTranslations('team');
  const images: Record<string, string> = {
    munhshur: '/images/team/munhshur.jpeg',
    oyunbolor: '/images/team/oyunbolor.jpeg',
    enhtuya: '/images/team/enhtuya.jpeg',
    munhhuslen: '/images/team/munhhuslen.jpeg',
    otgeonerdene: '/images/team/otgeonerdene.jpeg',
    namuulan: '/images/team/namuulan.jpeg',
  };

  const team = TEAM_KEYS.map((key) => ({
    name: t(`members.${key}.name`),
    role: t(`members.${key}.role`),
    image: images[key],
    bio: t(`members.${key}.bio`),
  }));

  return (
    <section id="team" className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block text-gray-700">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {team.map((member, idx) => (
            <TeamMember key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
