import JobCard from "./JobCard";
import { useState } from "react";
import { NewNav } from "./NewNav";

export default function JobPage() {
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");
  const [active3, setActive3] = useState("");
  const [active4, setActive4] = useState("");
  const [active5, setActive5] = useState("");

  function change1() {
    setActive1("active");
    setActive2("");
    setActive3("");
    setActive4("");
    setActive5("");
  }

  function change2() {
    setActive2("active");
    setActive1("");
    setActive3("");
    setActive4("");
    setActive5("");
  }

  function change3() {
    setActive3("active");
    setActive1("");
    setActive2("");
    setActive4("");
    setActive5("");
  }

  function change4() {
    setActive4("active");
    setActive1("");
    setActive2("");
    setActive3("");
    setActive5("");
  }

  function change5() {
    setActive5("active");
    setActive1("");
    setActive2("");
    setActive4("");
    setActive3("");
  }

  return (
    <div>
      <NewNav />
      <div className="container">
        <ul className="nav nav-pills nav-justified my-2">
          <li className="nav-item">
            <a
              className={`nav-link ${active1}`}
              onClick={change1}
              aria-current="page"
              href="#"
            >
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active2}`}
              onClick={change2}
              aria-current="page"
              href="#"
            >
              Sales
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active3}`}
              onClick={change3}
              aria-current="page"
              href="#"
            >
              Marketing
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active4}`}
              onClick={change4}
              aria-current="page"
              href="#"
            >
              Business administration
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${active5}`}
              onClick={change5}
              aria-current="page"
              href="#"
            >
              Nursing
            </a>
          </li>
        </ul>
        <JobCard />
      </div>
    </div>
  );
}
