import { useState, SyntheticEvent } from "react";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Send, 
  Leaf, 
  ArrowUp, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";
import VeloraLogo from "./VeloraLogo";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Email address format is invalid.");
      return;
    }
    
    setErrorMsg("");
    setIsSubscribed(true);
    setEmail("");
  };

  const menuLinks = [
    { name: "High Protein", id: "menu" },
    { name: "Vegan", id: "menu" },
    { name: "Keto", id: "menu" },
    { name: "Low Carb", id: "menu" },
    { name: "Omega-3 Rich", id: "menu" }
  ];

  const companyLinks = [
    { name: "About Us", id: "hero" },
    { name: "Our Story", id: "how-it-works" },
    { name: "Careers", id: "hero" },
    { name: "Blog", id: "hero" }
  ];

  const supportLinks = [
    { name: "Contact Us", id: "faq" },
    { name: "FAQ", id: "faq" },
    { name: "Delivery Info", id: "how-it-works" },
    { name: "Returns", id: "faq" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", id: "hero" },
    { name: "Terms of Service", id: "hero" },
    { name: "Refund Policy", id: "hero" }
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      
      {/* Absolute decorative glow vector */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid: Brand info, newsletter & links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 01: VELORA summary */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <button 
              onClick={() => onScrollToSection("hero")}
              className="flex items-center group text-left cursor-pointer focus:outline-none transition-transform duration-250 active:scale-98"
            >
              <VeloraLogo variant="full" theme="dark" className="h-10 sm:h-[46px] w-auto" />
            </button>

            <p className="font-sans text-zinc-400 text-sm max-w-sm leading-relaxed">
              Premium, chef-prepared and nutritionist-validated meal preps delivered fresh to your doorstep. Perfect organic fuel for high-performance active lifestyles.
            </p>

            {/* Social media links container */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-xs uppercase text-zinc-500 tracking-wider">Connect with VELORA</h4>
              <div className="flex items-center gap-3.5">
                {[
                  { icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com/velorabento", label: "Facebook link" },
                  { icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/velorabento", label: "Instagram link" },
                  { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/velorabento", label: "Twitter link" },
                  { icon: <Youtube className="w-5 h-5" />, link: "https://youtube.com/velorabento", label: "Youtube link" }
                ].map((social, id) => (
                  <a
                    key={id}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-zinc-350 hover:text-emerald-400 hover:bg-zinc-800 hover:scale-110 active:scale-95 shadow-md transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 02: Newsletter signup */}
          <div className="lg:col-span-4 space-y-6 text-left lg:border-l lg:border-r lg:border-white/5 lg:px-8">
            <div className="space-y-2">
              <h3 className="font-sans font-extrabold text-lg text-white">Join Our Newsletter</h3>
              <p className="font-sans text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Subscribe to claim a <strong className="text-emerald-400">20% promo voucher</strong> plus weekly healthy recipes, fitness content and organic chef guides.
              </p>
            </div>

            {isSubscribed ? (
               <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-4 flex items-start gap-3 text-emerald-300 animate-fade-in">
                <CheckCircle2 className="w-5.5 h-5.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">Welcome to the family!</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                     We've dispatched your 20% discount code to your inbox! Code: <strong className="text-emerald-400">HEALTHY20</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg("");
                    }}
                    className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-655 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 flex-1 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black hover:bg-zinc-200 font-sans font-bold text-sm px-4.5 rounded-xl cursor-pointer flex items-center justify-center shrink-0 transition-all active:scale-95"
                    title="Subscribe to Newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {errorMsg && (
                  <p className="font-sans text-[11.5px] font-semibold text-rose-500">{errorMsg}</p>
                )}
                <p className="text-[10px] text-zinc-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> No spam. Unsubscribe with 1 click at any time.
                </p>
              </form>
            )}
          </div>

          {/* Col 03: Clear Site Map categorized links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            
            {/* Company Links Sitemap */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-xs uppercase tracking-wider text-zinc-500">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onScrollToSection(link.id)}
                      className="font-sans text-xs text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer block focus:outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu Links Sitemap */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-xs uppercase tracking-wider text-zinc-500">Menu</h4>
              <ul className="space-y-2.5">
                {menuLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        const targetEl = document.getElementById("menu");
                        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-sans text-xs text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer block focus:outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links Sitemap */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-xs uppercase tracking-wider text-zinc-500">Support</h4>
              <ul className="space-y-2.5">
                {supportLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onScrollToSection(link.id)}
                      className="font-sans text-xs text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer block focus:outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links Sitemap */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-xs uppercase tracking-wider text-zinc-500">Legal</h4>
              <ul className="space-y-2.5">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onScrollToSection("hero")}
                      className="font-sans text-xs text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer block focus:outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Lower block: copyright, compliance & brand credentials */}
        <div className="pt-8 flex flex-col items-center justify-center text-center gap-4 relative">
          
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-sm text-zinc-450 select-none">
              © 2026 VELORA, Inc. All rights reserved. Registered USDA Organic Partner.
            </p>
            {/* Disclaimer statement requested key */}
            <p className="font-sans text-sm sm:text-base flex items-center gap-1.5 justify-center flex-wrap select-none text-zinc-400 font-medium">
              <span>Designed & Developed by</span>
              <a 
                href="https://wa.me/917780494171?text=Hi%20Autofy%20AI!%20I%20am%20interested%20in%20your%20services." 
                target="_blank" 
                rel="noreferrer" 
                className="text-amber-500 hover:text-amber-400 font-black relative group transition-all"
              >
                <span className="font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400">Autofy AI</span>
                <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-amber-500 rounded-full transition-transform group-hover:scale-105 duration-200"></span>
              </a>
            </p>
          </div>

          {/* Floater Scroll to Top */}
          <div className="absolute right-0 bottom-2 md:bottom-auto">
            <button
              onClick={() => onScrollToSection("hero")}
              className="bg-zinc-900 hover:bg-emerald-600 border border-white/10 p-2.5 rounded-xl hover:text-white transition-all text-zinc-400 shadow-md flex items-center justify-center cursor-pointer group"
              title="Return to topmost page scroll"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
