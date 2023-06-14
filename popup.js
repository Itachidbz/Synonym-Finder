let backgroundPage = chrome.extension.getBackgroundPage();
let word = backgroundPage.word;



let url = `https://owlbot.info/api/v4/dictionary/${word}`;

let params = {
    method: 'GET',
    headers: {
        'Authorization': 'Token ' + '530c6114ee8c79ed726e87c963f345438709dcfb'
    }
}

fetch(url, params)
    .then((res) => {
        return res.json();
    })
    .then((json) => {

        let setdef = document.getElementById('definition');
        let setword = document.getElementById('word');
        setdef.innerText = ` ${json.definitions[0].definition}, Example :${json.definitions[0].example}` 
        setword.innerText = json.word
    })
    .catch((err) => {
        let seterror = document.getElementById('word');
        seterror.innerText = "Definition Not Found"
    });