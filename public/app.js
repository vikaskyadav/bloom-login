
const sharekit = require("@bloomprotocol/share-kit");
const io = require('socket.io-client');

const socket = io(window.location.origin);

socket.on('connect', function () { console.log('connected') });
socket.on('bloom created', function (message) {
  document.getElementById("QR-Container").style.display = "none";
  document.getElementById("bloomed").style.display = "block";
  document.getElementById("message").innerHTML = message.status ? `User ${message.email} logged in successfully` : 'Login Failed';
});
socket.on('disconnect', function () { console.log('disconnect') });

window.onload = function () {
  const token = "test";
  const requestData = {
    action: sharekit.Action.attestation,
    token: token,
    url: window.location.origin + '/bloomcallback',
    org_logo_url: 'https://bloom.co/favicon.png',
    org_name: 'BloomCheck',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['email']
  };
  const options = {
    size: 300
  };
  const requestQRCodeId = sharekit.generateRequestQRCode(document.getElementById('QR-Container'), requestData, options)
};