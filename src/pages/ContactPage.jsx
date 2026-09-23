import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#3B2922] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C68B59] uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3B2922]">
            We'd Love to Hear From You
          </h1>
          <p className="text-xs text-[#6B5E57] leading-relaxed">
            Have questions about our blends, catering, or orders? Drop us a message or visit us in person.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#E2DAD0] flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-sm text-[#3B2922]">Visit Our Café</h3>
                <p className="text-xs text-[#6B5E57] mt-1">DHA Phase 5, Commercial Area, Karachi, Pakistan</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#E2DAD0] flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-sm text-[#3B2922]">Phone & WhatsApp</h3>
                <p className="text-xs text-[#6B5E57] mt-1">+92 300 1234567</p>
                <p className="text-[11px] text-[#A8988B]">Mon – Sun: 8 AM – 10 PM</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#E2DAD0] flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-sm text-[#3B2922]">Email Us</h3>
                <p className="text-xs text-[#6B5E57] mt-1">hello@brewandbean.com</p>
                <p className="text-[11px] text-[#A8988B]">We reply within 24 hours</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#E2DAD0] flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-sm text-[#3B2922]">Opening Hours</h3>
                <p className="text-xs text-[#6B5E57] mt-1">Mon – Fri: 8:00 AM – 10:00 PM</p>
                <p className="text-xs text-[#6B5E57]">Sat – Sun: 8:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-[#EADFCF] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#FAF7F2] text-[#C68B59] rounded-full flex items-center justify-center mx-auto border border-[#E2DAD0]">
                  <CheckCircle size={32} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#3B2922]">Thank You!</h2>
                <p className="text-xs text-[#6B5E57] max-w-sm mx-auto">
                  Your message has been received. Our team will get back to you shortly over email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#3B2922] text-[#FAF7F2] text-xs font-bold rounded-xl hover:bg-[#C68B59] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-serif font-bold text-[#3B2922]">Send a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#3B2922] tracking-wider uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E2DAD0] rounded-xl text-xs text-[#3B2922] focus:outline-none focus:border-[#C68B59] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#3B2922] tracking-wider uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E2DAD0] rounded-xl text-xs text-[#3B2922] focus:outline-none focus:border-[#C68B59] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#3B2922] tracking-wider uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="General Inquiry / Catering / Feedback"
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E2DAD0] rounded-xl text-xs text-[#3B2922] focus:outline-none focus:border-[#C68B59] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#3B2922] tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E2DAD0] rounded-xl text-xs text-[#3B2922] focus:outline-none focus:border-[#C68B59] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#3B2922] text-[#FAF7F2] text-xs font-bold tracking-widest rounded-xl hover:bg-[#C68B59] transition-all uppercase shadow-md flex items-center justify-center space-x-2 active:scale-95"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}