import Loading from "@layouts/loading/Loading";
import { Link } from "react-router-dom";
import useFetch from "@hooks/useFetch/useFetch.js";
import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Trending() {
  const [scrolX, setScrollX] = useState(0);
  const url = `${import.meta.env.VITE_APP_BASE_URL}/trending/tv/week?api_key=${import.meta.env.VITE_APP_API_KEY}`;

  const { data, error } = useFetch(url);

  if (!data || error) return <Loading />;

  const handleLeftArrow = () => {
    let x : any = scrolX + Math.round(Math.round(window.innerWidth / 2));

    if(x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const scrollToRight = () => {
    let x = scrolX - Math.round(window.innerWidth / 2);
    let movie_card_width: number = 190;
    
    let listW = data.results.length * movie_card_width;

    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW);
    } 

    console.log(x);
    setScrollX(x)
  };

  if (data) {
    return (
      <div className="trending-section">
        <h1 className="category" style={{ marginLeft: "1rem"}}>Top 10 em alta</h1>
        <div
          className="trending-row-area"
          style={{
            marginLeft: `${scrolX}px`,
            width: `${data.results.length * 190}px`,
          }}
        >
          {data.results.slice(0, 10).map((data: any, key: any) => (
            <div className="trending-card" key={key} data-count={key +1}>
              <Link to="#">
                <img
                  src={`${import.meta.env.VITE_APP_IMAGE_URL}/w200${
                    data.poster_path
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>
        <div
          className="trending-navigate-left"
          onClick={() => handleLeftArrow()}
        >
          <NavigateBeforeIcon style={{ color: "white", fontSize: "50px" }} />
        </div>
        <div className="trending-navigate-right" onClick={() => scrollToRight()}>
          <NavigateNextIcon style={{ color: "white", fontSize: "50px" }} />
        </div>
      </div>
    );
  }
}
