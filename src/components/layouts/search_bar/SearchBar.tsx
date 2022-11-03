import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [query, setQuery] = useState();

  const showSearchBar = () => {
    let search_bar_area: any = document.getElementById("query-form");
    switch (search_bar_area.style.display) {
      case "none":
        search_bar_area.style.display = "block";
        break;
      case "block":
        search_bar_area.style.display = "none";
        break;
      default:
        search_bar_area.style.display = "none";
    }
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const value = event.target.value;

    setQuery((prevQuery) => value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    return <div></div>;
  };

  return (
    <div className="header-secondary-nav-menu">
      <div onClick={() => showSearchBar()}>
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            color: "white",
            fontSize: "20px",
            position: "relative",
            right: "-30px",
          }}
        />
      </div>
      <form onSubmit={handleSubmit} id="query-form" className="search-form">
        <input id="query" type="text" onChange={handleChange} />
      </form>
    </div>
  );
}
