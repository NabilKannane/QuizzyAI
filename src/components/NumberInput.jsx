import React, { useState , useEffect} from "react";

function NumberInput({ onChange, numberqst }) {
  const [number, setNumber] = useState(numberqst);

  useEffect(() => {
    onChange(number);

  }, [number])
  
  const handleNumber = (event) => {
    setNumber(Number(event.target.value));
  };

  const increment = () => {
    if (!number) {
      setNumber(0);
    }
    setNumber((prevTopic) => prevTopic + 1);
  };

  const decrement = () => {
    if (!number) {
      setNumber(0);
    }
    setNumber((prevTopic) => (prevTopic > 0 ? prevTopic - 1 : 0));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative flex items-center">
        <button
          className="bg-neutral-900 shadow-slate-800 shadow-md  text-white rounded-l-md px-4 py-2"
          onClick={decrement}
        >
          -
        </button>
        <input
          className="h-12 w-4/5 pl-12 pr-12 shadow-slate-800 shadow-md rounded-none bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] text-center text-slate-200 transition-all duration-500 placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none "
          placeholder="Number of Questions"
          type="number"
          required="true"
          value={number}
          onChange={handleNumber}
          style={{ appearance: "textfield" }}
        />
        <button
          className="bg-neutral-900 shadow-slate-800 shadow-md  text-white rounded-r-md px-4 py-2"
          onClick={increment}
        >
          +
        </button>
      </div>
      <style jsx>{`
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }

        input[type="number"]::-moz-focus-inner {
          border: 0;
        }
      `}</style>
    </div>
  );
}

export default NumberInput;
