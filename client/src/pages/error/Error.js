import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Link } from "react-router-dom";

function Error() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../data/error.json"),
    });
  }, []);

  return (
    <container className="error">
      <div
        ref={container}
        style={{ width: "500px", height: "500px" }}
        className="mx-auto"
      ></div>

      <div className="text-center">
        <Link to={`/`} className="btn btn-primary">
          Back to Home page
        </Link>
      </div>
    </container>
  );
}

export default Error;
