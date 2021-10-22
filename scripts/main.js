const title_height = 64;

linklist.addEventListener('click', function(event) {
  let element = document.getElementById(event.target.dataset.section).offsetTop;
  window.scrollTo({
    top: element - title_height,
    behavior: "smooth"
  });
  if (event.target.dataset.section === 'five') {
    document.getElementById('five').scrollIntoView({block: "start", behavior: "smooth"});
  }
});

window.onscroll = function() {
  const scrolled = window.pageYOffset;
  console.log(scrolled)
  if (scrolled > 270) {
        document.getElementById('scroll-top').classList.add('visible'); 
  } 
  else {
        document.getElementById('scroll-top').classList.remove('visible');
  }
}

document.getElementById('scroll-top').onclick = function () {
  window.scrollTo({
  top:0,
  behavior: "smooth"
});
}