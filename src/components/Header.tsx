'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white shadow-sm py-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-2.png" alt="Euroasia Education Center" width={40} height={40} />
            <div className='flex flex-col '>
              <span className="text-[20px] font-bold text-dark leading-tight">Euroasia</span>
              <span className="text-[20px] font-bold text-dark leading-tight">Education Center</span>
            </div>
          </div></Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* <a href="#about" className="hover:text-gray-600 transition-colors">About us</a> */}
          <a href="#services" className="hover:text-gray-600 transition-colors">Үйлчилгээ</a>
          <a href="#process" className="hover:text-gray-600 transition-colors">FAQ</a>
          <a href="#team" className="hover:text-gray-600 transition-colors">Бидний тухай</a>
          <a href="#testimonials" className="hover:text-gray-600 transition-colors">Сэтгэгдлүүд</a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4">
          {/* <a href="#about" className="hover:text-gray-600 transition-colors">About us</a> */}
          <a href="#services" className="hover:text-gray-600 transition-colors">Үйлчилгээ</a>
          <a href="#process" className="hover:text-gray-600 transition-colors">FAQ</a>
          <a href="#team" className="hover:text-gray-600 transition-colors">Бидний тухай</a>
          <a href="#testimonials" className="hover:text-gray-600 transition-colors">Сэтгэгдлүүд</a>

        </nav>
      )}
    </header>
  );
}
