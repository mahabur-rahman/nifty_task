import React, { useContext, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { UserContext } from "../../context/Context";
import { Container } from "react-bootstrap";

const Home = () => {
  const { user } = useContext(UserContext);
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
    <Container className="home">
      {user ? (
        <>
          <h1 className="text-center mt-4 text-capitalize">
            Welcome <span style={{ color: "green" }}>{user?.name}</span>
          </h1>
          <div className="mx-2 text-center">
            (Date of Birth: {new Date(user?.dateOfBirth).toDateString()})
          </div>
        </>
      ) : (
        <div className="text-center mt-5 pt-5">
          <h1>
            Better Solutions For Your Business <br /> With NIFTY IT SOLUTION.
          </h1>
          <p>
            We are team of talented Accountant, Web & Mobile App Developers.
          </p>
        </div>
      )}

      <div ref={container} style={{ width: "700px" }} className="mx-auto"></div>
    </Container>
  );
};

export default Home;
