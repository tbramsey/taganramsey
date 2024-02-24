
$(function () {
    $('#button1').click(function () {
        var existingIframe = $('#ASimpleGame');
        if (!$('#ASimpleGame').length) {
            $('#iframeHolder').html('<iframe id="ASimpleGame" frameborder="0" src="https://itch.io/embed-upload/7363400?color=000000" allow="autoplay" allowfullscreen="" width="960" height="660"><a href="https://shmamsey03.itch.io/a-simple-game">Play A Simple Game on itch.io</a></iframe>');
        } else {
            existingIframe.remove();
        }
    });
});

window.onload = function() {
  currentSlide(1);
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
