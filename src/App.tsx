import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AlbumDesignPage } from './components/AlbumDesignPage';
import { AboutSection } from './components/AboutSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PackagesPricingPage } from './components/PackagesPricingPage';
import { ContactSection } from './components/ContactSection';
import { StudioInboxModal } from './components/StudioInboxModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';
import { Enquiry, INITIAL_ENQUIRIES } from './data/studioData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [inboxOpen, setInboxOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Enquiries state synced with localStorage
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem('capture_studio_enquiries');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_ENQUIRIES;
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize path and window.history
  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEnquirySubmitted = (newEnquiry: Enquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const handleUpdateStatus = (id: string, status: 'new' | 'contacted' | 'booked') => {
    const updated = enquiries.map((enq) => (enq.id === id ? { ...enq, status } : enq));
    setEnquiries(updated);
    try {
      localStorage.setItem('capture_studio_enquiries', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteEnquiry = (id: string) => {
    const updated = enquiries.filter((enq) => enq.id !== id);
    setEnquiries(updated);
    try {
      localStorage.setItem('capture_studio_enquiries', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleBookSession = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    navigate('/contact');
  };

  // Determine active category for /portfolio routes
  const getPortfolioCategory = (): 'all' | 'weddings' | 'portraits' | 'newborn' => {
    if (currentPath === '/portfolio/weddings') return 'weddings';
    if (currentPath === '/portfolio/portraits') return 'portraits';
    if (currentPath === '/portfolio/newborn') return 'newborn';
    return 'all';
  };

  const newEnquiriesCount = enquiries.filter((e) => e.status === 'new').length;

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F5F1E8] flex flex-col font-sans selection:bg-[#C8A45C] selection:text-black">
      {/* Sticky Global Navigation */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        onOpenInbox={() => setInboxOpen(true)}
        inboxUnreadCount={newEnquiriesCount}
      />

      {/* Main Page View Routing */}
      <main className="flex-1">
        {/* Route: Home (/) */}
        {(currentPath === '/' || currentPath === '') && (
          <>
            <Hero
              onViewPortfolio={() => navigate('/portfolio')}
              onBookSession={() => handleBookSession('Wedding Photography')}
            />
            <ServicesSection
              onSelectService={(slug) => navigate(`/portfolio/${slug}`)}
              onBookService={(title) => handleBookSession(title)}
            />
            <PortfolioSection
              activeCategory="all"
              onCategoryChange={(cat) => {
                if (cat === 'all') navigate('/portfolio');
                else navigate(`/portfolio/${cat}`);
              }}
              onBookSession={(cat) => handleBookSession(cat)}
            />
            <AboutSection onContactClick={() => navigate('/about')} />
            <TestimonialSection />
            <PackagesPricingPage onBookPackage={(pkg) => handleBookSession(pkg)} />
            <ContactSection
              initialService={selectedServiceForBooking}
              onEnquirySubmitted={handleEnquirySubmitted}
            />
          </>
        )}

        {/* Route: Services (/services) */}
        {currentPath === '/services' && (
          <div className="pt-16">
            <ServicesSection
              onSelectService={(slug) => navigate(`/portfolio/${slug}`)}
              onBookService={(title) => handleBookSession(title)}
            />
            <ContactSection
              initialService={selectedServiceForBooking}
              onEnquirySubmitted={handleEnquirySubmitted}
            />
          </div>
        )}

        {/* Route: Portfolio & Subroutes (/portfolio, /portfolio/weddings, /portfolio/portraits, /portfolio/newborn) */}
        {currentPath.startsWith('/portfolio') && (
          <div className="pt-16">
            <PortfolioSection
              activeCategory={getPortfolioCategory()}
              onCategoryChange={(cat) => {
                if (cat === 'all') navigate('/portfolio');
                else navigate(`/portfolio/${cat}`);
              }}
              onBookSession={(cat) => handleBookSession(cat)}
              isStandalonePage={true}
            />
          </div>
        )}

        {/* Route: Album Design (/album-design) */}
        {currentPath === '/album-design' && (
          <>
            <AlbumDesignPage
              onOrderAlbum={() => handleBookSession('Wedding Album Designing')}
            />
            <ContactSection
              initialService="Wedding Album Designing"
              onEnquirySubmitted={handleEnquirySubmitted}
            />
          </>
        )}

        {/* Route: About (/about) */}
        {currentPath === '/about' && (
          <>
            <AboutSection
              onContactClick={() => navigate('/contact')}
              isFullPage={true}
            />
            <TestimonialSection />
            <ContactSection
              initialService={selectedServiceForBooking}
              onEnquirySubmitted={handleEnquirySubmitted}
            />
          </>
        )}

        {/* Route: Packages & Pricing (/packages-pricing) */}
        {currentPath === '/packages-pricing' && (
          <>
            <PackagesPricingPage
              onBookPackage={(pkg) => handleBookSession(pkg)}
              isFullPage={true}
            />
            <ContactSection
              initialService={selectedServiceForBooking}
              onEnquirySubmitted={handleEnquirySubmitted}
            />
          </>
        )}

        {/* Route: Contact (/contact) */}
        {currentPath === '/contact' && (
          <ContactSection
            initialService={selectedServiceForBooking}
            onEnquirySubmitted={handleEnquirySubmitted}
            isFullPage={true}
          />
        )}
      </main>

      {/* Floating WhatsApp Widget with Pulse & Tooltip */}
      <WhatsAppWidget />

      {/* Studio Enquiries Inbox Modal */}
      <StudioInboxModal
        isOpen={inboxOpen}
        onClose={() => setInboxOpen(false)}
        enquiries={enquiries}
        onUpdateStatus={handleUpdateStatus}
        onDeleteEnquiry={handleDeleteEnquiry}
      />

      {/* Luxury Global Multi-Column Footer */}
      <Footer navigate={navigate} onOpenInbox={() => setInboxOpen(true)} />
    </div>
  );
}
