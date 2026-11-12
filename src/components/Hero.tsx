import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Phone, Award } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onViewPortfolio: () => void;
  onBookSession: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPortfolio, onBookSession }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to +10px
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Floating Golden Bokeh Particle Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 38;
    const colors = ['rgba(200, 164, 92,', 'rgba(229, 201, 141,', 'rgba(255, 240, 208,'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.8 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.15,
        fadeSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, `${p.color} ${p.opacity})`);
        gradient.addColorStop(1, `${p.color} 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0D0F] pt-28 pb-12 sm:pb-16"
    >
      {/* 3D Background with Parallax */}
      <div
        className="absolute inset-0 z-0 scale-105 transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0) scale(1.06)`,
        }}
      >
        <img
          src="/src/assets/images/hero_indian_wedding_1794473516950.jpg"
          alt="Royal Indian Wedding Couple by Capture Studio Photography"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/45 to-black/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0D0D0F]/50 to-[#0D0D0F]/90" />
      </div>

      {/* Floating Golden Bokeh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-[#E5C98D] uppercase">
            <Sparkles className="w-4 h-4 text-[#C8A45C]" />
            <span>Capturing Moments. Creating Memories.</span>
          </div>

          {/* Main Heading with Gold Highlights */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] text-[#F5F1E8] text-balance">
            Every Moment Has A Story.{' '}
            <span className="gold-gradient-text italic font-normal">Let Us Capture Yours.</span>
          </h1>

          {/* Description */}
          <p className="text-[#A6A29A] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            From timeless wedding celebrations to beautiful family portraits, we transform your
            precious moments into memories that last forever.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 sm:pt-6">
            <button
              onClick={onBookSession}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase text-black gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#C8A45C]/25 flex items-center gap-2 group cursor-pointer"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewPortfolio}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F5F1E8] bg-white/5 hover:bg-white/10 hover:text-[#E5C98D] border border-white/15 hover:border-[#C8A45C]/50 backdrop-blur-sm transition-all cursor-pointer"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Unboxed Metadata Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A6A29A]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C8A45C]" />
            <span>Gaindatola, Rajnandgaon, Chhattisgarh</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span>Weddings & Engagements</span>
            <span aria-hidden="true" className="text-[#C8A45C]">·</span>
            <span>Artistic Studio Portraits</span>
            <span aria-hidden="true" className="text-[#C8A45C]">·</span>
            <span>Luxury Album Atelier</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#C8A45C]" />
            <span>Direct WhatsApp: {STUDIO_INFO.phonePrimary}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
