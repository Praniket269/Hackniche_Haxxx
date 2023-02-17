export default function JobCard() {
  return (
      <div className="row px-3">
        <div className="card col mx-2">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <span className="badge rounded-pill bg-primary mx-1">Tag 1</span>
              <span className="badge rounded-pill bg-primary mx-1">Tag 2</span>
              <span className="badge rounded-pill bg-primary mx-1">Tag 3</span>
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="card col mx-2">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <span className="badge rounded-pill bg-primary mx-1">Tag 1</span>
              <span className="badge rounded-pill bg-primary mx-1">Tag 2</span>
              <span className="badge rounded-pill bg-primary mx-1">Tag 3</span>
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
