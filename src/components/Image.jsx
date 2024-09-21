/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Image = ({ src, className }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {windowWidth >= 1440 ? (
        <ScrollAnimation
          animateIn="animate__animated animate__fadeInUp"
          animateOnce
        >
          <img src={src} className={className} alt="thumbnail" />
        </ScrollAnimation>
      ) : (
        <img src={src} className={className} alt="thumbnail" />
      )}
    </div>
  );
};

export default Image;
