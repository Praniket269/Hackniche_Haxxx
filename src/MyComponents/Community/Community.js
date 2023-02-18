import { NewNav } from "../HomePage/NewNav";
import Faq from "./Faq";

export default function Community() {
  return (
    <div>
      <NewNav />
      <div className="row px-0 mx-0">
        <div className="col-3 px-0">
          <ol type="1" className="list-group_my-2">
            <div>
                <button className="btn btn-outline-success"><a href="https://www.desw.gov.in/prime-ministers-scholarship-scheme-pmss#:~:text=The%20Scheme%20was%20introduced%20in,month%20and%20is%20paid%20annually.">Prime Ministers scholarship scheme</a></button>
            </div>
            <br />
            <div>
                <button className="btn btn-outline-success"><a href="https://www.desw.gov.in/Self-Employment-Schemes-DGR">Self Employment options</a> </button>   
            </div>
            <br />
            <div>
                <button className="btn btn-outline-success"><a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1898821">Financial Assistance to institutions</a> </button> 
            </div>
          </ol>
          <div>
            <h2> FAQs </h2>
            <Faq />
          </div>
        </div>
        <div className="col-9 px-0">
          <div className="container">
            <h3 className="my-2"> Tier 1 </h3>
            <div className="row g-2">
              {[0, 1].map((item) => (
                <div key={item} class="col-6">
                  <div className="p-3 border bg-light">
                    Custom column padding
                  </div>
                </div>
              ))}
            </div>
            <h3 className="my-2"> Tier 2 </h3>
            <div class="row g-2">
              {[0, 1, 2, 3].map((item) => (
                <div className="col-6" key={item}>
                  <div className="p-3 border bg-light">
                    Custom column padding
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
