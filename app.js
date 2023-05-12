// create references to the form elements
const scoutInput = document.getElementById('scout-input');
const teamNumInput = document.getElementById('team-num-input');
const teamNameInput = document.getElementById('team-name-input');
const weightInput = document.getElementById('weight-input');
const dimensionsInput = document.getElementById('dimensions-input');
const swerveDriveInput = document.getElementById('swerve-drive-input');
const highLowGearInput = document.getElementById('high-low-gear-input');
const limelightInput = document.getElementById('limelight-input');
const aprilTagsInput = document.getElementById('april-tags-input');
const commentsInput = document.getElementById('comments-input');
const qrCodeDiv = document.getElementById('qrcode');

// add event listener to the form
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submit behavior

  // create an object to store form data
  const formData = {
    scout: scoutInput.value,
    teamNum: teamNumInput.value,
    teamName: teamNameInput.value,
    weight: weightInput.value,
    dimensions: dimensionsInput.value,
    swerveDrive: swerveDriveInput.checked,
    highLowGear: highLowGearInput.checked,
    limelight: limelightInput.checked,
    aprilTags: aprilTagsInput.checked,
    comments: commentsInput.value,
  };

  // generate QR code
  const qrCode = new QRCode(qrCodeDiv, {
    text: JSON.stringify(formData),
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });

  // clear form inputs
  scoutInput.value = '';
  teamNumInput.value = '';
  teamNameInput.value = '';
  weightInput.value = '';
  dimensionsInput.value = '';
  swerveDriveInput.checked = false;
  highLowGearInput.checked = false;
  limelightInput.checked = false;
  aprilTagsInput.checked = false;
  commentsInput.value = '';
});
