import { api } from './index'

export const movieApi = api.injectEndpoints({
  endpoints: build => ({
    getMovie: build.query({
      query: ({ type, params }) => ({
        url: `/movie/${type}`,
        params
      }),
      providesTags: ['Movie']
    }),
    getMovieDiscover: build.query({
      query: params => ({
        url: `/discover/movie`,
        params
      }),
      providesTags: ['Movie']
    }),
    getMovieDetail: build.query({
      query: id => ({
        url: `/movie/${id}`
      }),
      providesTags: ['Movie']
    }),
    getMovieSimilar: build.query({
      query: id => ({
        url: `/movie/${id}/images`
      }),
      providesTags: ['Movie']
    }),
    getMovieSearch: build.query({
      query: params => ({
        url: `/search/movie`,
        params
      }),
      providesTags: ['Movie']
    })
  })
})

export const {
  useGetMovieQuery,
  useGetMovieDiscoverQuery,
  useGetMovieDetailQuery,
  useGetMovieSimilarQuery,
  useGetMovieSearchQuery
} = movieApi
