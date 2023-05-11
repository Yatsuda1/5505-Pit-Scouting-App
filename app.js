const submitButton = document.getElementById("submit-button");
const outputDiv = document.getElementById("output-div");

submitButton.addEventListener("click", function() {
  const textBoxes = document.querySelectorAll("input[type='text']");
  const checkBoxes = document.querySelectorAll("input[type='checkbox']");
  let data = "";

  textBoxes.forEach((textBox) => {
    data += `${textBox.value}\n`;
  });

  checkBoxes.forEach((checkBox) => {
    data += `${checkBox.checked ? "Yes" : "No"}\n`;
  });

  const qrCode = new QRCode(outputDiv, {
    text: data,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
