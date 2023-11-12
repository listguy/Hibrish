chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "hibrishContextMenuOption",
    title: "Fix Hibrish",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(sendMessage);

function sendMessage(info, tab) {
  if (info.menuItemId === "hibrishContextMenuOption") {
    const msg = {
      hibrishText: info.selectionText,
    };
    chrome.tabs.sendMessage(tab.id, msg);
  }
}
