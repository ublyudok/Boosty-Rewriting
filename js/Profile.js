var profileBtn = document.getElementById('profile_btn');
var dropDownMenu = document.getElementById('mini_dropdown_menu');
var arrowDropDown = document.getElementById('arrow_profile');
var emailInput = document.getElementById('emailInput');
var editBtn = document.getElementById('editBtn');
var switchContainer = document.getElementById('switchContainer');
var audioContainer = document.getElementById('audioContainer');
var postContainer = document.getElementById('ShowPost');

profileBtn.onclick = function() {
    dropDownMenu.style.display = 'block';
    arrowDropDown.classList.remove('arrow_icon_down');
    arrowDropDown.classList.add('arrow_icon_up');
}

document.addEventListener('click', (e) => {
    const profileBtnCheacker = e.composedPath().includes(profileBtn);
    const dropDownMenuCheacker = e.composedPath().includes(dropDownMenu);

    if(!profileBtnCheacker & !dropDownMenuCheacker) {
        dropDownMenu.style.display = 'none';
        arrowDropDown.classList.remove('arrow_icon_up');
        arrowDropDown.classList.add('arrow_icon_down');
    }
})

editBtn.onclick = function() {
    emailInput.removeAttribute('disabled');
    editBtn.style.display = 'none';
}

function toggledSwitch() {
    switchContainer.classList.toggle('switch_active');
}

function audioSwitcher() {
    audioContainer.classList.toggle('switch_active');
}

function ShowPost() {
    postContainer.classList.toggle('switch_active');
}