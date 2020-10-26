import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { Jumbotron } from "./Jumbotron";
import CountryCardContainer from "./CountryCardContainer";

interface IMainProps {}

const Main: React.FC<IMainProps> = () => {
  return (
    <main role="main">
      <Header />
      <Jumbotron />

      <CountryCardContainer />

      <Footer />
    </main>
  );
};

export default Main;
