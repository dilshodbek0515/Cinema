import React, { useState } from 'react'
import { useGetMovieDiscoverQuery } from '../../redux/api/movieApi'
import { useGetGenreQuery } from '../../redux/api/genreApi'
import { FaRegWindowClose } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Sessions = () => {
  const navigate = useNavigate()
  const [selectedGenre, setSelectedGenre] = useState([])
  const { data: genres } = useGetGenreQuery()
  const { data, isError } = useGetMovieDiscoverQuery({
    with_genres: selectedGenre.join(',')
  })
  const handleChangeGenre = id => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre(p => p.filter(i => i !== id))
    } else {
      setSelectedGenre(p => [...p, id])
    }
  }
  return (
    <div className='py-10 flex flex-col gap-5 bg-primary dark:bg-slate-200'>
      <div className='genres w-[1330px] mx-auto overflow-auto flex gap-5 pb-5 rounded-xl'>
        {genres?.genres?.map(genre => (
          <button
            onClick={() => handleChangeGenre(genre.id)}
            key={genre.id}
            className={`text-white text-xl px-10 py-2 bg-gray-900 whitespace-nowrap rounded-[30px] ${
              selectedGenre.includes(genre.id) ? 'bg-red' : ''
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className='container px-20 grid grid-cols-4 gap-10'>
        {data?.results?.map((movie, index) => (
          <div
            key={index}
            className='w-full h-[500px] overflow-hidden rounded-lg'
          >
            <img
              onClick={() => navigate(`/movie/${movie.id}`)}
              className='w-[100%] h-[100%] object-cover rounded-lg max-lg:h-80 hover:scale-110 duration-500 '
              src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      {!data?.total_results && (
        <div className='container px-20 h-[300px] flex items-center justify-center flex-col gap-5'>
          <FaRegWindowClose className='text-navColor text-[250px] dark:text-primary' />
          <h2 className='text-navColor text-3xl dark:text-primary'>
            Movie not found
          </h2>
        </div>
      )}
    </div>
  )
}

export default Sessions
