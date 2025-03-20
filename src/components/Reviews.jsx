import Review from "./Review";
import { reviews } from "../FeaturesData";
export default function Reviews() {
  return (
    <div className="reviews  mt-5 p-3">
      <div className="container">
        <p className="text-center title mb-5">What People are saying</p>
        <div className="row">
          {reviews.map((review, index) => {
            return (
              <div className="col-12 col-sm-6 col-lg-4 mb-3" key={index}>
                <Review review={review} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
