console.log("Loaded content script with jQuery for " + window.location.href);

// for some reason, let's hide the commit, path, browser, and readme name ... so the first 
// thing we see is the readme text
console.log("DOM ready");

var elements = $("#commit, #path, #browser, #readme .name").hide();
var toggle_link = $('<a href="#">toggle details</a>').css({
  textAlign: 'right',
  width:     '100%',
  display:   'inline-block'
});
toggle_link.click(function(){
  elements.toggle();
});

$("#commit").before(toggle_link);

console.log("done");
