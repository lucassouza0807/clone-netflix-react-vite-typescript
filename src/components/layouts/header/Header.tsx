import "@/App.css";
import { useState } from "react";
import full_size_logo from "@assets/netflix_full_size_logo.png";
import mobile_logo from "@assets/mobile_logo.png";
import { Link } from "react-router-dom";
import SearchBar from "@layouts/search_bar/SearchBar";

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
      <div></div>
    </header>
  );
}
