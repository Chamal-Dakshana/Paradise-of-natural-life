import React,{useState,useEffect} from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";



import { Link } from "react-router-dom";

function DeleleOwnerProject(){

    const [searchTerm, setSearchTerm] = useState('');
    const [projects,setProjects] = useState([{
        _id:'',
        proName: '',
        proCategory: '',
        proPurpose: '',
        proDuration: '',
        proResult: '',
        proResultDuration: '',
       

    }]);

    const location = useLocation();
    
    useEffect(() => {
        function getitems(){
            axios.get("http://localhost:8070/projectOwner/").then((res) => {
                setProjects(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getitems();
    }, [])

    function Delete(id) {
        axios.delete(`http://localhost:8070/projectOwner/delete/${id}`).then((res) => {
            alert("Project Delete SuccessFully")
        }).catch(err => { alert(err) });
    }

    const filteredCountrise = projects.filter(std=>{
        return (std.proName.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                
     })
    
    return(
        <div>

            
            <div class="Topic"><h3>Delete Projects</h3></div>

            <div class="container-fluid">
    
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
             onChange={e => setSearchTerm(e.target.value)}
             />
     
    
  </div>
            {filteredCountrise.map( item =>
            <div>
              
                

              <div class="container">
                 
                <div class="row">
                <div class="col-12">

                <table class="table table-image">
                <thead>
                <td>
                <th scope="col" width="600"><h2>{item.proName}</h2>
                <p>{item.proCategory}</p>
                <p >{item.proPurpose}</p>
                <p >$ {item.proResult}</p>
               
            
                <button> <Link to ="/product" className="btn btn-danger" onClick={() => Delete(item._id)} >Delete </Link></button></th>
                           
                          
                </td>
                
                </thead>
                </table>  
                </div>
                </div>
                </div>
                </div>
           

                )}

                
        </div>
        
    )

}

export default DeleleOwnerProject;
