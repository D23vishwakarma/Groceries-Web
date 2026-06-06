import React from 'react'
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-[1400px] mx-auto px-8 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left: Brand */}
          <div className="max-w-[220px]">
            <h2 className="text-2xl font-bold text-zinc-800 mb-3">Daily<span className="text-amber-500">B</span>ascket
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Bred for a high content of beneficial substances. Our products are all fresh and healthy.
            </p>
            <p className="text-sm text-gray-500">2025 © All Right Reserved</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold text-zinc-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">FAQ's</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-bold text-zinc-800 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Support center</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Feedback</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="max-w-[220px]">
            <h3 className="text-base font-bold text-zinc-800 mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-500 mb-4">Questions or Feedback? we'd love to hear from you.</p>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2.5 text-sm text-gray-600 outline-none bg-transparent placeholder-gray-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 transition-colors px-3 py-3 flex items-center justify-center">
                <IoSend size={16} color="white" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer