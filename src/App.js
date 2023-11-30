import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AddCocktail from "./pages/AddCocktail";
import NavBar from "./components/NavBar";
import Cocktail from "./pages/Cocktail";
import RouteError from "./pages/RouteError";


export default function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/add-cocktail" element={<AddCocktail />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<RouteError />} />
        </Routes>
      </div>
  );
};