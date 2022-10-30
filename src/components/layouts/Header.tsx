import "@/App.css";
import logo from "@assets/Logonetflix.png";
import mobileLogo from "@assets/n-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "@scripts/fixed_header.js";

export default function Header() {
  return (
    <header id="header" className="header">
      <div className="full-size-logo">
        <Link to="/">
          <img src={logo} alt="logo-netflix" />
        </Link>
      </div>
      <div className="navigation-menu">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">Início</Link>
            </li>
            <li>
              <Link className="link" to="/series">Séries</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
