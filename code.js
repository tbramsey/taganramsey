$(function () {
  $('#button1').click(function () {
      var existingIframe = $('#ASimpleGame');
      if (existingIframe.length === 0) {
          $('body').append('<div id="iframeHolder" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;">' +
              '<iframe id="ASimpleGame" frameborder="0" src="https://itch.io/embed-upload/7363400?color=000000" allow="autoplay" allowfullscreen="" width="960" height="660"></iframe>' +
              '<button id="closeIframe" style="position: absolute; top: 10px; right: 10px; background: white; border: none; padding: 10px 15px; cursor: pointer;">Close</button>' +
              '</div>');

          $('#closeIframe').click(function () {
              $('#iframeHolder').remove();
          });
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
  if (slideIndex > 0 && slideIndex <= slides.length) {
    slides[slideIndex - 1].style.display = "block";
  }
  
  if (slideIndex > 0 && slideIndex <= dots.length) {
    dots[slideIndex - 1].className += " active";
  }
}
