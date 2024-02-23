window.addEventListener('scroll', function() {
  const productImage = document.querySelector('.product-image');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > (productImage.offsetTop - windowHeight / 2)) {
    productImage.style.opacity = 1;
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
