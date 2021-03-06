import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className="main-container">
      <div className="inner-wrapper">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
