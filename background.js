const types = ["selection"];

chrome.runtime.onInstalled.addListener(reason => {
  types.forEach(type => {
    chrome.contextMenus.create({
      id: `${type}_TYPE_MENUITEM_ID`,
      title: `StockUnlock: “%s“`,
      contexts: [type],
      visible: true
    });
    chrome.contextMenus.onClicked.addListener((clickData) => {
      if (clickData.menuItemId === `${type}_TYPE_MENUITEM_ID`) {
		chrome.tabs.create({"url": "https://stockunlock.com/stockDetails/"+clickData.selectionText+"/general"});
      }
    });
  });
});