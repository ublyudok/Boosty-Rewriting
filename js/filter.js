var filter_btn = document.getElementById('filter_btn');
var extra_filters = document.getElementById('extra_filters');
var filter_feed = document.getElementById('filter_feed');
var reset_filters = document.getElementById('reset_filters');

filter_btn.addEventListener("click", function() {
    extra_filters.classList.toggle('filter_block');
    filter_feed.classList.toggle('border_for_feed_filter');
    filter_feed.style.borderBottom = '0.5px solid #eaeaea';
    filter_btn.classList.toggle('filter_focus');
    reset_filters.style.display = 'none';
})

