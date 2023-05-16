import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const EditActivity = (props) => {
  const [pname, setAdminprojectName] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("pname", pname);
    formData.append("category", category);
    formData.append("details", details);
    formData.append("purpose", purpose);
    formData.append("duration", duration);
    formData.append("activityImage", fileName);
    formData.append("result", result);
    formData.append("date", date);

    setAdminprojectName("");
    setCategory("");
    setDetails("");
    setPurpose("");
    setDuration("");
    setResult("");
    setDate("");

    axios
      .put(
        `http://localhost:8070/adminprojects/update/${props.match.params.id}`,
        formData
      )
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
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
      <div
        className="background"
        style={{
          background:
            "url(https://previews.123rf.com/images/wstockstudio/wstockstudio1707/wstockstudio170700176/82195391-accessories-for-travel-top-view-on-white-wooden-background-with-copy-space-adventure-and-wanderlust-.jpg)",
        }}
      >
        <HeaderAdmin />
        <AddAdminprojectContainer>
          <div className="info">
            <div className="container" style={{ background: "#78866B" }}>
              &nbsp;&nbsp;
              <h1>Admin Update Project </h1>
              <span className="message">{message}</span>
              <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="aname">Project Name</label>
                  <input
                    type="text"
                    value={pname}
                    onChange={(e) => setAdminprojectName(e.target.value)}
                    className="form-control"
                    placeholder="Project Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    placeholder="Category"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="details">Details</label>
                  <textarea
                    value={details}
                    onChange={(e) => setMindescription(e.target.value)}
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="purpose">Purpose</label>
                  <textarea
                    value={purpose}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Duration"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="file">Choose project image</label>
                  <input
                    type="file"
                    filename="adminprojectImage"
                    className="form-control-file"
                    onChange={onChangeFile}
                  />
                </div>
                  <div className="form-group">
                  <label htmlFor="result">Result</label>
                  <textarea
                    value={result}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <div className="flex-parent jc-center">
                  <button type="submit" className="btnbb" style={{borderRadius: "8px"}}>
                    Update Project
                  </button>
                </div>
                <div className="flex-parent jc-center" >
                  <Link
                    to="/adminprojects"
                    type="submit"
                    className="btnaa"
                    style={{ color: "#000000" }}
                  >
                    <i class="fas fa-hand-point-left">&nbsp;Back to Projects</i>
                  </Link>
                </div>
                &nbsp;&nbsp;
              </form>
            </div>
          </div>
        </AddAdminprojectContainer>
      </div>
    </div>
  );
};

export default EditAdminproject;

//MAIN CONTAINER
const AddAdminprojectContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 75.25rem;
  margin: 3rem auto;
  padding: 4rem;

  h1 {
    font-weight: 900;
    text-align: center;
  }

  .btnbb {
    margin-top: 2rem;
    background: #e5e4e2;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #c9c0bb;
      justify-content: center;
    }
  }

  .btnaa {
    margin-top: 2rem;
    background: #b6b6b4;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #838996;
      justify-content: center;
    }
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }

  h1 {
    font-weight: 900;
    color: #000000;
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }
`;
