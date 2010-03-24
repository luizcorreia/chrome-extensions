var textareas_text = null;
var save_interval  = null;
var saving         = false;

window.addEventListener("keyup", function(e){
  if (e.srcElement.nodeName == 'TEXTAREA'){
    var textarea  = e.srcElement;

    var unique_id = textarea.id;
    if (unique_id == '') unique_id = textarea.name;
    if (unique_id == '') unique_id = textarea.className;
    
    if (textareas_text == null) textareas_text = {};
    textareas_text[unique_id] = textarea.value;

    if (save_interval == null) save_interval = setInterval(save, 10000);
  }
}, false);

function save(){
  if (saving == false){
    saving = true;

    var saved = {};
    if (localStorage['textarea_history'] != null)
      saved = JSON.parse(localStorage['textarea_history']);

    for(var unique_id in textareas_text){
      saved[unique_id] = textareas_text[unique_id];
      delete textareas_text[unique_id];
      console.log('TextArea History.  Saved latest text from textarea: ' + unique_id);
    }

    localStorage['textarea_history'] = JSON.stringify(saved);

    saving = false;
  }
}
