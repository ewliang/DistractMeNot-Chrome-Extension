// DistractMeNot - popup.js
// Author: Eric Liang
// Author URI: https://www.eric-liang.com
// Author Github URI: https://www.github.com/ewliang
// Project Repository URI: https://github.com/ewliang/DistractMeNot-Chrome-Extension
// Description: Handles all the Chrome Extension UI popup.html activities (e.g. button clicks, etc.)
// License: MIT

var urlInput = document.getElementById('urlInput');
var addURLButton = document.getElementById('addURLButton');
var activationToggle = document.getElementById('activationToggle');
var resetButton = document.getElementById('resetButton');


addURLButton.onclick = function() {
  chrome.runtime.sendMessage({ url: urlInput.value }, function(response) {
    console.log(response.backendMessage);
  });
};

resetButton.onclick = function() {
  chrome.runtime.sendMessage({ reset: true }, function(response) {
    console.log(response.backendMessage);
  });
};
