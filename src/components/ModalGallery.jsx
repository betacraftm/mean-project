/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ModalGallery = ({ src, className, modalSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setIndex(0);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [index]);

  const nextImg = () => {
    if (index === modalSrc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  console.log(imageRefs.current);

  const prevImg = () => {
    if (index === 0) {
      setIndex(modalSrc.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A2A2A] bg-opacity-95">
          <div className="relative">
            <button
              className="fixed right-0 top-0 z-10 m-4 cursor-pointer text-3xl font-bold text-white"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="fixed inset-y-0 right-1 cursor-pointer text-xl text-white sm:right-[6px] sm:text-3xl"
              onClick={nextImg}
            >
              <FaCaretRight />
            </button>
            <button
              className="fixed inset-y-0 left-1 cursor-pointer text-xl text-white sm:left-[6px] sm:text-3xl"
              onClick={prevImg}
            >
              <FaCaretLeft />
            </button>
            <div className="mx-auto flex max-h-[70vh] w-5/6 flex-row gap-4">
              <img
                src={modalSrc[index]}
                alt="modal content"
                className="aspect-video max-h-[90vh] w-full rounded-lg object-cover sm:w-3/4"
              />
              <div
                className="hidden w-1/4 snap-y flex-col gap-4 overflow-y-scroll sm:flex"
                id="images_container"
              >
                {modalSrc.map((imgSrc, i) => {
                  return (
                    <img
                      key={i}
                      src={imgSrc}
                      alt="modal content"
                      ref={(el) => (imageRefs.current[i] = el)}
                      onClick={() => setIndex(i)}
                      className={`aspect-video w-full cursor-pointer snap-start rounded-lg object-cover ${i === index && "border-[3px] border-white"}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalGallery;
