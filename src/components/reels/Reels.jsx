import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const Reels = () => {
  return (
    <section className='w-full bg-primary h-auto pb-20 dark:bg-gray-200 max-md:pb-5'>
      <div className='container h-auto p-5 flex flex-col gap-5'>
        <div className='flex justify-between'>
          <p className='text-2xl text-white dark:text-black max-sm:text-sm'>
            На неделе
          </p>
          <p className='text-2xl text-red max-sm:text-sm'>Показать все</p>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 15
              },
              '@1.0': {
                slidesPerView: 3,
                spaceBetween: 20
              },
              '@1.70': {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }}
            modules={[Pagination]}
            className='w-full h-[600px] max-md:h-[500px]'
          >
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Kung Fu Panda 4 ENGLISH
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Комедия, Фэнтези
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Dune 2 – EN
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Фантастика, Боевик
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Дюна – RU
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Фантастика, Боевик
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Kung Fu Panda 4 RUSSIAN
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Комедия, Фэнтези
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Kung Fu Panda 4 ENGLISH
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Комедия, Фэнтези
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Dune 2 – EN
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Фантастика, Боевик
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Дюна – RU
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Дюна – RU
              </p>
            </SwiperSlide>
            <SwiperSlide className='w-72 h-[500px] rounded-lg max-lg:w-80'>
              <div className='w-full h-[450px] bg-card_bg rounded-lg dark:bg-gray-50 max-lg:h-80'></div>
              <h2 className='text-3xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                Kung Fu Panda 4 RUSSIAN
              </h2>
              <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                Комедия, Фэнтези
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reels
