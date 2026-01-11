'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Youtube, Mail, MapPin, Phone, Download, Play, Apple } from 'lucide-react';

export default function Home() {
    return (
        <main className="w-full">
            {/* Navigation */}
            <nav className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <Image src="/app_logo.png" width={50} height={50} alt="Kiddovate Logo" className="rounded-xl shadow-md" />
                    <span className="text-2xl font-black text-[#2B2D42]">Kiddovate</span>
                </div>
                <a href="#contact" className="btn-bubbly btn-orange px-6 py-2">Contact Us</a>
            </nav>

            {/* Hero Section */}
            <section className="pt-12 pb-24 px-6 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full font-bold mb-6 text-sm">
                        ✨ Making Learning Magical
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-[#2B2D42] mb-8 leading-tight">
                        The Fun Way to <br />
                        <span className="text-[#FF9F1C]">Learn & Play!</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
                        Join thousands of happy kids exploring math, art, and music with Kiddovate.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#" className="btn-bubbly bg-black text-white px-8 py-4 text-lg gap-3">
                            <Apple size={24} />
                            <div className="text-left leading-none">
                                <div className="text-xs opacity-80 font-normal">Download on the</div>
                                <div>App Store</div>
                            </div>
                        </a>
                        <a href="#" className="btn-bubbly bg-black text-white px-8 py-4 text-lg gap-3">
                            <Play size={24} fill="white" />
                            <div className="text-left leading-none">
                                <div className="text-xs opacity-80 font-normal">GET IT ON</div>
                                <div>Google Play</div>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Wave Separator */}
            <div className="section-wave text-[#FF9F1C]">
                <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-auto block">
                    <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* YouTube / Content Section */}
            <section className="bg-[#FF9F1C] pb-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-white mb-12">Watch Us in Action!</h2>

                    <div className="bg-white p-4 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* YouTube Embed Placeholder */}
                        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play size={40} fill="white" className="text-white ml-2" />
                                </div>
                            </div>
                            <Image
                                src="/app_logo.png"
                                alt="Video Thumbnail"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover opacity-50"
                            />
                            <div className="absolute bottom-6 left-6 text-left">
                                <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold inline-flex items-center gap-2 mb-2">
                                    <Youtube size={16} /> Subscribe
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Welcome to Kiddovate TV</h3>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center px-4">
                            <p className="font-bold text-gray-400">Join 1M+ Subscribers</p>
                            <a href="https://youtube.com" target="_blank" className="text-[#FF9F1C] font-black hover:underline">
                                Visit Channel &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wave Separator Inverse */}
            <div className="section-wave text-[#FF9F1C] bg-[#FFFDF7] transform rotate-180">
                <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-auto block">
                    <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 bg-[#FFFDF7]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#2B2D42] mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-500">Have questions? We'd love to hear from you!</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold mb-6 text-[#FF9F1C]">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                                            <Mail />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold opacity-50">Email Us</div>
                                            <div className="font-bold">hello@kiddovate.com</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-600">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                                            <MapPin />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold opacity-50">Location</div>
                                            <div className="font-bold">San Francisco, CA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="glass-card p-8 space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Parent's Name"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-[#4361EE] focus:outline-none transition-colors font-bold text-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-[#4361EE] focus:outline-none transition-colors font-bold text-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help?"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-[#FF9F1C] focus:outline-none transition-colors font-bold text-gray-700"
                                ></textarea>
                            </div>
                            <button className="w-full btn-bubbly btn-yellow py-4 text-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2B2D42] text-white py-12 px-6 text-center">
                <div className="items-center justify-center gap-2 mb-6 inline-flex">
                    <Image src="/app_logo.png" width={40} height={40} alt="Logo" className="rounded-lg opacity-90" />
                    <span className="font-fredoka text-2xl font-bold">Kiddovate</span>
                </div>
                <p className="opacity-60 font-medium mb-8">&copy; 2024 Kiddovate Inc. Made with ❤️ for kids.</p>
            </footer>
        </main>
    );
}
