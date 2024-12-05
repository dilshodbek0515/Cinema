import React from 'react'
import { Pagination as SwiperPagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink, useNavigate } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
const Reels = ({ data }) => {
  const naviagate = useNavigate()

  return (
    <section className='w-full bg-primary h-auto pb-10 mt-24 dark:bg-gray-200 max-md:pb-5'>
      <div className='container h-auto p-5 flex flex-col gap-5'>
        <div className='flex justify-between'>
          <p className='text-2xl text-white dark:text-black max-sm:text-sm'>
            На неделе
          </p>
          <NavLink
            to={'/sessions'}
            className='text-2xl text-red max-sm:text-sm'
          >
            Показать все
          </NavLink>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 5
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 5
              },
              '@1.0': {
                slidesPerView: 3,
                spaceBetween: 10
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 20
              },
              '@1.70': {
                slidesPerView: 5,
                spaceBetween: 50
              }
            }}
            modules={[SwiperPagination]}
            className='w-full h-auto max-md:h-[500px]'
          >
            {data?.results?.map((movie, index) => (
              <SwiperSlide
                key={index}
                className='w-72 h-[500px] rounded-lg max-lg:w-80'
              >
                <div className='w-full h-[400px] overflow-hidden rounded-lg'>
                  <img
                    onClick={() => naviagate(`/movie/${movie.id}`)}
                    className='w-[100%] h-[100%] object-cover rounded-lg max-lg:h-80 hover:scale-110 duration-500 '
                    src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                    alt={movie.title}
                  />
                </div>
                <h2 className='text-2xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                  {movie.title}
                </h2>
                <p className='text-sm text-gray-300 dark:text-black max-lg:text-[12px]'>
                  {movie.vote_average}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reels
