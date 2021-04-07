let pasteUrls = document.getElementById('pasteUrls');
let copiedUrls = document.getElementById('copiedUrls');
let openInTabs = document.getElementById('openInTabs');
let urls = [];

pasteUrls.onclick = function(element) {
    copiedUrls.focus();
    document.execCommand('paste');

    urls = copiedUrls.value.split('\n');
    // var buttonText = openInTabs.innerText;
    // buttonText += "(" + tabs.length + ")";
    // // alert(buttonText);
    // openInTabs.innerText = buttonText;
    openInTabs.click();
};

function onCreated(tab) {
    console.log(`Created new tab: ${tab.url}`);
}

function onError(error) {
    console.error(`Error: ${error}`);
}

openInTabs.onclick = function(element) {
    urls = copiedUrls.value.split('\n');
    urls.forEach(url => {
        var creating = browser.tabs.create({
           url: url 
        });

        creating.then(onCreated, onError);
    });
}