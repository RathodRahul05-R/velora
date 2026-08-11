import { Sparkles, Star, ShieldCheck, Clock, CheckCircle } from "lucide-react";

interface HeroProps {
  onBuildPlanClick: () => void;
  onSeeMenuClick: () => void;
  addedCount: number;
}

export default function Hero({ onBuildPlanClick, onSeeMenuClick, addedCount }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative pt-[120px] pb-16 md:pt-[160px] md:pb-24 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/35"
    >
      {/* Decorative background organic glow vectors */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-12 left-0 w-[400px] h-[400px] bg-amber-100/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Statement */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* 100% Organics Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full py-1.5 px-3.5 shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
              <span className="font-sans font-bold text-[11px] text-emerald-700 tracking-wider uppercase">
                100% Fresh & Organic Ingredients
              </span>
            </div>

            {/* Main Display Typography */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-7xl text-zinc-900 tracking-tight leading-[1.08]">
              Healthy Meals, <br className="hidden sm:inline" />
              <span className="text-emerald-500 inline-block mt-1 sm:mt-2">
                Delivered Fresh
              </span>{" "}
              Every Day
            </h1>

            {/* Copy Paragraph */}
            <p className="font-sans text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
              Delicious, nutritionist-approved organic meal preps delivered to your doorstep. No cooking, no prep, no hassle just pure healthy goodness tailored for high-performance active lifestyles.
            </p>

            {/* Dynamic visual indication of custom selections */}
            {addedCount > 0 && (
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-150 text-emerald-800 text-xs font-semibold py-2 px-4 rounded-xl shadow-md scale-100 hover:scale-102 transition-all animate-fade-in">
                <span>⚡ You have added <span className="underline font-bold text-emerald-900">{addedCount} organic servings</span> to your custom plan!</span>
              </div>
            )}

            {/* Dual Actions Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-build-plan-btn"
                onClick={onBuildPlanClick}
                className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-sans font-bold text-sm py-3.5 px-8 rounded-full shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 transition-all cursor-pointer text-center duration-200"
              >
                Build Your Plan
              </button>
              <button
                id="hero-see-menu-btn"
                onClick={onSeeMenuClick}
                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-sans font-bold text-sm py-3.5 px-8 rounded-full shadow-sm transition-all cursor-pointer text-center duration-200"
              >
                See Sample Menu
              </button>
            </div>

            {/* Trust Ratings Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-gray-150 w-full">
              <div className="flex -space-x-3.5">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 1" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 2" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
                  alt="Reviewer 3" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                  +50k
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-sans mt-0.5">
                  <span className="font-extrabold text-zinc-900">50K+ Happy Customers</span> • Real weight targets achieved
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Bento Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-2 sm:p-4">
            
            {/* Golden Blur Spotlight */}
            <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-l from-emerald-100/30 to-amber-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            {/* Showcase Stack Grid */}
            <div className="relative w-full max-w-md flex flex-col gap-5">
              
              {/* Dish 1: Power Bowl Visual */}
              <div className="bg-white/90 p-3.5 rounded-3xl border border-gray-150 hover:border-emerald-300 hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden shadow-xl">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=260&q=80"
                    alt="Premium Chicken Power Bowl"
                    className="w-24 h-24 rounded-2xl object-cover border border-gray-100 group-hover:rotate-1 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                          High Protein
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400 font-mono">
                          #01 Bestseller
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-zinc-800 text-base mt-1.5">
                        Grilled Chicken Power Bowl
                      </h3>
                      <p className="text-xs text-gray-500 font-sans line-clamp-1 mt-0.5">
                        With premium organic quinoa, Hass avocado & fresh kale.
                      </p>
                    </div>
                    {/* Nutritional micro-pills */}
                    <div className="flex gap-3 text-[10px] font-mono font-bold text-gray-500 mt-2">
                      <span className="bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">450 kcal</span>
                      <span className="bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50 text-emerald-700">35g Protein</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dish 2: Mediterranean Hummus Bento Box */}
              <div className="bg-white/90 p-3.5 rounded-3xl border border-gray-150 hover:border-emerald-300 hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden sm:-translate-x-8 shadow-xl">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=260&q=80"
                    alt="Mediterranean Hummus Bento Box"
                    className="w-24 h-24 rounded-2xl object-cover border border-gray-100 group-hover:-rotate-1 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-100">
                          Vegetarian
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400 font-mono">
                          ⭐ 4.9 Rating
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-zinc-800 text-base mt-1.5">
                        Mediterranean Delight Meal
                      </h3>
                      <p className="text-xs text-gray-500 font-sans line-clamp-1 mt-0.5">
                        Crispy organic falafels, hummus, Greek salad & tzatziki.
                      </p>
                    </div>
                    {/* Nutritional micro-pills */}
                    <div className="flex gap-3 text-[10px] font-mono font-bold text-gray-500 mt-2">
                      <span className="bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">320 kcal</span>
                      <span className="bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50 text-emerald-700">28g Protein</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dish 3: Asian Salmon Fusion Bento Box */}
              <div className="bg-white/90 p-3.5 rounded-3xl border border-gray-150 hover:border-emerald-300 hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden shadow-xl">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=260&q=80"
                    alt="Premium Asian Teriyaki Salmon box"
                    className="w-24 h-24 rounded-2xl object-cover border border-gray-100 group-hover:rotate-1 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                          Omega-3 Rich
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-600 font-mono flex items-center gap-0.5">
                          ✓ Certified Fresh
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-zinc-800 text-base mt-1.5">
                        Asian Teriyaki Salmon Box
                      </h3>
                      <p className="text-xs text-gray-500 font-sans line-clamp-1 mt-0.5">
                        Teriyaki glazed salmon, brown jasmine rice, organic edamame.
                      </p>
                    </div>
                    {/* Nutritional micro-pills */}
                    <div className="flex gap-3 text-[10px] font-mono font-bold text-gray-500 mt-2">
                      <span className="bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">480 kcal</span>
                      <span className="bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50 text-emerald-700">32g Protein</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Brand Highlights Ribbon */}
        <div id="highlights" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 md:mt-20 border-t border-gray-150">
          <div className="flex items-start gap-3.5 text-left bg-white p-4 rounded-2xl border border-[#dcdcdc] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-zinc-800 uppercase tracking-tight">
                100% Organic
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-normal">
                Organically sourced, USDA organic partner.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left bg-white p-4 rounded-2xl border border-[#dcdcdc] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-zinc-800 uppercase tracking-tight">
                Express Delivery
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-normal">
                Arrives fresh and cold right to your doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left bg-white p-4 rounded-2xl border border-[#dcdcdc] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-zinc-800 uppercase tracking-tight">
                Free Delivery
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-normal">
                Included on-demand for fresh meal selections.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left bg-white p-4 rounded-2xl border border-[#dcdcdc] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-zinc-800 uppercase tracking-tight">
                Nutritionist Approved
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-normal">
                Crafted by master chefs & nutrition experts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
