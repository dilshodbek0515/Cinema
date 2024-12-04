import React from 'react'
import single1 from '../../../assets/images/single1.png'
import single2 from '../../../assets/images/single2.png'
import { RiCoupon3Fill } from 'react-icons/ri'
import Similar from '../similar/Similar'
const Filim = () => {
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
            <h2 className='text-2xl text-white dark:text-primary'>Детали</h2>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Продолжительность</p>
              <span className='text-sm text-navColor'>1ч 34м / 94 минут</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Премьера</p>
              <span className='text-sm text-navColor'>07 марта 2024</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Производство</p>
              <span className='text-sm text-navColor'>США, Китай</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Жанр</p>
              <span className='text-sm text-navColor'>Фэнтези, Комедия</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Режиссер</p>
              <span className='text-sm text-navColor'>
                Майк Митчелл, Стефани Стайн
              </span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Возрастной рейтинг</p>
              <span className='text-sm text-navColor'>6+</span>
            </div>
          </div>
          <hr className='w-full bg-[#2D2D2D] my-10' />
          <div className='w-full flex flex-col gap-6 mt-2'>
            <h2 className='text-2xl text-white dark:text-primary'>В ролях</h2>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Джек Блэк</p>
              <span className='text-sm text-navColor'>Аквафина</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Виола Дэвис</p>
              <span className='text-sm text-navColor'>Дастин Хоффман</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Джеймс Хун</p>
              <span className='text-sm text-navColor'>Брайан Крэнстон</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Иэн Макшейн</p>
              <span className='text-sm text-navColor'>Ке Хюи Куан</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-navColor'>Ронни Чиэн</p>
              <span className='text-sm text-navColor'>Лори Тань Чинн</span>
            </div>
          </div>
          <hr className='w-full bg-[#2D2D2D] my-10' />
          <div className='w-full flex flex-col gap-5'>
            <h2 className='text-2xl text-white dark:text-primary'>Сюжет</h2>
            <p className='text-sm text-navColor w-72'>
              Продолжение приключений легендарного Воина Дракона, его верных
              друзей и наставника (часть вторая)
            </p>
            <button className='w-full h-14 bg-red text-white duration-300 mt-5 flex items-center justify-center gap-3 text-xl rounded-lg hover:bg-transparent hover:text-red hover:border border-red hover:duration-300 dark:bg-slate-50 dark:text-primary dark:hover:text-red'>
              <RiCoupon3Fill /> Купить билет
            </button>
          </div>
        </div>
      </div>
      <Similar />
    </div>
  )
}

export default Filim
