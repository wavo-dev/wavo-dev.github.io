const wavo = document.getElementById("wavo-character");
const speech = document.getElementById("wavo-speech");
const academyText = document.getElementById("tips-text");
const docsCard = document.getElementById("docs");
const docsPosition = docsCard.getBoundingClientRect();
const blobText = document.getElementById("blob-text");
let academyTextIndex = 0;
let wavoGotClicked = false;
let wavoGotClickedToChat = false;
const academyMessages = [
    "Meet Wavo the Blob, your little buddy!",
    "Did you know that Wavo the Blob loves cookies?",
    "Use Wavo's Advanced Search to get exactly what you want!",
    "Recover accidentally deleted files with Trash!",
    "Did you know that you can use a offline mode of Wavo?"
];

wavo.addEventListener("click", function () {
    if (wavoGotClicked == false) {
        wavoGotClicked = true;
        speech.textContent = "Hi! I'm Wavo The Blob. You can click on me anytime to chat with me!";
        speech.hidden = false;
        setTimeout(function () {
            speech.hidden = true;
        }, 6000);
    } else {
        wavoGotClickedToChat = true;
        window.location.href = "blob-ai.html";
    }
});

setInterval(function () {
    academyTextIndex += 1;

    if (academyTextIndex >= academyMessages.length) {
        academyTextIndex = 0;
    }

    academyText.textContent = academyMessages[academyTextIndex];
}, 6000);