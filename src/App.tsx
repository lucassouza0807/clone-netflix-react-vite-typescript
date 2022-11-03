import "./App.css";
import Header from "@layouts/header/Header";
import Browse from "@components/browser/Browser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from "@components/series/Series";
import Loading from "@layouts/loading/Loading";

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/series" element={<Series />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
