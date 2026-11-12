import React, { useState } from 'react';
import { ALBUM_STYLES, ALBUM_STEPS } from '../data/studioData';
import { BookOpen, Sparkles, CheckCircle, ArrowRight, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AlbumDesignPageProps {
  onOrderAlbum: () => void;
}

export const AlbumDesignPage: React.FC<AlbumDesignPageProps> = ({ onOrderAlbum }) => {
  const [selectedStyleId, setSelectedStyleId] = useState(ALBUM_STYLES[2].id); // Premium leather default

  return (
    <div className="pt-28 pb-24 bg-[#0D0D0F] text-[#F5F1E8]">
      {/* Album Design Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold">
                <BookOpen className="w-4 h-4 text-[#C8A45C]" />
                <span>Heirloom Craftsmanship</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Your Memories Deserve A{' '}
                <span className="gold-gradient-text italic font-normal">Beautiful Presentation.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A6A29A] font-light leading-relaxed">
                Beautifully designed premium wedding albums that bring your most precious memories to life.
                Handcrafted with Italian leathers, crystal acrylics, and 100-year archival fine art papers.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOrderAlbum}
                  className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold text-black gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#C8A45C]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Create Your Dream Album</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E5C98D]">100%</p>
                  <p className="text-[11px] text-[#A6A29A] uppercase tracking-wider mt-1">Lay-Flat Binding</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E5C98D]">Archival</p>
                  <p className="text-[11px] text-[#A6A29A] uppercase tracking-wider mt-1">Anti-Fade Inks</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E5C98D]">Custom</p>
                  <p className="text-[11px] text-[#A6A29A] uppercase tracking-wider mt-1">Foil Monogram</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Container */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden border border-[#C8A45C]/40 shadow-2xl bg-[#171717]">
                <img
                  src="/src/assets/images/album_luxury_photobook_1794473518178.jpg"
                  alt="Luxury Handcrafted Indian Wedding Photo Album"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10">
                  <p className="text-xs font-semibold text-[#E5C98D] uppercase tracking-wider">
                    Signature Handcrafted Edition
                  </p>
                  <p className="text-xs text-[#A6A29A] mt-1 font-light">
                    Lay-flat double page spreads with custom gold foil embossed leather cover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Album Styles Section */}
      <section className="py-20 bg-[#121214] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
              Artisan Collections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F1E8] mb-4">
              Four Signature Album Styles
            </h2>
            <p className="text-sm sm:text-base text-[#A6A29A] font-light">
              Select the material and binding architecture that honors your special story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALBUM_STYLES.map((style) => {
              const isSelected = selectedStyleId === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() => setSelectedStyleId(style.id)}
                  className={`p-8 rounded-2xl transition-all cursor-pointer border relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1a1917] border-[#C8A45C] shadow-2xl shadow-[#C8A45C]/10'
                      : 'bg-[#171717]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  {style.badge && (
                    <div className="absolute top-6 right-6">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-black gold-gradient-bg">
                        {style.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest text-[#C8A45C] font-medium block">
                      Album Style
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {style.name}
                    </h3>
                    <p className="text-xs font-medium text-[#E5C98D] italic">
                      "{style.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-[#A6A29A] font-light leading-relaxed">
                      {style.description}
                    </p>

                    <div className="space-y-2 pt-2 text-xs">
                      <div className="text-[#A6A29A]">
                        <span className="text-white font-medium">Cover Finishes: </span>
                        {style.coverOptions.join(' · ')}
                      </div>
                      <div className="text-[#A6A29A]">
                        <span className="text-white font-medium">Archival Paper: </span>
                        {style.paperType}
                      </div>
                      <div className="text-[#A6A29A]">
                        <span className="text-[#C8A45C] font-medium">Best For: </span>
                        {style.bestFor}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOrderAlbum();
                      }}
                      className="text-xs uppercase tracking-wider font-semibold text-[#C8A45C] hover:text-[#E5C98D] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Order This Album Style</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-[#A6A29A]">Custom Sized</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
              How We Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F1E8] mb-4">
              Our 4-Step Album Creation Process
            </h2>
            <p className="text-sm sm:text-base text-[#A6A29A] font-light">
              From curating your best frames to delivering a museum-grade heirloom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALBUM_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#C8A45C]/50 transition-colors relative flex flex-col justify-between group"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A45C]/40 group-hover:text-[#C8A45C] transition-colors block mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E5C98D] font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#A6A29A] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-[#C8A45C]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Quality Assured</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET Section */}
      <section className="py-20 bg-gradient-to-b from-[#121214] to-[#0D0D0F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold">
                Heirloom Standards
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
                What You Get With Every Album
              </h2>
              <p className="text-sm text-[#A6A29A] font-light leading-relaxed">
                We believe your wedding album should be an exquisite piece of art you are proud to display on your coffee table and pass down to future generations.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Creative album layouts',
                    desc: 'Clean, modern magazine-style designs without cluttered borders or generic stickers.',
                  },
                  {
                    title: 'Professional photo selection assistance',
                    desc: 'Our lead curators help you choose the strongest emotional moments and ritual highlights.',
                  },
                  {
                    title: 'Premium album presentation',
                    desc: 'Housed in a velvet-lined luxury protective presentation box with handling gloves.',
                  },
                  {
                    title: 'Personalised design',
                    desc: 'Embossed couple names, dates, custom color palettes, and custom typography.',
                  },
                  {
                    title: 'High-quality print finishing',
                    desc: 'Archival UV coatings that prevent fingerprint marks and moisture damage.',
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#C8A45C]/15 text-[#C8A45C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                      <p className="text-xs text-[#A6A29A] font-light mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={onOrderAlbum}
                  className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold text-black gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#C8A45C]/20 cursor-pointer"
                >
                  Create Your Dream Album
                </button>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-[#C8A45C]/30 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                Have Existing Photos? We Design & Print.
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed font-light">
                Even if your wedding or family shoot was captured by another photographer or held years ago, our album atelier can restore, retouch, design, and print a master luxury album for you.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-[#A6A29A]">
                  <span>Available Album Sizes:</span>
                  <span className="text-white font-medium">12x18, 12x15, 10x14 inches</span>
                </div>
                <div className="flex justify-between text-[#A6A29A]">
                  <span>Turnaround Time:</span>
                  <span className="text-[#C8A45C] font-medium">10 - 14 Days</span>
                </div>
                <div className="flex justify-between text-[#A6A29A]">
                  <span>Doorstep Delivery:</span>
                  <span className="text-white font-medium">Gaindatola, Rajnandgaon & All India</span>
                </div>
              </div>

              <button
                onClick={onOrderAlbum}
                className="w-full py-3.5 rounded-xl text-center text-xs uppercase tracking-wider font-bold text-white bg-white/10 hover:bg-[#C8A45C] hover:text-black transition-colors border border-white/10 cursor-pointer"
              >
                Inquire About Custom Album Design
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
