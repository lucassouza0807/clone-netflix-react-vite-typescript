import Loading from "@layouts/loading/Loading";
import useFetch from "@hooks/useFetch/useFetch";
import ErrorPage from "@layouts/error_page/ErrorPage";
import CatalogRow from "@components/catalog_row/CatalogRow";
import Featured from "@components/featured/Featured";

export default function Series(props: any) {
  const url = `${import.meta.env.VITE_APP_BASE_URL}/genre/tv/list?api_key=${
    import.meta.env.VITE_APP_API_KEY
  }&language=pt-BR`;

  const { data, error } = useFetch(url);

  if (error) return <ErrorPage />;

  if (data) {
    return (
      <div>
        <Featured />
        {data.genres.map((genre: any, key: number) => (
          <CatalogRow
            discover_url="discover/tv"
            key={key}
            genre_name={genre.name}
            genre_id={genre.id}
          />
        ))}
      </div>
    );
  }
}
