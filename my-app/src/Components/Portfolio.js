import React from 'react';
import Project from "./Project";
 function Portfolio() {
    return (
      <div>
        
   <form>
            <h1>Portfolio </h1>
        </form>
        <Project projects={projects} />
      </div>
    );
  }
const projects = [
    {
      id: 0,
      title: "FeRIAS",
      image: "/images/ferias.png",
      repo: "https://github.com/Ayla122/groupProject1",
      live: "https://aaronrobinett.github.io/groupProject1/",
    },
    {
      id: 1,
      title: "Swapsies",
      image: "/images/swapsies.png",
      repo: "https://github.com/Ayla122/The-Barter-System",
      live: "https://glacial-temple-55453.herokuapp.com/login",
    },
    
  ];
  
 
export default Portfolio;

