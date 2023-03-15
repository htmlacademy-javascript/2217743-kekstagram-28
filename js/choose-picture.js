const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('#upload-file');
const imgFile = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const isValid = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (isValid) {
    imgFile.src = URL.createObjectURL(file);
  }
});
