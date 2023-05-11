// Get the form element and the QR code element
const form = document.querySelector('form');
const qrCodeDiv = document.querySelector('#qrcode');

// Add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the input values from the form
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#TeamNumber').value.trim();
  const TeamName = document.querySelector('#TeamName').value.trim();
  const Weight = document.querySelector('#Weight').value.trim();
  const dimensions = document.querySelector('#dimensions').value.trim();
  const HasSwerve = document.querySelector('#HasSwerve').checked;
  const HiLowGears = document.querySelector('#HiLowGears').checked;
  const Limelight = document.querySelector('#limelight').checked;
  const AprilTags = document.querySelector('#AprilTags').checked;
  const comments = document.querySelector('#comments').value.trim();
  
  // Generate the data string to be encoded in the QR code
  const dataString = `name: ${name}\nTeamNumber: ${TeamNumber}\nTeamName: ${TeamName}Weight: ${Weight}\ndimensions: ${dimensions}\nHasSwerve: ${HasSwerve}\nHiLowGears: ${HiLowGears}\nlimelight: ${limelight}\nAprilTags: ${AprilTags}\ncomments: ${comments}`;
  
  // Generate the QR code using the QRCode.js library
  const qrcode = new QRCode(qrCodeDiv, {
    text: dataString,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});
