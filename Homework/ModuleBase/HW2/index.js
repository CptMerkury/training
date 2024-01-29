const input = document.getElementById('input');
const canvas = document.getElementById('canvas');
const grayScale = document.getElementById('gray');
const inversion = document.getElementById('inversion');
const reset = document.getElementById('reset');
input.addEventListener('change', (e) => fileReader(e))
grayScale.addEventListener('click', () => setFilter('GRAYSCALE'))
inversion.addEventListener('click', () => setFilter('INVERSION'))
reset.addEventListener('click', () => setFilter('RESET'))

const context = canvas.getContext('2d')
let origin;

function fileReader(e) {
  const file = e.target.files[0]
  canvasLoad(file)
}

function canvasLoad(data) {
  const image = new Image()
  image.src = URL.createObjectURL(data)
  image.onload = () => {
    origin = image;
    context.drawImage(image, 0, 0)
  }
}

function setGrayScale(imageData) {
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  context.putImageData(imageData, 0, 0)
}
function setInversion(imageData) {
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }
  context.putImageData(imageData, 0, 0)
}
function resetFilter() {
  context.drawImage(origin, 0, 0)
}

function setFilter(filter) {
  const imageData = context.getImageData(0, 0, 600, 600);
  switch (filter) {
    case 'GRAYSCALE':
      setGrayScale(imageData);
      break;
    case 'INVERSION':
      setInversion(imageData);
      break;
    case 'RESET':
      resetFilter();
      break;
  }
}