import { fetchTrending } from "@actions/movieData"
import HeroCard from "./HeroCard";

const Hero = async() => {
    const trending = await fetchTrending();
    const randomNumber = Math.floor(Math.random() * trending.length);
    const movieTrending = trending[randomNumber];
  return (
    <div>
        <HeroCard movieTrending={movieTrending}></HeroCard>
    </div>
  )
}

export default Hero