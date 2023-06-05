import ArtInfoData from "./ArtInfoData";
import "./ArtInfoStyles.css"

const ArtInfo = () =>{
    return(
       <div className="artinfo">
          <h1>Popular Art</h1>
          <ArtInfoData
           className="first-des"
           heading="Potrait,Sketching,Painting"
           text="Lorem ipsum dolor sit amet, consectetur
           adipiscing elit, sed do eiusmod tempor incididunt ut labore
           et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,sunt in culpa qui officia deserunt mollit anim id est laborum"
            img1={"https://images.pexels.com/photos/3778179/pexels-photo-3778179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            img2={"https://images.pexels.com/photos/2109147/pexels-photo-2109147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          /> 
           <ArtInfoData
           className="first-des-reverse"
           heading="Potrait,Sketching,Painting"
           text="Lorem ipsum dolor sit amet, consectetur
           adipiscing elit, sed do eiusmod tempor incididunt ut labore
           et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,sunt in culpa qui officia deserunt mollit anim id est laborum"
            img3={"https://images.pexels.com/photos/3778179/pexels-photo-3778179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            img4={"https://images.pexels.com/photos/2109147/pexels-photo-2109147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          /> 
        </div>
     
    );
};

export default ArtInfo;