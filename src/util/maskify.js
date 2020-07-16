import * as faceapi from 'face-api.js';

const getOverlayValues = (landmarks) => {
  const nose = landmarks.getNose();
  const mouth = landmarks.getMouth();
  const leftEye = landmarks.getLeftEye();

  const mouthLeft = mouth[0];
  const mouthRight = mouth[6];
  const mouthMiddle = (mouthLeft.x + mouthRight.x) / 2;
  const mouthTop = mouth[17];
  const mouthScale = (mouthRight - mouthLeft) / 50;

  const noseBottom = nose[6];
  const noseMiddle = nose[0];

  const leftEyeLeft = leftEye[0];

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
      leftEyeLeft: leftEyeLeft.x - 25,
      leftEyeTop: leftEyeLeft.y - 25,
    },
  };
};

export async function maskify(mouth, nose, leftEye) {
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
    const scale = originalImage.width / originalImage.naturalWidth;

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

      mouthOverlay.src = mouth;
      noseOverlay.src = nose;
      leftEyeOverlay.src = leftEye;

      mouthOverlay.alt = 'mouth overlay.';
      noseOverlay.alt = 'nose overlay.';
      leftEyeOverlay.alt = 'nose overlay.';

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

      item.appendChild(mouthOverlay);
      item.appendChild(noseOverlay);
      item.appendChild(leftEyeOverlay);
    };

    // To avoid CORS issues we create a cross-origin-friendly copy of the image.
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', handleImage(originalImage, image));
    image.src = originalImage.src;
  });
}
