import "./FooterStyles.css";

const Footer = () =>{
    return (
        <div className="footer">
            <div className="top">
               <div>
                <h1>CMad</h1>
                <p>Experince your love of art</p>
               </div> 
               <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square">

                    </i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square">
                        
                    </i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square">
                        
                    </i>
                </a>
               </div>
               <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contact</a>
               
                </div>
               </div>
            </div>
        </div>
    )
}

export default Footer;