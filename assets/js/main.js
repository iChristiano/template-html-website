/* Navigation */
function openNav() {
  document.getElementById('mobileNav').style.width = '250px';


  document.getElementById('closebtn').style.display = 'flex';
  document.getElementById('openbtn').style.display = 'none';

  document.getElementById('modalNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('mobileNav').style.width = '0';

  document.getElementById('openbtn').style.display = 'flex';
  document.getElementById('closebtn').style.display = 'none';

  document.getElementById('modalNav').style.display = 'none';
}


/* Scroll */
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("main-nav")[0].style.justifContent= "flex-start";
    document.getElementsByClassName("main-nav")[0].style.fontWeight= "normal";
    document.getElementsByClassName("main-nav")[0].lastElementChild.classList.add('push-left');

  } else {
    document.getElementsByClassName("main-nav")[0].style.justifContent= "center";
    document.getElementsByClassName("main-nav")[0].style.fontWeight= "bold";
    document.getElementsByClassName("main-nav")[0].lastElementChild.classList.remove('push-left');
  }
}
window.onscroll = function() {scrollFunction()};
