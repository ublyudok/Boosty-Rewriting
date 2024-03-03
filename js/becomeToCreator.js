var creatorWindow = document.getElementById('modalCreator');
var becomeToCreator = document.getElementById('becomeToCreator');
var cross = document.getElementById('cross');


becomeToCreator.onclick = function() {
    creatorWindow.style.display = 'block';
    document.body.style.position = "fixed";
}

cross.onclick = function() {
    creatorWindow.style.display = 'none';
    document.body.style.position = "relative";
}