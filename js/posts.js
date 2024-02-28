var choose_posts_to_show = document.getElementById('choose_posts_to_show');
var all_posts_id = document.getElementById('all_posts_id'); 
var arrow = document.getElementById('arrow');
var AllPosts = document.getElementById('AllPosts');
var AvailableToMe = document.getElementById('AvailableToMe');
var span = document.getElementById('span');
var reset_filters = document.getElementById('reset_filters');
var extra_filters = document.getElementById('extra_filters');

all_posts_id.onclick = function() {
    choose_posts_to_show.style.display = 'block';
    arrow.classList.remove('ArrowDown');
    arrow.classList.add('ArrowUp');
}

document.addEventListener( 'click', (e) => {
    const all_posts_id_btn = e.composedPath().includes(all_posts_id);

    if(!all_posts_id_btn) {
        allPostsclose()
        arrow.classList.remove('ArrowUp');
        arrow.classList.add('ArrowDown');
    }

})

function allPostsclose() {
    choose_posts_to_show.style.display = 'none';
}

AvailableToMe.onclick = function() {
   span.innerHTML = 'AvailableToMe';
   reset_filters.style.display = 'block';
   extra_filters.classList.add('border_radius_zero');
}   

AllPosts.onclick = function() {
   span.innerHTML = 'All Posts';
   reset_filters.style.display = 'none';
   extra_filters.classList.remove('border_radius_zero');
   extra_filters.classList.add('borders_for_extra_filters');
}

reset_filters.onclick = function() {
    reset_filters.style.display = 'none';
    span.innerHTML = 'All Posts';
    extra_filters.classList.remove('border_radius_zero');
    extra_filters.classList.add('borders_for_extra_filters');
}