import { featuresData } from "../FeaturesData";
import Feature from "./Feature";
export default function Features() {
  return (
    <section className="features mb-4 ">
      <div className="container text-center">
        <span className="text-uppercase feature-logo mb-5 ">feature</span>
        <p className="title">
          Easy build <span>your code</span>
        </p>
        <div className="features-card mt-5 p-2">
          <div className="row">
            {featuresData.map((feature) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 " key={feature.id}>
                  <Feature feature={feature} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
