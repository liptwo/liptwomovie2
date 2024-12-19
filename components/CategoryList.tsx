import { Movie } from "@lib/types"
import MovieCard from "./MovieCard"

interface Props{
    key:number,
    title: string,
    movies:Movie[],
}

const CategoryList = ( { title, movies} : Props ) => {
  
  return (
    <div className="category">
        <div className="category-title">{title}</div>
        <div className="movie-list">
          {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/> 
          ))};
          
        </div>
    </div>
  )
}



export default CategoryList