import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./styles/all.css";

function AllOwenerProject() {
  const[project, setProject] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    function getProject() {
      axios
        .get("http://localhost:8070/projectOwner/")
        .then(res => {
          setProject(res.data);
        })
        .catch(err => {alert(err)});
    }
    getProject();
  },[]);

  function Delete(id) {
    axios.delete(`http://localhost:8080/projectOwner/delete/${id}`).then((res) => {
      alert("Project Details Deleted")
    }).catch(err => {alert(err)});
  }

  const filteredCountrise = project.filter(std => {
    return (std.proName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.proCategory.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.proPurpose.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.proDuration.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.proResult.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

})
 

  return (
  <div className="containe">

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

  <h2 align="center">New Projets</h2>

  <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
              <form class="d-flex">
                  <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search"
                      onChange={e => setSearchTerm(e.target.value)} />
              </form>
          </div>
      </nav>
        <div className="table01">
      <table className="table table-bordered table-striped text-center">
            <thead className="thead-dark"><br/>
                <tr>
                    <th scope="col">#</th>
                    <th className="col" scope="col">Project Name</th>
                    <th className="col" scope="col">Project Category</th>
                    <th className="col" scope="col">Project Purpose</th>
                    <th className="col" scope="col">Project Duration</th>
                    <th className="col" scope="col">Project Result</th>
                    <th className="col" scope="col">Project Result Duration</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((project, index) => (
                    <tr key={index}>
                        <th className="cl1" scope="row">{index + 1}</th>
                        <td className="cl1">{project.proName}</td>
                        <td className="cl1">{project.proCategory}</td>
                        <td className="cl1">{project.proPurpose}</td>
                        <td className="cl1">{project.proDuration}</td>
                        <td className="cl1">{project.proResult}</td>
                        <td className="cl1">{project.proResultDuration}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <br /><br /><br />
      </div>);
}

export default AllOwenerProject;