import React from "react";

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="center ma mt4">
      <img alt="Analized result" src={imageURL} />
    </div>
  );
};

export default FaceRecognition;
