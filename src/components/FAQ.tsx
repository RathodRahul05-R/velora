import { useState } from "react";
import { FAQ_DATA } from "../data";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-[120px] bg-white relative overflow-hidden border-t border-b border-gray-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Common Questions
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-gray-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-zinc-550 text-sm sm:text-base">
            Everything you need to know about our fresh custom meal pickup & delivery service.
          </p>
        </div>

        {/* FAQ Accordion List - clean direct accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_DATA.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.06)] ${
                  isOpen
                    ? "border-emerald-500 bg-emerald-50/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] space-y-3 -translate-y-0.5"
                    : "border-[#dcdcdc] bg-white hover:border-emerald-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                }`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left py-4.5 px-6 flex items-center justify-between gap-4 font-sans font-extrabold text-gray-900 text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className={`w-4.5 h-4.5 shrink-0 ${isOpen ? "text-emerald-600" : "text-zinc-400"}`} />
                    {faq.question}
                  </span>
                  <span className={`p-1 rounded-lg border shrink-0 transition-transform ${
                    isOpen ? "border-emerald-500/20 text-emerald-700 bg-emerald-100/50 rotate-180" : "border-gray-250 text-gray-500 bg-gray-50"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion content dropdown */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1.5 border-t border-gray-100/50 text-left">
                    <p className="font-sans text-zinc-650 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
