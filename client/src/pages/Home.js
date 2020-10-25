import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

// the Home page component manages the state currentCategory, which is passed to the
// ProductList component as a prop and instructs which category's products should be retrieved using Apollo
const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
