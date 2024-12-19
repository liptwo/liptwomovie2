import { fetchGenresMovie } from '@actions/movieData'
import CategoryList from '@components/CategoryList'
import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import { Genre } from '@lib/types'
import { Category } from '@mui/icons-material'
import React from 'react'


const Home = async() => {
  const genres = await fetchGenresMovie();
  const example = genres.slice(0,2);
  // console.log(example);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='all-movies'>
        {example.map((genre : Genre) => (
          <CategoryList key={genre.id} title={genre.name} movies={genre.movies} />
        ))};
      </div>
    </div>
  )
}

export default Home