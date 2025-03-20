import PricingCard from "./PricingCard";
import { cardsDetails } from "../FeaturesData";
export default function Pricing() {
  return (
    <section className="pricing mt-5 p-3">
      <div className="container">
        <p className="text-center title">Pricing</p>
        <div className="row">
          {cardsDetails.map((card, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 cards" key={index}>
                <PricingCard card={card} id={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
