import { getApiRespone } from "@lib/request"
import { Genre } from "@lib/types"

export const fetchTrending = async() => {
    const data = await getApiRespone("trending/movie/week")
    const trending = data.results
    return trending
}

export const fetchGenresMovie = async() => {
    const data = await getApiRespone("genre/movie/list")
    const genres = data.genres;
    for (const genre of genres ){
        const movies = await getApiRespone(`discover/movie?with_genres=${genre.id}`)
        //Thêm movie vào Mỗi genre { id , name , movie}
        genre.movies = movies.results
    }
    return genres
} 


export const searchMovies = async (query: string) => {
    const data = await getApiRespone(`/search/movie?query=${query}`);
    const movies = data.results || []; // Handle empty results
    // console.log("search", movies);
    return movies;
}