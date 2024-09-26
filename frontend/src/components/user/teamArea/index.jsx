import { Link } from "react-router-dom";
import TeamArea from "./teamArea";

export default function Index() {
  return (
    <div className="team-area pt-65 pb-25">
      <div className="container">
        <div className="section-title-2 mb-45 wow tmFadeInUp">
          <h2>Meet Our Professionals</h2>
          <p>
            When your mission is to be better, faster and smarter, you need the
            best people driving your vision forward.{" "}
          </p>
        </div>
        <div className="row">
        {[...Array(8)].map((_, index) => (
                <TeamArea key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
