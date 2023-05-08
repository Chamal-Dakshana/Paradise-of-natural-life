import React,{useState} from "react";
import axios from 'axios';

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
        <div className="container">
        <form onSubmit={sendData}>
            <div className="mb-3">
                <label for="proName" className="form-label">Project Name</label>
                <input type="text" className="form-control" id="proName" placeholder="Enter Project Name"
                onChange={(e) =>{
                    setProName(e.target.value);
                }}/>              
            </div>
            <div className="mb-3">
                <label for="proCategory" className="form-label">Project Category</label>
                <input type="text" className="form-control" id="proCategory" placeholder="Enter Project Category"
                onChange={(e) =>{
                    setProCategory(e.target.value);
                }}/>              
            </div>
            <div className="mb-3">
                <label for="proPurpose" className="form-label">Project Purpose</label>
                <input type="text" className="form-control" id="proPurpose" placeholder="What is the project Purpose"
                onChange={(e) =>{
                    setProPurpose(e.target.value);
                }}/>                    
            </div>
            <div className="mb-3">
                <label for="proDuration" className="form-label">Project Duration</label>
                <input type="text" className="form-control" id="proDuration" placeholder="Duration of the Project"
                onChange={(e) =>{
                    setProDuration(e.target.value);
                }}/>                    
            </div>
            <div className="mb-3">
                <label for="proResult" className="form-label">Project Result</label>
                <input type="text" className="form-control" id="proResult" placeholder="Result of the Project"
                onChange={(e) =>{
                    setProResult(e.target.value);
                }}/>          
            </div>
            <div className="mb-3">
                <label for="proResultDuration" className="form-label">Project Result Duration</label>
                <input type="text" className="form-control" id="proResultDuration" placeholder="Duration of the give the result"
                onChange={(e) =>{
                    setProResultDuration(e.target.value);
                }}/>                    
            </div>
            
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}