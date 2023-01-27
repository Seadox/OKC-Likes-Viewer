chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.title !== undefined) {
    chrome.tabs.sendMessage(
      tabId,
      tab.title.startsWith("Likes You") ? "show" : "hide"
    );
  }
});
