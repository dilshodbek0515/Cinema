import React, { useEffect, useState } from 'react'
import { useGetMovieQuery } from '../../redux/api/movieApi'
import { FaRegWindowClose } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Category from '../../components/category/Category'
import Pagination from '../../components/pagination/Pagination'
const Sessions = () => {
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const [type, setType] = useState(params.get('path') || 'now_playing')
  const [page, setPage] = useState(+params.get('count') || 1)
  const { data } = useGetMovieQuery({ type, params: { page } })

  useEffect(() => {
    if (!params.get('path')) {
      const p = new URLSearchParams(params)
      p.set('path', 'now_playing')
      setParams(p)
      setType('now_playing')
    }
  }, [params])

  const handleChange = (event, value) => {
    setPage(value)
    const p = new URLSearchParams(params)
    p.set('count', value)
    setParams(p)
  }
  return (
    <div className='py-10 flex flex-col gap-5 bg-primary dark:bg-slate-200'>
      <Category
        type={type}
        setType={setType}
        setPage={setPage}
        params={params}
        setParams={setParams}
      />

      <div className='container h-auto px-20 grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-lg:gap-y-10 max-md:grid-cols-2 max-md:px-5 max-sm:grid-cols-1'>
        {data?.results?.map((movie, index) => (
          <div
            key={index}
            className='w-full h-[500px] overflow-hidden rounded-lg max-lg:h-96'
          >
            <img
              onClick={() => navigate(`/movie/${movie.id}`)}
              className='w-[100%] h-[100%] object-cover rounded-lg hover:scale-110 duration-500'
              src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
        ))}
      </div>

      <Pagination data={data} page={page} handleChange={handleChange} />

      {!data?.total_results && (
        <div className='container px-20 h-[300px] flex items-center justify-center flex-col gap-5'>
          <FaRegWindowClose className='text-navColor text-[250px] dark:text-primary' />
          <h2 className='text-navColor text-3xl dark:text-primary max-sm:text-lg'>
            Movie not found
          </h2>
        </div>
      )}
    </div>
  )
}

export default Sessions
