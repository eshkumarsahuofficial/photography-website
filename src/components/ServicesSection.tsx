import React from 'react';
import { SERVICES_DATA, ADDITIONAL_SERVICES } from '../data/studioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceSlug: string) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0D0D0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
            Core Specialities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mb-4">
            Our Photography Services
          </h2>
          <p className="text-[#A6A29A] text-base sm:text-lg font-light leading-relaxed">
            Beautifully captured. Artistically preserved. Forever remembered.
          </p>
        </div>

        {/* 3 Large Full-Bleed Photographic Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.slug)}
              className="group relative h-[520px] sm:h-[580px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C8A45C]/60 transition-all duration-500 shadow-xl flex flex-col justify-end p-8"
            >
              {/* Full Bleed Image with Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#171717]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.72] group-hover:brightness-[0.82]"
                  referrerPolicy="no-referrer"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#E5C98D] font-medium block">
                  {service.eyebrow}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E5C98D] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A6A29A] font-light leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Gold CTA */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A45C] group-hover:text-[#E5C98D] transition-colors">
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookService(service.title);
                    }}
                    className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-black gold-gradient-bg opacity-0 group-hover:opacity-100 transition-opacity hover:brightness-110 cursor-pointer"
                  >
                    Quick Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Editorial Grid */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C8A45C] font-semibold mb-2">
                Comprehensive Studio Offerings
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
                Additional Bespoke Services
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A29A] max-w-md">
              From high-end album bindery to on-location event productions, we cover every
              photographic need in Chhattisgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#171717]/60 border border-white/5 hover:border-[#C8A45C]/40 transition-colors group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-lg font-semibold text-white group-hover:text-[#E5C98D] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A6A29A] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
