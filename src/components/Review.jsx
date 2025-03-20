export default function Review({ review }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text fw-lighter">{review.text}</p>
        <div className="reviewer-info d-flex gap-4 align-items-center">
          <img src={review.user} alt="" />
          <div className="name mt-3">
            <p className="fw-lighter">{review.name}</p>
            <p className="section-name">
              <i>{review.section}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
