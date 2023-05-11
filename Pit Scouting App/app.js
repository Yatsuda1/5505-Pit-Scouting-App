// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the input values from the form
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const isAttending = document.querySelector('#isAttending').checked;
  const isVolunteering = document.querySelector('#isVolunteering').checked;
  const hasSpecialNeeds = document.querySelector('#hasSpecialNeeds').checked;
  const dietaryRestrictions = document.querySelector('#dietaryRestrictions').value.trim();
  
  // Generate the data string to be encoded in the QR code
  const dataString = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAttending: ${isAttending}\nVolunteering: ${isVolunteering}\nSpecial Needs: ${hasSpecialNeeds}\nDietary Restrictions: ${dietaryRestrictions}`;
  
  // Generate the QR code and display it on the page
  generateQRCode(dataString);
});

// Function to generate a QR code using the QRCode.js library
function generateQRCode(data) {
  // Get the QR code element
  const qrcode = document.querySelector('#qrcode');
  
  // Generate the QR code using the QRCode.js library
  new QRCode(qrcode, {
    text: data,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
