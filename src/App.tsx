import "./App.css";
import Header from "@layouts/Header";
import Browse from "@components/Browse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from "@components/Series";

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
