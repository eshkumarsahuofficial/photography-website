import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Phone, Award, Camera, Heart, Check, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
  isFullPage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onContactClick,
  isFullPage = false,
}) => {
  const stats = [
    { value: '10+', label: 'Years of Dedicated Craft', sub: 'Est. in Chhattisgarh' },
    { value: '350+', label: 'Celebrations Documented', sub: 'Weddings & Milestone Events' },
    { value: '500+', label: 'Handcrafted Albums', sub: 'Delivered Across India' },
    { value: '100%', label: 'Artistic Dedication', sub: 'Zero Template Compromise' },
  ];

  return (
    <section id="about" className={`bg-[#0D0D0F] relative ${isFullPage ? 'pt-28 pb-24' : 'py-24 sm:py-32'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Side (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold">
              <Camera className="w-4 h-4 text-[#C8A45C]" />
              <span>The Atelier Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] leading-tight text-balance">
              Behind Every Beautiful Photograph{' '}
              <span className="gold-gradient-text italic font-normal">Is A Story.</span>
            </h2>

            <div className="space-y-4 text-[#A6A29A] text-base sm:text-lg font-light leading-relaxed">
              <p>
                At Capture Studio Photography, we believe photography is more than taking pictures.
                It is about preserving emotions, celebrating relationships and turning meaningful
                moments into timeless memories.
              </p>
              <p>
                Our approach combines creative vision, professional photography and thoughtful
                storytelling to capture every special occasion beautifully. Based in Gaindatola,
                Rajnandgaon, we travel across Chhattisgarh and Central India documenting royal weddings,
                intimate vows, soulful family portraits, and newborn milestones.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#C8A45C]/20 text-[#C8A45C] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Unobtrusive Candid Artistry</h4>
                  <p className="text-xs text-[#A6A29A] font-light">Natural smiles, no awkward forced posing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#C8A45C]/20 text-[#C8A45C] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Master Color Calibration</h4>
                  <p className="text-xs text-[#A6A29A] font-light">Warm Indian skin tones and royal silks preserved.</p>
                </div>
              </div>
            </div>

            {/* Studio Location & Contact Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#A6A29A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8A45C]" />
                <span>Gaindatola, Rajnandgaon, C.G.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8A45C]" />
                <span>{STUDIO_INFO.phonePrimary}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-black gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#C8A45C]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Know Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Photo Collage Side (col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="rounded-2xl overflow-hidden border border-[#C8A45C]/30 shadow-2xl bg-[#171717] h-[420px] sm:h-[480px]">
                <img
                  src="/src/assets/images/service_portrait_headshot_1794473521093.jpg"
                  alt="Capture Studio Lead Photographic Artist"
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 h-52 sm:h-64 rounded-xl overflow-hidden border-2 border-[#C8A45C]/60 shadow-2xl bg-black hidden sm:block">
                <img
                  src="/src/assets/images/service_wedding_couple_1794473517602.jpg"
                  alt="Authentic Candid Moments"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Gold Accent Badge */}
              <div className="absolute -top-4 -right-4 p-4 rounded-xl glass-panel border border-[#C8A45C]/40 text-center shadow-xl">
                <Heart className="w-5 h-5 text-[#C8A45C] mx-auto mb-1" />
                <p className="text-[10px] uppercase tracking-widest text-[#E5C98D] font-bold">Gaindatola</p>
                <p className="text-[9px] text-[#A6A29A]">Rajnandgaon Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Animated Business Statistics Section */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#171717]/60 border border-white/5 hover:border-[#C8A45C]/30 transition-colors"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tabular-nums mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#F5F1E8] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#A6A29A] font-light">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
