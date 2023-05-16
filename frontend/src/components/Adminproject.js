import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const Activity = (props) => {
  const [pname, setAdminprojectName] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    //REQUEST THE DATA FROM A SERVER AND SET DATA TO ACTIVITY ARRAY
    axios
      .get(`http://localhost:8070/adminprojects/${props.match.params.id}`)
      .then((res) => [
        setAdminprojectName(res.data.pname),
        setCategory(res.data.category),
        setDetails(res.data.details),
        setPurpose(res.data.purpose),
        setDuration(res.data.duration),
        setFileName(res.data.projectImage),
        setResult(res.data.result),
        setDate(res.data.date),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <MainContainer>
        <div className="info">
          <h2>{pname}</h2>
          <img
            src={`/uploads/${fileName}`}
            alt="..."
            style={{ margin: "0 auto", width: "70%", display: "flex" }}
          />
          <br />
          <h6 style={{ title: "text-muted" }}>{category}</h6>
          <br />
          <h6 style={{ title: "text-muted" }}>{duration}</h6>
          <br />
          <p>{ purpose}</p>
          <br/>
          <p>{details}</p>
          <p>
            <i class="fas fa-tag">{result}</i>
          </p>
          <br />
          <p>{date}</p>

          <Link to="/adminprojects" type="submit" className="btn btn-primary">
            Back to Project Page
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};

export default Adminproject;

//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: #13315c;
  }

  .btn-primary {
    background: #16262e;
    width: 11rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #cccccc;
    }
  }
`;
