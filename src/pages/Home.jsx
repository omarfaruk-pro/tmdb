import { useState } from "react";
import Hero from "../components/Hero";
import ApiHooks from "../hooks/ApiHooks";
import movieImage from "../assets/images/placeholder-movie.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchValue = search ? search : "avengers";
  const apiKey = "api_key=ab9d84fb510d2ac4bc9f22ea31cb1c32";

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&${apiKey}`;
  const movieResults = movies.results;

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;
    setSearch(inputValue); 
  };

  return (
    <>
      <Hero />
      <section className="pt-10">
        <div className="container">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for a movie..."
              name="searchInput"
              className="w-full rounded-md py-3 px-4 bg-gray-600 text-white leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
            />
          </form>
        </div>
      </section>
      <ApiHooks url={url} data={setMovies} />
      <section className="pt-5 pb-20">
        <div className="container">
          <div className="grid grid-cols-3 gap-5">
            {
              movieResults && movieResults.map((movie) => (
                <div key={movie.id}>
                  <Link to={`/movie/${movie.id}`} className="card relative bg-neutral shadow-xl">
                    <figure className="p-6">
                      <img className="aspect-square object-cover"
                          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : movieImage}
                          alt={movie.original_title}
                          />
                    </figure> 
                    <div className="p-6">
                      <p className="flex justify-between text-lg font-semibold text-white mb-3">
                        <span>Release Date: {movie.release_date}</span><span>Rating {movie.vote_average}</span>
                      </p>
                      <h2 className="text-white font-semibold text-2xl mb-3">{movie.original_title}</h2>
                      <p>{movie.overview.slice(0, 90)}...</p>
                    </div> 
                  </Link>
                </div>
              )) 
            }
          </div>
        </div>
      </section>
    </>
  );
}
