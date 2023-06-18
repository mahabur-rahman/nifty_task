import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Home() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../data/computer.json"),
    });
  }, []);

  return (
    <container className="home">
      <h1 className="text-center mt-4">Welcome to home page</h1>
      <div
        ref={container}
        style={{ width: "500px", height: "500px" }}
        className="mx-auto"
      ></div>
    </container>
  );
}

export default Home;
