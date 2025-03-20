export default function WorkflowFeatures(props) {
  const { feature } = props;
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
    <div className="item d-flex gap-3 mt-4">
      <div className="icon">{icon}</div>
      <div className="text">
        <h5>{feature.title}</h5>
        <p>{feature.text}</p>
      </div>
    </div>
  );
}
