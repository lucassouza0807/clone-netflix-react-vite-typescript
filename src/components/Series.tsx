import Loading from "@layouts/Loading";
import useFetch from "../hooks/useFetch";
import ErrorPage from "@layouts/ErrorPage";

export default function Series(props: any) {  
  const url = `${import.meta.env.VITE_APP_BASE_URL}/discover/tv?api_key=${import.meta.env.VITE_APP_API_KEY}`;

  const { data, error } = useFetch(url);
  
  if (error ) return <ErrorPage /> ;

  if (data) 
    return (
      <div>
        
        <h1 className="category">Séries</h1>
        <div className="serie-div">
          {data.results.map((data: any, key: any) => (
            <div className="movie-card" key={key}>
              <a href="">
                <img
                  src={"https://image.tmdb.org/t/p/w300/" + data.poster_path}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
}
