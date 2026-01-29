import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Clock,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center">
            <Sparkles className="text-stone-100 w-5 h-5" />
          </div>
          <span className={`text-2xl font-serif tracking-tighter ${isScrolled ? 'text-stone-900' : 'text-white'}`}>LUMIÈRE</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Treatments', 'About', 'Results', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm uppercase tracking-widest font-medium hover:opacity-60 transition-opacity ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
              {item}
            </a>
          ))}
          <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-white text-stone-900 hover:bg-stone-100'}`}>
            Book Consultation
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? 'text-stone-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-stone-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Treatments', 'About', 'Results', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-stone-800 text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium">Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
        alt="Luxury Spa Interior"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <span className="inline-block text-stone-300 uppercase tracking-[0.3em] text-sm mb-6">The Art of Aesthetic Excellence</span>
        <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1] mb-8">
          Reveal Your <br />
          <span className="italic font-light">Natural Radiance</span>
        </h1>
        <p className="text-stone-200 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-lg">
          Experience the intersection of medical science and luxury wellness. Bespoke treatments designed for your unique beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-10 py-5 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-all flex items-center justify-center gap-2 group">
            Explore Treatments <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 border border-white/30 text-white backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all">
            View Gallery
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Facial Rejuvenation",
      desc: "Advanced dermal fillers and neurotoxins for a refreshed, youthful appearance.",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
      price: "From $450"
    },
    {
      title: "Laser Therapy",
      desc: "Precision skin resurfacing and pigment correction using state-of-the-art technology.",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      price: "From $300"
    },
    {
      title: "Body Contouring",
      desc: "Non-invasive sculpting treatments to define and enhance your natural silhouette.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
      price: "From $800"
    }
  ];

  return (
    <section id="treatments" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Curated Treatments</h2>
            <p className="text-stone-600 leading-relaxed">Our medical-grade procedures are performed by board-certified specialists in a serene, private environment designed for your comfort.</p>
          </div>
          <button className="text-stone-900 font-medium border-b border-stone-900 pb-1 hover:opacity-60 transition-opacity">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-stone-900">
                    {s.price}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-3">{s.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-stone-900 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
      {[
        { label: "Years Excellence", val: "12+" },
        { label: "Happy Clients", val: "15k+" },
        { label: "Specialists", val: "08" },
        { label: "Awards Won", val: "24" }
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl md:text-5xl font-serif text-stone-100 mb-2">{stat.val}</div>
          <div className="text-stone-500 uppercase tracking-widest text-xs">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-stone-900 text-stone-900" />)}
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Client Experiences</h2>
        <p className="text-stone-500">Trusted by thousands of discerning clients.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-10 bg-stone-50 rounded-3xl relative">
          <span className="text-8xl font-serif text-stone-200 absolute top-4 left-6 leading-none">“</span>
          <p className="text-xl text-stone-800 font-serif italic relative z-10 mb-8 leading-relaxed">
            "The level of care and attention to detail at Lumière is unmatched. I've visited many spas globally, but the results here are consistently natural and beautiful."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Client" />
            </div>
            <div>
              <div className="font-bold text-stone-900">Elena Rodriguez</div>
              <div className="text-xs text-stone-500 uppercase tracking-widest">Loyal Client since 2019</div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-stone-50 rounded-3xl relative">
          <span className="text-8xl font-serif text-stone-200 absolute top-4 left-6 leading-none">“</span>
          <p className="text-xl text-stone-800 font-serif italic relative z-10 mb-8 leading-relaxed">
            "A true sanctuary. The staff is incredibly professional, and the environment is pure luxury. My skin has never looked better than after their custom facial series."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" alt="Client" />
            </div>
            <div>
              <div className="font-bold text-stone-900">Sarah Jenkins</div>
              <div className="text-xs text-stone-500 uppercase tracking-widest">Loyal Client since 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-stone-950 text-stone-400 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center">
              <Sparkles className="text-stone-900 w-4 h-4" />
            </div>
            <span className="text-2xl font-serif tracking-tighter text-white">LUMIÈRE</span>
          </div>
          <p className="text-lg text-stone-300 max-w-md mb-8 font-light">
            Elevating the standard of aesthetic medicine through personalized care and artistic precision.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Phone className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Location</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>1200 Beverly Hills Blvd,<br />Suite 400, Los Angeles, CA</span>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Mon - Fri: 9am - 7pm<br />Sat: 10am - 4pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-sm mb-4">Join our list for exclusive offers and beauty insights.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-stone-900 border border-stone-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-stone-600"
            />
            <button className="bg-stone-100 text-stone-900 px-4 py-2 rounded-lg text-sm font-bold">Join</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-stone-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[0.2em]">
        <p>© 2024 Lumière Medical Spa. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-stone-50 py-10 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
          <img src="https://placehold.co/120x40/transparent/333?text=VOGUE" alt="Vogue" className="h-6" />
          <img src="https://placehold.co/120x40/transparent/333?text=ELLE" alt="Elle" className="h-6" />
          <img src="https://placehold.co/120x40/transparent/333?text=BAZAAR" alt="Bazaar" className="h-6" />
          <img src="https://placehold.co/120x40/transparent/333?text=ALLURE" alt="Allure" className="h-6" />
          <img src="https://placehold.co/120x40/transparent/333?text=GLAMOUR" alt="Glamour" className="h-6" />
        </div>
      </div>

      <Services />

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1570172619380-2126ad04840b?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-stone-900 w-6 h-6" />
                <span className="font-bold text-stone-900">Certified Excellence</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Led by Dr. Julianne Vance, our team brings over 20 years of combined clinical experience in aesthetic medicine.
              </p>
            </div>
          </div>
          <div>
            <span className="text-stone-500 uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">Where Science Meets the Art of Beauty</h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              We believe that aesthetic treatments should enhance, not alter. Our approach is rooted in the principle of "Invisible Artistry"—achieving results so natural, they simply look like your best self.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Personalized treatment plans for every skin type",
                "FDA-approved medical grade technology",
                "Board-certified medical practitioners",
                "Private, luxury clinical environment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all">
              Meet Our Specialists
            </button>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-stone-100 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="pattern" />
          </div>
          <div className="relative z-10 py-20 px-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8">Begin Your Transformation</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              Schedule a private consultation with our experts to discuss your aesthetic goals and receive a customized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-stone-900 text-white rounded-full font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> Book Appointment
              </button>
              <button className="px-10 py-5 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-all">
                Call (310) 555-0123
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}