import React, { useState } from "react";

const BigTable = () => {
  const [inputValue, setInputValue] = useState();
  const [inputValueLst, setInputValueLst] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    const enteredValue = event.target.value;
    setInputValue(enteredValue);
    // inputValueLst.push(enteredValue);
    // setInputValueLst([...inputValueLst]);
    setInputValueLst(inputValueLst.concat(enteredValue));
  };

  const removeLastItem = (event) => {
    event.preventDefault();
    const temp = inputValueLst.slice(0, -1);
    setInputValueLst(temp);
  };

  return (
    <div>
      This is Big Table
      <div>
        <label> Enter Value </label>
        <input value={inputValue} onChange={(event) => handleChange(event)} />
      </div>
      {inputValueLst?.length > 0 && (
        <div>
          <label> Enterd values list </label>
          <div>
            <button onClick={(event) => removeLastItem(event)}>
              Remove last Element
            </button>
          </div>
          {inputValueLst?.map((item) => (
            <tr> {item} </tr>
          ))}
        </div>
      )}
    </div>
  );
};

export default BigTable;
