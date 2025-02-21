import { BrowserRouter, Route, Routes } from "react-router-dom";

import { EmptyLayout } from "@layouts/EmptyLayout/EmptyLayout";

import { Register } from '@pages/Register/Register'
import { List } from "@pages/List/List";
import { NotFound } from "@pages/NotFound/NotFound";
import { Home } from "@pages/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<EmptyLayout />}>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Registrar" element={<Register />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Lista" element={<List />} />
          <Route path="/List" element={<List />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
