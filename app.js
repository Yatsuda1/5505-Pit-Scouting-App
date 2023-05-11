const submitBtn = document.getElementById('submit-btn');
const outputDiv = document.getElementById('output-div');

submitBtn.addEventListener('click', () => {
  const data = [];
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    data.push(inputs[i].value);
  }

  const qrCode = new QRCode(outputDiv, {
    text: data.join(','),
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
});
