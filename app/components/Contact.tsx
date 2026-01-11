'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-primary-blue font-andika mb-16">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-orange-50 p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-primary-blue font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 border-2 border-light-blue rounded-2xl focus:outline-none focus:border-primary-orange transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-primary-blue font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 border-2 border-light-blue rounded-2xl focus:outline-none focus:border-primary-orange transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-primary-blue font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-6 py-4 border-2 border-light-blue rounded-2xl focus:outline-none focus:border-primary-orange transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-primary-blue font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 border-2 border-light-blue rounded-2xl focus:outline-none focus:border-primary-orange transition-colors resize-none"
                placeholder="Tell us what you think..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-orange to-yellow-400 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Send Message 📧
            </button>

            {showSuccess && (
              <div className="bg-green-500 text-white p-4 rounded-2xl text-center animate-fade-in">
                ✅ Thank you! Your message has been sent successfully!
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
