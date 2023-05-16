import React from "react";
import axios from "axios";
import styles from "./styles/home.css";
import img2 from "./images/Happy-Earth-Day-Quotes.jpg"
import img3 from "./images/projectowner.jpg"
import img4 from "./images/donor.jpg"

function Home(){

return(

    <div className="containe">
        <div className="contain">
            <h2 className="topic">PARADISE OF NATURAL LIFE</h2>
            <h3 className="topic01">WELCOME!</h3>
            <p className="para1">Do you have a good project to save our land, nature and animals?  You are lucky. we will help your project. Come join with us.</p>
            <img className="img2" src={img2}></img>
            
          
            <div className="tp0">
                <div className="tp1">
                <h2 className="topic1">NATURAL LIFE</h2>
                <img className="img3" src={img3}></img>
                <p className="para2">Do you have a good project to save our land, nature and animals?  You are lucky. we will help your project. Come join with us.</p>
            </div>
            <div className="tp1">
                <h2 className="topic1">NATURAL LIFE</h2>
                <img className="img3" src={img4}></img>
                <p className="para2">Do you have a good project to save our land, nature and animals?  You are lucky. we will help your project. Come join with us.</p>
                </div>
            </div>
        </div>  
    </div>


)
}
export default Home;
