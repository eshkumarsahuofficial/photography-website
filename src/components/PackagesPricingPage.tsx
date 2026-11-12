import React from 'react';
import { PRICING_PACKAGES, STUDIO_INFO } from '../data/studioData';
import { Check, Sparkles, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PackagesPricingPageProps {
  onBookPackage: (packageName: string) => void;
  isFullPage?: boolean;
}

export const PackagesPricingPage: React.FC<PackagesPricingPageProps> = ({
  onBookPackage,
  isFullPage = false,
}) => {
  const openWhatsAppPackage = (pkgName: string) => {
    const text = `Hello Capture Studio! I would like to inquire about the ${pkgName}. Please share package availability and a personalized quote for our dates.`;
    window.open(`https://wa.me/${STUDIO_INFO.phonePrimaryRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="packages"
      className={`bg-[#0D0D0F] relative ${isFullPage ? 'pt-28 pb-24' : 'py-24 sm:py-32'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
            Investment & Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mb-4">
            Photography Packages
          </h2>
          <p className="text-[#A6A29A] text-base sm:text-lg font-light leading-relaxed">
            Thoughtfully designed experiences for your special moments.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isFeatured = pkg.isFeatured;
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#18181b] border-2 border-[#C8A45C] shadow-2xl shadow-[#C8A45C]/15 lg:-translate-y-4'
                    : 'bg-[#141416] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Featured Gold Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-black gold-gradient-bg shadow-md flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular · Signature</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#C8A45C] font-semibold block">
                      {pkg.name}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {pkg.name.split(' ')[0]}
                    </h3>
                    <p className="text-xs text-[#A6A29A] font-light min-h-[36px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price Field */}
                  <div className="py-6 border-y border-white/10 mb-6">
                    <div className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text">
                      {pkg.priceDisplay}
                    </div>
                    <p className="text-[11px] text-[#A6A29A] mt-1 font-light">
                      {pkg.priceNote}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] uppercase tracking-wider text-white font-semibold">
                      What's Included:
                    </p>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#E5C98D]/90 font-light">
                        <Check className="w-4 h-4 text-[#C8A45C] shrink-0 mt-0.5" />
                        <span className="text-[#F5F1E8]">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <button
                    onClick={() => onBookPackage(pkg.name)}
                    className={`w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'text-black gold-gradient-bg hover:brightness-110 active:scale-95 shadow-[#C8A45C]/25'
                        : 'text-white bg-white/10 hover:bg-[#C8A45C] hover:text-black'
                    }`}
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => openWhatsAppPackage(pkg.name)}
                    className="w-full py-2.5 rounded-full text-xs font-semibold text-[#A6A29A] hover:text-[#25D366] hover:bg-white/5 transition-colors flex items-center justify-center gap-2 border border-white/5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency & Assurance */}
        <div className="mt-16 p-8 rounded-2xl bg-[#171717] border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C8A45C] shrink-0 mt-0.5 mx-auto md:mx-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">No Hidden Studio Charges</h4>
              <p className="text-xs text-[#A6A29A] font-light mt-0.5">
                Every quote includes color grading, online gallery hosting, and master digital delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#C8A45C] shrink-0 mt-0.5 mx-auto md:mx-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">Customizable Rituals</h4>
              <p className="text-xs text-[#A6A29A] font-light mt-0.5">
                Have specific traditions or multi-day muhurtas? We adjust hours and artists precisely.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#C8A45C] shrink-0 mt-0.5 mx-auto md:mx-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">Flexible Date Reservation</h4>
              <p className="text-xs text-[#A6A29A] font-light mt-0.5">
                Lock your sacred wedding date with a small token booking deposit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
