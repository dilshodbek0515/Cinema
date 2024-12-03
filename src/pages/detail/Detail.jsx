import React from 'react'
import { useGetMovieDetailQuery } from '../../redux/api/movieApi'
import { useParams } from 'react-router-dom'
const Detail = () => {
  const { id } = useParams()
  const { data } = useGetMovieDetailQuery(id)
  return (
    <>
      <div className='w-full min-h-screen relative'>
        <img
          className='w-full h-full object-cover bg-no-repeat absolute top-0 left-0'
          src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
          alt='img'
        />
        <div className='relative container py-10 px-20 flex gap-20'>
          <img
            className='w-[500px] h-[600px] rounded-xl bg-cover sticky top-4'
            src={import.meta.env.VITE_IMAGE_URL + data?.poster_path}
            alt=''
          />
          <div className='flex flex-col gap-10'>
            <h2 className='text-7xl text-white'>{data?.title}</h2>
            <p className='text-white text-xl w-[600px]'>{data?.overview}</p>
          </div>
        </div>
      </div>

      <div className='w-full px-20 h-auto py-32 bg-primary'>
        <div className='container w-full h-full border border-white flex flex-col items-center'>
          <div className='w-96 h-auto flex justify-center items-center gap-2  rounded-xl'>
            <button className='w-[50%] h-14 bg-[#111111] text-white rounded-xl hover:text-red'>
              Билеты
            </button>
            <button className='w-[50%] h-14 bg-[#111111] text-white rounded-xl hover:text-red'>
              О фильме
            </button>
          </div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </div>
      </div>
    </>
  )
}

export default Detail
