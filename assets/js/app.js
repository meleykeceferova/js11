const header = document.getElementById('header');
const green = document.getElementById('green');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) { 
    header.style.backgroundColor = '#a5c926'; 
    header.style.height = '40'; 
    green.style.display = "none";
  } else {
    header.style.backgroundColor = '#fff'; 
    green.style.display = "flex";
  }
});
