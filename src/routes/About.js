import Header from "../components/Header/header.js";
import Hero from "../components/Hero";
//import AboutImg from "../assets/night.jpg"
function About(){
    return(
        <>
        <Header/>
        <Hero 
        cName=".hero-mid"
        //heroImg={AboutImg}
        heroImg="https://i.pinimg.com/564x/4d/7d/e3/4d7de3583c39f7da78e324ddac0f9fe7.jpg"
        title="My Journey"
        text="This is my art journey"
       />
     </> 
    );
}

export default About;