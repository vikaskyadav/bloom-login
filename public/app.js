
const sharekit = require("@bloomprotocol/share-kit");
const io = require('socket.io-client');

const socket = io(window.location.origin);
const date = new Date();
const token = date.getDate();
socket.emit('create', 'client', {
  token: token
}, (error, message) => {
  console.log('Client created at ', date.getUTCDate());
});
socket.on(`Bloom app initialized`, function (message) {
  document.getElementById("QR-Box").style.display = "none";
  document.getElementById("bloomed").style.display = "block";
  document.getElementById("message").innerHTML = message.status ? `User ${message.email} logged in successfully` : 'Login Failed';
});
socket.on('disconnect', function () { console.log('Client Disconnected at',date.getUTCDate()) });

window.onload = function () {
  const requestData = {
    action: sharekit.Action.attestation,
    token: token,
    author:'superman',
    message:'Bloom is Awesome',
    url: window.location.origin + '/bloomcallback',
    org_logo_url: 'https://bloom.co/favicon.png',
    org_name: 'Superman\'s Bloom',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy'
  };
  const options = {
    size: 300
  };
  const requestQRCodeId = sharekit.generateRequestQRCode(document.getElementById('QR-Box'), requestData, options)
};