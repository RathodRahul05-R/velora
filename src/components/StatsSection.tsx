import React from "react";
import { Star, Leaf, ShoppingBag, Heart } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "50,000+",
      label: "Meals Delivered",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      value: "12,450+",
      label: "Happy Customers",
      icon: <Heart className="w-5 h-5 text-red-500 fill-red-500/10" />,
      color: "bg-red-50 text-red-700 border-red-100"
    },
    {
      value: "4.9★",
      label: "Average Rating",
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
      color: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      value: "100%",
      label: "Organic Ingredients",
      icon: <Leaf className="w-5 h-5 text-lime-600" />,
      color: "bg-lime-50 text-lime-700 border-lime-100"
    }
  ];

  return (
    <section className="bg-white py-[60px] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#dcdcdc] p-5 sm:p-6 text-center shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`mx-auto mb-3.5 w-10 h-10 rounded-xl flex items-center justify-center border ${stat.color} group-hover:scale-105 transition-transform`}>
                {stat.icon}
              </div>
              <p className="font-sans font-black text-3xl sm:text-4xl text-gray-950 tracking-tight">
                {stat.value}
              </p>
              <p className="font-sans font-bold text-xs sm:text-sm text-zinc-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
