import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCocktail from "./pages/AddCocktail";
import NavBar from "./components/NavBar";


export default function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/add-cocktail" element={<AddCocktail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
};