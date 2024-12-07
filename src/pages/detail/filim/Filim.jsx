import React, { useEffect } from 'react'
import single1 from '../../../assets/images/single1.png'
import single2 from '../../../assets/images/single2.png'
import { RiCoupon3Fill } from 'react-icons/ri'
import Similar from '../similar/Similar'
import { useParams } from 'react-router-dom'
import { useGetMovieDetailQuery } from '../../../redux/api/movieApi'
import { useTranslation } from 'react-i18next'
const Filim = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { t } = useTranslation()
  const { id } = useParams()
  const { data } = useGetMovieDetailQuery(id)
  return (
    <div className='flex flex-col gap-20'>
      <div className='container px-10 flex items-center justify-center'>
        <div className='w-96 h-auto flex flex-col'>
          <div className='w-full flex justify-around'>
            <div className='text-2xl text-white flex items-center dark:text-primary'>
              6.6
              <img src={single1} alt='img' />
            </div>
            <div className='text-2xl text-white flex items-center dark:text-primary'>
              6.8
              <img src={single2} alt='img' />
            </div>
          </div>
          <div className='w-full flex flex-col gap-6 mt-14'>
            <h2 className='text-2xl text-white dark:text-primary'>
              {t('filim.detail')}
            </h2>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.time')}</p>
              <span className='text-sm text-navColor'>1ч 34м / 94 минут</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.new')}</p>
              <span className='text-sm text-navColor'>
                {data?.release_date}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.pop')}</p>
              <span className='text-sm text-navColor'>
                {data?.origin_country}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.janre')}</p>
              <span className='text-sm text-navColor'>{data?.status}</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.rejissor')}</p>
              <span className='text-sm text-navColor'>
                {data?.original_title}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.reting')}</p>
              <span className='text-sm text-navColor'>{data?.runtime}</span>
            </div>
          </div>
          <hr className='w-full bg-[#2D2D2D] my-10' />
          <div className='w-full flex flex-col gap-6 mt-2'>
            <h2 className='text-2xl text-white dark:text-primary'>В ролях</h2>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.user1')}</p>
              <span className='text-sm text-navColor'>
                {t('filim.user1.1')}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.user2')}</p>
              <span className='text-sm text-navColor'>
                {t('filim.user1.2')}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.user3')}</p>
              <span className='text-sm text-navColor'>
                {t('filim.user1.3')}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.user4')}</p>
              <span className='text-sm text-navColor'>
                {t('filim.user1.4')}
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>{t('filim.user5')}</p>
              <span className='text-sm text-navColor'>
                {t('filim.user1.5')}
              </span>
            </div>
          </div>
          <hr className='w-full bg-[#2D2D2D] my-10' />
          <div className='w-full flex flex-col gap-5'>
            <h2 className='text-2xl text-white dark:text-primary'>
              {t('filim.plot')}
            </h2>
            <p className='text-sm text-navColor w-72'>{t('filim.plot_desc')}</p>
            <button className='w-full h-14 bg-red text-white duration-300 mt-5 flex items-center justify-center gap-3 text-xl rounded-lg hover:bg-transparent hover:text-red hover:border border-red hover:duration-300 dark:bg-slate-50 dark:text-primary dark:hover:text-red'>
              <RiCoupon3Fill /> {t('filim.plot_btn')}
            </button>
          </div>
        </div>
      </div>
      <Similar />
    </div>
  )
}

export default Filim
