(function () {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    function assignStagger(selector) {
        document.querySelectorAll(selector).forEach(function (el, i) {
            el.style.setProperty('--i', i);
        });
    }

    assignStagger('.folder-card');

    // ---------- Scroll reveal ----------
    // Restrained on purpose: a fast opacity-only fade on top-level containers,
    // no per-child stagger and no vertical movement.

    var revealSelectors = ['.content-section', '.folder-card', '.intro-card'];
    var revealTargets = document.querySelectorAll(revealSelectors.join(','));
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });

    // ---------- Folder parallax (desktop only) ----------

    function updateParallax() {
        if (prefersReducedMotion || window.innerWidth <= 900) return;
        var hero = document.querySelector('.desktop-hero');
        if (!hero) return;
        var rect = hero.getBoundingClientRect();
        var progress = -rect.top;
        document.querySelectorAll('.folder-card').forEach(function (card, i) {
            var factor = 0.03 + (i % 3) * 0.015;
            card.style.setProperty('--float-parallax', (progress * factor) + 'px');
        });
    }

    var parallaxTicking = false;
    window.addEventListener('scroll', function () {
        if (!parallaxTicking) {
            requestAnimationFrame(function () {
                updateParallax();
                parallaxTicking = false;
            });
            parallaxTicking = true;
        }
    }, { passive: true });
    updateParallax();

    // ---------- Magnetic hover ----------

    function enableMagnetic(el, strength) {
        el.addEventListener('mousemove', function (e) {
            var rect = el.getBoundingClientRect();
            var relX = (e.clientX - rect.left) / rect.width - 0.5;
            var relY = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.setProperty('--magnet-x', (relX * strength) + 'px');
            el.style.setProperty('--magnet-y', (relY * strength) + 'px');
        });
        el.addEventListener('mouseleave', function () {
            el.style.setProperty('--magnet-x', '0px');
            el.style.setProperty('--magnet-y', '0px');
        });
    }

    if (supportsFinePointer && !prefersReducedMotion) {
        document.querySelectorAll('.folder-card, .nav-links a, .social').forEach(function (el) {
            enableMagnetic(el, 10);
        });
    }

    // ---------- Custom cursor (snappy glass halo) ----------

    if (supportsFinePointer && !prefersReducedMotion) {
        document.documentElement.classList.add('has-custom-cursor');

        var dot = document.getElementById('cursorDot');
        var ring = document.getElementById('cursorRing');
        var mouseX = window.innerWidth / 2;
        var mouseY = window.innerHeight / 2;
        var ringX = mouseX;
        var ringY = mouseY;
        // Higher lerp = less lag. macOS feels crisp; keep a whisper of follow.
        var ringEase = 0.42;

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot snaps instantly - like the system pointer tip
            dot.style.transform = 'translate3d(' + mouseX + 'px,' + mouseY + 'px,0) translate(-50%,-50%)';
        });

        function animateRing() {
            ringX += (mouseX - ringX) * ringEase;
            ringY += (mouseY - ringY) * ringEase;
            ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0) translate(-50%,-50%)';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        document.querySelectorAll('a, button, .folder-card').forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                document.documentElement.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', function () {
                document.documentElement.classList.remove('cursor-hover');
            });
        });
    }

    // ---------- Audio player ----------

    var playBtn = document.getElementById('playBtn');
    var bgAudio = document.getElementById('bg-audio');

    if (playBtn && bgAudio) {
        playBtn.addEventListener('click', function () {
            var isPlaying = playBtn.textContent.trim() === '⏸';
            if (isPlaying) {
                bgAudio.pause();
                playBtn.textContent = '▶';
            } else {
                playBtn.textContent = '⏸';
                bgAudio.play().catch(function () {
                    playBtn.textContent = '▶';
                });
            }
        });
    }

    // ---------- Mobile player pill ----------

    var playerBar = document.getElementById('playerBar');
    var playerToggle = document.getElementById('playerToggle');

    if (playerBar && playerToggle) {
        playerToggle.addEventListener('click', function () {
            var expanded = playerBar.classList.toggle('expanded');
            playerToggle.setAttribute('aria-expanded', String(expanded));
        });

        document.addEventListener('click', function (e) {
            if (playerBar.classList.contains('expanded') && !playerBar.contains(e.target)) {
                playerBar.classList.remove('expanded');
                playerToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
})();
