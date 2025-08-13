'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
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
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <img src="/contact-2.png" alt="Contact Flights & Sounds" className="relative w-full h-auto object-contain object-top bg-[#EDDEB7]" />
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#FFF8D9]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold font-gabarito text-[#432C2C] mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium font-gabarito text-[#432C2C] mb-2">General Inquiries</h3>
                  <p className="text-[#245451] font-gabarito font-normal text-[16px]">
                    Contact us with any questions about the festival, ticketing, or general information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium font-gabarito text-[#432C2C] mb-2">Artist & Performer Applications</h3>
                  <p className="text-[#245451] font-gabarito font-normal text-[16px]">
                    Interested in performing at Flights & Sounds? We&apos;d love to hear from you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium font-gabarito text-[#432C2C] mb-2">Volunteer Opportunities</h3>
                  <p className="text-[#245451] font-gabarito font-normal text-[16px]">
                    Want to be part of making this festival happen? Join our volunteer team.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold font-gabarito text-[#432C2C] mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-normal font-gabarito text-[#432C2C] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-[#245451] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-gabarito"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-normal font-gabarito text-[#432C2C] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-[#245451] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-gabarito"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-normal font-gabarito text-[#432C2C] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-[#245451] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-gabarito"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="artist">Artist Application</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-normal font-gabarito text-[#432C2C] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-[#245451] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-gabarito"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EA902B] text-[#432C2C] py-3 px-6 rounded-md hover:bg-[#ECD35A] transition-colors duration-200 font-gabarito font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 