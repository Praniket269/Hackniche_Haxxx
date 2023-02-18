import MultiActionAreaCard from "./Blogs";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { NewNav } from "../HomePage/NewNav";

export default function Schemes() {
  return (
    <div>
      <NewNav />
      <div>
        <div className="row mx-0">
          <div className="col-md-6 bg-light">
            <div className="container text-end">
              <h3 className="my-4 text-3xl text-end pt-8">
                {" "}
                How do I center a div?{" "}
              </h3>
              <h6> Asked by Major Navjot Singh | 2023-03-04 </h6>
              <div className="row">
                <div className="col-2">
                  <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                </div>
                
                <div className="col-10">
                  <div className="container bg-light p-2">
                    I'm trying to center the newsslider (in the div
                    bottom-container) on this page:
                    http://www.luukratief-design.nl/dump/parallax/index.html I
                    already have text-align: center; Still it does not work. Any
                    suggestions?
                  </div>
                
                </div>
                <div className="col-2">
                  <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                </div>
                <div className="col-10 my-2">
                  <div className="container bg-light p-2">
                    I'm trying to center the newsslider (in the div
                    bottom-container) on this page:
                    http://www.luukratief-design.nl/dump/parallax/index.html I
                    already have text-align: center; Still it does not work. Any
                    suggestions?
                  </div>
                </div>
                <div className="col-2 my-2">
                  <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                </div>
                <div className="col-10">
                  <div className="container bg-light p-2">
                    I'm trying to center the newsslider (in the div
                    bottom-container) on this page:
                    http://www.luukratief-design.nl/dump/parallax/index.html I
                    already have text-align: center; Still it does not work. Any
                    suggestions?
                  </div>
                </div>
                <div className="col-2">
                  <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                </div>
                <div className="col-10 my-2">
                  <div className="container bg-light p-2">
                    I'm trying to center the newsslider (in the div
                    bottom-container) on this page:
                    http://www.luukratief-design.nl/dump/parallax/index.html I
                    already have text-align: center; Still it does not work. Any
                    suggestions?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <MultiActionAreaCard />
          </div>
        </div>
      </div>
    </div>
  );
}
