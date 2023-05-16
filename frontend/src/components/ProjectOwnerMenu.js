import React from "react";
import styles from "./styles/ProjectOwnerMenu.css"

function ProjectOwnerMenu() {
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
    </div>
    )

}

export default ProjectOwnerMenu;
