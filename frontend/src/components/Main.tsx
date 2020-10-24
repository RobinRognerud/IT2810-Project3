import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { Jumbotron } from "./Jumbotron";
import CountryCardContainer from "./CountryCardContainer";

interface IMainProps {}

const Main: React.FC<IMainProps> = () => {
  return (
    <main role="main">
      <Jumbotron />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-4 card-body">
              <CountryCardContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
