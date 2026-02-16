console.log("Script file loaded immediately!");
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed. Script starting...');

  // --- Dynamic Component Loader ---
  function loadComponent(elementId, filePath, callback) {
    console.log(`Attempting to load ${filePath} into ${elementId}`);
    const element = document.getElementById(elementId);
    if (element) {
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
          return response.text();
        })
        .then(data => {
          console.log(`Successfully loaded ${filePath}`);
          element.innerHTML = data;
          if (callback) callback();
        })
        .catch(error => console.error('Error loading component:', error));
    } else {
      console.error(`Element with ID ${elementId} not found.`);
    }
  }

  // --- Initialization Functions ---
  
  function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileBtn && nav) {
      // Remove existing listeners to prevent duplicates if re-initialized
      const newBtn = mobileBtn.cloneNode(true);
      mobileBtn.parentNode.replaceChild(newBtn, mobileBtn);
      
      newBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const isExpanded = nav.classList.contains('active');
        newBtn.setAttribute('aria-expanded', isExpanded);
        newBtn.textContent = isExpanded ? '✕' : '☰';
      });

      // Close menu when clicking a link
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');
          newBtn.setAttribute('aria-expanded', 'false');
          newBtn.textContent = '☰';
        });
      });
    }
  }

  function initNewsletter() {
    const newsForm = document.getElementById('newsForm');
    if (newsForm) {
      // Use event delegation or just add listener
      newsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const thanks = this.querySelector('.thank-you');
        if (thanks) thanks.style.display = 'block';
        this.reset();
      });
    }
  }

  function initContactForms() {
    // Registration Form
    const regForm = document.getElementById('regForm');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const parent = document.getElementById('regParentName').value;
        const child = document.getElementById('regChildName').value;
        const age = document.getElementById('regChildAge').value;
        const date = document.getElementById('regStartDate').value;
        const contact = document.getElementById('regContact').value;
        
        const subject = encodeURIComponent(`Registration Interest: ${child}`);
        const body = encodeURIComponent(`Parent Name: ${parent}\nChild Name: ${child}\nChild Age: ${age}\nPreferred Start Date: ${date}\nContact Details: ${contact}`);
        
        window.location.href = `mailto:milesofsmiling@gmail.com?subject=${subject}&body=${body}`;
        
        const thanks = document.getElementById('regThankYou');
        if (thanks) thanks.style.display = 'block';
        regForm.reset();
      });
    }

    // Callback Form
    const cbForm = document.getElementById('callbackForm');
    if (cbForm) {
      cbForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('cbName').value;
        const phone = document.getElementById('cbPhone').value;
        
        const subject = encodeURIComponent(`Callback Request: ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}`);
        
        window.location.href = `mailto:milesofsmiling@gmail.com?subject=${subject}&body=${body}`;
        
        const thanks = document.getElementById('cbThankYou');
        if (thanks) thanks.style.display = 'block';
        cbForm.reset();
      });
    }

    // Tour Form
    const tourForm = document.getElementById('tourForm');
    if (tourForm) {
      tourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('tourName').value;
        const email = document.getElementById('tourEmail').value;
        const phone = document.getElementById('tourPhone').value;
        const childAge = document.getElementById('tourChildAge').value;
        const preferredDay = document.getElementById('tourPreferredDay').value;
        const message = document.getElementById('tourMessage').value;
        
        const subject = encodeURIComponent(`Tour Request: ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nChild's Age: ${childAge}\nPreferred Day: ${preferredDay}\nMessage: ${message}`);
        
        window.location.href = `mailto:milesofsmiling@gmail.com?subject=${subject}&body=${body}`;
        
        const thanks = document.getElementById('tourThankYou');
        if (thanks) thanks.style.display = 'block';
        tourForm.reset();
      });
    }
  }

  // Initialize static forms immediately
  initContactForms();

  // --- Load Components ---
  // We load header and footer, then initialize their specific scripts
  loadComponent('header-placeholder', 'components/header.html', () => {
    initMobileMenu();
    // Highlight current page in nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a:not(.cta-nav)');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.style.color = 'var(--yellow)';
      }
    });
  });

  loadComponent('footer-placeholder', 'components/footer.html', initNewsletter);


  // --- Matching Game Logic (Page Specific) ---
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

  // --- Lightbox Logic ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const galleryImages = document.querySelectorAll('.gallery-img');

  if (lightbox && lightboxImg) {
    // Open Lightbox
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
      });
    });

    // Close Lightbox
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }

    // Close on background click
    window.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
      }
    });
  }

  // --- Carousel Logic (Page Specific) ---
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

  // --- Mobile Menu Logic (Initial Check) ---
  // The logic is moved to initMobileMenu but we might need to run it if header is already there?
  // No, header is always loaded dynamically now. 
  // However, for existing pages during transition, we might want to check.
  // But we are converting all pages. So we rely on loadComponent.

  // --- Scroll Animations ---
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Select elements to animate (sections, cards, gallery items)
  // We use a timeout to ensuring dynamic content is loaded, 
  // though optimally this should be called inside loadComponent callback too.
  // For now, let's just observe what's available and maybe re-observe after load.
  
  function startAnimations() {
    const animatedElements = document.querySelectorAll('section, .card, .gallery div, .gallery img, .hero-content');
    animatedElements.forEach(el => {
      el.classList.add('fade-in-up');
      observer.observe(el);
    });
  }

  // Run initial animation setup
  setTimeout(startAnimations, 100); 

  // Re-run for dynamic content if needed, keying off mutations or just generous timeout
  setTimeout(startAnimations, 1000); 

});
