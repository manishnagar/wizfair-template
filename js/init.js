(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    indicators: true,
    padding: 200,
  });
});


const contentItems = document.querySelectorAll('.content-item');
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  contentItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % contentItems.length;
  contentItems[currentIndex].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
  contentItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + contentItems.length) % contentItems.length;
  contentItems[currentIndex].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
