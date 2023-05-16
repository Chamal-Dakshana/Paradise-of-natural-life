import React from "react";
import styles from "./styles/footer.css"

function Footer(){

    return(
        <footer className="footerAll">
        <ul className="ul">
            <div className="ula">
                <li className="ula1">ABOUT US</li>
                <li className="ula1">CONTACT US</li>
            </div>
            <li className="ula1">FEEDBACK</li>  
        </ul>

        <div className="address">
        <h3 className="header001">Contact</h3>
        <p className="para11">Street: 41153 40th St W 
         City: Palmdale 
        State: California </p>
        </div>

        </footer>
    )

}
export default Footer;