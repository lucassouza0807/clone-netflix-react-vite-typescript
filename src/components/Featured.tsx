import useFetch from "@hooks/useFetch";
import axios from "axios"
import { useState, useEffect } from "react";

export default function Featured() {
  const [genres, setGenres] = useState();

  const url = `${import.meta.env.VITE_APP_BASE_URL}/discover/tv?with_network=213&language=pt-BR&api_key=${import.meta.env.VITE_APP_API_KEY}`;
  const { data, error } = useFetch(url);
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_APP_API_KEY}&language=pt-BR`)
      .then(result => {
        setGenres(result.data.genres);
      })

  },[]);

  if (!data) return <h1 style={{ color: "white" }}>LOADING</h1>;

  if (error) return <h1 style={{ color: "white"}}>Error</h1>;

  if (data.results && genres) {
    let featured: any =data.results[Math.floor(Math.random() * data.results.length)];
    let image_url: string = `${import.meta.env.VITE_APP_IMAGE_URL}/original${featured.backdrop_path}`;
    let image_url2: string = `${import.meta.env.VITE_APP_IMAGE_URL}/original${data.results[8].backdrop_path}`;


    let release_year = new Date(featured.first_air_date);

    const featured_genre: any = featured.genre_ids;
    const filterd_genre_list: any = [];

    for(let index = 0; index < featured_genre.length; index++) {
      let result = genres.filter((element: any) => element.id === featured_genre[index]);
      filterd_genre_list.push(result[0]);
    }
    
    let final_filter: any = [];

    for(let index = 0; index < filterd_genre_list.length; index++) {
      final_filter.push(filterd_genre_list[index].name)
    }


    return (
      <section
        className="featured"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${image_url})`,
          height: "800px",
          position: "relative",
          top: "-70px",
          marginBottom: "0",
          zIndex: -1,
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--div">
              <div className="featured--name">
                <h2>{featured.name}</h2>
              </div>
              <div className="featured--info">
                <div className="featured--vote-average">
                  <h3>{featured.vote_average} pontos</h3>
                </div>
                <div className="featured--release-year">
                  <h3>{release_year.getFullYear()}</h3>
                </div>
              </div>
              <div className="featured--overview">
                <p>{featured.overview}</p>
              </div>
              <div className="featured--buttons">
                <div className="watch-button">
                  <p className="play-button">&#9654;</p>
                  <p>Assistir</p> 
                </div>
                <button onClick={() => { alert()}} className="add-to-list">
                  +MINHA LISTA
                </button>
              </div>
              <div className="featured--genres">
                <h4>Gêneros: {final_filter.join(", ")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
