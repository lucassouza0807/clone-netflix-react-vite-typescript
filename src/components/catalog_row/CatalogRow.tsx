import Loading from "@layouts/loading/Loading";
import ErrorPage from "@layouts/error_page/ErrorPage";
import { Link } from "react-router-dom";
import useFetch from "@hooks/useFetch/useFetch.js";
import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "@/App.css";

export default function CatalogRow({genre_name, genre_id, discover_url}: any) {
  const [scrolX, setScrollX] = useState(-400);

  const url = `${import.meta.env.VITE_APP_BASE_URL}/${discover_url}?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=${genre_id}`;

  const handleLeftArrow = () => {
    let x : any = scrolX + Math.round(Math.round(window.innerWidth / 2));

    if(x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrolX - Math.round(window.innerWidth / 2);
    let movie_card_width: number = 207;
    
    let listW = data.results.length * movie_card_width;

    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW);
    } 

    console.log(x);
    setScrollX(x)
  };

  const { data, error } = useFetch(url);

  if(error) return <ErrorPage />;
  
  if (!data) return <Loading />;

  if (data)
    return (
      <div className="catalog-row">
          <h1 className="category">{genre_name}</h1>
          <div
            className="catalog-row-list-area"
            style={{
              marginLeft: `${scrolX}px`,
              width: `${data.results.length * 207}px`,
            }}
          >
            <div className="navigate-left" onClick={() => handleLeftArrow()}>
              <NavigateBeforeIcon
                style={{ color: "white", fontSize: "50px" }}
              />
            </div>
            <div className="navigate-right" onClick={() => handleRightArrow()}>
              <NavigateNextIcon style={{ color: "white", fontSize: "50px" }} />
            </div>
            {data.results.map((data: any, key: any) => (
              <div className="catalog-card" key={key} style={{}}>
                <Link to="#" >
                  <img src={`${import.meta.env.VITE_APP_IMAGE_URL}/w200${data.poster_path}`} />
                </Link> 
              </div>
            ))}
          </div>
      </div>
    );
}
