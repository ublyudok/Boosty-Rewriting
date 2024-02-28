var profileBtn = document.getElementById('profile_btn');
var dropDownMenu = document.getElementById('mini_dropdown_menu');
var arrowDropDown = document.getElementById('arrow_profile');

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