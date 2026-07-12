/* ── Business Info ─────────────────────────────────────────── */

export const BUSINESS = {
  name: "Designco interior",
  tagline: "Designing Interiors That Feel Like Home",
  phone: "+91 76311 11171",
  phoneRaw: "+917631111171",
  telLink: "tel:+917631111171",
  whatsappLink: "https://wa.me/917631111171",
  address:
    "Digambar Jain Bhawan, Harmu Road Near, Dwarka Path, Ranchi, Jharkhand 834001",
  category: "interior design",
  mapQuery:
    "Digambar+Jain+Bhawan,+Harmu+Road+Near,+Dwarka+Path,+Ranchi,+Jharkhand+834001",
  hours: "Mon – Sat: 10 AM – 7 PM | Sun: By Appointment",
} as const;

/* ── Navigation ───────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

/* ── Services ─────────────────────────────────────────────── */

export const SERVICES = [
  {
    title: "Appliance Selection",
    slug: "appliance-selection",
    icon: "Refrigerator" as const,
    image: {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Modern kitchen appliances integrated seamlessly into cabinetry",
    },
    shortDesc:
      "Curated appliance choices that blend seamlessly with your kitchen and home design.",
    longDesc:
      "We help you select appliances that complement your interior style — from sleek built-in ovens to statement range hoods. Every recommendation balances aesthetics, energy efficiency, and day-to-day convenience so your home works as beautifully as it looks.",
  },
  {
    title: "Bathroom Design",
    slug: "bathroom-design",
    icon: "Bath" as const,
    image: {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      alt: "Luxurious bathroom with marble finishes",
    },
    shortDesc:
      "Serene, spa-inspired bathrooms tailored to your lifestyle.",
    longDesc:
      "From compact powder rooms to luxurious master baths, we design bathrooms that feel like private retreats. Premium fixtures, thoughtful storage, and elegant tile work come together to create spaces where relaxation is effortless.",
  },
  {
    title: "Bedroom Design",
    slug: "bedroom-design",
    icon: "Bed" as const,
    image: {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      alt: "Minimalist bedroom with neutral palette",
    },
    shortDesc:
      "Restful, elegant bedrooms designed for comfort and character.",
    longDesc:
      "Your bedroom should be the most comforting room in the house. We craft layered lighting plans, rich textures, and smart storage solutions that transform bedrooms into personal sanctuaries — warm, quiet, and unmistakably yours.",
  },
  {
    title: "Cabinetry & Hardware",
    slug: "cabinetry-hardware",
    icon: "DoorOpen" as const,
    image: {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Designer kitchen with custom cabinetry",
    },
    shortDesc:
      "Custom cabinetry and refined hardware that define a room.",
    longDesc:
      "Handsome cabinetry is the backbone of well-designed kitchens, studies, and living rooms. We design bespoke joinery in premium finishes with thoughtfully chosen handles, pulls, and knobs that add personality and polish.",
  },
  {
    title: "Wardrobe Design",
    slug: "wardrobe-design",
    icon: "Shirt" as const,
    image: {
      src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
      alt: "Walk-in wardrobe with premium finishes",
    },
    shortDesc:
      "Walk-in or built-in wardrobes that organise your life beautifully.",
    longDesc:
      "We design wardrobes that maximise every centimetre — pull-out shoe racks, lit jewellery drawers, and modular shelving systems. Every wardrobe is tailored to your clothing habits, space constraints, and style preferences.",
  },
  {
    title: "Commercial Interiors",
    slug: "commercial-interiors",
    icon: "Building2" as const,
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      alt: "Boutique commercial interior design",
    },
    shortDesc:
      "Professional workspaces that inspire productivity and impress clients.",
    longDesc:
      "From corporate offices and retail showrooms to restaurants and clinics, our commercial design service delivers interiors that reinforce your brand, optimise workflow, and create memorable first impressions for every visitor.",
  },
  {
    title: "Custom Art Selection",
    slug: "custom-art-selection",
    icon: "Palette" as const,
    image: {
      src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
      alt: "Elegant interior with framed artwork",
    },
    shortDesc:
      "Hand-picked art and décor that bring your interiors to life.",
    longDesc:
      "Art transforms a space from 'finished' to 'extraordinary.' We source paintings, sculptures, textiles, and statement pieces from local artisans and galleries, ensuring every artwork resonates with the spirit of your home.",
  },
] as const;

