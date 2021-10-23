const title_height = 64;
const userHeight = 270;

this.addEventListener('click', function(event) {
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
  if (scrolled > userHeight) {
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