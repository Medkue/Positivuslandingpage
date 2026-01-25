import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-[#B9FF66] rounded-full"></div>
          </div>
          <span className="text-2xl font-bold">Positivus</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-gray-600 transition-colors">About us</a>
          <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
          <a href="#process" className="hover:text-gray-600 transition-colors">Use Cases</a>
          <a href="#team" className="hover:text-gray-600 transition-colors">Team</a>
          <a href="#testimonials" className="hover:text-gray-600 transition-colors">Testimonials</a>
          <button className="px-6 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors">
            Request a quote
          </button>
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
          <a href="#about" className="hover:text-gray-600 transition-colors">About us</a>
          <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
          <a href="#process" className="hover:text-gray-600 transition-colors">Use Cases</a>
          <a href="#team" className="hover:text-gray-600 transition-colors">Team</a>
          <a href="#testimonials" className="hover:text-gray-600 transition-colors">Testimonials</a>
          <button className="px-6 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors w-full">
            Request a quote
          </button>
        </nav>
      )}
    </header>
  );
}
