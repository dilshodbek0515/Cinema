import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useGetMovieQuery } from '../../redux/api/movieApi'
import { MOVIE_LISTS } from '../../static'
import MuiPagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { FaPlay } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import Reels from '../reels/reels'
const Hero = () => {
  const [params, setParams] = useSearchParams()
  const [type, setType] = useState(params.get('path') || 'now_playing')
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [page, setPage] = useState(params.get('count') || 1)
  const [activeType, setActiveType] = useState('now_playing')
  const { data } = useGetMovieQuery({ type, params: { page } })

  useEffect(() => {
    if (!params.get('path')) {
      setType('now_playing')
    }
  }, [params.get('path')])

  const handleChange = (event, value) => {
    setPage(value)
    const p = new URLSearchParams(params)
    p.set('count', value)
    setParams(p)
  }

  const handleChangeType = path => {
    setType(path)
    setActiveType(path)
    setPage(1)
    setParams({ path, count: 1 })
  }

  return (
    <main className='w-full h-auto flex flex-col bg-primary px-20 py-5 pb-20 dark:bg-gray-200 max-md:px-5 max-sm:px-4'>
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

      <div className='container h-auto'>
        <Swiper
          loop={true}
          spaceBetween={10}
          // navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-full h-[640px] rounded-2xl max-md:h-[50%] max-md:rounded-md max-[500px]:h-52'
        >
          {data?.results?.map(movie => (
            <SwiperSlide
              key={movie.id}
              className='flex items-center justify-center rounded-2xl max-md:rounded-md'
            >
              <div className='relative w-full h-full'>
                <img
                  className='w-full h-full object-cover'
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  alt=''
                />
                <div className='absolute z-10 left-[50%] translate-x-[-50%] bottom-8 flex gap-10 items-center justify-center flex-col'>
                  <h3 className='text-4xl text-white font-medium max-sm:text-xl'>
                    {movie.title}
                  </h3>
                  <div>
                    <p className='text-xl text-white'>{movie.release_date}</p>
                  </div>
                  <button className='w-96 h-16 flex gap-3 items-center justify-center rounded-xl duration-500 bg-white text-primary hover:bg-transparent hover:border border-white hover:text-white hover:duration-500 max-sm:w-full px-20 max-sm:h-10'>
                    <FaPlay className='text-2xl' /> Смотреть
                  </button>
                </div>
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
                  className='w-full h-full object-cover rounded-xl max-md:h-12 max-md:rounded-md max-[400px]:h-[40px]'
                  src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                  width={300}
                  alt={movie.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Reels data={data}/>

        <Stack className='flex items-center justify-center w-full'>
          <MuiPagination
            className='max-w-96 h-10 py-1 rounded-lg bg-slate-900 dark:bg-slate-300'
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
