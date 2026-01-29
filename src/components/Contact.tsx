'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b9b09269-ca80-4887-b5ff-c07b020aad4f',
          subject: 'New Contact Form Submission From Euroasia Education Center Website',
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message,
          to_email: 'info@euroasiaedu.mn',
        }),
      });


      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        setSubmitStatus('error');
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-3xl md:text-4xl font-bold bg-[#f9dc6b] px-4 py-2 rounded-lg inline-block text-gray-700">
            Бидэнтэй холбогдох
          </h2>

        </div>

        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 border-2 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              <div>
                <label className="block mb-2">
                  Нэр
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#f9dc6b]"
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Утасны дугаар*
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#f9dc6b]"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">
                Мессеж*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#f9dc6b] resize-none"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Илгээж байна...' : 'Мессеж илгээх'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
