const test = {
  run: function () {
    const title_height = 64;
    const userHeight = 270;

      document.querySelector('.menu').addEventListener('click', function(event) {
      let element = document.getElementById(event.target.dataset.section).offsetTop;
      window.scrollTo({
        top: element - title_height,
        behavior: "smooth"
      });
      if (event.target.dataset.section === 'five') {
        document.getElementById('five').scrollIntoView({block: "start", behavior: "smooth"});
      }
    });
    
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      console.log(scrolled)
      if (scrolled > userHeight) {
            document.getElementById('scroll-top').classList.add('visible'); 
      } 
      else {
            document.getElementById('scroll-top').classList.remove('visible');
      }
    });
    
    document.getElementById('scroll-top').addEventListener('click', function(event) {
      window.scrollTo({
      top:0,
      behavior: "smooth"
      });
    });
  }
}

test.run();