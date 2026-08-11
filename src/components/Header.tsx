import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Leaf } from "lucide-react";
import VeloraLogo from "./VeloraLogo";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOrderButtonClick?: () => void;
}

export default function Header({ cartCount, onOpenCart, onScrollToSection, onOrderButtonClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Menu", id: "menu" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Reviews", id: "reviews" },
    { name: "FAQ", id: "faq" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      {/* Promo Banner */}
      {showPromo && (
        <div className="pointer-events-auto bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs sm:text-sm font-medium py-2.5 px-0 relative flex items-center h-10 overflow-hidden border-b border-white/10 shadow-md">
          <div className="w-full overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block">
              <span className="inline-flex items-center gap-2 pr-16 select-none">
                ⚡ New customers grab <strong className="underline decoration-2">20% OFF</strong> your first order! Use code: <strong className="bg-white/20 px-2 py-0.5 rounded text-yellow-300 font-extrabold tracking-wide text-[10px] sm:text-xs">HEALTHY20</strong>
              </span>
              <span className="inline-flex items-center gap-2 pr-16 select-none">
                ⚡ New customers grab <strong className="underline decoration-2">20% OFF</strong> your first order! Use code: <strong className="bg-white/20 px-2 py-0.5 rounded text-yellow-300 font-extrabold tracking-wide text-[10px] sm:text-xs">HEALTHY20</strong>
              </span>
              <span className="inline-flex items-center gap-2 pr-16 select-none">
                ⚡ New customers grab <strong className="underline decoration-2">20% OFF</strong> your first order! Use code: <strong className="bg-white/20 px-2 py-0.5 rounded text-yellow-300 font-extrabold tracking-wide text-[10px] sm:text-xs">HEALTHY20</strong>
              </span>
              <span className="inline-flex items-center gap-2 pr-16 select-none">
                ⚡ New customers grab <strong className="underline decoration-2">20% OFF</strong> your first order! Use code: <strong className="bg-white/20 px-2 py-0.5 rounded text-yellow-300 font-extrabold tracking-wide text-[10px] sm:text-xs">HEALTHY20</strong>
              </span>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pl-12 bg-gradient-to-l from-emerald-600 via-emerald-600 to-transparent pointer-events-auto">
            <button 
              type="button"
              onClick={() => setShowPromo(false)}
              className="hover:scale-105 p-1 rounded-full bg-emerald-700/80 hover:bg-emerald-800 text-white transition-all shadow-sm focus:outline-none cursor-pointer"
              title="Close promotional banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header Bar Floating Container */}
      <div className={`w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-auto ${
        showPromo ? "mt-3 sm:mt-5" : "mt-2 sm:mt-7"
      }`}>
        <div className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 sm:py-4 px-3.5 sm:px-6 md:px-10 rounded-xl border border-gray-150" 
            : "bg-white/90 backdrop-blur-md shadow-md py-4 sm:py-6 px-4 sm:px-8 md:px-12 rounded-xl border border-gray-100"
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button 
              onClick={() => handleLinkClick("hero")}
              className="flex items-center group text-left cursor-pointer focus:outline-none transition-transform duration-250 active:scale-98"
            >
              <VeloraLogo variant="full" className="h-[34px] xs:h-[38px] sm:h-[44px] md:h-[50px] w-auto" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="font-sans font-bold text-gray-600 hover:text-emerald-600 transition-colors duration-250 cursor-pointer relative py-1 group focus:outline-none"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* My Bento / Cart Trigger */}
              <button
                id="header-cart-btn"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors cursor-pointer flex items-center gap-1.5 border border-emerald-100"
                title="View your plan setup"
              >
                <ShoppingBag className="w-5 h-5 text-emerald-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white font-mono font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                    {cartCount}
                  </span>
                )}
                <span className="hidden sm:inline font-sans font-bold text-sm text-emerald-800">
                  My Plan
                </span>
              </button>

              {/* CTA Order Button */}
              <button
                id="header-order-btn"
                onClick={() => {
                  if (onOrderButtonClick) {
                    onOrderButtonClick();
                  } else {
                    handleLinkClick("menu");
                  }
                }}
                className="hidden sm:inline-block bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                Order Now
              </button>

              {/* Mobile Menu Toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:outline-none"
                aria-label="Toggle Navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay as a beautiful floating rounded card */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2 pointer-events-auto animate-fade-in">
          <div className="bg-white/95 backdrop-blur-md border border-gray-150 rounded-2xl shadow-xl py-6 px-5 flex flex-col gap-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="w-full text-left py-2.5 px-3 font-sans font-bold text-base text-gray-800 hover:bg-emerald-50 rounded-xl hover:text-emerald-600 transition-all cursor-pointer focus:outline-none"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5 pt-3 border-t border-gray-150">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full bg-emerald-50 hover:bg-emerald-100/80 active:scale-98 text-emerald-800 font-sans font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-emerald-100"
              >
                <ShoppingBag className="w-5 h-5" />
                View Custom Meal Plan ({cartCount})
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOrderButtonClick) {
                    onOrderButtonClick();
                  } else {
                    handleLinkClick("menu");
                  }
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold py-3 px-4 rounded-xl text-center shadow-md transition-all"
              >
                Order Now - Get 20% Off
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
