import { Linkedin, Facebook, Twitter, InstagramIcon, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <div className='w-[80%]'>
      <footer className="bg-dark text-white rounded-t-3xl mt-20 px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image src="/images/logo-2.png" alt="Euroasia Education Center" width={40} height={40} />
                <span className="text-2xl font-bold">Euroasia Education Center</span>
              </div>

              <div className="space-y-4 ">
                <div>
                  <h4 className="font-bold mb-2">Бидэнтэй холбогдох:</h4>
                  <p className="text-white"> info@euroasiaedu.mn</p>
                  <p className="text-white"> +976 7272-7007</p>
                  <p className="text-white">City Center, 15th floor, Ulaanbaatar, Mongolia</p>
                  {/* <p className="text-gray-400">Ulaanbaatar, Mongolia</p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black">
            <div className="flex gap-6">
              <a href="#about" className="hover:text-[#f9dc6b] transition-colors">Бидний тухай</a>
              <a href="#services" className="hover:text-[#f9dc6b] transition-colors">Үйлчилгээ</a>
              <a href="#process" className="hover:text-[#f9dc6b] transition-colors">FAQ</a>
              <a href="#testimonials" className="hover:text-[#f9dc6b] transition-colors">Сэтгэгдлүүд</a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/euroasia_center/" target="_blank" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f9dc6b] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/euroasia.center" target="_blank" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f9dc6b] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>

            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-black text-center text-gray-400">
            <p>© 2026 Euroasia Education Center. All Rights Reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
