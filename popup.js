var urlInput = document.getElementById('urlInput');
var addURLButton = document.getElementById('addURLButton');
var toggleActivation = document.getElementById('toggleActivation');
var resetButton = document.getElementById('resetButton');

addURLButton.onclick = function() {
  chrome.runtime.sendMessage({ url: urlInput.value }, function(response) {
    console.log(response.backendMessage);
  });
};
