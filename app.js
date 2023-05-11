function generateQR() {
  var scout = document.getElementById("scout").value;
  var teamNumber = document.getElementById("team-number").value;
  var teamName = document.getElementById("team-name").value;
  var botWeight = document.getElementById("bot-weight").value;
  var botDimensions = document.getElementById("bot-dimensions").value;
  var swerveDrive = document.getElementById("swerve-drive").checked ? "yes" : "no";
  var highLowGear = document.getElementById("high-low-gear").checked ? "yes" : "no";
  var limelight = document.getElementById("limelight").checked ? "yes" : "no";
  var aprilTags = document.getElementById("april-tags").checked ? "yes" : "no";
  var comments = document.getElementById("comments").value;

  var data = {
    scout,
    teamNumber,
    teamName,
    botWeight,
    botDimensions,
    swerveDrive,
    highLowGear,
    limelight,
    aprilTags,
    comments
  };

  var qrCodeDiv = document.getElementById("qrcode");
  qrCodeDiv.innerHTML = ""; // Clear previous QR code if any
  new QRCode(qrCodeDiv, {
    text: JSON.stringify(data),
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
