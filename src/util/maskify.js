import * as faceapi from 'face-api.js';

const getOverlayValues = (landmarks) => {
  const nose = landmarks.getNose();
  const jawline = landmarks.getJawOutline();
  const mouth = landmarks.getMouth();

  const mouthLeft = mouth[0];
  const mouthRight = mouth[6];
  const mouthMiddle = (mouthLeft.x + mouthRight.x) / 2;
  const mouthTop = mouth[17];
  const mouthScale = (mouthRight - mouthLeft) / 50;

  const noseBottom = nose[6];
  const noseMiddle = nose[0];

  const jawLeft = jawline[0];
  const jawRight = jawline.splice(-1)[0];
  const adjacent = jawRight.x - jawLeft.x;
  const opposite = jawRight.y - jawLeft.y;
  const jawLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
  console.log(nose);

  // Both of these work. The chat believes atan2 is better.
  // I don't know why. (It doesn’t break if we divide by zero.)
  // const angle = Math.round(Math.tan(opposite / adjacent) * 100)
  const angle = Math.atan2(opposite, adjacent) * (180 / Math.PI);
  const width = jawLength * 2.2;

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
    width,
    angle,
    leftOffset: jawLeft.x - width * 0.27,
    topOffset: nose[0].y - width * 0.47,
  };
};

export async function maskify(mouth, nose) {
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
      console.log(overlayValues.mouth.mouthScale);
      const mouthOverlay = document.createElement('img');
      const noseOverlay = document.createElement('img');

      mouthOverlay.src = mouth;
      noseOverlay.src = nose;
      mouthOverlay.alt = 'mouth overlay.';
      mouthOverlay.alt = 'nose overlay.';
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

      item.appendChild(mouthOverlay);
      item.appendChild(noseOverlay);
    };

    //     width: ${overlayValues.width * scale}px;

    // To avoid CORS issues we create a cross-origin-friendly copy of the image.
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', handleImage(originalImage, image));
    image.src = originalImage.src;
  });
}
