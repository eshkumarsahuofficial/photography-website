import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Camera, MapPin, Phone, Mail, Instagram, Facebook, ArrowUp, Inbox, Shield, FileText } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
  onOpenInbox: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenInbox }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#09090b] text-[#A6A29A] border-t border-white/10 pt-20 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-white">
                <span className="w-8 h-8 rounded-full border border-[#C8A45C]/50 flex items-center justify-center bg-[#C8A45C]/10 text-[#C8A45C]">
                  <Camera className="w-4 h-4" />
                </span>
                <span className="font-serif text-xl font-bold tracking-wider">
                  CAPTURE STUDIO
                </span>
              </div>
              <p className="text-xs font-light leading-relaxed">
                A creative photography experience dedicated to capturing timeless memories. Specialising in royal Indian weddings, heirloom album design, and intimate portraits.
              </p>
              <div className="flex items-center gap-3 pt-2 text-[#C8A45C]">
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C8A45C] hover:text-black flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C8A45C] hover:text-black flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenInbox}
                  className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#C8A45C] hover:text-black text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer text-[#E5C98D]"
                  title="Open Inquiries Inbox"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Inbox</span>
                </button>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#E5C98D] font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Services', path: '/services' },
                  { label: 'Portfolio', path: '/portfolio' },
                  { label: 'Album Design', path: '/album-design' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Packages & Pricing', path: '/packages-pricing' },
                  { label: 'Contact & Bookings', path: '/contact' },
                ].map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => navigate(item.path)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#E5C98D] font-semibold">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                {[
                  { label: 'Wedding Photography', path: '/portfolio/weddings' },
                  { label: 'Pre-Wedding Photography', path: '/portfolio/weddings' },
                  { label: 'Portrait Photography', path: '/portfolio/portraits' },
                  { label: 'Family & Newborn Photography', path: '/portfolio/newborn' },
                  { label: 'Wedding Album Designing', path: '/album-design' },
                  { label: 'Premium Photo Printing', path: '/services' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => navigate(item.path)}
                      className="hover:text-[#C8A45C] transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#E5C98D] font-semibold">
                Contact Studio
              </h4>
              <div className="space-y-3 text-xs font-light">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C8A45C] shrink-0 mt-0.5" />
                  <span>Gaindatola, Rajnandgaon, Chhattisgarh, India (Infront of Police Station)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C8A45C] shrink-0" />
                  <a href={`tel:${STUDIO_INFO.phonePrimaryRaw}`} className="text-white hover:underline">
                    {STUDIO_INFO.phonePrimary}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C8A45C] shrink-0" />
                  <a href={`tel:${STUDIO_INFO.phoneSecondaryRaw}`} className="hover:text-white">
                    {STUDIO_INFO.phoneSecondary}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C8A45C] shrink-0" />
                  <span className="text-[#A6A29A]">{STUDIO_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A6A29A]/80">
            <div>
              © {new Date().getFullYear()} Capture Studio Photography. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-[#E5C98D] cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-[#E5C98D] cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button
                onClick={scrollToTop}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#C8A45C] hover:text-black flex items-center justify-center transition-colors cursor-pointer text-white ml-2"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#17171a] border border-[#C8A45C]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                {activeModal === 'privacy' ? (
                  <>
                    <Shield className="w-5 h-5 text-[#C8A45C]" />
                    <span>Privacy Policy</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 text-[#C8A45C]" />
                    <span>Terms & Conditions</span>
                  </>
                )}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-[#A6A29A] space-y-3 font-light leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    Capture Studio Photography values your personal privacy. Any information you submit via our booking and inquiry forms—including your name, email, phone number, and event dates—is used strictly for communicating regarding your photography commissions.
                  </p>
                  <p>
                    We never sell, rent, or lease client contact information or ceremony photographs to third-party advertisers. All client image archives are stored on encrypted and secure offline and cloud storage.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Booking and Reservation: Dates for weddings, pre-weddings, and events are confirmed only upon receipt of the agreed booking deposit and signed service confirmation.
                  </p>
                  <p>
                    Album Proofing & Deliveries: Master digital photographs are delivered within 14 working days of the event. Album print approvals must be verified digitally by the client before being sent for binding and physical printing.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-[#C8A45C] text-black text-xs font-bold cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
