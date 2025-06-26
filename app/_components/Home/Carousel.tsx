"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Doctor Strange",
    description:
      "A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00037263-edrwmekjgf-landscape.jpg",
  },
  {
    id: 2,
    title: "Eternals",
    description:
      "In 5000 BC, ten superpowered Eternals are sent by the Celestials to protect Earth from the Deviants. Phastos, Makkari, Druig, Gilgamesh, and others must reunite to face a new threat.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00122524-ukgnhdqblv-landscape.jpg",
  },
  {
    id: 3,
    title: "Guardians Of The Galaxy",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    image: "https://cdn.europosters.eu/image/hp/69188.jpg",
  },
  {
    id: 4,
    title: "Justice League",
    description:
      "Bruce Wayne is determined to ensure that Superman's ultimate sacrifice was not in vain. Bruce with plans to recruit a team of metahumans.",
    image:
      "https://i.pinimg.com/736x/58/ce/11/58ce11817defaf38cab1edbb61ebecef.jpg",
  },
  {
    id: 5,
    title: "Black Panther",
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
    image:
      "https://img.englishcinemakyiv.com/9FDb3F5lMKlOIT6YAi2zQzAOUFcK5QuEzUql7KQ8WMA/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy8xMjJkYjMyNC1hNmUyLTRlYjUtYjY5OC0xN2NiZmJiZmE1NjguanBn.jpg",
  },
  {
    id: 6,
    title: "Thor: Ragnarok",
    description:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok.",
    image:
      "https://thethirdfloorinc.com/wp-content/uploads/2017/11/Thor_Ragnarok_Promo_Banner.jpg",
  },
];

export default function Carousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3.5}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 8,
              depth: 150,
              modifier: 0.6,
              slideShadows: false,
            },
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 10,
              depth: 200,
              modifier: 0.8,
              slideShadows: true,
            },
          },
          640: {
            slidesPerView: 2,
            spaceBetween: -50,
            coverflowEffect: {
              rotate: 12,
              depth: 250,
              modifier: 0.9,
              slideShadows: true,
            },
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: -100,
            coverflowEffect: {
              rotate: 15,
              depth: 280,
              modifier: 1,
              slideShadows: true,
            },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -150,
            coverflowEffect: {
              rotate: 15,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[350px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl bg-gray-900">
              <img
                src={movie.image}
                alt={movie.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-6 lg:p-8 text-white z-20">
                <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 md:mb-3 drop-shadow-lg">
                  {movie.title}
                </h3>
                <p className="text-sm sm:text-sm md:text-base lg:text-medium text-gray-200 leading-relaxed drop-shadow-md line-clamp-2 md:line-clamp-3">
                  {movie.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
