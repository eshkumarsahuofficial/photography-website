import React, { useEffect, useCallback } from 'react';
import { PortfolioItem } from '../data/studioData';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles } from 'lucide-react';

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onBookSession: (serviceCategory: string) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  onBookSession,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Lightbox Top Bar */}
      <div className="flex items-center justify-between text-[#A6A29A] text-xs uppercase tracking-widest pb-4 border-b border-white/10 z-10">
        <div className="flex items-center gap-3">
          <span className="text-[#C8A45C] font-semibold">{currentItem.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white hover:text-[#C8A45C] transition-colors cursor-pointer"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#C8A45C] hover:text-black text-white backdrop-blur-md transition-all cursor-pointer border border-white/10"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Photograph */}
        <div className="relative max-h-full max-w-5xl w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#C8A45C] hover:text-black text-white backdrop-blur-md transition-all cursor-pointer border border-white/10"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Bottom Details */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-1">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1E8]">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#A6A29A] font-light max-w-xl">
            {currentItem.caption}
          </p>
          <div className="flex items-center gap-4 text-xs text-[#A6A29A]/80 pt-1">
            {currentItem.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C8A45C]" />
                {currentItem.location}
              </span>
            )}
            {currentItem.year && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C8A45C]" />
                {currentItem.year}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              onBookSession(currentItem.categoryLabel);
            }}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-black gold-gradient-bg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book A Session For This Style</span>
          </button>
        </div>
      </div>
    </div>
  );
};
