var params = {
  "url": []
};

/*
  Chrome Tabs Event Listener
  - Constantly watch out for whenever tabs are updated (created or URL changed),
    run the query to check if the blacklisted URLs are detected in the window.
    If detected, close the window.
*/
var urlBlacklist = [];
chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.query(params, function(tabs) {
    console.log("DistractMeNot Background Inspect Console");
    for(let i = 0; i < tabs.length; i++) {
      if(tabs[i].url.includes("https://myspace.com")) {
        let matchedURL = tabs[i].url;
        console.log("FOUND A MATCH!: " + matchedURL);
        chrome.tabs.remove(tabs[i].id, function() {
          console.log("REMOVED: " + matchedURL);
        });
      }
    }
  });
});

/*
  Receive User Input from Popup.html
  - In charge of listening for new URLs being added by user in frontend via
  popup.html which gets sent to here. The URL is then added to a urlBlacklist array
  which then gets looped through via the Chrome Tabs Event Listener to auto
  close any tabs that are on the blacklist.
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Update urlBlacklist with new URL.
  urlBlacklist.push(request.url);
  console.log(urlBlacklist);
  sendResponse({ backendMessage: "Successfully Added: " + request.url });
});
