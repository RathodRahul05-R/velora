import { useState } from "react";
import { ListTodo, UtensilsCrossed, Sparkles, Navigation } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      num: "01",
      title: "Choose Your Meals",
      desc: "Select portion ratios or build your own completely customized box from our daily curated, calorie-counted organic meal selections.",
      icon: <ListTodo className="w-5 h-5" />,
      tag: "1 min setup"
    },
    {
      id: 2,
      num: "02",
      title: "We Prepare Fresh",
      desc: "Our master chefs cook and hand-portion your meals daily, using exclusive sustainable, USDA organic partner ingredients.",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      tag: "Daily prep"
    },
    {
      id: 3,
      num: "03",
      title: "Delivered to You",
      desc: "Receive your fresh, chilled double-insulated cooler bags right at your door or office every morning for seamless navigation.",
      icon: <Navigation className="w-5 h-5" />,
      tag: "Arrives chilled"
    }
  ];

  return (
    <section id="how-it-works" className="py-[120px] bg-slate-50 relative overflow-hidden border-t border-b border-gray-150">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Seamless Process
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-gray-950 tracking-tight">
            How VELORA Works
          </h2>
          <p className="font-sans text-zinc-500 text-sm sm:text-base leading-relaxed">
            From certified organic local harvests to fresh daily door delivery in 3 simplified steps.
          </p>
        </div>

        {/* Steps Card Grid with horizontal connectors */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          
          {/* Subtle connecting lines on desktop */}
          <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-0.5 border-t border-dashed border-gray-200 -z-10" />

          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-7 text-left relative group cursor-pointer ${
                activeStep === step.id
                  ? "border-emerald-500 shadow-[0_12px_30px_rgba(0,0,0,0.1)] -translate-y-2"
                  : "border-[#dcdcdc] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-emerald-250 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2"
              }`}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              
              {/* Floating connector arrow on desktop */}
              {idx < 2 && (
                <div className="hidden md:flex absolute top-12 -right-8 w-6 h-6 items-center justify-center text-gray-300 group-hover:text-emerald-500 transition-colors z-20">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}

              {/* Number and Icon Group */}
              <div className="flex items-center justify-between">
                <span className="font-mono font-extrabold text-[10px] text-emerald-700 tracking-wider bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg">
                  STEP {step.num}
                </span>
                <span className="text-gray-450 font-sans font-bold text-xs tracking-wide">
                  {step.tag}
                </span>
              </div>

              {/* Floating Large Glowy Icon */}
              <div className={`mt-6 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                activeStep === step.id
                  ? "bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-600/20"
                  : "bg-emerald-50 border-emerald-100 text-emerald-600"
              }`}>
                {step.icon}
              </div>

              {/* Title and Copy text */}
              <h3 className="font-sans font-bold text-gray-900 text-lg mt-6 group-hover:text-emerald-600 transition-colors">
                {step.title}
              </h3>
              <p className="font-sans text-zinc-500 text-sm leading-relaxed mt-2.5">
                {step.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
