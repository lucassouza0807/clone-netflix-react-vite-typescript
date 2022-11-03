import Loading from "@layouts/loading/Loading";
import Catalog from "@components/catalog_row/CatalogRow";
import Trending from "@components/trending/Trending";
import Featured from "@components/featured/Featured";
import ErrorPage from "@layouts/error_page/ErrorPage";
//hook
import useFetch from "@hooks/useFetch/useFetch.js";

export default function Browser() {

  const url = `${import.meta.env.VITE_APP_BASE_URL}/genre/movie/list?api_key=${import.meta.env.VITE_APP_API_KEY}&language=pt-BR`;

  const {data, error } =  useFetch(url);

  if (error) return <ErrorPage />
  
  if (data) {
    return (
      <div>
        <Featured />
        <Trending />
        {data.genres.map((genre: any, key: number) => (
          <Catalog key={key} genre_name={genre.name} genre_id={genre.id} />
        ))} 
      </div>
    );
  }
}
