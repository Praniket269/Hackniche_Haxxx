import React from "react";
import { useNavigate } from "react-router";
import soldier from "./Assets/soldier.png";
import './Login.css'

export default function Login() {
  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

  return (
    <div className="mainLogin">
      <div className="container">
        <h1 className="text-center pt-20 display-4">Authentication </h1>
        <div className="m-16" style={{ marginLeft: "720px" }}>
          <img src={soldier} className="w-20 h-20" alt="soldier"/>
        </div>
        <div className="container w-50">
          <form onSubmit={redirect}>
            <div className="mb-3">
              <label className="text-lg">Jawaan ID</label>
              <input
                className="form-control mt-10"
                placeholder="Enter soldier Jawaan ID"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-outline-primary mt-10"
                // style={{ color: "blue", "&:hover": { color: "white" } }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
