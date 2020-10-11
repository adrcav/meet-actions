let _on = false; // extension isn't on
const _react = 'asset-manifest.json'; // react manifest

const readTextFile = (file, callback) => {
  // file has to be in the root (/public)
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
};
const disable = (tab) => {
  const code = `document.querySelector('#meet-actions').remove()`;

  chrome.tabs.executeScript(tab.id, { code });
  chrome.browserAction.setBadgeText({ text: '', tabId: tab.id });
};
const enable = (tab) => {
  // get the REACT manifest
  readTextFile(_react, function (text) {
    const _data = JSON.parse(text);
    const _keys = Object.keys(_data.files);
    const _js = [
      _data.files['main.js'],
      _data.files[_keys[3]],
      _data.files[_keys[5]],
    ];

    // inject all the JS files required
    _js.forEach((file) => {
      chrome.tabs.executeScript(tab.id, {
        file,
      });
    });
    // inject styles
    chrome.tabs.insertCSS(tab.id, {
      file: _data.files['main.css'],
    });

    // badge
    chrome.browserAction.setBadgeText({ text: 'ON', tabId: tab.id });
    chrome.browserAction.setBadgeBackgroundColor({ color: 'crimson' });
  });
};

// extension clicked on/off
chrome.browserAction.onClicked.addListener((tab) => {
  _on ? disable(tab) : enable(tab);
  _on = !_on;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({ message: Math.floor(Math.random() * 10 + 1) });
  return true;
});
