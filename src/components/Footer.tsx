import { Linkedin, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-3xl mt-20 px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#B9FF66] rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">Positivus</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Contact us:</h4>
                <p className="text-gray-400">Email: info@positivus.com</p>
                <p className="text-gray-400">Phone: 555-567-8901</p>
                <p className="text-gray-400">Address: 1234 Main St</p>
                <p className="text-gray-400">Moonstone City, Stardust State 12345</p>
              </div>
            </div>
          </div>

          <div className="bg-[#292A32] rounded-2xl p-8">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#B9FF66] text-black rounded-lg hover:bg-[#a3e855] transition-colors whitespace-nowrap"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-700">
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#B9FF66] transition-colors">About us</a>
            <a href="#services" className="hover:text-[#B9FF66] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#B9FF66] transition-colors">Use Cases</a>
            <a href="#team" className="hover:text-[#B9FF66] transition-colors">Team</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 Positivus. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white transition-colors underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
