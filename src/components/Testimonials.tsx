import { REVIEWS_DATA } from "../data";
import { Star, MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-[120px] bg-slate-50 relative overflow-hidden border-b border-gray-150">
      {/* Aesthetic abstract backgrounds */}
      <div className="absolute top-20 left-12 w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-[140px] pointer-events-none -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header content with Rating */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-5 h-5 text-amber-500 fill-amber-500" />
            ))}
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-gray-950 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="font-sans text-emerald-800 font-extrabold text-xs tracking-widest uppercase bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
            ⭐ 4.9/5 Average rating across 12,450+ verified subscriptions
          </p>
        </div>

        {/* Minimalist Grid of Highlight Metrics requested above testimonial cards */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl mx-auto mb-14 text-center border border-[#dcdcdc] bg-white rounded-2xl p-5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] relative z-10">
          <div className="border-r border-gray-100 last:border-none py-1">
            <p className="font-sans font-black text-lg sm:text-2xl text-emerald-600">12,450+</p>
            <p className="font-sans text-[9px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Happy Customers</p>
          </div>
          <div className="border-r border-gray-100 last:border-none py-1">
            <p className="font-sans font-black text-lg sm:text-2xl text-amber-500">4.9/5</p>
            <p className="font-sans text-[9px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Average Rating</p>
          </div>
          <div className="border-r border-gray-150 last:border-none py-1">
            <p className="font-sans font-black text-lg sm:text-2xl text-emerald-800">50,000+</p>
            <p className="font-sans text-[9px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Meals Delivered</p>
          </div>
        </div>

        {/* 3 cards review structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border border-[#dcdcdc] p-7 text-left relative overflow-hidden hover:border-emerald-250 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-305 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
            >
              
              {/* Decorative Quote Mark */}
              <div className="absolute -top-3 -right-3 text-emerald-500/5 select-none">
                <MessageSquareQuote className="w-20 h-20 rotate-180" />
              </div>

              {/* Verified text */}
              <div className="space-y-4 relative z-10">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                <blockquote className="font-sans font-medium text-zinc-650 text-sm sm:text-base leading-relaxed italic">
                  "{review.text}"
                </blockquote>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-gray-100 z-10">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-11 h-11 rounded-full object-cover border border-gray-150 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-extrabold text-gray-900 text-sm">
                    {review.author}
                  </h4>
                  <p className="font-sans text-[11px] font-bold text-emerald-700 tracking-wide mt-0.5 uppercase">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Extra social stats banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-600/10 text-left">
          <div className="space-y-1">
            <h3 className="font-sans font-bold text-xl">Are you motivated to feel active & healthy?</h3>
            <p className="font-sans text-xs text-emerald-100 leading-normal">Our customer success advisors are ready to consult your personalized macro targets via WhatsApp.</p>
          </div>
          <button 
            type="button"
            className="bg-white text-emerald-900 font-sans font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shrink-0 cursor-pointer hover:bg-emerald-50 active:scale-97 transition-all"
            onClick={() => {
              const el = document.getElementById("menu");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Claim 20% Discount Code
          </button>
        </div>

      </div>
    </section>
  );
}
