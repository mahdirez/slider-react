import React, { useState } from "react";
import data from "../data";
function Item() {
  const [index, setIndex] = useState(0);
  const { image, job, text, name } = data[index];

  const nextItem = () => {
    setIndex((e) => {
      const next = e + 1;
      return checkIndex(next);
    });
  };
  const prevItem = () => {
    setIndex((e) => {
      const prev = e - 1;
      return checkIndex(prev);
    });
  };

  function checkIndex(number) {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    }
    return number;
  }

  function randomIndex() {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkIndex(random));
  }

  return (
    <div className="w-60 flex flex-col gap-2 items-center mt-5 bg-slate-200 rounded-xl p-5 lg:w-96  ">
      <img src={image} className="w-20 h-20 rounded-full" />
      <p className="text-lg mt-2">{name}</p>
      <h4 className="text-red-500 mt-2">{job}</h4>
      <small className="text-gray-500 mt-5">{text}</small>
      <button
        className="bg-red-500 p-2 text-white rounded-md mt-7"
        onClick={randomIndex}
      >
        رندوم
      </button>
      <div className="flex gap-44  mt-7 text-2xl text-red-500 lg:gap-72">
        <button onClick={nextItem}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
        <button onClick={prevItem}>
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
