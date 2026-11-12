import React, { useState } from 'react';
import { PORTFOLIO_DATA, PortfolioItem, SERVICES_DATA } from '../data/studioData';
import { Lightbox } from './Lightbox';
import { Eye, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface PortfolioSectionProps {
  activeCategory?: 'all' | 'weddings' | 'portraits' | 'newborn';
  onCategoryChange?: (category: 'all' | 'weddings' | 'portraits' | 'newborn') => void;
  onBookSession: (category?: string) => void;
  isStandalonePage?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  activeCategory = 'all',
  onCategoryChange,
  onBookSession,
  isStandalonePage = false,
}) => {
  const [internalCategory, setInternalCategory] = useState<'all' | 'weddings' | 'portraits' | 'newborn'>(activeCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentFilter = onCategoryChange ? activeCategory : internalCategory;

  const handleFilterClick = (cat: 'all' | 'weddings' | 'portraits' | 'newborn') => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const filteredItems: PortfolioItem[] =
    currentFilter === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === currentFilter);

  const openLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
    setLightboxOpen(true);
  };

  const filterButtons = [
    { id: 'all', label: 'All Works' },
    { id: 'weddings', label: 'Weddings & Engagements' },
    { id: 'portraits', label: 'Portraits & Headshots' },
    { id: 'newborn', label: 'Newborn & Family' },
  ] as const;

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0D0D0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mb-4">
            A Collection of Stories Captured Through Our Lens
          </h2>
          <p className="text-[#A6A29A] text-base sm:text-lg font-light leading-relaxed">
            Every frame is composed with cinematic nuance, authentic emotion, and timeless color grading.
          </p>
        </div>

        {/* Category Preview Cards if on Portfolio Index */}
        {isStandalonePage && currentFilter === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => handleFilterClick(srv.slug as any)}
                className="group relative h-48 rounded-xl overflow-hidden border border-white/10 hover:border-[#C8A45C] transition-all p-6 flex flex-col justify-end text-left cursor-pointer"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A45C]">
                    View Curated Gallery
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#E5C98D] transition-colors">
                    {srv.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#171717] border border-white/10">
            {filterButtons.map((btn) => {
              const active = currentFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => handleFilterClick(btn.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#C8A45C] text-black shadow-md'
                      : 'text-[#A6A29A] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span
            const isWide = index % 5 === 0;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C8A45C]/60 transition-all duration-500 bg-[#171717] shadow-xl ${
                  isWide ? 'sm:col-span-2 lg:col-span-2 h-[380px] sm:h-[480px]' : 'h-[380px] sm:h-[480px]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.78] group-hover:brightness-[0.88]"
                  referrerPolicy="no-referrer"
                />

                {/* Cinematic Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Quick View Icon Center Reveal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-12 h-12 rounded-full bg-[#C8A45C]/90 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>

                {/* Bottom Caption Meta */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#E5C98D] font-medium">
                    <span>{item.categoryLabel}</span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E5C98D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A6A29A] font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom CTA */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#171717] via-[#221e18] to-[#171717] border border-[#C8A45C]/30 text-center space-y-4 max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C8A45C]">
            <Sparkles className="w-4 h-4" />
            <span>Cherish Your Special Moments</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F1E8]">
            Inspired by Our Portfolio? Let's Plan Your Shoot.
          </h3>
          <p className="text-sm text-[#A6A29A] max-w-xl mx-auto font-light">
            Whether in Gaindatola, Rajnandgaon, Raipur or anywhere in Chhattisgarh, our team is ready to capture your story.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onBookSession()}
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-black gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#C8A45C]/20 cursor-pointer"
            >
              Book a Session Now
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        onBookSession={(cat) => onBookSession(cat)}
      />
    </section>
  );
};
