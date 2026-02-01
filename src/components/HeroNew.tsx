'use client';

import { GraduationCap, Code2, UserCircle, Briefcase, Heart, Users } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function HeroNew() {
    const t = useTranslations('hero');

    return (
        <div className="w-screen ">
            {/* <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
                <div className="max-w-7xl mx-auto gap-8 items-center justify-between"> */}
            <div
                className="w-full h-[700px] rounded-2xl overflow-hidden relative px-6 md:px-12 lg:px-20  flex items-center justify-center shrink-0"
                style={{
                    height: '700px',
                    minHeight: '700px',
                    backgroundImage: 'url(/images/bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* <div
                    className="relative w-full z-10 p-8 text-center rounded-2xl"
                    style={{
                        width: '600px',
                        backgroundColor: 'rgba(255, 253, 208, 0.9)',
                    }}
                >
                    <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold leading-tight text-black">{t('title')}</h1>
                </div> */}

            </div>




            {/* </div>
            </section> */}

            <div className="w-screen px-6 md:px-12 lg:px-20 py-12 md:py-16  ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-col items-start justify-between gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block">
                        {t('statsTitle')}
                    </h2>

                    <div className="grid w-full grid-cols-2 md:max-w-3xl  md:grid-cols-4 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-3xl md:text-4xl font-bold text-black">4</span>
                            <span className="text-black text-lg">{t('countries')}</span>
                        </div>

                        <div className="bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-3xl md:text-4xl font-bold text-black">95%</span>
                            <span className="text-black text-lg">{t('visaSuccess')}</span>
                        </div>

                        <div className="bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-3xl md:text-4xl font-bold text-black">150+</span>
                            <span className="text-black text-lg">{t('programs')}</span>
                        </div>

                        <div className="bg-white rounded-2xl p-4 border-2 border-black shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-3xl md:text-4xl font-bold text-black">2600+</span>
                            <span className="text-black text-lg">{t('students')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
