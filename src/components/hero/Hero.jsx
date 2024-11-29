import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import hero1 from '../../assets/images/heroimg1.png'
import hero2 from '../../assets/images/heroimg2.jpg'
import hero3 from '../../assets/images/heroimg3.jpg'
import hero4 from '../../assets/images/heroimg4.jpg'

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <main className='w-full bg-primary px-20 py-5 dark:bg-gray-200 max-md:px-5'>
      <div className='container h-[640px] mb-80 max-md:-mb-48 max-[500px]:-mb-72'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-full h-full rounded-2xl max-md:h-[50%] max-md:rounded-md max-[500px]:h-52'
        >
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero1}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero2}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero3}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero4}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero1}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero2}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero3}
            />
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'>
            <img
              className='block w-full h-full rounded-2xl max-md:rounded-md max-[500px]:h-52'
              src={hero4}
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-full h-[300px] mx-auto mt-10 rounded-xl max-md:rounded-md'
        >
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero1}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero2}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero3}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero4}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero1}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero2}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero3}
            />
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center w-52 h-full rounded-xl max-md:h-14 max-md:rounded-md'>
            <img
              className='block w-full h-52 cover rounded-xl max-md:h-14 max-md:rounded-md'
              src={hero4}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  )
}

export default Hero
