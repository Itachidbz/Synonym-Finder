chrome.runtime.onMessage.addListener(receiver);

window.word = "";

function receiver(req){
    window.word = req.text
}