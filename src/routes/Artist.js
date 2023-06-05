import Header from "../components/Header/header.js";
import Hero from "../components/Hero";

function Artist(){
    return(
        <>
        <Header/>
        <Hero 
        cName=".hero-mid"
        heroImg="https://images.pexels.com/photos/3778203/pexels-photo-3778203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="The Artists"
        text="List of artists you may or may not know"
        />
     </> 
    );
}

export default Artist;