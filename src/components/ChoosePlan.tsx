import { useState } from "react";
import { PLANS_DATA } from "../data";
import { BillingCycle, Plan } from "../types";
import { Check, Sparkles } from "lucide-react";

interface ChoosePlanProps {
  onSelectPlan: (plan: Plan, cycle: BillingCycle) => void;
  selectedPlanId?: string;
}

export default function ChoosePlan({ onSelectPlan, selectedPlanId }: ChoosePlanProps) {
  const [cycle, setCycle] = useState<BillingCycle>("Weekly");

  const currentPlans = PLANS_DATA[cycle];

  // Helper to construct dynamic tagline per cycle
  const getCycleSavings = () => {
    switch (cycle) {
      case "Daily":
        return "Ideal for tasting & quick breakfast/dinner preps";
      case "Weekly":
        return "Save up to 10% compared to daily subscriptions";
      case "Monthly":
        return "Save up to 20% + includes free express deliveries";
      default:
        return "";
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0a0a0a] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Flexible Pricing
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
            Choose Your Plan
          </h2>
          <p className="font-sans text-zinc-405 text-sm sm:text-base">
            No long commitments. Pause, edit, or swap dishes anytime with a single tap.
          </p>
        </div>

        {/* Dynamic Selector Tabs */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="bg-[#121212] p-1.5 rounded-2xl border border-white/10 shadow-lg inline-flex items-center gap-1 max-w-full">
            {(["Daily", "Weekly", "Monthly"] as BillingCycle[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setCycle(tab)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-sans font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  cycle === tab
                    ? "bg-white text-black shadow-md shadow-white/10"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
                {tab === "Monthly" && (
                  <span className="ml-1 text-[9px] sm:text-[10px] font-mono bg-orange-600 text-white px-1 sm:px-1.5 py-0.5 rounded-md uppercase font-bold tracking-wide">
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest animate-pulse">
            ✨ {getCycleSavings()}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {currentPlans.map((plan) => {
            const isFeatured = plan.isPopular;
            const isSelected = selectedPlanId === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`bg-[#121212] rounded-3xl border transition-all duration-300 p-8 flex flex-col justify-between relative text-left ${
                  isFeatured
                    ? "border-blue-500 shadow-xl shadow-blue-500/5 ring-4 ring-blue-500/20 lg:scale-103"
                    : "border-white/10 hover:border-white/15 hover:shadow-lg shadow-xs"
                } ${isSelected ? "border-amber-500 ring-4 ring-amber-500/20" : ""}`}
              >
                
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-sans font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-blue-400">
                    Most Popular
                  </div>
                )}

                {/* Selected Indicator */}
                {isSelected && (
                  <div className="absolute -top-4 right-4 bg-amber-500 text-white font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Active Setup
                  </div>
                )}

                {/* Plan Metadata */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-sans font-extrabold text-white text-2xl tracking-tight leading-none">
                      {plan.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-white/10">
                      {plan.mealsIncluded} meals Included
                    </span>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1.55">
                    <span className="font-sans font-black text-white text-[38px] sm:text-[44px] tracking-tight">
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>
                    <span className="font-sans font-medium text-zinc-500 text-sm">
                      /{cycle.substring(0, cycle.length - 2).toLowerCase() || "day"}
                    </span>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-sans text-zinc-350 font-medium leading-relaxed">
                        <div className="p-0.5 bg-blue-500/15 text-blue-400 rounded-full shrink-0 border border-blue-500/25 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-action */}
                <button
                  onClick={() => onSelectPlan(plan, cycle)}
                  className={`w-full font-sans font-extrabold text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isFeatured
                      ? "bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/5 hover:-translate-y-0.5"
                      : "bg-[#1e1e1e] border border-white/10 text-white hover:bg-zinc-800"
                  }`}
                >
                  {isSelected ? "Modify Custom Selection" : `Select ${plan.name} Plan`}
                </button>

              </div>
            );
          })}
        </div>

        {/* Footer info text */}
        <p className="font-sans text-xs text-zinc-500 text-center mt-12 max-w-sm mx-auto leading-relaxed">
          * All plans include flexible pausing, meal replacements, skipping, and hassle-free subscription cancellations. No hidden fees or lock-ins.
        </p>

      </div>
    </section>
  );
}
