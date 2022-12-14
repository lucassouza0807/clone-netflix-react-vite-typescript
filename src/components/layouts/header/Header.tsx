import "@/App.css";
import full_size_logo from "@assets/full_size_logo.svg";
import mobile_logo from "@assets/mobile_logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "@layouts/search_bar/SearchBar";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

import "@scripts/fixed_header.js";

export default function Header() {
  return (
    <header id="header" className="header">
      <div className="mobile-logo">
        <img src={mobile_logo} alt="mobile-logo" />
      </div>
      <div className="full-size-logo">
        <Link to="/">
          <img src={full_size_logo} alt="logo-netflix-full-size" />
        </Link>
      </div>
      <main className="navigation-menu">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="link" to="/series">
                Séries
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <SearchBar />
      <div className="secondary-nav-menu">
      <div style={{ marginRight: "20px"}}>
          <Link to="#">
            <FontAwesomeIcon
              style={{
                color: "white",
                fontSize: "20px",
              }}
              icon={faBell}
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <FontAwesomeIcon
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "15px",
              }}
              icon={faUser}
            />
          </Link>
          <dialog>
            
          </dialog>
        </div>
        
      </div>
    </header>
  );
}
