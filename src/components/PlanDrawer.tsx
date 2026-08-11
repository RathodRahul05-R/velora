import { Meal, BillingCycle } from "../types";
import { MEALS_DATA } from "../data";
import { X, Trash2, Calendar, ShieldCheck, ShoppingCart, UserCheck } from "lucide-react";

interface PlanDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMeals: Record<string, number>;
  onAddMeal: (meal: Meal) => void;
  onRemoveMeal: (mealId: string) => void;
  onClearmeals: () => void;
}

export default function PlanDrawer({
  isOpen,
  onClose,
  selectedMeals,
  onAddMeal,
  onRemoveMeal,
  onClearmeals
}: PlanDrawerProps) {
  if (!isOpen) return null;

  // Resolve selected meals with actual full metadata
  const activeSelections = Object.entries(selectedMeals)
    .map(([id, quantity]) => {
      const mealInfo = MEALS_DATA.find((m) => m.id === id);
      return mealInfo ? { meal: mealInfo, qty: quantity } : null;
    })
    .filter(Boolean) as { meal: Meal; qty: number }[];

  const totalPrice = activeSelections.reduce((sum, item) => sum + (item.qty * item.meal.price), 0);
  const totalCalories = activeSelections.reduce((sum, item) => sum + (item.qty * item.meal.calories), 0);
  const totalProtein = activeSelections.reduce((sum, item) => sum + (item.qty * item.meal.protein), 0);

  const handleCheckoutFeedback = () => {
    const notesEl = document.getElementById("delivery-notes") as HTMLTextAreaElement | null;
    const notesText = notesEl?.value || "None";

    const itemsList = activeSelections
      .map((item) => `• ${item.meal.name} x ${item.qty} (₹${item.meal.price * item.qty})`)
      .join("\n");

    const message = `Hi VELORA! I would like to order my custom meal plan:\n\n` +
      `*Selected Bento Meals:*\n${itemsList}\n\n` +
      `*Plan Nutrition Highlights:*\n` +
      `• Total Calories: ${totalCalories} Cal\n` +
      `• Total Protein: ${totalProtein}g\n` +
      `• Est. Weekly Price: ₹${totalPrice}\n\n` +
      `*Delivery Directions:*\n${notesText}\n\n` +
      `Please confirm my order. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919392472134?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Backdrop glass blur */}
        <div 
          onClick={onClose}
          className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xs transition-opacity cursor-pointer" 
        />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
          <div className="pointer-events-auto w-screen max-w-md transform bg-[#fafbfc] border-l border-gray-200 shadow-2xl transition-all duration-300">
            <div className="flex h-full flex-col justify-between overflow-y-auto scrollbar-none pt-4 pb-6">
              
              {/* Drawer Header */}
              <div className="px-6 pb-4 border-b border-gray-150 flex items-center justify-between bg-white">
                <div>
                  <h2 id="slide-over-title" className="font-sans font-black text-xl text-gray-900 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-emerald-600" />
                    My Bento Custom Plan
                  </h2>
                  <p className="font-sans text-xs text-gray-400 mt-0.5 uppercase tracking-wide">
                    Configure your weekly macros
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-1.5 hover:bg-gray-100 text-gray-450 hover:text-gray-800 transition-colors cursor-pointer"
                  title="Close custom plan view"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Drawer Items body */}
              <div className="flex-1 px-6 py-4 overflow-y-auto space-y-5 text-left bg-[#fcfdfc]">
                {activeSelections.length > 0 ? (
                  <>
                    {/* Active Macros overview card */}
                    <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-800">Plan nutrition summaries:</span>
                        <div className="flex gap-4 mt-2">
                          <div className="text-left">
                            <span className="block text-[11px] font-mono text-gray-500">Calories Total</span>
                            <strong className="text-base text-gray-900 font-mono">{totalCalories} Cal</strong>
                          </div>
                          <div className="border-r border-emerald-250" />
                          <div className="text-left">
                            <span className="block text-[11px] font-mono text-gray-500">Protein Total</span>
                            <strong className="text-base text-emerald-705 font-mono">{totalProtein}g</strong>
                          </div>
                        </div>
                      </div>
                      <span className="bg-white px-2.5 py-1.5 rounded-xl border border-emerald-100/55 font-mono font-bold text-xs text-emerald-700 shadow-sm shrink-0">
                        ⭐ Certified
                      </span>
                    </div>

                    {/* Meal cards listings */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                        <span>Selected Bento Meals</span>
                        <span>Quantity Setup</span>
                      </div>

                      {activeSelections.map((item) => (
                        <div
                          key={item.meal.id}
                          className="bg-white rounded-2xl p-3 border border-gray-150 flex gap-3.5 hover:border-emerald-300 transition-colors shadow-xs"
                        >
                          <img
                            src={item.meal.image}
                            alt={item.meal.name}
                            className="w-16 h-16 rounded-xl object-cover border border-gray-100"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 flex flex-col justify-between py-0.5">
                            <div>
                              <div className="flex items-start justify-between">
                                <h4 className="font-sans font-bold text-gray-900 text-sm leading-tight">
                                  {item.meal.name}
                                </h4>
                                <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 text-[9px] font-semibold">
                                  {item.meal.badge}
                                </span>
                              </div>
                              <p className="font-mono text-[11px] text-gray-500 mt-1">
                                {item.meal.calories} kcal • {item.meal.protein}g P • ₹{item.meal.price} ea
                              </p>
                            </div>

                            {/* Portions custom selector inside drawer */}
                            <div className="flex items-center justify-between mt-2.5">
                              <button
                                onClick={() => onRemoveMeal(item.meal.id)}
                                className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-1.5 rounded-lg transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => onRemoveMeal(item.meal.id)}
                                  className="w-7 h-7 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xs transition-transform active:scale-95 cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="font-mono font-extrabold text-sm text-gray-800 w-4 text-center">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => onAddMeal(item.meal)}
                                  className="w-7 h-7 bg-emerald-50 border border-emerald-150 text-emerald-800 hover:bg-emerald-100 rounded-lg flex items-center justify-center font-bold text-xs transition-transform active:scale-95 cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional preferences block */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <label htmlFor="delivery-notes" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        📦 Delivery directions:
                      </label>
                      <textarea
                        id="delivery-notes"
                        rows={2}
                        placeholder="E.g., Please leave on the front patio table, ring doorbell..."
                        className="w-full bg-white border border-gray-200 rounded-xl p-2.5 font-sans text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </>
                ) : (
                  <div className="h-[300px] flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 bg-white border border-dashed border-gray-250 rounded-full flex items-center justify-center text-gray-300">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-gray-800 text-base">Your bento plan is empty</h4>
                      <p className="font-sans text-xs text-gray-400 max-w-[240px] mt-1 leading-relaxed">
                        Scroll through our menu selection and tap "Add to Plan" to curate custom calorie targets!
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer footer controls */}
              <div className="px-6 pt-4 border-t border-gray-150 space-y-4 bg-white">
                {activeSelections.length > 0 && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-xs text-gray-400 font-sans">Estimated Subtotal</span>
                        <strong className="text-xl text-gray-900 font-mono tracking-tight">₹{totalPrice.toLocaleString("en-IN")}</strong>
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl font-sans font-bold text-xs border border-emerald-100">
                        Promo Active ✓
                      </span>
                    </div>

                    <button
                      onClick={handleCheckoutFeedback}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-97 text-white font-sans font-bold py-3.5 rounded-2xl text-center shadow-lg shadow-emerald-600/10 cursor-pointer flex items-center justify-center gap-2 text-sm"
                    >
                      <UserCheck className="w-4.5 h-4.5 stroke-[2.5]" />
                      Order via WhatsApp (₹{totalPrice.toLocaleString("en-IN")})
                    </button>
                    
                    <button
                      onClick={() => {
                        if(confirm("Confirm: Clear all bento custom selections?")) onClearmeals();
                      }}
                      className="w-full text-center text-xs font-semibold text-gray-400 hover:text-rose-500 transition-colors cursor-pointer py-1"
                    >
                      Clear Selections
                    </button>
                  </>
                )}
                
                <p className="font-sans text-[10px] text-gray-400 text-center leading-relaxed">
                  * Safe checkout secured by order transmission. By completing your activation, you agree to our 100% Organic Delivery Guidelines.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
