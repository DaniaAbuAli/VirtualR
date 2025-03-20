import code from "../assets/code.jpg";
import WorkflowFeatures from "./WorkflowFeatures";
import { items } from "../FeaturesData";
export default function WorkflowAccelerator() {
  return (
    <section className="content mt-5 mb-4 p-3">
      <div className="container">
        <p className="text-center title">
          Accelerate your <span>coding workflow.</span>
        </p>
        <div className="row mt-4">
          <div className="image col-12 col-lg-6 ">
            <img src={code} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            {items.map((item) => {
              return <WorkflowFeatures feature={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
