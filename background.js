chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "hibrishContextMenuOption",
    title: "Fix Hibrish",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(sendMessage);
chrome.tabs.onActivated.addListener(checkConnection);
chrome.tabs.onUpdated.addListener((tabId) => checkConnection({ tabId }));

function sendMessage(info, tab) {
  if (info.menuItemId === "hibrishContextMenuOption") {
    const msg = {
      hibrishText: info.selectionText,
    };
    chrome.tabs.sendMessage(tab.id, msg);
  }
}

async function checkConnection({ tabId }) {
  try {
    await chrome.tabs.sendMessage(tabId, {});
    chrome.contextMenus.update("hibrishContextMenuOption", { enabled: true });
  } catch (e) {
    chrome.contextMenus.update("hibrishContextMenuOption", { enabled: false });
  }
}
