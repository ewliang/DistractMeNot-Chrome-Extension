var params = {
  "url": [
  ]
};
chrome.tabs.query(params, function(tabs) {
  console.log("DistractMeNot Background Inspect Console");
  for(let i = 0; i < tabs.length; i++) {
    // console.log(tabs[i].url);
    if(tabs[i].url.indexOf("facebook.com") > 0) {
      console.log("FOUND A MATCH!: " + tabs[i].url);
      chrome.tabs.remove(tabs[i].id, function() {
        console.log("REMOVED: " + tabs[i].url);
      });
    }
  }
});
