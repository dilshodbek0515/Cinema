import React, { useEffect, useState } from 'react'
import { useGetMovieDetailQuery } from '../../redux/api/movieApi'
import { useParams } from 'react-router-dom'
import Bilet from './bilet/Bilet'
import Filim from './filim/Filim'
import { useTranslation } from 'react-i18next'

const Detail = () => {
  const { id } = useParams()
  const { data } = useGetMovieDetailQuery(id)
  const [component, setComponent] = useState('bilet')
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bg-primary dark:bg-slate-200 w-full'>
      <div className='w-full min-h-screen relative'>
        <img
          className='w-full h-full object-cover bg-no-repeat absolute top-0 left-0'
          src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
          alt='img'
        />
        <div className='relative container py-10 px-20 flex gap-20 max-lg:px-10'>
          <img
            className='w-[500px] h-[600px] rounded-xl bg-cover sticky top-4 max-lg:hidden'
            src={import.meta.env.VITE_IMAGE_URL + data?.poster_path}
            alt='img'
          />
          <div className='flex flex-col gap-10'>
            <h2 className='text-7xl text-white max-2xl:text-2xl max-lg:text-5xl max-sm:text-2xl'>
              {data?.title}
            </h2>
            <p className='text-white text-xl w-[600px] max-2xl:text-lg max-2xl:w-96 max-lg:w-full max-sm:text-sm'>
              {data?.overview}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center bg-primary dark:bg-slate-200 pt-20'>
        <div className='w-96 h-auto flex justify-center items-center gap-2 rounded-xl max-sm:flex-col max-sm:gap-10'>
          <button
            className={`w-[50%] h-14 ${
              component === 'bilet'
                ? 'bg-red text-white'
                : 'bg-[#111111] text-white'
            } rounded-xl`}
            onClick={() => setComponent('bilet')}
          >
            {t('detail.blet')}
          </button>
          <button
            className={`w-[50%] h-14 ${
              component === 'filim'
                ? 'bg-red text-white'
                : 'bg-[#111111] text-white'
            } rounded-xl`}
            onClick={() => setComponent('filim')}
          >
            {t('detail.flim')}
          </button>
        </div>
      </div>
      <div className='container py-10'>
        {component === 'bilet' && <Bilet />}
        {component === 'filim' && <Filim />}
      </div>
    </div>
  )
}

export default Detail
