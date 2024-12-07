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
      <div className='px-20 h-[700px] rounded-xl max-xl:px-5 max-lg:h-96 max-[400px]:h-52'>
        <img
          className='container h-full bg-cover top-0 left-0 rounded-xl'
          src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
          alt='img'
        />
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
