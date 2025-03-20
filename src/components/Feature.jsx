export default function Feature({ feature }) {
  return (
    <div className="feature d-flex gap-3 text-start  mt-4 mb-5">
      <div className="icon">{feature.icon}</div>
      <div className="text">
        <h6 className="text-light">{feature.title}</h6>
        <p className="mt-4">{feature.text}</p>
      </div>
    </div>
  );
}
