import useFetch from "@hooks/useFetch";

export default function getGenre() {
    const { data, error} = useFetch("https://api.themoviedb.org/3/genre/movie/list?api_key=875a606e681e096b3408b7415d5b86c5&language=en-US");

    return data.results;
}