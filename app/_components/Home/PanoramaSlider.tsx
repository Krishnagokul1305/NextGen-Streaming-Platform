"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

export default function PanoramaSlider() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 flex items-center justify-center px-4 py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 65,
          stretch: 0,
          depth: 250,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-7xl"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="w-[260px] h-[360px] bg-red-50 border flex items-center justify-center"
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={260}
                height={360}
                className="object-cover w-[260px] h-[360px]"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
