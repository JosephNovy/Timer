import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { LayoutContanier } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContanier>
      <Header />
      <Outlet />
    </LayoutContanier>
  );
};
