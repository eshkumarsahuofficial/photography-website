import React, { useState, useEffect } from 'react';
import { STUDIO_INFO, Enquiry } from '../data/studioData';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  Sparkles,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onEnquirySubmitted: (enquiry: Enquiry) => void;
  isFullPage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  onEnquirySubmitted,
  isFullPage = false,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [service, setService] = useState(initialService || 'Wedding Photography');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedEnquiry, setLastSubmittedEnquiry] = useState<Enquiry | null>(null);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid phone number (min 10 digits).';
    }

    if (!service) {
      errs.service = 'Please select a photography service.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable integration saving enquiry to persistent storage
    setTimeout(() => {
      const newEnquiry: Enquiry = {
        id: `enq-${Date.now()}`,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        preferredDate: preferredDate || 'Flexible / To be confirmed',
        service,
        message: message.trim() || 'No specific notes provided.',
        createdAt: new Date().toISOString(),
        status: 'new',
      };

      // Save to localStorage
      try {
        const stored = localStorage.getItem('capture_studio_enquiries');
        const list: Enquiry[] = stored ? JSON.parse(stored) : [];
        const updated = [newEnquiry, ...list];
        localStorage.setItem('capture_studio_enquiries', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed saving to localStorage', err);
      }

      onEnquirySubmitted(newEnquiry);
      setLastSubmittedEnquiry(newEnquiry);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setPreferredDate('');
    setMessage('');
    setIsSuccess(false);
  };

  const sendWhatsAppCopy = () => {
    if (!lastSubmittedEnquiry) return;
    const msg = `*New Studio Booking Enquiry*\nName: ${lastSubmittedEnquiry.fullName}\nPhone: ${lastSubmittedEnquiry.phone}\nEmail: ${lastSubmittedEnquiry.email}\nService: ${lastSubmittedEnquiry.service}\nPreferred Date: ${lastSubmittedEnquiry.preferredDate}\nNote: ${lastSubmittedEnquiry.message}`;
    window.open(
      `https://wa.me/${STUDIO_INFO.phonePrimaryRaw}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className={`bg-[#0D0D0F] relative ${isFullPage ? 'pt-28 pb-24' : 'py-24 sm:py-32'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
            Inquiries & Reservations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mb-4">
            Let's Create Something Beautiful Together.
          </h2>
          <p className="text-[#A6A29A] text-base sm:text-lg font-light leading-relaxed">
            Tell us about your celebration, wedding dates, or studio session. We look forward to capturing your story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details Panel (col-span-5) */}
          <div className="lg:col-span-5 space-y-8 p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C8A45C] font-semibold block">
                Studio Headquarters
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {STUDIO_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A29A] font-light leading-relaxed">
                We welcome couples and families for coffee, photo consultations, and album touch-and-feel viewings at our Gaindatola studio.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">Studio Address</p>
                  <p className="text-[#A6A29A] font-light mt-0.5 leading-relaxed">
                    {STUDIO_INFO.address}
                  </p>
                </div>
              </div>

              {/* Primary Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">Primary Phone & WhatsApp</p>
                  <a
                    href={`tel:${STUDIO_INFO.phonePrimaryRaw}`}
                    className="text-[#E5C98D] hover:underline font-medium block mt-0.5"
                  >
                    {STUDIO_INFO.phonePrimary}
                  </a>
                  <p className="text-[11px] text-[#A6A29A] mt-0.5">
                    Fast response on WhatsApp 7 days a week.
                  </p>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">Secondary Studio Line</p>
                  <a
                    href={`tel:${STUDIO_INFO.phoneSecondaryRaw}`}
                    className="text-[#F5F1E8] hover:text-[#E5C98D] font-medium block mt-0.5"
                  >
                    {STUDIO_INFO.phoneSecondary}
                  </a>
                </div>
              </div>

              {/* Studio Timings */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">Consultation Hours</p>
                  <p className="text-[#A6A29A] font-light mt-0.5">
                    Monday – Sunday: 9:00 AM – 9:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Chat Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-transparent border border-[#25D366]/30 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-white">Prefer instant WhatsApp chat?</p>
                <p className="text-[11px] text-[#A6A29A]">Chat directly with our lead photographer.</p>
              </div>
              <a
                href={`https://wa.me/${STUDIO_INFO.phonePrimaryRaw}?text=${encodeURIComponent(
                  STUDIO_INFO.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-full text-xs font-bold text-black bg-[#25D366] hover:brightness-110 shrink-0 flex items-center gap-1.5 shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Interactive Booking Form (col-span-7) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#141416] border border-white/10 shadow-2xl relative">
            {isSuccess ? (
              /* Success Confirmation Screen */
              <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#C8A45C]/15 text-[#C8A45C] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#C8A45C] font-semibold">
                    Enquiry Received
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    Thank You, {lastSubmittedEnquiry?.fullName}!
                  </h3>
                  <p className="text-sm text-[#A6A29A] max-w-md mx-auto font-light leading-relaxed">
                    Your enquiry for <span className="text-[#E5C98D]">{lastSubmittedEnquiry?.service}</span> has been saved directly to our Studio Inbox. Our lead photographer will contact you within 24 hours.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-5 rounded-2xl bg-[#1a1a1e] border border-white/10 text-left text-xs max-w-md mx-auto space-y-2 text-[#A6A29A]">
                  <div className="flex justify-between">
                    <span>Contact Number:</span>
                    <span className="text-white font-medium">{lastSubmittedEnquiry?.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-white font-medium">{lastSubmittedEnquiry?.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preferred Date:</span>
                    <span className="text-[#C8A45C] font-medium">{lastSubmittedEnquiry?.preferredDate}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    onClick={sendWhatsAppCopy}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-black bg-[#25D366] hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Copy on WhatsApp</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/15 transition-all cursor-pointer border border-white/10"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    Book A Session / Request Quote
                  </h3>
                  <p className="text-xs text-[#A6A29A] font-light">
                    Fields marked with <span className="text-[#C8A45C]">*</span> are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E8]">
                      Full Name <span className="text-[#C8A45C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1f1f23] text-white text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45C] transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E8]">
                      Email Address <span className="text-[#C8A45C]">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1f1f23] text-white text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45C] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E8]">
                      Phone Number <span className="text-[#C8A45C]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1f1f23] text-white text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45C] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E8]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1f1f23] text-white text-sm border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C8A45C] transition-colors scheme-dark"
                    />
                  </div>
                </div>

                {/* Photography Service Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E8]">
                    Photography Service <span className="text-[#C8A45C]">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#1f1f23] text-white text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45C] transition-colors ${
                      errors.service ? 'border-red-500' : 'border-white/10'
                    }`}
                  >
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Pre-Wedding Photography">Pre-Wedding Photography</option>
                    <option value="Engagement Photography">Engagement Photography</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Newborn & Family Photography">Newborn & Family Photography</option>
                    <option value="Birthday & Event Photography">Birthday & Event Photography</option>
                    <option value="Wedding Album Designing">Wedding Album Designing</option>
                    <option value="Premium Photo Printing & Framing">Premium Photo Printing & Framing</option>
                    <option value="Other">Other Custom Inquiry</option>
                  </select>
                  {errors.service && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F1E8]">
                    Your Message / Event Location
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the venue, ceremony details, guest count, or album preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1f1f23] text-white text-sm border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C8A45C] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold text-black gold-gradient-bg hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-[#C8A45C]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Transmitting Enquiry to Studio...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Send Booking Enquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#A6A29A] text-center mt-3">
                    We respect your privacy. No spam. You will also have the option to confirm directly on WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
