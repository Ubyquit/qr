const qrCodeEl = document.getElementById("qrcode");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const colorInput = document.getElementById("color-input");

function downloadQRCode() {
  const qrCodeDataUrl = qrCodeEl.querySelector("img").src;
  const downloadLink = document.createElement("a");
  downloadLink.href = qrCodeDataUrl;
  downloadLink.download = "qr-code.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function generateQRCode(url, color) {
  qrCodeEl.innerHTML = ""; // Borramos cualquier QR previo
  if (url) {
    // Utilizamos la librería qrcode.js para generar el código QR
    const qrCode = new QRCode(qrCodeEl, {
      text: url,
      width: 500,
      height: 500,
      colorDark: color,
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    downloadBtn.disabled = false;
  } else {
    qrCodeEl.innerHTML = "";
    downloadBtn.disabled = true;
  }
}

generateBtn.addEventListener("click", () => {
  const url = document.getElementById("url").value;
  const color = colorInput.value.toString();
  generateQRCode(url, color);
});

downloadBtn.addEventListener("click", () => {
  downloadQRCode();
});
