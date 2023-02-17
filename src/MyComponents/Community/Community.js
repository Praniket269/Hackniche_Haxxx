import { NewNav } from "../HomePage/NewNav";
import Faq from "./Faq";

export default function Community() {
  return (
    <div>
      <NewNav />
      <div className="row px-0 mx-0">
        <div className="col-3 px-0">
          <ul className="list-group my-2">
            {[1, 2, 3].map((item) => (
              <li key={item} className="list-group-item my-2">
                Scheme {item}
              </li>
            ))}
          </ul>
          <div>
            <p> FAQs </p>
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
