chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.title !== undefined) {
    chrome.tabs.sendMessage(
      tabId,
      tab.title.startsWith("Likes You") ? "show" : "hide"
    );
    if (tab.title.startsWith("Discover")) {
      var manifestData = chrome.runtime.getManifest();

      fetch(
        "https://raw.githubusercontent.com/Seadox/OKC-Show-Likes/master/manifest.json"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.version > manifestData.version) {
            chrome.tabs.sendMessage(tabId, "update");
          }
        });
    }
  }
});
