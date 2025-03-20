import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
export default function Header() {
  return (
    <section className="header">
      <div className="container">
        <p className="title mb-4">
          VirtualR build tools <span>for developers</span>
        </p>
        <p>
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="button p-3 d-flex justify-content-center align-items-center gap-3">
          <button className="btn start-free">Start for free</button>
          <button className="btn documentation">Documentation</button>
        </div>
        <div className="videos d-flex justify-content-center align-items-center gap-4 mt-5 mb-5 p-3">
          <video autoPlay loop muted className="w-50 rounded-1">
            <source src={video1} type="video/mp4" />
            <source src={video1} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted className="w-50 rounded-1">
            <source src={video2} type="video/mp4" />
            <source src={video2} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
