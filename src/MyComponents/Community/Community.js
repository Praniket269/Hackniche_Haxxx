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
            <h1 className="my-3 py-4"> Government Schemes for Servicemen </h1>
            {/* <div className="row g-2">
              {[0, 1].map((item) => (
                <div key={item} class="col-6">
                  <div className="p-3 border bg-light">
                    Custom column padding
                  </div>
                </div>
              ))}
            </div> */}
            <div className="App1 my-1">
      <table>
        <tr>
          <th>Schemes provided</th>
          <th>beneficiary Amount</th>
        </tr>
        <tr>
          <td>Penury Grant (65 Yrs)</td>
          <td>4,000/-pm</td>
        </tr>
        <tr>
          <td>Education Grant</td>
          <td>Rs.1000/- per month per head for the previous academic year. Payable in one instalment in a financial year. </td>
        </tr>
        <tr>
          <td>Officer Cadet Grant </td>
          <td>Rs.1,000/- per month per child of an eligible ESM/widow. Payable in one instalment, on successful completion of two terms in a year. </td>
        </tr>
        <tr>
          <td>Disabled Children Grant</td>
          <td>Rs 3,000/- per month, payable on monthly basis.</td>
        </tr>
        <tr>
          <td>Daughter’s Marriage and Widow Re-Marriage Grant (02 Daughters)</td>
          <td>50,000/-</td>
        </tr>
        <tr>
          <td>Medical Grant</td>
          <td>30,000/- (Max)</td>
        </tr>
        <tr>
          <td>Penury Grant (65 Yrs)</td>
          <td>4,000/-pm</td>
        </tr>
      </table>
    </div>
            {/* <h3 className="my-2"> Tier 2 </h3> */}
            {/* <div class="row g-2">
              {[0, 1, 2, 3].map((item) => (
                <div className="col-6" key={item}>
                  <div className="p-3 border bg-light">
                    Custom column padding
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
