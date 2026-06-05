import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 mb-9">
        <Heading highlight="Customer" content="Saying" />

        <div className="flex justify-end py-5 gap-3">
          <button className="custom-prev h-11 w-11 bg-zinc-100 text-2xl text-zinc-800 flex justify-center items-center p-2 rounded-xl hover:bg-gradient-to-r from-orange-400 to-amber-300 hover:text-white transition-all">
            <IoIosArrowBack />
          </button>

          <button className="custom-next h-11 w-11 bg-zinc-100 text-2xl text-zinc-800 flex justify-center items-center p-2 rounded-xl hover:bg-gradient-to-r from-orange-400 to-amber-300 hover:text-white transition-all">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-zinc-100 rounded-2xl p-6 min-h-[260px] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                  />

                  <div>
                    <h3 className="font-bold text-zinc-800 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-zinc-500">{item.role}</p>

                    <div className="flex text-amber-400 mt-1">
                      ★★★★★
                    </div>
                  </div>
                </div>

                <p className="text-zinc-600 mt-5 leading-7 text-[15px]">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    image: Customer1,
    review:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and delivery is incredibly fast. I love the variety of organic products available.",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    image: Customer2,
    review:
      "As a chef, quality ingredients matter the most. FreshBasket consistently delivers premium vegetables, herbs, and pantry staples right to my doorstep.",
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    image: Customer3,
    review:
      "Shopping online with FreshBasket saves me so much time. Everything arrives fresh, well-packed, and exactly as ordered every single time.",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Fitness Coach",
    image: Customer4,
    review:
      "The fruits and vegetables are always fresh and high quality. FreshBasket helps me maintain a healthy lifestyle without wasting time shopping.",
  },
  {
    id: 5,
    name: "Sophia Williams",
    role: "Home Maker",
    image: Customer5,
    review:
      "The website is easy to use, deliveries are punctual, and customer service is excellent. FreshBasket has become my family's favorite grocery platform.",
  },
];