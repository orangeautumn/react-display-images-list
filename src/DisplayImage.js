import React from "react";
import PropTypes from "prop-types";

const DisplayImage = ({ imageObj }) => {
  return (
    <div>
      {imageObj && (
        <img
          src={imageObj.download_url}
          height="100px"
          width="100px"
          key={imageObj.id}
          alt={imageObj.author}
        />
      )}
    </div>
  );
};

DisplayImage.propTypes = {
  imageObj: PropTypes.object.isRequired
};

export default DisplayImage;
