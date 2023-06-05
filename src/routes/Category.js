import Header from "../components/Header/header.js";
import Hero from "../components/Hero";

function Category(){
    return(
        <>
        <Header/>
        <Hero 
        cName=".hero-mid"
        heroImg="https://images.pexels.com/photos/2559741/pexels-photo-2559741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Art Types"
        text="Go through this different arts"
        />
     </> 
    );
}

export default Category;