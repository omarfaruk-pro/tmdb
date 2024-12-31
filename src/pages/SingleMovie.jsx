import ApiHooks from "../hooks/ApiHooks";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


export default function SingleMovie() {
   const  {movieId} = useParams();
   const apiKey = "api_key=ab9d84fb510d2ac4bc9f22ea31cb1c32";
   const url = `https://api.themoviedb.org/3/movie/${movieId}?&${apiKey}`;
   const {datas, loading, error} = useFetch(url);

  return (
    <> 
    {loading && <div className="text-center text-4xl text-white font-bold py-10">Loading...</div>}
    {error && <div className="text-center text-4xl text-white font-bold py-10">Error: {error}</div>}
    <div className=" max-w-7xl mx-auto">
        <Link to="/" className="text-white font-bold text-lg">Back</Link>
    </div>
    {datas && (
        <section
            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${datas.backdrop_path}')`}} className="no-repeat bg-cover bg-center relative before:absolute before:inset-0 before:bg-yellow-800 before:opacity-90 py-10">
            <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-1">
                <div>
                    <img
                    className="w-full rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`}
                    alt={datas.title || "Movie Poster"}
                    />
                </div>
                </div>
                <div className="col-span-3">
                <div>
                    <h1 className="text-4xl font-bold">{datas.title}</h1>
                    <h3>{datas.tagline}</h3>
                    <p className="mt-2">{datas.overview}</p>
                </div>
                </div>
            </div>
            </div>
        </section>
)}

        
    </>
  )
}
