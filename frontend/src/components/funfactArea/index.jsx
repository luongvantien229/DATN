import { Link } from "react-router-dom";
import CounterUp from "../../hooks/counterUp";

export default function ContactArea() {
  return (
    <div className="funfact-area pt-70 pb-35">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12 col-sm-6 wow tmFadeInUp">
            <div className="single-funfact text-center mb-30">
              <h2 className="count"><CounterUp end={1790} duration={2} /></h2>
              <span>Happy clients</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 col-sm-6 wow tmFadeInUp">
            <div className="single-funfact text-center mb-30">
              <h2 className="count"><CounterUp end={491} duration={2} /></h2>
              <span>Finished projects</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 col-sm-6 wow tmFadeInUp">
            <div className="single-funfact text-center mb-30">
              <h2 className="count"><CounterUp end={245} duration={2} /></h2>
              <span>Experts</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 col-sm-6 wow tmFadeInUp">
            <div className="single-funfact text-center mb-30">
              <h2 className="count"><CounterUp end={1090} duration={2} /></h2>
              <span>Posts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
