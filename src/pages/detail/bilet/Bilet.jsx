import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RiVipCrown2Fill } from 'react-icons/ri'

const Bilet = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full px-20 h-auto py-32 bg-primary dark:bg-slate-200 max-xl:px-10'>
      <div className='container w-full h-full flex flex-col items-center gap-20'>
        <div className='w-full h-24 flex flex-col gap-5'>
          <h3 className='text-xl text-white dark:text-primary'>
            {t('bilet.month')}
          </h3>
          <div className='month w-full flex-1 min-h-full flex gap-5 overflow-auto'>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week1')}</span> 1
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week2')}</span> 2
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week3')}</span> 3
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week4')}</span> 4
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week5')}</span> 5
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week6')}</span> 6
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week7')}</span> 7
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week8')}</span> 8
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week9')}</span> 9
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week10')}</span> 10
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week11')}</span> 11
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week12')}</span> 12
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week13')}</span> 13
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week14')}</span> 14
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week15')}</span> 15
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week16')}</span> 16
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week17')}</span> 17
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week18')}</span> 18
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week19')}</span> 19
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week20')}</span> 20
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week21')}</span> 21
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week22')}</span> 22
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week23')}</span> 23
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week24')}</span> 24
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week25')}</span> 25
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week26')}</span> 26
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week27')}</span> 27
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week28')}</span> 28
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week29')}</span> 29
            </button>
            <button className='min-w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center flex-col text-white border border-red dark:bg-slate-50 dark:text-primary dark:border-transparent'>
              <span>{t('bilet.week30')}</span> 30
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-xl text-white dark:text-primary'>Cinematica</h3>
          <span className='text-md text-navColor'>{t('bilet.district')}</span>
          <div className='w-full grid grid-cols-6 gap-10 mt-5 max-[1500px]:gap-44 max-[1500px]:grid-cols-4 max-2xl:gap-10 max-xl:gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal1')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                11:45
                <span className='flex items-center gap-2'>
                  VIP <RiVipCrown2Fill className='text-red text-xl' />
                </span>
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                3D <span>100 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal2')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                13:00
                <span className='flex items-center gap-2'>
                  VIP <RiVipCrown2Fill className='text-red text-xl' />
                </span>
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>75 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal3')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                16:25
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                3D <span>65 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal4')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                19:30
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>65 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal5')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                21:00
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>75 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal6')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                22:30
                <span className='flex items-center gap-2'>
                  VIP <RiVipCrown2Fill className='text-red text-xl' />
                </span>
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>75 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal7')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                23:45
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>80 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal8')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                00:20
                <span className='flex items-center gap-2'>
                  VIP <RiVipCrown2Fill className='text-red text-xl' />
                </span>
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>100 000 {t('bilet.sum')}</span>
              </div>
            </div>
          </div>
        </div>
        <hr className='bg-[#2D2D2D] w-full' />
        <div className='flex flex-col gap-3'>
          <h3 className='text-xl text-white dark:text-primary'>Magic Cinema</h3>
          <span className='text-md text-navColor'>
            174/12, Улица Бабура, Чиланзарский район
          </span>
          <div className='w-full grid grid-cols-6 gap-10 mt-5 max-[1500px]:gap-44 max-[1500px]:grid-cols-4 max-2xl:gap-10 max-xl:gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal1')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                11:45
                <span className='flex items-center gap-2'>
                  VIP <RiVipCrown2Fill className='text-red text-xl' />
                </span>
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                3D <span>100 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal2')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                13:00
                <span className='flex items-center gap-2'>
                  VIP <RiVipCrown2Fill className='text-red text-xl' />
                </span>
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>75 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal3')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                16:25
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                3D <span>65 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal4')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                19:30
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>65 000 {t('bilet.sum')}</span>
              </div>
            </div>
            <div className='w-48 h-32 gap-2 rounded-xl pt-4 flex flex-col bg-[#111111] dark:bg-slate-50'>
              <p className='text-sm text-gray-300 px-4 dark:text-primary'>
                {t('bilet.zal5')}
              </p>
              <div className='flex justify-between px-4 text-white text-lg dark:text-primary'>
                21:00
              </div>
              <div className='w-full h-8 bg-[#2D2D2D] mt-4 rounded-bl-xl rounded-br-xl px-4 text-lg flex justify-between text-navColor'>
                2D <span>75 000 {t('bilet.sum')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bilet
