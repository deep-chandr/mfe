import React from "react";
import Header from "./components/header";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <h1>[container]Hi there!!!</h1>
        <hr />
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
