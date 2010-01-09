window.addEventListener("keyup", function(e){
  if (e.ctrlKey && e.keyCode && e.keyCode == 191)
    chrome.extension.sendRequest({ location: window.location, title: document.title });
}, false);
