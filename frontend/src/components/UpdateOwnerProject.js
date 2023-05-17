import React, { useState, useEffect } from "react"
import { useNavigate} from 'react-router-dom';
import axios from "axios";

function UpdateOwnerProject() {

    const navigate = useNavigate();
    const{id} = useNavigate();
    

    const [project, editProject] = useState({
        proName: "",
        proCategory: "",
        proPurpose: "",
        proDuration: "",
        proResult: "",
        proResultDuration: ""
       
    });

    const {
        proName,
        proCategory,
        proPurpose,
        proDuration,
        proResult,
        proResultDuration
    } = project;

    const onInputChange = (e, input_field) => { 
        editProject({ ...project, [input_field]:  e.target.value });
}

async function onSubmit(e) {
    e.preventDefault();

    await axios.put(`http://localhost:8070/projectOwner/update/${id}`, project)
            .then(res => {
                alert("Successfully Updated");
                navigate('/product');
            })
            .catch(err => { alert(err) });

    }

    const loadproject = async () => {
        const res = await axios.get
            (`http://localhost:8070/projectOwner/get/${id}`)
            editProject(res.data.project)
    };
    useEffect(() => {
        loadproject();
    }, []);


    return(
        <div className="container">
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
                    <a className="nav-link" aria-current="page" href="/updateOwnerProject">Update Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/deleteOwnerProject">Delete Project</a>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </nav>
            <form onSubmit={onSubmit}>
            <h2>Edit Items</h2>&nbsp;
                <div className="form-group">
                    <label for="product_name">Item Name</label>
                    <input type="text" className="form-control" id="product_name" defaultValue={proName}
                    onChange={e => onInputChange(e, "product_name")}
                    /> 
                </div>

                <div className="form-group">
                    <label for="model_number">Model Number</label>
                    <input type="text" className="form-control" id="model_number" defaultValue={proCategory}
                    onChange={e => onInputChange(e, "model_number")}
                    />
                </div>

                <div className="form-group">
                    <label for="category">Category</label>
                    <input type="text" className="form-control" id="category" defaultValue={proPurpose}
                    onChange={e => onInputChange(e, "category")}
                    />
                </div>

                <div className="form-group">
                    <label for="specifications">Specifications</label>
                    <input type="text" className="form-control" id="specifications" defaultValue={proDuration}
                    onChange={e => onInputChange(e, "specifications")}
                    />
                </div>

                <div className="form-group">
                    <label for="supplier">Supplier</label>
                    <input type="text" className="form-control" id="supplier" defaultValue={proResult}
                    onChange={e => onInputChange(e, "supplier")}
                    />
                </div>

                <div className="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" className="form-control" id="quantity" defaultValue={proResultDuration}
                    onChange={e => onInputChange(e, "quantity")}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>

                </form>
        </div>
    )

}




export default UpdateOwnerProject;

    