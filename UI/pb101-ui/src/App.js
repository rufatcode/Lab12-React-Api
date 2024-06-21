import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        
      </Route>
      <Route path="/detail/:id" element={<ProductDetail/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
