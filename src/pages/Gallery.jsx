import { useState } from "react";
import Hero from "../components/Hero";
import ApiHooks from "../hooks/ApiHooks";


export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos";
  return (
    <>
      <Hero/>
      <ApiHooks url={apiUrl} data={setPhotos} />
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-3">
            {
              photos.slice(0, 50).map((photo) => (
                <div key={photo.id} className="">
                  <figure>
                    <img className="aspect-square w-full object-cover"
                         src={photo.url}
                         alt={photo.title} />
                  </figure>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
