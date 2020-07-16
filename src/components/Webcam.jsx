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
        <div style={{ padding: '2rem' }}>
          <Webcam
            videoConstraints={videoConstraints}
            width={300}
            height={450}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            imageSmoothing={true}
            mirrored={true}
          />
        </div>
        <div className="itemWithImg" style={{ padding: '2rem' }}>
          {imageSrc && (
            <img
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
