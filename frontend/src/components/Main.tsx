import React from "react";
import { Footer } from "./Footer";
import { OptionsBar } from "./OptionsBar";
import CountryCardContainer from "./CountryCardContainer";

interface IMainProps {}

const Main: React.FC<IMainProps> = () => {
  return (
    <main role="main" className="container">
      <OptionsBar />

      <CountryCardContainer />

      <Footer />
    </main>
  );
};

export default Main;
