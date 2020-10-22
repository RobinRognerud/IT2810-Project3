import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from "./Country";
import { Footer } from './Footer';
import Header from './Header';
import { Jumbotron } from './Jumbotron';

interface IMainProps {}

const Main: React.FC<IMainProps> = () => {

const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  //Fetch the countries from API
  const getCountries = async () => {
    const response = await fetch("http://localhost:3000/countries");
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };

    return (
        <main role="main">
             <Header/>
             <Jumbotron/>
    
         <div className="album py-5 bg-light">
          <div className="container">
           <div className="row">
               
            {countries.slice(0, 9).map((country) => (
       <div className="col-4 card-body">
          <Country
            name={country.name}
            capital={country.capital}
            flagURL={country.flag}
            currencies={country.currencies[0].name}
          />

           
          
        </div>
        
      ))}
           </div>
          </div>
         </div>
         <Footer/>
        </main>
       );
      };

export default Main;
