// onMap.js

// Or removeAll and create all <- to do
chrome.contextMenus.create({
  id: "omItem",
  title: "onMap",
  contexts: ["selection"],
});

function getUrl(input) {
  var output =
    "https://www.google.com/maps/search/" + encodeURIComponent(input);

  return output;
}

chrome.runtime.onInstalled.addListener(() => {
  console.log(getUrl("test"));
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "omItem" && clickData.selectionText) {
    chrome.tabs.create({
      url: getUrl(clickData.selectionText),
    });
  }
});
