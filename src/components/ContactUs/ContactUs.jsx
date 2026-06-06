import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9 AM – 7 PM",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Email",
    value: "support@dailybasket.in",
    sub: "We reply within 2 hours",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Address",
    value: "12, Civil Lines, Gorakhpur",
    sub: "Uttar Pradesh – 273001",
  },
];

const INITIAL = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactUs() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden mt-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block bg-amber-100 text-amber-600 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            We'd Love To{" "}
            <span className="text-amber-500">Hear</span>{" "}
            From <span className="text-orange-500">You</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question, feedback, or just want to say hello? Drop us a message and our team will get back to you quickly.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">

          {/* Left: contact info + map */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Info cards */}
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{c.label}</p>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">{c.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="flex-1 min-h-40 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="text-4xl">📍</span>
              <p className="font-semibold text-gray-700 text-sm">Find Us On Map</p>
              <p className="text-gray-400 text-xs">12, Civil Lines, Gorakhpur, UP</p>
              <a
                href="https://maps.google.com/?q=Gorakhpur,UP"
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-xs font-semibold text-amber-600 border border-amber-300 px-4 py-1.5 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors duration-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✅</div>
                <h3 className="text-xl font-extrabold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. Our team will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL); }}
                  className="mt-2 text-sm font-semibold text-amber-600 border border-amber-300 px-5 py-2 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">Send a Message</h3>
                <p className="text-gray-400 text-sm mb-4">Fill in the form below and we'll respond promptly.</p>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-200 ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@email.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-200 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm text-gray-800 placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm text-gray-700 outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-200"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order Issue</option>
                      <option value="delivery">Delivery Query</option>
                      <option value="refund">Refund / Return</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-300 resize-none transition-all duration-200 ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 text-sm sm:text-base"
                >
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Social strip ── */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Follow us for daily deals & farm stories</p>
          <div className="flex items-center gap-3">
            {[
              { label: "Instagram", color: "hover:bg-pink-500", icon: "📸" },
              { label: "Facebook", color: "hover:bg-blue-600", icon: "📘" },
              { label: "WhatsApp", color: "hover:bg-green-500", icon: "💬" },
              { label: "Twitter/X", color: "hover:bg-gray-800", icon: "🐦" },
            ].map((s) => (
              <button
                key={s.label}
                title={s.label}
                className={`w-10 h-10 rounded-full bg-gray-100 text-base flex items-center justify-center ${s.color} hover:text-white transition-colors duration-200`}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}