var book = document.getElementById("bookTitle").innerHTML;
var textFile = './texts/' + book + '.txt';
window.onload = function() {
    document.getElementById("needFile").href = textFile;
    document.getElementById("needFile").data = textFile;
    document.getElementById("bookTitle").innerHTML = book;
    document.getElementById("bookHeading").innerHTML = book;
};