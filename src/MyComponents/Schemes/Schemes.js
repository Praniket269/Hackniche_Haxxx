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
                  {" "}
              </h3>
              <h6> How are the career opportunities for Army Officer ? </h6>
              <br/>
              <div className="row">
                <div className="col-2">
                  <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                </div>
                
                <div className="col-10">
                  <div className="container bg-light p-2">
                  An army officer has very good carrier opportunity. the focus should be on the army skills and good knowledge.
                  </div>
                
                </div>
                <div className="col-2">
                  <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                </div>
                <div className="col-10 my-2">
                  <div className="container bg-light p-2">
                  There are a lot of career opportunities for Army Officer talent. The focus should be on Army Officer skills and good theoretical knowledge. You can look for Army Officer jobs at http://www.cos.youth4work.com/jobs/full_time_jobs-in-world-for-Army-Officer.The average salaries for Army Officer where the min. being somewhere in the range of 2 and maximum 3 when all fresher job in Army Officer are identified over the past 2 years.

Good luck!
                  </div>

                
                </div>
                <br/>
                

                
                
                
                
                

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
