var langChooserBtn = document.getElementById('langChooser');
var arrowUpDown = document.getElementById('arrow_img');
var langs = document.getElementById('langs');
var langValue = document.getElementById('langValue');
var ru = document.getElementById('ru');
var language = document.getElementById('language');
var en = document.getElementById('en');


langValue.onclick = function() {
    langs.style.display = 'block';
    arrowUpDown.classList.remove('arrow_icon_down');
    arrowUpDown.classList.add('arrow_icon_up');
}

document.addEventListener('click', (e) => {
    const langChooserBtnChecker = e.composedPath().includes(langValue);

    if(!langChooserBtnChecker) {
        langs.style.display = 'none';
        arrowUpDown.classList.remove('arrow_icon_up');
        arrowUpDown.classList.add('arrow_icon_down');
    }
})

ru.onclick = function() {
    language.innerHTML = 'RU';
    langs.style.display = 'none';
}

en.onclick = function() {
    language.innerHTML = 'EN';
    langs.style.display = 'none';
}