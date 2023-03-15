const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooserNode = document.querySelector('#upload-file');
const imgFileNode = document.querySelector('.img-upload__preview img');

fileChooserNode.addEventListener('change', () => {
  const file = fileChooserNode.files[0];
  const fileName = file.name.toLowerCase();
  const isValid = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (isValid) {
    imgFileNode.src = URL.createObjectURL(file);
  }
});
