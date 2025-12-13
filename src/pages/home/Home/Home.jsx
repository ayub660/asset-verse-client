import React from "react";
import { Helmet } from "react-helmet";
import Packages from "../Packages/Packages";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | AssetVerse</title>
      </Helmet>
      <About></About>
      <Packages></Packages>
    </div>
  );
};

export default Home;
