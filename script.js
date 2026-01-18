document.addEventListener('DOMContentLoaded', () => {

  // --- Matching Game Logic ---
  const grid = document.getElementById('matchGrid');
  if (grid) {
    const emojis = ['🌿', '🌿', '🐘', '🐘', '🎶', '🎶', '🌞', '🌞'];
    let tiles = emojis.sort(() => 0.5 - Math.random());
    let first = null, lock = false, matched = 0;
    const msg = document.getElementById('gameMsg');

    tiles.forEach((e, i) => {
      const d = document.createElement('div');
      d.className = 'tile';
      d.dataset.index = i;
      d.addEventListener('click', () => flip(d));
      grid.appendChild(d);
    });

    function flip(tile) {
      if (lock || tile.classList.contains('matched') || tile === first) return;
      tile.textContent = tiles[tile.dataset.index];
      tile.classList.add('flipped');
      if (!first) {
        first = tile;
        return;
      }
      lock = true;
      if (tile.textContent === first.textContent) {
        tile.classList.add('matched');
        first.classList.add('matched');
        matched += 2;
        reset();
        if (matched === tiles.length) msg.textContent = 'Well done! You matched all pairs.';
      } else {
        setTimeout(() => {
          tile.textContent = '';
          first.textContent = '';
          tile.classList.remove('flipped');
          first.classList.remove('flipped');
          reset();
        }, 800);
      }
    }

    function reset() {
      first = null;
      lock = false;
    }
  }

  // --- Newsletter Form Logic ---
  const newsForm = document.getElementById('newsForm');
  if (newsForm) {
    newsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const thanks = this.querySelector('.thank-you');
      if (thanks) thanks.style.display = 'block';
      this.reset();
    });
  }

  // --- Carousel Logic ---
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    let autoPlayInterval;

    function showSlide(n) {
      if (n >= slides.length) slideIndex = 0;
      if (n < 0) slideIndex = slides.length - 1;
      
      slides.forEach(slide => slide.classList.remove('active'));
      slides[slideIndex].classList.add('active');
    }

    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
      });
    }

    // Initialize
    if (slides.length > 0) {
      showSlide(slideIndex);
      startAutoPlay();
    }
  }

  // --- Mobile Menu Logic ---
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');

  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isExpanded = nav.classList.contains('active');
      mobileBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