/* ── Stats ────────────────────────────────────────────────── */

export const STATS = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Cities Served", value: 5, suffix: "" },
] as const;

/* ── Process Steps ────────────────────────────────────────── */

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We begin with a detailed conversation about your space, lifestyle, preferences, and budget — in person or over a video call.",
  },
  {
    step: 2,
    title: "Concept & Design",
    description:
      "Our designers create mood boards, 3D renders, and detailed layouts so you can visualise every element before work begins.",
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Skilled craftsmen bring the design to life with premium materials, on-site supervision, and transparent progress updates.",
  },
  {
    step: 4,
    title: "Handover",
    description:
      "A final walkthrough ensures every detail is perfect. We hand over your beautifully transformed space, ready to live in.",
  },
] as const;

/* ── Testimonials ─────────────────────────────────────────── */

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    quote:
      "Designco interior transformed our flat in Ranchi into something out of a magazine. The attention to detail was extraordinary — every corner feels thoughtful and warm.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    quote:
      "Their team understood exactly what we wanted for our new office. Professional, punctual, and incredibly creative. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anita Devi",
    quote:
      "From the first meeting to the final reveal, the experience was smooth and enjoyable. Our bedroom redesign exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    quote:
      "I was amazed by how they maximised storage in our compact kitchen without compromising on style. True professionals.",
    rating: 4,
  },
  {
    name: "Meena Kumari",
    quote:
      "The custom wardrobe they designed is a work of art. Everything has its place, and it looks absolutely stunning.",
    rating: 5,
  },
] as const;

/* ── Why Choose Us ────────────────────────────────────────── */

export const WHY_CHOOSE_US = [
  {
    title: "Personalised Design",
    description: "Every project is unique — we design for your life, not a template.",
    icon: "Fingerprint" as const,
  },
  {
    title: "On-Time Delivery",
    description: "Strict project timelines with transparent progress tracking.",
    icon: "Clock" as const,
  },
  {
    title: "Quality Materials",
    description: "We source the finest materials that last and age beautifully.",
    icon: "Gem" as const,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs — clear quotations and itemised billing.",
    icon: "BadgeIndianRupee" as const,
  },
  {
    title: "End-to-End Service",
    description: "From concept to completion, we manage every detail.",
    icon: "Layers" as const,
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Ranchi's climate, vendors, and lifestyle.",
    icon: "MapPin" as const,
  },
] as const;

/* ── Portfolio placeholder images ─────────────────────────── */
// TODO: replace with real project photos

export const PORTFOLIO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    alt: "Modern living room with warm wood tones",
    category: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    alt: "Minimalist bedroom with neutral palette",
    category: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    alt: "Luxurious bathroom with marble finishes",
    category: "Bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    alt: "Designer kitchen with custom cabinetry",
    category: "Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Elegant dining area with statement lighting",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Contemporary home office design",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
    alt: "Walk-in wardrobe with premium finishes",
    category: "Wardrobe",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Open-plan living space with warm accents",
    category: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Boutique commercial interior design",
    category: "Commercial",
  },
] as const;

/* ── Hero placeholder ─────────────────────────────────────── */
// TODO: replace with real hero image
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80";

/* ── About placeholder ────────────────────────────────────── */
// TODO: replace with real team/company photos
export const ABOUT_IMAGES = {
  main: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  team: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  workspace:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
} as const;
