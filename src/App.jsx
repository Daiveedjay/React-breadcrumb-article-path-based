import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Homepage from "./Homepage";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Homepage />} />
          <Route path="products" element={<Products />}>
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
