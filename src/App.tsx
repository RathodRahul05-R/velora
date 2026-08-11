/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import HowItWorks from "./components/HowItWorks";
import PopularBento from "./components/PopularBento";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PlanDrawer from "./components/PlanDrawer";
import { Meal, Plan, BillingCycle } from "./types";
import { MEALS_DATA } from "./data";
import { CheckCircle2, X } from "lucide-react";

export default function App() {
  const [selectedMeals, setSelectedMeals] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [alertNotification, setAlertNotification] = useState<string | null>(null);

  // Add meal helper
  const handleAddMeal = (meal: Meal) => {
    setSelectedMeals((prev) => {
      const currentCount = prev[meal.id] || 0;
      return {
        ...prev,
        [meal.id]: currentCount + 1,
      };
    });

    // Provide a beautiful dynamic floating confirmation indicator
    triggerNotification(`Added portion of delicious ${meal.name} to your custom plan!`);
  };

  // Remove portion helper
  const handleRemoveMeal = (mealId: string) => {
    setSelectedMeals((prev) => {
      const currentCount = prev[mealId] || 0;
      if (currentCount <= 1) {
        const update = { ...prev };
        delete update[mealId];
        return update;
      }
      return {
        ...prev,
        [mealId]: currentCount - 1,
      };
    });
  };

  // Clear selections helper
  const handleClearMeals = () => {
    setSelectedMeals({});
  };

  const handleScrollToSection = (id: string) => {
    // Since pricing is removed, route pricing scrolling to menu
    const targetId = id === "pricing" ? "menu" : id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Notification floater triggers
  const triggerNotification = (message: string) => {
    setAlertNotification(message);
    setTimeout(() => {
      setAlertNotification((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const handleOrderNow = () => {
    const activeSelections = Object.entries(selectedMeals)
      .map(([id, quantity]) => {
        const mealInfo = MEALS_DATA.find((m) => m.id === id);
        return mealInfo ? { meal: mealInfo, qty: quantity } : null;
      })
      .filter(Boolean) as { meal: Meal; qty: number }[];

    if (activeSelections.length === 0) {
      triggerNotification("Please add some delicious meals to your custom plan first to calculate your bill!");
      handleScrollToSection("menu");
      return;
    }

    const totalPrice = activeSelections.reduce((sum, item) => sum + (item.qty * item.meal.price), 0);
    const totalCalories = activeSelections.reduce((sum, item) => sum + (item.qty * item.meal.calories), 0);
    const totalProtein = activeSelections.reduce((sum, item) => sum + (item.qty * item.meal.protein), 0);

    const itemsList = activeSelections
      .map((item) => `• ${item.meal.name} x ${item.qty} (₹${item.meal.price * item.qty})`)
      .join("\n");

    const message = `Hi VELORA! I would like to order my custom meal plan:\n\n` +
      `*Selected Bento Meals:*\n${itemsList}\n\n` +
      `*Plan Nutrition Highlights:*\n` +
      `• Total Calories: ${totalCalories} Cal\n` +
      `• Total Protein: ${totalProtein}g\n` +
      `• Est. Weekly Price: ₹${totalPrice}\n\n` +
      `Please confirm my order. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919392472134?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalSelectedCount = Object.keys(selectedMeals).reduce((sum, key) => sum + (selectedMeals[key] || 0), 0);

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden selection:bg-emerald-150 selection:text-emerald-900">
      
      {/* Header section includes total custom selections */}
      <Header 
        cartCount={totalSelectedCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToSection={handleScrollToSection}
         onOrderButtonClick={handleOrderNow}
       />

      {/* Floating Interactive Alert Notification Card on top right */}
      {alertNotification && (
        <div className="fixed top-24 right-4 sm:right-6 md:right-8 z-[60] bg-white/95 backdrop-blur-md text-gray-800 max-w-sm rounded-2xl p-4 shadow-2xl border border-emerald-100 flex items-start gap-3 animate-fade-in">
          <CheckCircle2 className="w-5.25 h-5.25 text-emerald-500 shrink-0 mt-0.5" />
          <div className="flex-1 text-left">
            <p className="font-sans font-bold text-xs text-emerald-800">VELORA Dispatcher</p>
            <p className="font-sans text-[11.5px] text-zinc-650 mt-1 leading-snug">{alertNotification}</p>
          </div>
          <button 
            onClick={() => setAlertNotification(null)}
            className="text-zinc-400 hover:text-zinc-800 transition-colors shrink-0"
            title="Dismiss alert"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Primary Landing layout blocks flow sequentially */}
      <main>
        {/* HERO SECTION */}
        <Hero 
          onBuildPlanClick={() => handleScrollToSection("menu")}
          onSeeMenuClick={() => handleScrollToSection("menu")}
          addedCount={totalSelectedCount}
        />

        {/* STATS SECTION */}
        <StatsSection />

        {/* HOW VELORA WORKS BLOCK */}
        <HowItWorks />

        {/* INTERACTIVE MENU PORTABLE CARDS */}
        <PopularBento 
          onAddMeal={handleAddMeal}
          onRemoveMeal={handleRemoveMeal}
          selectedMeals={selectedMeals}
        />

        {/* TESTIMONIALS FROM REAL USERS */}
        <Testimonials />

        {/* FREQUENTLY ASKED ACCORDIONS */}
        <FAQ />

        {/* PRE-FOOTER CTA CONSOLE */}
        <section className="bg-gradient-to-b from-white to-emerald-50/40 py-[120px] border-t border-b border-emerald-100/50 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <span className="inline-block px-3.5 py-1 border border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] uppercase tracking-widest rounded-full font-sans font-bold">
              🚀 Elevate Your Wellness
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-gray-950 tracking-tight leading-none">
              Eat Better. <span className="text-emerald-600">Live Stronger.</span>
            </h2>
            <p className="font-sans text-zinc-550 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Join 50,000+ health-conscious customers enjoying fresh chef-crafted meals delivered daily.
            </p>
            
            {/* CTA action cluster */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleScrollToSection("menu")}
                className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700 font-sans font-extrabold text-sm py-3.5 px-8 rounded-full shadow-lg transition-all cursor-pointer"
              >
                Build My Plan
              </button>
              <button
                onClick={() => handleScrollToSection("menu")}
                className="w-full sm:w-auto border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-sans font-extrabold text-sm py-3.5 px-8 rounded-full transition-all cursor-pointer"
              >
                View Sample Menu
              </button>
            </div>
            
            <p className="text-[10px] font-bold text-zinc-400 font-mono tracking-wide uppercase">
              No subscription contracts • Direct WhatsApp checkout • Fresh Daily Meals
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER - containing Newsletter signup, Social Handles and Sitemap */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* OVERLAPPING ROTATING DRAWER for custom meals portions incrementers */}
      <PlanDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedMeals={selectedMeals}
        onAddMeal={handleAddMeal}
        onRemoveMeal={handleRemoveMeal}
        onClearmeals={handleClearMeals}
      />

    </div>
  );
}
