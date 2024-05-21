const stars = document.querySelectorAll('.star-comment');
const ratingInput = document.getElementById('ratingInput');

// stars comment section
if (document.getElementById('selecct-rate')) {
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        const value = parseFloat(star.getAttribute('data-value'));
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
  
        ratingInput.value = value;
      });
    });
  }