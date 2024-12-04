import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { useGetMovieSimilarQuery } from '../../../redux/api/movieApi'
import { useParams } from 'react-router-dom'

const Similar = () => {
  const { id } = useParams()
  const { data: images } = useGetMovieSimilarQuery(id)
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
        <div className='w-full h-auto mt-10'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              '@0.50': {
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
              }
            }}
            modules={[Pagination]}
            className='w-full h-[600px] max-lg:h-80 max-md:h-[500px]'
          >
            {images?.backdrops?.slice(0, 10)?.map(image => (
              <SwiperSlide
                key={image.file_path}
                className='w-72 h-full rounded-lg max-lg:w-80'
              >
                <div className='w-full h-full overflow-hidden rounded-lg'>
                  <img
                    className='w-[100%] h-[100%] object-cover rounded-lg max-lg:h-80 hover:scale-110 duration-500 '
                    src={import.meta.env.VITE_IMAGE_URL + image.file_path}
                    alt='img'
                  />
                </div>
                <h2 className='text-2xl text-white mt-5 mb-2 dark:text-black max-2xl:text-lg'>
                  {image.vote_count}
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Similar
