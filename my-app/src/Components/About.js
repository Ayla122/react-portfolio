import React from 'react'; 

function About (){
    console.log("About component")
    return(
        <div className='page-container'>
            <form>
        <h1>About me</h1>
        <h2> Web Development student at University of Oregon. I like dabling in various parts of frontend developement and to learn new technologies.  </h2>
        </form>
        </div>
    )
}

export default About; 