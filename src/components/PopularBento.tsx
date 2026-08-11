import React, { useState } from "react";
import { MEALS_DATA } from "../data";
import { Meal } from "../types";
import { Star, Check, Plus, Filter, Info, ChevronLeft, ChevronRight } from "lucide-react";

interface PopularBentoProps {
  onAddMeal: (meal: Meal) => void;
  onRemoveMeal: (mealId: string) => void;
  selectedMeals: Record<string, number>;
}

export default function PopularBento({ onAddMeal, onRemoveMeal, selectedMeals }: PopularBentoProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  const getActiveIndex = (mealId: string) => activeImageIndices[mealId] || 0;

  const handlePrevImage = (e: React.MouseEvent, meal: Meal) => {
    e.stopPropagation();
    const currentIndex = getActiveIndex(meal.id);
    const imagesCount = meal.images?.length || 1;
    const newIndex = (currentIndex - 1 + imagesCount) % imagesCount;
    setActiveImageIndices(prev => ({ ...prev, [meal.id]: newIndex }));
  };

  const handleNextImage = (e: React.MouseEvent, meal: Meal) => {
    e.stopPropagation();
    const currentIndex = getActiveIndex(meal.id);
    const imagesCount = meal.images?.length || 1;
    const newIndex = (currentIndex + 1) % imagesCount;
    setActiveImageIndices(prev => ({ ...prev, [meal.id]: newIndex }));
  };

  const handleSelectDot = (e: React.MouseEvent, mealId: string, index: number) => {
    e.stopPropagation();
    setActiveImageIndices(prev => ({ ...prev, [mealId]: index }));
  };

  const filterOptions = [
    "All",
    "High Protein",
    "Vegetarian",
    "Omega-3 Rich",
    "Vegan",
    "Keto Friendly",
    "Low Carb",
  ];

  const filteredMeals = selectedFilter === "All"
    ? MEALS_DATA
    : MEALS_DATA.filter((meal) => meal.badge === selectedFilter);

  // Helper to resolve badge coloring dynamically
  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case "High Protein":
        return "bg-orange-50 text-orange-700 border-orange-100";
      case "Vegetarian":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Omega-3 Rich":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "Vegan":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Keto Friendly":
        return "bg-indigo-50 text-indigo-700 border-indigo-100";
      case "Low Carb":
        return "bg-pink-50 text-pink-700 border-pink-100";
      default:
        return "bg-zinc-100 text-zinc-650 border-zinc-200";
    }
  };

  const totalSelections = Object.values(selectedMeals).reduce((a, b) => a + b, 0);

  return (
    <section id="menu" className="py-[120px] bg-white relative border-t border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-2">
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-gray-950 tracking-tight">
              Chef-Crafted Meals
            </h2>
            <p className="font-sans text-zinc-550 text-sm sm:text-base">
              Chef-prepared, nutritionist-validated meal preps, loaded with organic nutrients and portioned fresh daily.
            </p>
          </div>
          
          {/* Selections Tracker Pill */}
          {totalSelections > 0 && (
            <div className="self-start inline-flex items-center gap-2 bg-emerald-50 border border-emerald-150 text-emerald-800 font-sans font-bold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-xs animate-pulse">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block" />
              Active custom plan has {totalSelections} {totalSelections === 1 ? 'meal' : 'meals'}
            </div>
          )}
        </div>

        {/* Categories/Filters Grid */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-gray-150">
          <div className="flex items-center gap-2 text-zinc-450 shrink-0 mr-2">
            <Filter className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Lifestyles:</span>
          </div>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-sans font-bold text-xs sm:text-sm transition-all shrink-0 cursor-pointer border ${
                selectedFilter === filter
                  ? "bg-emerald-600 text-white border-transparent shadow shadow-emerald-600/15 scale-102"
                  : "bg-white text-zinc-655 border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 6 Grid meal items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMeals.map((meal) => {
            const count = selectedMeals[meal.id] || 0;
            return (
              <div
                key={meal.id}
                className="bg-white rounded-3xl border border-[#dcdcdc] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-emerald-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
              >
                {/* Meal image wrapper */}
                {(() => {
                  const activeIdx = getActiveIndex(meal.id);
                  const currentImage = meal.images?.[activeIdx] || meal.image;
                  return (
                    <div 
                      onClick={(e) => handleNextImage(e, meal)} 
                      className="relative aspect-video w-full overflow-hidden bg-zinc-50 cursor-pointer group/img"
                      title="Click to view next image layout view"
                    >
                      <img
                        src={currentImage}
                        alt={`${meal.name} layout view`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      {/* Left/Right controls (arrows) */}
                      <button
                        type="button"
                        onClick={(e) => handlePrevImage(e, meal)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-white/85 text-zinc-800 hover:bg-white border border-gray-200 shadow-md transition-all active:scale-90 opacity-0 group-hover/img:opacity-100"
                        title="Previous view"
                      >
                        <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleNextImage(e, meal)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-white/85 text-zinc-800 hover:bg-white border border-gray-200 shadow-md transition-all active:scale-90 opacity-0 group-hover/img:opacity-100"
                        title="Next view"
                      >
                        <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>

                      {/* Dots indicator */}
                      {meal.images && meal.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                          {meal.images.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => handleSelectDot(e, meal.id, idx)}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                activeIdx === idx ? "bg-white w-3" : "bg-white/40 hover:bg-white/70"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <span className={`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-md border ${getBadgeStyles(meal.badge)}`}>
                          {meal.badge}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center gap-1 bg-black/75 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-md border border-white/10">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span className="font-mono text-xs font-extrabold text-white">{meal.rating}</span>
                        </div>
                      </div>

                      {count > 0 && (
                        <div className="absolute inset-0 bg-emerald-950/20 backdrop-blur-xs flex items-center justify-center transition-all z-20 pointer-events-none animate-fade-in">
                          <div className="bg-emerald-600 border border-emerald-400 text-white px-5 py-2 rounded-2xl flex items-center gap-2 font-sans font-extrabold text-sm shadow-xl">
                            <Check className="w-4 h-4 stroke-[3]" />
                            Added to Plan ({count})
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Content block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Title */}
                    <div>
                      <h3 className="font-sans font-extrabold text-gray-900 text-xl tracking-tight leading-snug group-hover:text-emerald-600 transition-colors">
                        {meal.name}
                      </h3>
                      {/* Nutrition metrics */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-2.5 font-mono text-xs font-bold">
                        <span className="flex items-center gap-1 bg-gray-50 text-zinc-650 px-2.5 py-1 rounded-lg border border-gray-150">
                          🔥 {meal.calories} kcal
                        </span>
                        <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100">
                          💪 {meal.protein}g Protein
                        </span>
                        <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg border border-amber-100">
                          ₹ {meal.price}
                        </span>
                      </div>
                    </div>

                    {/* Ingredients detail */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold mb-2">
                        <Info className="w-3.5 h-3.5 text-emerald-650" />
                        Includes ingredients:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {meal.ingredients.map((ingredient) => (
                          <span
                            key={ingredient}
                            className="text-xs font-sans font-semibold text-zinc-600 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-150"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add action */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    {count > 0 ? (
                      <div className="flex items-center gap-2 w-full">
                        <button
                          onClick={() => onRemoveMeal(meal.id)}
                          className="w-10 h-10 border border-gray-250 text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-mono font-bold rounded-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                          title="Reduce portion"
                        >
                          -
                        </button>
                        <div className="flex-1 text-center bg-gray-50 border border-gray-205 py-2 rounded-xl text-gray-800 font-mono font-extrabold text-sm">
                          {count} Portion{count > 1 ? 's' : ''}
                        </div>
                        <button
                          onClick={() => onAddMeal(meal)}
                          className="w-10 h-10 bg-emerald-50 border border-emerald-150 text-emerald-700 hover:bg-emerald-100 font-mono font-bold rounded-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                          title="Add extra portion"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddMeal(meal)}
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700 font-sans font-bold text-sm py-3 px-5 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer hover:-translate-y-0.5"
                      >
                        <Plus className="w-4 h-4 stroke-[3]" />
                        Add to Plan
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom global menu text */}
        <div className="text-center mt-12">
          <button
            onClick={() => setSelectedFilter("All")}
            className="inline-flex items-center gap-2 border border-gray-250 text-gray-700 hover:bg-gray-50 font-sans font-bold text-sm py-3.5 px-8 rounded-full transition-all cursor-pointer"
          >
            View Full Menu (53+ Options)
          </button>
        </div>

      </div>
    </section>
  );
}
