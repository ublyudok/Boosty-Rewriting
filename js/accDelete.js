const deleteAcc = document.getElementById('deleteAcc');
const cross = document.getElementById('cross');
var modalDeleteAcc = document.getElementById('modalDeleteAcc');
var checkboxDel = document.getElementById('checkboxDel');
var cancel = document.getElementById('cancel');
var deleteBtn = document.getElementById('deleteBtn');

deleteAcc.onclick = function() {
    modalDeleteAcc.style.display = 'block';
}

cross.onclick = function() {
    modalDeleteAcc.style.display = 'none';
}

checkboxDel.onclick = function() {
    deleteBtn.classList.toggle('Delete_btn');
    deleteBtn.toggleAttribute('disabled');
}

cancel.onclick = function() {
    modalDeleteAcc.style.display = 'none';
}