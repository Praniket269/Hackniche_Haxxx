import React from "react";
import { useNavigate } from "react-router";
import soldier from "./Assets/soldier.png";

export default function Login() {
  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center"> Login </h2>
      <div className="m-16" style={{ marginLeft: "720px" }}>
        <img src={soldier} alt="soldier" />
      </div>
      <div className="container w-50">
        <form onSubmit={redirect}>
          <div className="mb-3">
            <label>Jawaan ID</label>
            <input
              className="form-control"
              placeholder="Enter soldier Jawaan ID"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              // style={{ color: "blue", "&:hover": { color: "white" } }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
