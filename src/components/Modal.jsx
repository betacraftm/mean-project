/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ModalImage = ({ src, className, modalSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
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
          <img
            src={src}
            className={className}
            alt="thumbnail"
            onClick={openModal}
          />
        </ScrollAnimation>
      ) : (
        <img
          src={src}
          className={className}
          alt="thumbnail"
          onClick={openModal}
        />
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="fixed right-0 top-0 m-4 cursor-pointer text-3xl font-bold text-white"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={modalSrc}
              alt="modal content"
              className="max-h-[90vh] max-w-[90vw] object-contain p-10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalImage;
