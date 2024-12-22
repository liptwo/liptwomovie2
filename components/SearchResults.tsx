import { searchMovies } from "@actions/movieData";
import { Movie } from "@lib/types";
import MovieCard from "./MovieCard";

const SearchResults = async ({ query }: { query: string }) => {
  let movies: Movie[] = [];
  movies = await searchMovies(query);

  return movies.length === 0 ? (
    <div className="search-page">
      <h1 className="text-heading2-bold text-white">No results found</h1>
    </div>
  ) : (
    <div className="search-page">
      <h1 className="text-heading2-bold text-white">Resule for "{query}"</h1>
      <div className="list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
