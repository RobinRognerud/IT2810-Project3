import React from "react";
import { Footer } from "./Footer";
import { OptionsBar } from "./OptionsBar";
import CountryCardContainer from "./CountryCardContainer";

const Main: React.FC = () => {
  return (
    <main role="main">
      <OptionsBar />

      <CountryCardContainer />

      <Footer />
    </main>
  );
};

export default Main;
