import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Menu, X, Phone, MessageSquare, Camera, Inbox } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenInbox: () => void;
  inboxUnreadCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  navigate,
  onOpenInbox,
  inboxUnreadCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Album Design', path: '/album-design' },
    { label: 'About', path: '/about' },
    { label: 'Packages & Pricing', path: '/packages-pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const isCurrentActive = (path: string) => {
    if (path === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0F]/90 backdrop-blur-md border-b border-[#C8A45C]/20 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => handleNavClick('/')}
              className="text-left group cursor-pointer focus:outline-none shrink-0"
              aria-label="Capture Studio Photography Home"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full border border-[#C8A45C]/40 flex items-center justify-center bg-[#C8A45C]/10 text-[#C8A45C] group-hover:border-[#C8A45C] transition-colors">
                  <Camera className="w-4 h-4" />
                </span>
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#F5F1E8] group-hover:text-[#E5C98D] transition-colors whitespace-nowrap">
                  CAPTURE STUDIO
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const active = isCurrentActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer text-xs uppercase tracking-widest ${
                      active
                        ? 'text-[#E5C98D] font-semibold'
                        : 'text-[#A6A29A] hover:text-[#F5F1E8]'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A45C] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions & Studio Inbox */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Studio Inbox trigger */}
              <button
                onClick={onOpenInbox}
                title="Open Studio Enquiries Inbox"
                className="relative p-2 rounded-lg text-[#A6A29A] hover:text-[#E5C98D] hover:bg-[#171717] transition-colors border border-white/5 cursor-pointer"
                aria-label="Studio Enquiries Inbox"
              >
                <Inbox className="w-4 h-4" />
                {inboxUnreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C8A45C] text-black text-[10px] font-bold flex items-center justify-center">
                    {inboxUnreadCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('/contact')}
                className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#C8A45C]/20 whitespace-nowrap cursor-pointer"
              >
                Book a Session
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenInbox}
                className="relative p-2 text-[#A6A29A] hover:text-[#E5C98D]"
                aria-label="Inbox"
              >
                <Inbox className="w-5 h-5" />
                {inboxUnreadCount > 0 && (
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#C8A45C] text-black text-[9px] font-bold flex items-center justify-center">
                    {inboxUnreadCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F5F1E8] hover:text-[#C8A45C] transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-widest text-[#C8A45C]/70 pb-2 border-b border-white/10">
              Navigation
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const active = isCurrentActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left py-2 text-base uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                      active ? 'text-[#E5C98D] font-bold' : 'text-[#A6A29A] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#C8A45C]" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full py-3.5 rounded-xl text-center text-xs uppercase tracking-widest font-bold text-black gold-gradient-bg shadow-lg cursor-pointer"
            >
              Book a Session
            </button>
            <div className="flex items-center justify-around text-xs text-[#A6A29A] pt-2">
              <a
                href={`tel:${STUDIO_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-1.5 hover:text-[#C8A45C]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A45C]" />
                <span>Call Studio</span>
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.phonePrimaryRaw}?text=${encodeURIComponent(
                  STUDIO_INFO.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#25D366]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
