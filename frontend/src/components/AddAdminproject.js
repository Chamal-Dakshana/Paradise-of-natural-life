import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

function AddAdminproject() {
  let history = useHistory();
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
      .post(`http://localhost:8070/adminprojects/add/`, formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });

    history.push("/adminprojects");
    alert(" Project Added Successful");
  };

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
        <AddActivityContainer>
          <div className="info">
            <div
              className="container"
              style={{
                background: "#C9C0BB",
              }}
            >
              &nbsp;&nbsp;
              <h1>Add New Project </h1>
              <span className="message">{message}</span>
              <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="aname">Project Name</label>
                  <input
                    type="text"
                    value={aname}
                    onChange={(e) => setActivityName(e.target.value)}
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
                  <label htmlFor="mindescription">Min Description</label>
                  <textarea
                    value={mindescription}
                    onChange={(e) => setMindescription(e.target.value)}
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Price"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="file">Choose project image</label>
                  <input
                    type="file"
                    filename="activityImage"
                    className="form-control-file"
                    onChange={onChangeFile}
                  />
                </div>

                <div className="row">
                  <div className="flex-parent jc-center">
                    <button type="submit" className="btn btn-primary">
                      Post Project
                    </button>
                  </div>
                  <div
                    className="flex-parent jc-center"
                    style={{ align: "center" }}
                  >
                    <Link
                      to="/adminprojects"
                      type="submit"
                      className="btn btn-light"
                    >
                      Back to Projects
                    </Link>
                  </div>
                  &nbsp;&nbsp;
                </div>
              </form>
            </div>
          </div>
        </AddActivityContainer>
      </div>
    </div>
  );
}

export default AddActivity;

//MAIN CONTAINER
const AddActivityContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 75.25rem;
  margin: 3rem auto;
  padding: 4rem;
  h1 {
    font-weight: 900;
    color: #0b2545;
    text-align: center;
  }

  .btn-primary {
    margin-top: 2rem;
    background: #aeb4a9;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #9a8f97;
      justify-content: center;
    }
  }

  .btn-light {
    margin-top: 2rem;
    background: #7f7f7f;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #595959;
      justify-content: center;
    }
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }
`;
