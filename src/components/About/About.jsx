import { useEffect, useRef } from "react";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Fresh Products" },
  { value: "15+", label: "Cities Served" },
  { value: "99%", label: "Satisfaction Rate" },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Farm to Doorstep",
    desc: "We source directly from certified organic farms within 100 km of your city — no middlemen, no markup.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same-Day Delivery",
    desc: "Order before 11 AM and receive farm-fresh produce at your home the very same day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      </svg>
    ),
    title: "Quality Guaranteed",
    desc: "Every item passes a strict freshness check. Not happy? We replace or refund, no questions asked.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Local Community",
    desc: "We partner with over 300 local farmers, empowering communities and keeping agriculture sustainable.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove("opacity-0", "translate-y-8");
                el.classList.add("opacity-100", "translate-y-0");
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden mt-10 bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative blobs — smaller on mobile */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-amber-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-orange-100 opacity-40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section label ── */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-3 sm:mb-4"
        >
          <span className="inline-block bg-amber-100 text-amber-600 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 sm:px-5 sm:py-2 rounded-full">
            Who We Are
          </span>
        </div>

        {/* ── Heading ── */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 text-center mb-4 sm:mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Fresh From The{" "}
            <span className="text-amber-500">Farm,</span>
            <br className="hidden xs:block" />
            {" "}Straight To{" "}
            <span className="text-orange-500">Your Table</span>
          </h2>
        </div>

        {/* ── Subtext ── */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed px-2">
            DailyBasket was born from a simple belief — everyone deserves access
            to genuinely fresh, chemical-free produce at honest prices. We
            connect urban households directly with local farmers, cutting out
            every unnecessary step in between.
          </p>
        </div>

        {/* ── Main card ── */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 flex flex-col lg:grid lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl mb-12 sm:mb-20"
        >
          {/* Top / Left: gradient stats panel */}
          <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center p-7 sm:p-10">
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white opacity-10" />
            <div className="absolute bottom-6 left-5 sm:bottom-10 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white opacity-10" />

            <div className="relative z-10 text-center text-white w-full">
              <div className="text-6xl sm:text-8xl mb-3 sm:mb-4 select-none">🧺</div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Est. 2021</p>
              <p className="text-amber-100 text-xs sm:text-sm uppercase tracking-widest">
                Gorakhpur → Your City
              </p>

              {/* Stats grid */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-xs mx-auto sm:max-w-none">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <p className="text-2xl sm:text-3xl font-extrabold">{s.value}</p>
                    <p className="text-xs text-amber-100 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom / Right: story panel */}
          <div className="bg-gray-50 p-7 sm:p-10 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Story</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              It started with a problem our founder faced every morning — the
              local market had wilted spinach, overpriced tomatoes, and zero
              transparency on where the produce came from. So he drove out to
              the farms himself.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              What started as a WhatsApp group with 12 families in Gorakhpur has
              grown into a full-stack delivery platform serving thousands of
              households — powered by technology and rooted in trust.
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                R
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Rahul Sharma</p>
                <p className="text-xs sm:text-sm text-gray-400">Founder & CEO, DailyBasket</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Features grid ── */}
        {/* Mobile: 1 col  |  sm: 2 col  |  lg: 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              data-animate
              className="opacity-0 translate-y-8 transition-all duration-700 group bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-default flex sm:flex-col items-start sm:items-start gap-4 sm:gap-0"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center sm:mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              {/* Text */}
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{f.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 p-7 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-white shadow-xl text-center sm:text-left"
        >
          <div className="flex-1 min-w-0">
            <p className="text-xl sm:text-2xl font-extrabold">Ready to eat fresher?</p>
            <p className="text-amber-100 mt-1 text-sm sm:text-base">
              Join 50,000+ families who've made the switch.
            </p>
          </div>
          <button className="w-full sm:w-auto shrink-0 bg-white text-amber-500 font-bold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 text-sm sm:text-base whitespace-nowrap">
            Get Started Today
          </button>
        </div>

      </div>
    </section>
  );
}