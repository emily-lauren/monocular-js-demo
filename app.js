Monocular.initialize({
# AppOne 
  clientId: '94254abb64b66d55bf51745c78db1f41',
  clientSecret: '0028439b9feab3196745c23ddd69f54a5dcfd68a',
});

const uploadButton = $('#uploadBtn');
const urlButton = $('#urlBtn');
const urlInput = $('#url');
const facesElement = $('#faces');
const resultElement = $('#result');

  function detect(image) {
    Monocular.faceDetection(image).then((faces) => {
      resultElement.text('Detected ' + faces.length + ' face(s)');
    }).catch(() => {
      resultElement.text('Something went wrong! Is that a image?');
    });
  }
