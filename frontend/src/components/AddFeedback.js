import React,{useState} from "react";
import axios from 'axios';
import "./styles/ProjectOwnerMenu.css"
import "./styles/add.css"

export default function AddOwnerProject() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [feedBack, setFeedBack] = useState("");

    function sendData(e){
        e.preventDefault();

        const newFeedback = {
            fullName,
            email,
            feedBack,
    
        }

        axios.post("http://localhost:8070/feedback/add",newFeedback).then(()=>{
            alert("Feedback comed for us")
        }).catch((err)=>{
            alert(err)
        })
    }


    return(
        <div className="containe">
        <div class="add">
        <nav className="navbar navbar-expand-lg nav-dark1" >
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="headButton">
            <ul className="navbar-nav me-auto-mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link"  href="/allOwenerProject">All Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/addOwnerProject">Add Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/getAll">Update Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/add">Delete Project</a>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </nav>

        <div className="submitForm">
            <h2 className="mainTopic2">ADD PROJECT</h2>
        <form onSubmit={sendData}>
            <div className="mb-3">
                <div className="lable01">
                <label for="proName" className="form-label">Project Name</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proName" placeholder="Enter Project Name"
                onChange={(e) =>{
                  setFullName(e.target.value);
                }}/>      
                </div>        
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proCategory" className="form-label">Project Category</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proCategory" placeholder="Enter Project Category"
                onChange={(e) =>{
                  setEmail(e.target.value);
                }}/>       
                </div>       
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proPurpose" className="form-label">Project Purpose</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proPurpose" placeholder="What is the project Purpose"
                onChange={(e) =>{
                    setFeedBack(e.target.value);
                }}/>            
                </div>        
            </div>
            
           <div className="submitButton">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}