import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useGetMovieQuery } from '../../redux/api/movieApi'
import { MOVIE_LISTS } from '../../static'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Hero = () => {
  const [type, setType] = useState('now_playing')
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [page, setPage] = useState(1)
  const [activeType, setActiveType] = useState('now_playing')
  const { data } = useGetMovieQuery({ type, params: { page } })

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handleChangeType = path => {
    setType(path)
    setActiveType(path)
    setPage(1)
  }

  return (
    <main className='w-full flex flex-col bg-primary px-20 py-5 pb-20 dark:bg-gray-200 max-md:px-5 max-sm:px-4'>
      <div className='w-full h-20 p-5 flex gap-10 container max-lg:gap-5 max-sm:px-2 max-sm:gap-2'>
        {MOVIE_LISTS?.map(item => (
          <button
            key={item.id}
            onClick={() => handleChangeType(item.path)}
            className={`
              text-xl px-5 pt-2 pb-4 break-words bg-card_bg rounded-lg
               dark:bg-slate-50 dark:text-primary
                max-lg:text-lg max-md:text-sm max-sm:text-[10px] max-sm:w-28 max-sm:px-1 max-sm:py-2 max-sm:h-8 max-sm:rounded-md 
                 ${activeType === item.path ? 'text-red' : 'text-navColor'}`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className='container h-[640px] mb-32 max-md:-mb-48 max-[500px]:-mb-72'>
        <Swiper
          loop={true}
          spaceBetween={10}
          // navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-full h-full rounded-2xl max-md:h-[50%] max-md:rounded-md max-[500px]:h-52'
        >
          {data?.results?.map(movie => (
            <SwiperSlide
              key={movie.id}
              className='flex items-center justify-center rounded-2xl max-md:rounded-md max-[500px]:h-52'
            >
              <div className='w-full h-full'>
                <img
                  className='w-full h-full'
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  width={300}
                  alt={movie.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-[700px] h-[100px] mx-auto mt-10 rounded-xl
           max-lg:w-[500px] max-md:rounded-md max-md:w-[350px] max-md:h-12 max-[400px]:w-[250px] max-[400px]:h-[40px]'
        >
          {data?.results?.map(movie => (
            <SwiperSlide
              key={movie.id}
              className='flex items-center justify-center rounded-2xl max-md:rounded-md max-md:h-16 '
            >
              <div className='w-full h-full'>
                <img
                  className='w-full h-full rounded-xl max-md:h-12 max-md:rounded-md max-[400px]:h-[40px]'
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  width={300}
                  alt={movie.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Stack className='flex items-center justify-center mt-8 w-full'>
          <Pagination
            className='max-w-96 py-3 rounded-lg'
            count={data?.total_pages > 500 ? 500 : data?.total_pages}
            variant='outlined'
            color='primary'
            page={page}
            onChange={handleChange}
            sx={{
              '& .MuiPagination-ul': {
                '& .MuiPaginationItem-root': {
                  color: 'white',
                  '@media (max-width: 400px)': {
                    fontSize: '10px',
                    padding: '2px',
                    minWidth: '20px',
                    height: '20px'
                  }
                }
              }
            }}
          />
        </Stack>
      </div>
    </main>
  )
}

export default Hero
