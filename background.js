// DistractMeNot - background.js
// Author: Eric Liang
// Author URI: https://www.eric-liang.com
// Author Github URI: https://www.github.com/ewliang
// Project Repository URI: https://github.com/ewliang/DistractMeNot-Chrome-Extension
// Description: Handles all the browser level activities (e.g. tab management, etc.)
// License: MIT

var params = {
  "url": []
};

var localStorageSupport = false;
var urlBlacklist = [];

/*
  To load existing urlBlacklist from localStorage into local urlBlacklist array if conditions met
  on browser load.
*/
if(window.localStorage && (JSON.parse(window.localStorage.getItem("urlBlacklist")) != null)) {
  // Browser supports localStorage and urlBlacklist already exists with items.
  // Set localStorageSupport to true.
  // Load existing urlBlacklist URLs into urlBlacklist array.
  localStorageSupport = true;
  urlBlacklist = JSON.parse(window.localStorage.getItem("urlBlacklist"));
  console.log("Loaded Existing URL Blacklist: " + urlBlacklist);
}

/*
  Receive User Input from Popup.html
  - In charge of listening for new URLs being added by user in frontend via
  popup.html which gets sent to here. The URL is then added to a urlBlacklist array
  which then gets looped through via the Chrome Tabs Event Listener to auto
  close any tabs that are on the blacklist.
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Reset URL Blacklist
  if(request.reset) {
    // If localStorage supported, clear urlBlacklist from localStorage.
    if(window.localStorage) {
      window.localStorage.removeItem("urlBlacklist");
    }
    // Clear local urlBlacklist
    urlBlacklist = [];
  }
  // Update urlBlacklist with new URL.
  if(window.localStorage) {
    // Browser supports localStorage.
    // Store blacklist in localStorage.
    urlBlacklist.push(request.url);
    window.localStorage.setItem('urlBlacklist', JSON.stringify(urlBlacklist));
  } else {
    // Browser doesn't support localStorage.
    // Store blacklist in array.
    localStorageSupport = false;
    urlBlacklist.push(request.url);
  }
  console.log(urlBlacklist);
  sendResponse({ backendMessage: "Successfully Added: " + request.url });
  /*
    Chrome Tabs Event Listener
    - Constantly watch out for whenever tabs are updated (created or URL changed),
      run the query to check if the blacklisted URLs are detected in the window.
      If detected, close the window.
  */
  chrome.tabs.onUpdated.addListener(function() {
    chrome.tabs.query(params, tabRemover);
  });
});

// Function for Closing Tabs
function tabRemover(tabs) {
  console.log("DistractMeNot Background Inspect Console");
  if(localStorageSupport) {
    urlBlacklist = JSON.parse(window.localStorage.getItem("urlBlacklist"));
  }
  for(let i = 0; i < tabs.length; i++) {
    for(let j = 0; j < urlBlacklist.length; j++) {
      if(tabs[i].url.includes(urlBlacklist[j])) {
        let matchedURL = tabs[i].url;
        // console.log("FOUND A MATCH!: " + matchedURL);
        chrome.tabs.remove(tabs[i].id, function() {
          // console.log("REMOVED: " + matchedURL);
        });
      }
    }
  }
}
