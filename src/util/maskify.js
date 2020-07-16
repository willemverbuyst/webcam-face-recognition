import * as faceapi from 'face-api.js';

const getOverlayValues = (landmarks) => {
  const nose = landmarks.getNose();
  const mouth = landmarks.getMouth();
  const leftEye = landmarks.getLeftEye();
  const rightEye = landmarks.getRightEye();
  const leftEyeBrow = landmarks.getLeftEyeBrow();
  const rightEyeBrow = landmarks.getRightEyeBrow();

  const mouthLeft = mouth[0];
  const mouthRight = mouth[6];
  const mouthMiddle = (mouthLeft.x + mouthRight.x) / 2;
  const mouthTop = mouth[17];
  const mouthScale = (mouthRight - mouthLeft) / 50;

  const noseBottom = nose[6];
  const noseMiddle = nose[0];

  const leftEyeLeft = leftEye[0];

  const rightEyeLeft = rightEye[0];

  const leftEyeBrowLeft = leftEyeBrow[0];

  const rightEyeBrowLeft = rightEyeBrow[0];

  return {
    mouth: {
      mouthMiddle: mouthMiddle - 25,
      mouthTop: mouthTop.y - 25,
      mouthScale: mouthScale,
    },
    nose: {
      noseBottom: noseBottom.y - 50,
      noseMiddle: noseMiddle.x - 25,
    },
    leftEye: {
      leftEyeLeft: leftEyeLeft.x - 15,
      leftEyeTop: leftEyeLeft.y - 25,
    },
    rightEye: {
      rightEyeLeft: rightEyeLeft.x - 15,
      rightEyeTop: rightEyeLeft.y - 25,
    },
    leftEyeBrow: {
      leftEyeBrowLeft: leftEyeBrowLeft.x,
      leftEyeBrowTop: leftEyeBrowLeft.y - 45,
    },
    rightEyeBrow: {
      rightEyeBrowLeft: rightEyeBrowLeft.x,
      rightEyeBrowTop: rightEyeBrowLeft.y - 35,
    },
  };
};

export async function maskify(
  mouth,
  nose,
  leftEye,
  rightEye,
  leftEyeBrow,
  rightEyeBrow
) {
  console.log('Maskify starting...');
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
  ]).catch((error) => {
    console.error(error);
  });

  console.log('models loaded');

  const items = document.querySelectorAll('.itemWithImg');

  items.forEach(async (item) => {
    const originalImage = item.querySelector('img');

    const handleImage = (oldImage, newImage) => async () => {
      const detection = await faceapi
        .detectSingleFace(newImage, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks(true);
      console.log(detection);
      if (!detection) {
        return;
      }

      const overlayValues = getOverlayValues(detection.landmarks);

      const mouthOverlay = document.createElement('img');
      const noseOverlay = document.createElement('img');
      const leftEyeOverlay = document.createElement('img');
      const rightEyeOverlay = document.createElement('img');
      const leftEyeBrowOverlay = document.createElement('img');
      const rightEyeBrowOverlay = document.createElement('img');

      mouthOverlay.src = mouth;
      noseOverlay.src = nose;
      leftEyeOverlay.src = leftEye;
      rightEyeOverlay.src = rightEye;
      leftEyeBrowOverlay.src = leftEyeBrow;
      rightEyeBrowOverlay.src = rightEyeBrow;

      mouthOverlay.alt = 'mouth overlay.';
      noseOverlay.alt = 'nose overlay.';
      leftEyeOverlay.alt = 'left eye overlay.';
      leftEyeOverlay.alt = 'right eye overlay.';
      leftEyeBrowOverlay.alt = 'left eye brow overlay.';
      rightEyeBrowOverlay.alt = 'right eye brow overlay.';

      mouthOverlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.mouth.mouthMiddle}px;
        top: ${overlayValues.mouth.mouthTop}px;
        transform: scale(${overlayValues.mouth.mouthScale}, ${overlayValues.mouth.mouthScale});
        padding: 2rem;
      `;
      noseOverlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.nose.noseMiddle}px;
        top: ${overlayValues.nose.noseBottom}px;
        padding: 2rem;
      `;
      leftEyeOverlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftEye.leftEyeLeft}px;
        top: ${overlayValues.leftEye.leftEyeTop}px;
        padding: 2rem;
      `;
      rightEyeOverlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.rightEye.rightEyeLeft}px;
        top: ${overlayValues.rightEye.rightEyeTop}px;
        padding: 2rem;
      `;
      leftEyeBrowOverlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftEyeBrow.leftEyeBrowLeft}px;
        top: ${overlayValues.leftEyeBrow.leftEyeBrowTop}px;
        padding: 2rem;
      `;
      rightEyeBrowOverlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.rightEyeBrow.rightEyeBrowLeft}px;
        top: ${overlayValues.rightEyeBrow.rightEyeBrowTop}px;
        padding: 2rem;
      `;

      item.appendChild(mouthOverlay);
      item.appendChild(leftEyeOverlay);
      item.appendChild(rightEyeOverlay);
      item.appendChild(leftEyeBrowOverlay);
      item.appendChild(rightEyeBrowOverlay);
      item.appendChild(noseOverlay);
    };

    // To avoid CORS issues we create a cross-origin-friendly copy of the image.
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', handleImage(originalImage, image));
    image.src = originalImage.src;
  });
}
