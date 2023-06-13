// Trigger animations when the page loads
window.onload = function() {
    var title = document.querySelector('h1');
    var image = document.getElementById('image');
    var paragraphs = document.querySelectorAll('p');
    var quote = document.querySelector('.quote');

    title.style.animationPlayState = 'running';
    image.style.animationPlayState = 'running';
    quote.style.animationPlayState = 'running';

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.animationPlayState = 'running';
    }
  };