/* eslint-disable react/prop-types */
import { useState } from "react";

const ModalImage = ({ src, className, modalSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <img
        src={src}
        className={className}
        alt="thumbnail"
        onClick={openModal}
      />

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
