chrome.tabs.onUpdated.addListener((tabId, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (typeof tabs[0] != "undefined") {
      if (tabs[0].url.match('https:\/\/.*.okcupid.com\/.*')) {
        if (tabs[0].url.match("who-likes-you")) {
          chrome.tabs.sendMessage(tabId, "show");
        } else {
          chrome.tabs.sendMessage(tabId, "hide");
        }
      }
    }
  });
});