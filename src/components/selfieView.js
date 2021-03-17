import React, { useState, use } from 'react';
import { Camera } from './Camera';


const SelfieView = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <div className="App">
      {isCameraOpen && (
        <Camera
          onCapture={blob => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}

      {cardImage && (
        <div>
          <h2>Preview</h2>
          <img style={{ width: '100%', height: 'auto' }} src={cardImage && URL.createObjectURL(cardImage)} />
        </div>
      )}
      <div>
        <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
        <button
          onClick={() => {
            setIsCameraOpen(false);
            setCardImage(undefined);
          }}
        >
          Close Camera
          </button>
      </div>
    </div>
  );
}

export default SelfieView;
