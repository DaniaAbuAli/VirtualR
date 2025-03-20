export default function PricingCard(props) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check-circle2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title fw-light mb-3">
          {props.card.name} {props.id === 1 ? <span>(Most Popular)</span> : ""}
        </h2>
        <h2 className="price mb-3 fw-light">{props.card.price}</h2>
        <div className="features">
          {props.card.features.map((feature, index) => {
            return (
              <div className="feature d-flex gap-3" key={index}>
                <div className="icon">{icon}</div>
                <p>{feature}</p>
              </div>
            );
          })}
        </div>
        <a href="#" className="btn subscribe">
          Subscribe
        </a>
      </div>
    </div>
  );
}
