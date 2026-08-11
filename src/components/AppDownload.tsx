import { useState } from "react";
import { MEALS_DATA } from "../data";
import { Smartphone, CheckCircle, Star, ArrowRight, AppWindow, Play, Heart } from "lucide-react";

export default function AppDownload() {
  const [phoneActiveIndex, setPhoneActiveIndex] = useState(0);
  const activeMeal = MEALS_DATA[phoneActiveIndex % MEALS_DATA.length];

  const appFeatures = [
    { title: "Easy one-tap ordering", desc: "Select and swap recipes inside 5 seconds." },
    { title: "Real-time delivery tracking", desc: "See your chilled cooler bags make their way to you." },
    { title: "Personalized meal recommendations", desc: "AI-based macro recommendations tailored for your bmi." },
    { title: "Exclusive mobile discounts", desc: "Unlock double rewards points & special free organic appetizers." }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden border-b border-white/5">
      {/* Absolute decorative background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Description & lists */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              📱 VELORA ON THE GO
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-white">
              Download the <br className="hidden sm:inline" />
              VELORA App
            </h2>
            <p className="font-sans text-zinc-400 text-base max-w-xl leading-relaxed">
              Order on-the-go, swap meals, track calorie counts, manage your weekly scheduling, and get instant access to exclusive, APP-only discounts.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feat, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-blue-400 fill-blue-500/10 font-bold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-white text-sm">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-[11px] text-zinc-500 mt-0.5 leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Badges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              {/* Apple Store Button */}
              <button 
                type="button"
                className="bg-zinc-900 hover:bg-zinc-850 text-white border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors text-left cursor-pointer focus:outline-none"
                onClick={() => alert("VELORA Mobile App store listing: Coming Soon!")}
              >
                <AppWindow className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-[9px] font-mono tracking-wider font-semibold text-zinc-500 uppercase">Download on the</p>
                  <p className="text-sm font-sans font-bold leading-tight -mt-0.5">App Store</p>
                </div>
              </button>

              {/* Google Play Button */}
              <button 
                type="button"
                className="bg-zinc-900 hover:bg-zinc-850 text-white border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors text-left cursor-pointer focus:outline-none"
                onClick={() => alert("VELORA Google Play store listing: Coming Soon!")}
              >
                <Play className="w-6 h-6 fill-current shrink-0 text-white" />
                <div>
                  <p className="text-[9px] font-mono tracking-wider font-semibold text-zinc-500 uppercase">Get it on</p>
                  <p className="text-sm font-sans font-bold leading-tight -mt-0.5">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Block: Interactive CSS phone frame simulation */}
          <div className="lg:col-span-5 flex items-center justify-center p-2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-blue-600/10 rounded-full blur-[80px]" />
            
            {/* Phone Container */}
            <div className="relative w-[280px] h-[550px] bg-zinc-950 rounded-[44px] border-4 border-zinc-800 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden resize-none">
              
              {/* Camera Island "Dynamic Notch" */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-40 flex items-center justify-center" aria-hidden="true">
                <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-2" />
                <div className="w-10 h-1 bg-neutral-900 rounded-full" />
              </div>

              {/* Inner Phone Screen */}
              <div className="w-full h-full bg-black/90 rounded-[34px] p-3 text-white flex flex-col justify-between relative overflow-y-auto scrollbar-none pt-7.5 border border-white/5">
                
                {/* Phone Header App Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1">
                    <Smartphone className="w-4 h-4 text-blue-400" />
                    <span className="text-[9px] font-bold text-zinc-400 font-mono tracking-widest uppercase">VELORA App</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold text-zinc-300 font-sans">9:41 AM</span>
                  </div>
                </div>

                {/* Simulated Content Card */}
                <div className="flex-1 flex flex-col justify-between mt-3 text-left">
                  
                  {/* Food Image Carousel Frame */}
                  <div className="relative h-32 w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-xs border border-white/10">
                    <img 
                      src={activeMeal.image} 
                      alt={activeMeal.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow border border-blue-400">
                      {activeMeal.badge}
                    </div>
                    <button 
                      type="button"
                      className="absolute top-2 right-2 bg-black/80 p-1 rounded-full text-rose-500 shadow border border-white/10"
                      title="Add to wishlist"
                    >
                      <Heart className="w-3 h-3 fill-rose-500" />
                    </button>
                  </div>

                  {/* Active details */}
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans font-extrabold text-xs text-white leading-tight">
                        {activeMeal.name}
                      </h4>
                      <div className="flex items-center gap-0.5 text-amber-550 scale-90 origin-right">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-mono text-[9px] font-bold text-white">{activeMeal.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-[9px] text-zinc-400 font-sans line-clamp-2 leading-snug">
                      Delicious calorie-counted meal prep filled with rich macro-nutrients.
                    </p>
                  </div>

                  {/* Macros segment */}
                  <div className="bg-zinc-950 p-2 rounded-xl border border-white/5 flex justify-between text-center gap-2 mt-2">
                    <div>
                      <p className="text-[7px] text-zinc-500 font-mono font-bold leading-none uppercase">Calories</p>
                      <p className="text-[10px] font-bold text-white mt-1">{activeMeal.calories} kcal</p>
                    </div>
                    <div className="border-r border-white/5" />
                    <div>
                      <p className="text-[7px] text-zinc-500 font-mono font-bold leading-none uppercase">Protein</p>
                      <p className="text-[10px] font-bold text-emerald-400 mt-1">{activeMeal.protein}g</p>
                    </div>
                    <div className="border-r border-white/5" />
                    <div>
                      <p className="text-[7px] text-zinc-500 font-mono font-bold leading-none uppercase">Ready</p>
                      <p className="text-[10px] font-bold text-blue-400 mt-1">2 mins</p>
                    </div>
                  </div>

                  {/* Interactive Toggle Trigger */}
                  <div className="mt-3.5 pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <p className="text-[8px] font-bold text-zinc-500 font-mono uppercase">Explore Recipes</p>
                      <span className="text-[8px] font-bold text-blue-400 font-mono flex items-center">
                        Tap to flip <ArrowRight className="w-2.5 h-2.5 ml-1" />
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 mt-1.5">
                      {MEALS_DATA.slice(0, 3).map((meal, index) => (
                        <button
                          key={meal.id}
                          onClick={() => setPhoneActiveIndex(index)}
                          className={`rounded-lg overflow-hidden border p-0.5 transition-all cursor-pointer ${
                            phoneActiveIndex === index 
                              ? "border-blue-500 ring-2 ring-blue-500/20 scale-102" 
                              : "border-white/10 hover:border-white/20"
                          }`}
                        >
                          <img 
                            src={meal.image} 
                            alt={meal.name} 
                            className="h-7 w-full object-cover rounded"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Simulated Order CTA Button */}
                <button
                  onClick={() => alert(`Simulating active app order for ${activeMeal.name}! Order placed successfully.`)}
                  className="w-full bg-white text-black font-sans font-bold text-[10px] py-1.5 rounded-lg text-center shadow-lg cursor-pointer mt-4"
                >
                  Confirm Order (${(activeMeal.calories/50).toFixed(2)})
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
