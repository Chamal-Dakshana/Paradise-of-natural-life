import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const Activities = () => {
  const [adminproject, setAdminproject] = useState([]);
  //DELETE ACTIVITY BY ID
  const deleteAdminproject = (id) => {
    axios
      .delete(`http://localhost:8070/adminprojects/delete/${id}`)
      .then((res) => alert(res.data));
    setAdminproject(adminproject.filter((elem) => elem._id !== id));
  };

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8070/adminprojects")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  const filterdAdminproject = posts.filter((post) => {
    return post.aname.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <HeaderAdmin />

      <MainContainer>
        <div className="info">
          <div className="container">
            <input
              id="search-input"
              type="search"
              class="form-outline form-control"
              style={{
                width: "400px",
                marginlnlineStart: "14%",
                marginLeft: "990px",
                marginTop: "-75px",
                background: "#ADD8E6",
              }}
              placeholder="Search Project"
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="row my-3">
              <div className="col-sm-2">
                <Link to="/add-adminproject" className="btn btn-outline-secondary">
                  <i class="fas fa-plus">&nbsp;Add New Project</i>
                </Link>
              </div>
              <div className="col-sm-2">
                <Link
                  to="/adminproject-select"
                  className="btn btn-outline-secondary"
                >
                  Print Select Details
                </Link>
              </div>

              <div className="col-sm-2">
                <Link
                  to="/adminproject-details"
                  className="btn btn-outline-secondary"
                >
                  Print Project Details
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <Row xs={1} md={3} className="g-4" id="by">
              {filterdAdminproject.map((adminproject) => (
                <Col>
                  <div className="card-group py-3">
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <img
                        src={`/uploads/${adminproject.adminproject}`}
                        alt="..."
                        style={{
                          width: "100%",
                          MinHeight: "40%",
                          borderRadius: "10px",
                        }}
                      />

                      <Link
                        to={{
                          pathname: `/adminproject/${adminproject._id}`,
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;
                        <h2>&nbsp;{adminproject.aname}</h2>
                      </Link>
                      <h6>&nbsp;{adminproject.category}</h6>
                      <br />
                      <p>&nbsp;{adminproject.mindescription}</p>
                      <br />
                      <p>
                        <i className="fas fa-tag">&nbsp;{adminproject.price}</i>
                      </p>

                      <div className="row my-3">
                        &nbsp;&nbsp;&nbsp;
                        <div className="col-sm-2">
                          <Link
                            to={`/update/${adminproject._id}`}
                            className="btn btn-outline-success"
                          >
                            <i className="far fa-edit">
                              &nbsp;&nbsp;Edit  Project
                            </i>
                          </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-2">
                          <button
                            onClick={() => deleteAdminproject(adminproject._id)}
                            className="btn btn-outline-danger"
                          >
                            <i className="far fa-trash-alt">
                              &nbsp;&nbsp;Delete  Project
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Adminprojects;
//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 7rem 0;
`;
