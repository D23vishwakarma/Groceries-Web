const steps = [
  {
    number: "01",
    emoji: "📋",
    title: "Browse & Select",
    desc: "Explore our wide range of farm-fresh fruits, vegetables, dairy, and daily essentials. Filter by category, price, or organic certification.",
    color: "from-amber-400 to-yellow-400",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
  },
  {
    number: "02",
    emoji: "🛒",
    title: "Add to Cart",
    desc: "Add your favourite items to the cart. Choose your preferred quantity and check real-time stock availability before you checkout.",
    color: "from-orange-400 to-amber-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
  },
  {
    number: "03",
    emoji: "💳",
    title: "Secure Checkout",
    desc: "Pay safely via UPI, card, net banking, or cash on delivery. Your data is encrypted end-to-end — we never store card details.",
    color: "from-orange-500 to-orange-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-500",
  },
  {
    number: "04",
    emoji: "🚚",
    title: "Fast Delivery",
    desc: "Our delivery partners pick directly from partner farms and reach your doorstep within hours — fresh, packed, and on time.",
    color: "from-green-400 to-emerald-400",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
  },
];

const faqs = [
  {
    q: "How fresh are the products?",
    a: "All produce is harvested within 24 hours of delivery. We partner with farms that follow organic practices and do not use artificial ripening agents.",
  },
  {
    q: "What if I'm not satisfied with my order?",
    a: "We offer a no-questions-asked replacement or full refund within 24 hours of delivery if you're unhappy with the freshness or quality.",
  },
  {
    q: "Is there a minimum order value?",
    a: "Yes, the minimum order is ₹199. Orders above ₹499 get free delivery. Below that, a flat ₹29 delivery fee applies.",
  },
  {
    q: "Can I schedule a delivery time?",
    a: "Absolutely! During checkout you can pick a preferred delivery slot — morning, afternoon, or evening — for your convenience.",
  },
];

import { useState } from "react";

export default function Processes() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      id="process"
      className="bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden mt-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-amber-100 text-amber-600 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Fresh Groceries in{" "}
            <span className="text-amber-500">4 Simple</span>{" "}
            <span className="text-orange-500">Steps</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From farm to your kitchen — we've made it as effortless as possible.
          </p>
        </div>

        {/* ── Steps ── */}
        {/* Desktop: horizontal timeline | Mobile: vertical stack */}
        <div className="relative">

          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-300 via-orange-300 to-green-300 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-row sm:flex-col items-start sm:items-center gap-4 sm:gap-0"
              >
                {/* Mobile left connector */}
                <div className="flex flex-col items-center sm:hidden pt-1">
                  <div className={`w-12 h-12 shrink-0 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}>
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[3rem] bg-gradient-to-b from-amber-300 to-orange-200 mt-2" />
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 sm:w-full ${step.bg} border ${step.border} rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow duration-300`}>
                  {/* Number badge — desktop */}
                  <div className={`hidden sm:flex w-12 h-12 rounded-full bg-gradient-to-br ${step.color} items-center justify-center text-white font-extrabold text-sm shadow-md mx-auto mb-4`}>
                    {step.number}
                  </div>

                  {/* Emoji */}
                  <div className="text-3xl sm:text-4xl sm:text-center mb-3">{step.emoji}</div>

                  <h3 className={`font-bold text-base sm:text-center sm:text-lg text-gray-900 mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed sm:text-center">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why choose us strip ── */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: "🌿", label: "100% Organic" },
            { icon: "⚡", label: "Same-Day Delivery" },
            { icon: "🔒", label: "Secure Payments" },
            { icon: "♻️", label: "Eco Packaging" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl py-5 px-3 hover:border-amber-200 hover:bg-amber-50 transition-colors duration-300"
            >
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="text-gray-700 font-semibold text-xs sm:text-sm text-center">{item.label}</span>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Got Questions?
            </h3>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-amber-50 transition-colors duration-200 text-left"
                >
                  <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${openFaq === i ? "bg-orange-500 rotate-45" : "bg-amber-400"}`}>
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}
                >
                  <p className="px-5 pb-4 pt-1 text-gray-500 text-sm leading-relaxed bg-white">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 p-7 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-white shadow-xl text-center sm:text-left">
          <div className="flex-1 min-w-0">
            <p className="text-xl sm:text-2xl font-extrabold">Start your first order today</p>
            <p className="text-amber-100 mt-1 text-sm sm:text-base">
              Free delivery on your first basket — no coupon needed.
            </p>
          </div>
          <button className="w-full sm:w-auto shrink-0 bg-white text-amber-500 font-bold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 text-sm sm:text-base whitespace-nowrap">
            Order Now
          </button>
        </div>

      </div>
    </section>
  );
}