import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RiMenuFold2Fill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    const [showmenu, setShowmenu] = useState(false);
    const togglemenu = () => {
        setShowmenu(!showmenu);
    }
    const [isscrolled, setIsscrolled] = useState(false);
    useEffect(() => {
        const handlescroll = () => {
            setIsscrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handlescroll);
    }, [])
    return (
        <>
            <header className={`fixed top-0 right-0 left-0 z-50 ${isscrolled ? 'bg-white/90 backdrop-blur-md drop-shadow-lg' : ''}`}>
                <nav className=' flex justify-between items-center py-4 pt-5 md:pt-5 max-w-[1400px] mx-auto px-8 md:px-10'>
                    <div className="text-3xl md:text-3xl font-bold">
                        <Link to="/">
                            Daily<span className="text-amber-500">B</span>asket
                        </Link>
                    </div>
                    <ul className="hidden md:flex">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 font-semibold tracking-wider ${isActive ? "text-amber-500" : "text-zinc-800 hover:text-amber-500"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `px-3 font-semibold tracking-wider ${isActive ? "text-amber-500" : "text-zinc-800 hover:text-amber-500"
                                    }`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/process"
                                className={({ isActive }) =>
                                    `px-3 font-semibold tracking-wider ${isActive ? "text-amber-500" : "text-zinc-800 hover:text-amber-500"
                                    }`
                                }
                            >
                                Process
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `px-3 font-semibold tracking-wider ${isActive ? "text-amber-500" : "text-zinc-800 hover:text-amber-500"
                                    }`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center gap-3">

                        {/* Search Bar */}
                        <div className="md:flex items-center overflow-hidden rounded-full bg-white shadow-md border border-amber-300 hidden">
                            <input
                                type="text"
                                placeholder="Search Items"
                                className="px-4 py-3 w-56 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
                            />

                            <button className="px-4 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:from-orange-600 hover:to-amber-500 transition-all">
                                <FaSearch className="text-sm" />
                            </button>
                        </div>

                        {/* Wishlist */}
                        <a
                            href="#"
                            className="p-1 md:p-2 rounded-full bg-white shadow text-zinc-700 hover:text-red-500 hover:scale-110 transition-all"
                        >
                            <GoHeartFill className="text-xl" />
                        </a>

                        {/* Cart */}
                        <a
                            href="#"
                            className="p-1 md:p-2 rounded-full bg-white shadow text-zinc-700 hover:text-green-600 hover:scale-110 transition-all"
                        >
                            <HiShoppingBag className="text-xl" />
                        </a>
                        {/* hampburger */}
                        <button
                            href="#" onClick={togglemenu}
                            className="p-1 md:p-2 rounded-full bg-white shadow text-zinc-800 hover:text-amber-500 hover:scale-110 transition-all md:hidden"
                        >
                            {showmenu ? <RiMenuFold2Fill /> : <FiMenu className="text-xl" />}
                        </button>

                    </div>
                    {/* mobile nav */}
                    <ul
                        className={`max-w-full rounded-2xl flex flex-col md:hidden p-10 absolute top-20 -left-full -translate-x-1/2 transition-all duration-300 ${showmenu ? "left-1/2" : ""
                            } bg-amber-300/10 backdrop-blur-xl gap-y-10 items-center`}
                    >
                        <li>
                            <NavLink
                                to="/"
                                className="px-2 font-semibold tracking-wider text-zinc-800 hover:text-amber-500"
                                onClick={togglemenu}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className="px-2 font-semibold tracking-wider text-zinc-800 hover:text-amber-500"
                                onClick={togglemenu}
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/process"
                                className="px-2 font-semibold tracking-wider text-zinc-800 hover:text-amber-500"
                                onClick={togglemenu}
                            >
                                Process
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className="px-2 font-semibold tracking-wider text-zinc-800 hover:text-amber-500"
                                onClick={togglemenu}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                        {/* Search Bar */}
                        <li className="flex items-center overflow-hidden rounded-full bg-amber-50 shadow-md border border-amber-300 md:hidden">
                            <input
                                type="text"
                                placeholder="Search Items"
                                className="px-4 py-3 w-46 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
                            />

                            <button className="px-4 py-4 bg-gradient-to-r from-orange-500 to-amber-200 text-white hover:from-orange-400 hover:to-amber-500 transition-all">
                                <FaSearch className="text-sm" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
