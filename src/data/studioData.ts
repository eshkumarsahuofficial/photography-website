export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  eyebrow: string;
  image: string;
  shortDesc: string;
  description: string;
  inclusions: string[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'portraits' | 'newborn';
  categoryLabel: string;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
  location?: string;
  year?: string;
}

export interface AlbumStyle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  coverOptions: string[];
  paperType: string;
  bestFor: string;
  badge?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  priceDisplay: string;
  priceNote: string;
  isFeatured?: boolean;
  idealFor: string;
  inclusions: string[];
  recommendedAddons: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  quote: string;
  date: string;
  location: string;
  rating: number;
}

export interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  service: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'booked';
}

export const STUDIO_INFO = {
  name: 'Capture Studio Photography',
  tagline: 'Capturing Moments. Creating Memories.',
  leadPhotographer: 'Lead Photographic Artists',
  address: 'Infront of Police Station, Gaindatola, Rajnandgaon, Chhattisgarh, India',
  city: 'Gaindatola, Rajnandgaon, Chhattisgarh',
  phonePrimary: '+91 9131537800',
  phonePrimaryRaw: '919131537800',
  phoneSecondary: '+91 9993522453',
  phoneSecondaryRaw: '919993522453',
  email: 'contact@capturestudiophotography.in',
  instagram: 'https://instagram.com/capturestudio_cg',
  facebook: 'https://facebook.com/capturestudiocg',
  whatsappDefaultMsg:
    'Hello Capture Studio! I am interested in your photography services. Please share the details and available packages.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'Weddings & Engagements',
    slug: 'weddings',
    eyebrow: 'Ceremonies & Celebrations',
    image: '/src/assets/images/service_wedding_couple_1794473517602.jpg',
    shortDesc:
      'From intimate engagement ceremonies to grand wedding celebrations, we capture authentic emotions, beautiful traditions and unforgettable moments.',
    description:
      'Indian weddings are a symphonic tapestry of sacred rituals, unfiltered joy, emotional tears, and vibrant heritage. Our cinematic wedding coverage treats every ceremony—Haldi, Mehendi, Sangeet, Varmala, and Phere—with artistic storytelling and editorial finesse.',
    inclusions: [
      'Comprehensive multi-day & ritual coverage',
      'Artistic couple portraiture during golden hour',
      'Candid traditional ceremony storytelling',
      'High-resolution colour-graded master digital delivery',
      'Complimentary teaser film and digital invite curation',
    ],
    ctaText: 'Explore Wedding Photography',
  },
  {
    id: 'portraits',
    title: 'Portraits & Headshots',
    slug: 'portraits',
    eyebrow: 'Personality & Presence',
    image: '/src/assets/images/service_portrait_headshot_1794473521093.jpg',
    shortDesc:
      'Professional portraits that express personality, confidence and individuality through creative lighting and artistic composition.',
    description:
      'Whether you need executive leadership headshots, editorial fashion portfolios, creative personal branding, or traditional festive portraits, we guide your poses and craft dramatic lighting setups that reveal your true character.',
    inclusions: [
      'Studio and environmental outdoor options',
      'Expert lighting design tailored to facial structure',
      'Wardrobe and styling guidance',
      'Detailed natural beauty skin retouching',
      'Web and high-res print licensing included',
    ],
    ctaText: 'Explore Portraits',
  },
  {
    id: 'newborn-family',
    title: 'Newborn & Family Photography',
    slug: 'newborn',
    eyebrow: 'Generations & Milestones',
    image: '/src/assets/images/service_newborn_family_1794473517537.jpg',
    shortDesc:
      'Preserve the little moments, growing smiles and special family connections with timeless photography.',
    description:
      'Children grow rapidly, and family milestones pass like whispers. We offer patient, comfortable newborn sessions with sterile sanitized props, along with joyful multi-generational outdoor and home family storytelling sessions.',
    inclusions: [
      'Gentle, baby-safe and comfortable newborn sessions',
      'Multi-generational heirloom family portraits',
      'Warm natural-light lifestyle storytelling',
      'Curated keepsake prints ready for wall framing',
      'Flexible breaks for feeding and soothing',
    ],
    ctaText: 'Explore Family Photography',
  },
];

export const ADDITIONAL_SERVICES = [
  {
    title: 'Pre-Wedding Photography',
    desc: 'Cinematic destination and heritage site stories for couples before the big day.',
  },
  {
    title: 'Birthday & Milestone Celebrations',
    desc: 'Vibrant candid documentation of birthdays, Annaprashan, and anniversaries.',
  },
  {
    title: 'Event Photography',
    desc: 'Professional cultural, corporate, and social event coverage in Chhattisgarh.',
  },
  {
    title: 'Professional Studio Portraits',
    desc: 'Controlled studio environment with specialized lighting and backdrops.',
  },
  {
    title: 'Wedding Album Designing',
    desc: 'Luxury lay-flat albums crafted with Italian leather, acrylic, and archival paper.',
  },
  {
    title: 'Premium Photo Printing & Framing',
    desc: 'Museum-grade canvas and acrylic wall arts that protect memories for lifetimes.',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  // 6 Wedding photographs
  {
    id: 'w-1',
    title: 'Royal Mandap Nuptials',
    category: 'weddings',
    categoryLabel: 'Weddings & Engagements',
    image: '/src/assets/images/hero_indian_wedding_1794473516950.jpg',
    aspectRatio: 'landscape',
    caption: 'Golden hour pheras under handcrafted floral mandap canopy.',
    location: 'Rajnandgaon, C.G.',
    year: '2025',
  },
  {
    id: 'w-2',
    title: 'Soulful Varmala Smiles',
    category: 'weddings',
    categoryLabel: 'Weddings & Engagements',
    image: '/src/assets/images/service_wedding_couple_1794473517602.jpg',
    aspectRatio: 'portrait',
    caption: 'Pure candid happiness during the sacred garland exchange.',
    location: 'Gaindatola, C.G.',
    year: '2025',
  },
  {
    id: 'w-3',
    title: 'Heritage Palace Pre-Wedding',
    category: 'weddings',
    categoryLabel: 'Weddings & Engagements',
    image: '/src/assets/images/hero_indian_wedding_1794473516950.jpg',
    aspectRatio: 'landscape',
    caption: 'Atmospheric sunset silhouettes against timeless stone arches.',
    location: 'Kawardha Palace',
    year: '2025',
  },
  {
    id: 'w-4',
    title: 'The Royal Baraat Arrival',
    category: 'weddings',
    categoryLabel: 'Weddings & Engagements',
    image: '/src/assets/images/album_luxury_photobook_1794473518178.jpg',
    aspectRatio: 'portrait',
    caption: 'High energy dhol celebrations and ceremonial procession.',
    location: 'Bhilai',
    year: '2024',
  },
  {
    id: 'w-5',
    title: 'Intimate Bridal Preparation',
    category: 'weddings',
    categoryLabel: 'Weddings & Engagements',
    image: '/src/assets/images/service_wedding_couple_1794473517602.jpg',
    aspectRatio: 'square',
    caption: 'Reflections of delicate bridal jewelry and intricate henna.',
    location: 'Raipur',
    year: '2025',
  },
  {
    id: 'w-6',
    title: 'Eternal Twilight Vows',
    category: 'weddings',
    categoryLabel: 'Weddings & Engagements',
    image: '/src/assets/images/hero_indian_wedding_1794473516950.jpg',
    aspectRatio: 'portrait',
    caption: 'Dramatic cinematic lighting framing the couple as newlyweds.',
    location: 'Rajnandgaon, C.G.',
    year: '2024',
  },

  // 4 Portrait photographs
  {
    id: 'p-1',
    title: 'Chiaroscuro Traditionalist',
    category: 'portraits',
    categoryLabel: 'Portraits & Headshots',
    image: '/src/assets/images/service_portrait_headshot_1794473521093.jpg',
    aspectRatio: 'portrait',
    caption: 'Fine art studio lighting emphasizing warmth and regal presence.',
    location: 'Capture Studio Studio A',
    year: '2025',
  },
  {
    id: 'p-2',
    title: 'Graceful Festive Silhouette',
    category: 'portraits',
    categoryLabel: 'Portraits & Headshots',
    image: '/src/assets/images/service_wedding_couple_1794473517602.jpg',
    aspectRatio: 'portrait',
    caption: 'Natural rim lighting accentuating ethnic silk drapery and gold.',
    location: 'Gaindatola, C.G.',
    year: '2025',
  },
  {
    id: 'p-3',
    title: 'Creative Editorial Headshot',
    category: 'portraits',
    categoryLabel: 'Portraits & Headshots',
    image: '/src/assets/images/service_portrait_headshot_1794473521093.jpg',
    aspectRatio: 'square',
    caption: 'Clean, confident professional portraiture with deep tones.',
    location: 'Capture Studio Studio B',
    year: '2024',
  },
  {
    id: 'p-4',
    title: 'Artistic Monochromatic Character',
    category: 'portraits',
    categoryLabel: 'Portraits & Headshots',
    image: '/src/assets/images/service_portrait_headshot_1794473521093.jpg',
    aspectRatio: 'portrait',
    caption: 'Sculptural lighting highlighting authentic human expression.',
    location: 'Capture Studio Studio A',
    year: '2024',
  },

  // 6 Newborn & Family photographs
  {
    id: 'f-1',
    title: 'First Slumber & Gentle Warmth',
    category: 'newborn',
    categoryLabel: 'Newborn & Family',
    image: '/src/assets/images/service_newborn_family_1794473517537.jpg',
    aspectRatio: 'landscape',
    caption: 'Tender first days wrapped in organic cotton and unconditional love.',
    location: 'Capture Studio Home Session',
    year: '2025',
  },
  {
    id: 'f-2',
    title: 'Generations of Grace',
    category: 'newborn',
    categoryLabel: 'Newborn & Family',
    image: '/src/assets/images/service_newborn_family_1794473517537.jpg',
    aspectRatio: 'portrait',
    caption: 'Grandmother holding her newborn grandchild in ancestral home.',
    location: 'Gaindatola, C.G.',
    year: '2025',
  },
  {
    id: 'f-3',
    title: 'Tender Motherhood Embrace',
    category: 'newborn',
    categoryLabel: 'Newborn & Family',
    image: '/src/assets/images/service_newborn_family_1794473517537.jpg',
    aspectRatio: 'portrait',
    caption: 'Soft diffused natural morning window light and quiet smiles.',
    location: 'Rajnandgaon, C.G.',
    year: '2025',
  },
  {
    id: 'f-4',
    title: 'Joyous Family Golden Hour',
    category: 'newborn',
    categoryLabel: 'Newborn & Family',
    image: '/src/assets/images/hero_indian_wedding_1794473516950.jpg',
    aspectRatio: 'landscape',
    caption: 'Unfiltered laughter together amidst gentle outdoor breeze.',
    location: 'Mogra Dam Lake',
    year: '2024',
  },
  {
    id: 'f-5',
    title: 'Little Miracle in Hands',
    category: 'newborn',
    categoryLabel: 'Newborn & Family',
    image: '/src/assets/images/service_newborn_family_1794473517537.jpg',
    aspectRatio: 'square',
    caption: 'Delicate tiny fingers and peaceful resting posture.',
    location: 'Capture Studio Studio A',
    year: '2025',
  },
  {
    id: 'f-6',
    title: 'Milestone First Laughs',
    category: 'newborn',
    categoryLabel: 'Newborn & Family',
    image: '/src/assets/images/service_newborn_family_1794473517537.jpg',
    aspectRatio: 'portrait',
    caption: 'Capturing joyful toddler curiosity and parental bond.',
    location: 'Gaindatola, C.G.',
    year: '2024',
  },
];

export const ALBUM_STYLES: AlbumStyle[] = [
  {
    id: 'classic-layflat',
    name: 'Classic Lay-Flat Album',
    tagline: 'Seamless double-spread panorama without center gutter cut',
    description:
      'Engineered with specialized flush-crease hinges, allowing large panoramic wedding photos to span seamlessly across 24 inches without image loss in the spine.',
    coverOptions: ['Italian Silk Jacquard', 'Embossed Linen', 'Buckram Fabric'],
    paperType: 'Fuji Crystal Lustre 250 GSM with UV Archival Coating',
    bestFor: 'Couples desiring clean, modern panoramic spreads.',
  },
  {
    id: 'fine-art-flush',
    name: 'Fine Art Flush Album',
    tagline: 'Museum-grade cotton rag paper with subtle organic texture',
    description:
      'Printed on heavy museum rag fine art paper with archival pigment inks. Rich deep blacks, luminous highlights, and velvety touch designed to resist fading for over 100 years.',
    coverOptions: ['German Bookcloth', 'Handmade Khadi Textured Paper', 'Raw Canvas'],
    paperType: 'Hahnemühle Photo Rag 308 GSM Archival Velvet',
    bestFor: 'Discerning couples wanting gallery-standard artistic presentation.',
    badge: 'Artisan Choice',
  },
  {
    id: 'premium-leather',
    name: 'Premium Leather Bound Album',
    tagline: 'Handcrafted genuine top-grain leather with gold foil debossing',
    description:
      'Each leather album is hand-stitched by master artisans, finished with personalized couple monogram foil debossing in royal gold or antique bronze.',
    coverOptions: ['Vintage Cognac Leather', 'Midnight Black Napa', 'Royal Burgundy Leather'],
    paperType: 'Ultra-Thick 350 GSM Boardcore with Lustre Thermal Lamination',
    bestFor: 'Grand traditional Indian weddings and generational heirlooms.',
    badge: 'Most Popular',
  },
  {
    id: 'luxury-acrylic',
    name: 'Luxury Acrylic Cover Album',
    tagline: 'Optical crystal acrylic glass cover with photographic depth',
    description:
      'Features a 4mm diamond-polished shatter-resistant acrylic faceplate seamlessly fused with your cover photograph, backed with supple leather casing and magnetic closure case.',
    coverOptions: ['Beveled High-Gloss Crystal Acrylic', 'Matte Frosted Acrylic'],
    paperType: 'Metallic Pearl Luster Paper with Ultra-High Dynamic Range',
    bestFor: 'Contemporary couples looking for show-stopping coffee table luxury.',
    badge: 'Luxury Signature',
  },
];

export const ALBUM_STEPS = [
  {
    step: '01',
    title: 'Selection',
    subtitle: 'Choose your favourite photographs',
    desc: 'You select your most cherished photos via our private digital gallery. Our team provides professional curating guidance to help balance emotions, rituals, and family portraits.',
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Our creative team creates an elegant layout',
    desc: 'Our senior designers handcraft a cinematic narrative flow. We avoid cheesy clipart—every spread is clean, magazine-editorial, and balanced with breathing space.',
  },
  {
    step: '03',
    title: 'Print',
    subtitle: 'Your approved design moves to premium printing',
    desc: 'Once you review and approve the digital 3D proof, your album is calibrated for colour accuracy, printed with archival inks, and bound with precision.',
  },
  {
    step: '04',
    title: 'Delivery',
    subtitle: 'Your finished album is carefully prepared for delivery',
    desc: 'Packed in a velvet-lined luxury presentation keepsake box with cotton gloves and certificate of authenticity, delivered safely to your doorstep.',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'essential',
    name: 'Essential Package',
    subtitle: 'For intimate celebrations and personal photography sessions',
    priceDisplay: 'Custom Quote',
    priceNote: 'Tailored to your ceremony duration & coverage hours',
    idealFor: 'Engagement rituals, intimate home weddings, newborn & milestone portraits',
    inclusions: [
      'Single lead photographer coverage',
      'Up to 4-5 hours of dedicated continuous session',
      '150+ high-resolution, colour-graded digital master photos',
      'Private online gallery with 1-year cloud access',
      'Artistic couple & family portrait series',
      'High-speed digital delivery within 2 weeks',
    ],
    recommendedAddons: ['Mini Keepsake Pocket Album', 'Additional Coverage Hour'],
  },
  {
    id: 'signature',
    name: 'Signature Package',
    subtitle: 'For customers looking for an enhanced photography experience',
    priceDisplay: 'Custom Quote',
    priceNote: 'Most chosen by wedding couples in Chhattisgarh',
    isFeatured: true,
    idealFor: 'Complete wedding celebrations (Pre-wedding + Sangeet + Wedding day)',
    inclusions: [
      'Dual senior photographers (Candid specialist + Traditional master)',
      'Full-day coverage across all main rituals (Haldi, Sangeet & Pheras)',
      '1 Handcrafted 12x18 Premium Lay-Flat Wedding Album (35-40 sheets)',
      '400+ curated and custom colour-graded photographs',
      'Complimentary Pre-Wedding or Couple Sunset Portrait session',
      'Private online viewing & download gallery for family & guests',
      'Priority turnaround within 14 working days',
    ],
    recommendedAddons: ['Parent Mini Replica Albums (Set of 2)', 'Aerial Drone Photography'],
  },
  {
    id: 'luxury',
    name: 'Luxury Experience',
    subtitle: 'A premium photography experience with personalised services & exclusive finishing',
    priceDisplay: 'Custom Quote',
    priceNote: 'Complete VIP production for multi-day destination & grand weddings',
    idealFor: 'Grand destination weddings, royal multi-day celebrations & elite families',
    inclusions: [
      'Full creative photography crew (Lead artists + Candid + Drone specialist)',
      'Multi-day extensive coverage (Mehendi, Haldi, Sangeet, Wedding, Reception)',
      'Master Luxury Acrylic / Italian Leather Bound Album (50+ sheets)',
      'Two duplicate pocket albums for parents & extended family',
      'Cinematic teaser reel & social media cut delivery within 72 hours',
      'Unrestricted high-resolution digital master hard drive archive',
      'Personal creative director consultation & site recce prior to event',
    ],
    recommendedAddons: ['Museum Framed Canvas 24x36 Wall Art', 'Next-Day Ceremony Photo Prints'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Rahul & Priya Verma',
    eventType: 'Traditional Indian Wedding',
    quote:
      'Capture Studio turned our wedding memories into pure magic. Looking through our album feels like reliving every joyful smile and tear. Their patience during the phere and ability to capture candid moments without being intrusive was remarkable.',
    date: 'February 2025',
    location: 'Rajnandgaon, C.G.',
    rating: 5,
  },
  {
    id: 't-2',
    clientName: 'Amit & Sneha Sahu',
    eventType: 'Pre-Wedding & Engagement',
    quote:
      'From location scouting to lighting, the team was extraordinary. The golden hour portraits look straight out of a high-end film. The handcrafted leather album is the centerpiece of our living room.',
    date: 'January 2025',
    location: 'Kawardha Heritage',
    rating: 5,
  },
  {
    id: 't-3',
    clientName: 'Dr. Vivek & Ananya Agrawal',
    eventType: 'Newborn & Milestone Family Session',
    quote:
      'Photographing a two-week-old baby requires so much patience and care. The photographers were gentle, sterile, and captured the most tender expressions of our little boy. Forever grateful for these heirlooms.',
    date: 'December 2024',
    location: 'Gaindatola, C.G.',
    rating: 5,
  },
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-101',
    fullName: 'Rohan Sharma',
    email: 'rohan.sharma91@gmail.com',
    phone: '+91 98271 44520',
    preferredDate: '2026-12-18',
    service: 'Wedding Photography',
    message: 'Planning our 2-day wedding ceremony in Rajnandgaon. Looking for Signature package with album.',
    createdAt: '2026-11-10T14:32:00Z',
    status: 'new',
  },
  {
    id: 'enq-102',
    fullName: 'Pooja Dewangan',
    email: 'pooja.dewangan@outlook.com',
    phone: '+91 94252 88133',
    preferredDate: '2026-11-28',
    service: 'Pre-Wedding Photography',
    message: 'Interested in outdoor pre-wedding shoot near sunset with scenic background.',
    createdAt: '2026-11-08T09:15:00Z',
    status: 'contacted',
  },
];
