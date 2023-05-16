import React,{useState} from "react";
import axios from 'axios';
import "./styles/ProjectOwnerMenu.css"
import "./styles/add.css"

export default function AddOwnerProject() {

    const [proName, setProName] = useState("");
    const [proCategory, setProCategory] = useState("");
    const [proPurpose, setProPurpose] = useState("");
    const [proDuration, setProDuration] = useState("");
    const [proResult, setProResult] = useState("");
    const [proResultDuration, setProResultDuration] = useState("");

    function sendData(e){
        e.preventDefault();

        const newProjectOwner = {
            proName,
            proCategory,
            proPurpose,
            proDuration,
            proResult,
            proResultDuration
        }

        axios.post("http://localhost:8070/projectOwner/add",newProjectOwner).then(()=>{
            alert("Project Added")
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
                    setProName(e.target.value);
                }}/>      
                </div>        
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proCategory" className="form-label">Project Category</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proCategory" placeholder="Enter Project Category"
                onChange={(e) =>{
                    setProCategory(e.target.value);
                }}/>       
                </div>       
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proPurpose" className="form-label">Project Purpose</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proPurpose" placeholder="What is the project Purpose"
                onChange={(e) =>{
                    setProPurpose(e.target.value);
                }}/>            
                </div>        
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proDuration" className="form-label">Project Duration</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proDuration" placeholder="Duration of the Project"
                onChange={(e) =>{
                    setProDuration(e.target.value);
                }}/>  
                </div>                  
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proResult" className="form-label">Project Result</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proResult" placeholder="Result of the Project"
                onChange={(e) =>{
                    setProResult(e.target.value);
                }}/>         
                </div> 
            </div>
            <div className="mb-3">
                <div className="lable01">
                <label for="proResultDuration" className="form-label">Project Result Duration</label>
                <p className="dot">:</p>
                <input type="text" className="form-control" id="proResultDuration" placeholder="Duration of the give the result"
                onChange={(e) =>{
                    setProResultDuration(e.target.value);
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