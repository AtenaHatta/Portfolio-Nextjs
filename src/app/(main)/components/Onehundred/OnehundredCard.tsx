import React, { useState } from 'react';
import Image from 'next/image';
import { OneCard } from './Onedata';

type OneCardProps = {
  card: OneCard;
};

export default function OnehundredCard({ card }: OneCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    document.body.style.overflow = modalVisible ? 'auto' : 'hidden';
  };

  if (!card) {
    return <div>No card data</div>;
  }

  return (
    <div>
      <div
        onClick={toggleModal}
        className="w-[50px] h-[50px] md:w-[200px] md:h-full max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      >
        <Image
          className="rounded-t-lg"
          src={card.image}
          alt={card.title}
          width={200}
          height={200}
        />
      </div>

      {modalVisible && (
  <div className="fixed top-0 left-0 flex items-center justify-center px-3 w-full h-full z-50">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="relative z-50 bg-white w-full max-w-2xl rounded-lg shadow-lg dark:bg-gray-700">
      {/* Modal content */}
      <div className="relative">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {card.title}
          </h3>
          <button
            onClick={toggleModal}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <Image
              className="rounded-t-lg"
              src={card.image}
              alt={card.title}
              width={250}
              height={250}
            />
          </div>
          <p className="text-lg leading-relaxed text-white">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
