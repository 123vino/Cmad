import ArtInfo from "../components/ArtInfo.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header/header.js";
import Hero from "../components/Hero";

function Home(){
    return(
        <>
        <Header/>
        <Hero 
        cName=".hero-mid"
        heroImg="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Art at the Start"
        text="Experience your desire arts here"
        />
        <ArtInfo/>
        <Footer/>
     </> 
    );
}

export default Home;