import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-[#B9FF66] px-4 py-2 rounded-lg inline-block">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 border-2 border-black">
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                  placeholder="Name"
                />
              </div>
              
              <div>
                <label className="block mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">
                Message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66] resize-none"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
