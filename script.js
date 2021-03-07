const message = document.getElementById("message");
var result = document.getElementById("result");
var phrase = document.getElementById("phrase");
var pict = document.getElementById("picture");


let messageWords = [];
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;


const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://i.pinimg.com/600x315/aa/eb/49/aaeb4941ff8afe1bf468c148926c1bdd.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
];

function mode(messageWords) {
    if (messageWords.length == 0)
        return null;
    var modeMap = {};
    var maxEl = messageWords[0], maxCount = 1;
    for (var i = 0; i < messageWords.length; i++) {
        var el = messageWords[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function process() {
    if (message.value.length < 20) {
        alert("Your message should be at least 20 characters");
    }
    var lowerCaseStr = message.value.toLowerCase();
    messageWords = lowerCaseStr.match(/\b(\w+)\b/g);
    numberOfWordsInTheMessage = messageWords.length;
    theMostFrequentWord = mode(messageWords);

    result.innerHTML = "Number of words in your message: " + numberOfWordsInTheMessage + "\nThe most frequent word of the message is '" + theMostFrequentWord + "'";

    var randInt = getRandomInt(3);
    phrase.innerHTML = randomPhrasesAndPictures[randInt].phrase;
    pict.src = randomPhrasesAndPictures[randInt].imageURL;

    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`);


}