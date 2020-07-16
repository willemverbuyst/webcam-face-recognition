import React from 'react';
import Webcam from 'react-webcam';

function WebcamCapture() {
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 400 },
    aspectRatio: 0.6666666667,
  };

  const webcamRef = React.useRef(null);
  const [imageSrc, setImageSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef, setImageSrc]);

  return (
    <div>
      <button onClick={capture}>Capture photo</button>
      <div style={{ display: 'flex' }}>
        <div>
          <Webcam
            videoConstraints={videoConstraints}
            width={300}
            height={450}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            imageSmoothing={true}
            id="webcam"
          />
        </div>
        <div className="itemWithImg">
          {imageSrc && (
            <img
              id="webcam-image"
              src={imageSrc}
              alt="a screenshot of your face"
              style={{ width: 300, height: 450 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default WebcamCapture;