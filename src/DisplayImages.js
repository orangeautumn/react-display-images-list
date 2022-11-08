import React, { useEffect, useState } from "react";
import DisplayImage from "./DisplayImage";

const DisplayImages = () => {
  const [imageList, setImageList] = useState([]);
  const [inputImageId, setInputImageId] = useState(0);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((resp) => {
        //  console.log(resp);
        return resp.json();
      })
      .then((imageLstResp) => {
        console.log(imageLstResp);
        setImageList(imageLstResp);
      });
  }, []);

  const handleInputImage = (event) => {
    event.preventDefault();
    setInputImageId(event.target.value);
  };

  const handleNext = (event) => {
    event.preventDefault();
    const next = inputImageId === imageList.length ? 0 : inputImageId + 1;
    console.log("next-->", next);
    setInputImageId(next);
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    const prev = inputImageId === 0 ? imageList.length - 1 : inputImageId - 1;
    console.log("prev-->", prev);

    setInputImageId(prev);
  };

  return (
    <div>
      <label> Enter Image ID </label>
      <input
        value={inputImageId}
        onChange={(event) => handleInputImage(event)}
      />

      <div>
        <button
          onClick={(event) => handlePrevious(event)}
          // disabled={inputImageId === 0}
        >
          Previous
        </button>

        <button
          onClick={(event) => handleNext(event)}
          // disabled={inputImageId === imageList.length}
        >
          Next
        </button>
      </div>

      <DisplayImage imageObj={imageList[inputImageId]} />
    </div>
  );
};

export default DisplayImages;
