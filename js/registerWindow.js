var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function register() {
    var modal = document.getElementById('myModal');

    modal.style.display = "block";  
}