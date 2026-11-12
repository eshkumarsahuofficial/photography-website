import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/studioData';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#121214] relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45C] font-semibold mb-3">
            Client Voices
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
            Words From Our Happy Clients.
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-[#171717] border border-[#C8A45C]/30 shadow-2xl transition-all duration-500"
        >
          {/* Subtle Quote Watermark */}
          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#C8A45C]/10 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6 text-[#C8A45C]">
            {[...Array(activeTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs text-[#A6A29A] ml-2 font-medium">Verified Client Review</span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-normal leading-relaxed mb-8 italic">
            "{activeTestimonial.quote}"
          </blockquote>

          {/* Client Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#E5C98D]">
                {activeTestimonial.clientName}
              </h4>
              <div className="flex items-center gap-2 text-xs text-[#A6A29A] mt-0.5">
                <span>{activeTestimonial.eventType}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C8A45C]" />
                  {activeTestimonial.location}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeTestimonial.date}</span>
              </div>
            </div>

            {/* Previous / Next Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#C8A45C] hover:text-black text-white transition-colors border border-white/10 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#C8A45C] hover:text-black text-white transition-colors border border-white/10 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#C8A45C]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
