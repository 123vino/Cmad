import Header from "../components/Header/header.js";
import Hero from "../components/Hero";

function Blog(){
    return(
        <>
        <Header/>
        <Hero 
        cName=".hero-mid"
        heroImg="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Share your Idea"
        text="Hai!This is the platform where you can share your art knowledge and also your artworkd"
        />
     </> 
    );
}

export default Blog;