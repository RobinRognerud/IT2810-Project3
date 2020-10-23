import React from 'react';
import { Link } from 'react-router-dom';

interface Iheader{

}

const Header:  React.FC<Iheader> = () => {
 return (
  <header> 
   <div className="navbar navbar-dark bg-dark box-shadow mb-4">
    <div className="container d-flex justify-content-between">
    <div className="lead text-muted">
    <Link to={'/'}><div className="badge badge-secondary">
       
           Countries
        
       </div></Link>
       </div>
     
     <label htmlFor="exampleSelect1">
    
     </label>
    
    </div>
   </div>
  </header>
 );
};

export default Header;