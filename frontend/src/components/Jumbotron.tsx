
import React from 'react';

export const Jumbotron = () => {
 return (
  <section className="jumbotron text-center mb-0 bg-white">
   <div className="container">
    <h1 className="jumbotron-heading">Countries</h1>
    <p className="lead text-muted">
    Finn ditt favoritt land :D
    </p>
    
    <select className="navbar-toggler" id="exampleSelect1">
      <option> Sorter etter: </option>
      <option> Myntenhet </option>
      <option>Størrelse</option>
      <option>4</option>
      <option>5</option>
    </select>
     <input className="navbar-toggler" type="search" value="Søk..." id="example-search-input"></input>
     <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarHeader"
      aria-controls="navbarHeader"
      aria-expanded="false"
      aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon" />
     </button>
    
   </div>
  </section>
 );
};