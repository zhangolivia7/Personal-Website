(function () {
    var ICONS = {
        github: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
        play: '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M4 2.5v11l10-5.5-10-5.5Z"/></svg>',
        external: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h7v7"/><path d="M13 3 4 12"/></svg>'
    };

    var PROJECTS = [
        {
            name: 'TrachSense',
            role: 'App Development Club - Frontend Engineer',
            timeframe: 'Sep 2024 – May 2025',
            hook: "Remote CO2 monitoring for tracheostomy patients - built with Children's National Hospital so non-ventilated pediatric patients get real-time complication alerts instead of a nurse checking in.",
            detail: "Built with Children's National Hospital to give non-ventilated pediatric tracheostomy patients continuous CO2 monitoring instead of periodic manual checks. The Flutter app pairs with a sensor over Bluetooth, streams readings to a Python backend, and pushes real-time alerts the moment a reading drifts into dangerous territory - giving nurses minutes of extra warning on complications that used to go unnoticed between rounds.",
            highlights: [
                'Deployed for real pediatric patients',
                'Built for a live hospital partner, not a demo',
                'Real-time alerts over BLE + a Python backend'
            ],
            tags: [
                { icon: 'assets/sec3/dart.png', label: 'Flutter' },
                { icon: 'assets/sec3/python.png', label: 'Python' }
            ],
            thumb: { type: 'image', src: 'assets/TrachSense.png', alt: 'TrachSense mobile app screenshot' },
            links: [
                { href: 'https://appdevclub.com/projects/trachsense-sp-25/', type: 'external', label: 'View TrachSense on App Dev Club' }
            ]
        },
        {
            name: "Capy's Journey",
            role: 'Co-founder & CPTO',
            timeframe: 'Jun 2025 – present',
            hook: 'A gamified mindfulness app for kids ages 6–14 - meditation and breathing reframed as an adventure. Co-founder & CPTO across product, engineering, and marketing.',
            detail: "A gamified mindfulness game for kids ages 6–14 that reframes meditation and breathing exercises as an adventure, built in Unity/C# with a Firebase backend. My role spans product, engineering, and marketing: I ship the Unity/Firebase build, design the cosmetics and reward systems that keep kids coming back, and run the content strategy - video essays, social campaigns - that got us noticed.",
            highlights: [
                'Accepted into the Mokhtarzada Hatchery accelerator',
                'Winner - Shore Hatchery pitch competition',
                'Youngest team of 13 finalists'
            ],
            tags: [
                { icon: 'assets/sec3/unity.svg', label: 'Unity' },
                { icon: 'assets/sec3/firebase.svg', label: 'Firebase' }
            ],
            thumb: { type: 'image', src: 'assets/capys-journey.png', alt: "Capy's Journey app screens" },
            links: [
                { href: 'https://capysjourney.com/', type: 'external', label: "View Capy's Journey website" }
            ]
        },
        {
            name: 'Bitcamp Design',
            role: 'Design Director, UMD Bitcamp',
            timeframe: 'Oct 2024 – present',
            hook: "UI/UX and front-end for a 1,000+ attendee hackathon's website as UMD Bitcamp's Design Director - the thing every participant sees before they ever set foot in the venue.",
            detail: "Spearheaded graphic design, product design, and UI/UX for UMD Bitcamp's hackathon website - the first thing 1,000+ attendees see before they ever set foot in the venue. Owned the visual identity end to end: the Figma design system, the front-end build, and the small interaction details that make a hackathon site feel like part of the event instead of an afterthought.",
            highlights: [
                '1,000+ attendees served',
                'Owned the design system + front-end build',
                'Promoted to Design Director in Summer 2025'
            ],
            tags: [
                { icon: 'assets/sec3/figma.webp', label: 'Figma' },
                { icon: 'assets/sec3/html.png', label: 'HTML/CSS' },
                { icon: 'assets/sec3/javascript.webp', label: 'JavaScript' }
            ],
            thumb: { type: 'image', src: 'assets/Bitcamp.png', alt: 'Bitcamp hackathon website screenshot' },
            links: [
                { href: 'https://2026.bit.camp/', type: 'external', label: 'View the Bitcamp 2026 website' }
            ]
        },
        {
            name: 'Den',
            role: 'Solo builder - Buildspace Nights & Weekends',
            timeframe: 'Jun 2024 – Aug 2024',
            hook: 'A React Native app built solo during Buildspace Nights & Weekends to talk yourself down from a panic attack - guided breathing, meditation, and fidget toys in one place.',
            detail: 'A React Native app to talk yourself down from a panic attack, built solo over a single Buildspace Nights & Weekends cycle. Guided breathing exercises, short meditations, and a set of fidget-toy-style interactions for the moments when you just need something to do with your hands.',
            highlights: [
                'Built solo, start to finish',
                'Shipped within one Buildspace cycle',
                'Demo video walkthrough available'
            ],
            tags: [
                { icon: 'assets/sec3/react.webp', label: 'React Native' }
            ],
            thumb: { type: 'image', src: 'assets/Den.png', alt: 'Den anxiety-relief app screenshot' },
            links: [
                { href: 'https://youtu.be/o8s2vsBwTZY', type: 'play', label: 'Watch the Den demo on YouTube' }
            ]
        },
        {
            name: 'Little Witch Alcove',
            role: 'Technica 2025 - Frontend & Gemini integration',
            timeframe: 'Nov 2025',
            hook: 'A magical focus Chrome extension from Technica - your witch buddy studies with you, earns potions, and wanders across your tabs while you work.',
            detail: "Built during Technica 2025, Little Witch Alcove is a gamified focus Chrome extension inspired by companion productivity apps. Start a focus session from the browser to earn potions that unlock witch customizations, while your buddy wanders across any tab you're working on. Olivia built the extension in HTML/CSS/JS with sprite animation and Gemini API productivity scoring; Leslie handled character art in Procreate.",
            highlights: [
                'Built in 24 hours at Technica 2025',
                'Hand-drawn sprite animation + physics loop',
                'Gemini API scores site productivity'
            ],
            tags: [
                { icon: 'assets/sec3/html.png', label: 'HTML/CSS' },
                { icon: 'assets/sec3/javascript.webp', label: 'JavaScript' },
                { label: 'Gemini' }
            ],
            thumb: { type: 'image', src: 'assets/little-witch-alcove.png', alt: 'Little Witch Alcove Chrome extension screens' },
            links: [
                { href: 'https://devpost.com/software/little-witch-alcove', type: 'external', label: 'View Little Witch Alcove on Devpost' },
                { href: 'https://github.com/zhangolivia7/Little-Witch-Alcove', type: 'github', label: 'View Little Witch Alcove on GitHub' }
            ]
        },
        {
            name: 'CTRL-See',
            role: 'Solo builder',
            timeframe: 'Jan 2025',
            hook: 'A live Chrome extension that saves your copy history so you can retrace, re-copy, or delete items from a popup without hunting through tabs.',
            detail: "CTRL-See is a Chrome extension that quietly tracks your clipboard/copy history and surfaces it in a popup for quick re-copy or delete. Built solo and shipped to the Chrome Web Store - load it once, and every copy is one click away instead of lost forever.",
            highlights: [
                'Live on the Chrome Web Store',
                'Copy, re-copy, and delete from one popup',
                'Built solo end to end'
            ],
            tags: [
                { icon: 'assets/sec3/html.png', label: 'HTML/CSS' },
                { icon: 'assets/sec3/javascript.webp', label: 'JavaScript' }
            ],
            thumb: { type: 'image', src: 'assets/ctrl-see.jpeg', alt: 'CTRL-See Chrome extension screenshot' },
            links: [
                { href: 'https://chromewebstore.google.com/detail/ctrl-see/kabekcljkjjfklpcommkbnnpochlinjf', type: 'external', label: 'Get CTRL-See on the Chrome Web Store' },
                { href: 'https://github.com/zhangolivia7/CTRL-See', type: 'github', label: 'View CTRL-See on GitHub' }
            ]
        },
        {
            name: 'Kapture',
            role: 'UMD App Dev Club - Software Engineer',
            timeframe: 'Jan 2024 – May 2024',
            hook: "Facial-tracking app for Children's National Hospital - measures cervical range of motion for kids with neck or spinal injuries and captures neutral expressions for babies.",
            detail: "Built a web-based application for Children's National Hospital that detects cervical range of motion (rotation, flexion, and extension) and captures neutral facial expressions for babies, using facial data from an iPhone camera. Extracted facial landmarks with OpenCV and MediaPipe, then calculated Euler angles of patients' heads with a Perspective-n-Point algorithm. Featured in Maryland Today for helping kids recover from neck surgery.",
            highlights: [
                "Partnered with Children's National Hospital",
                'Featured in Maryland Today',
                'OpenCV + MediaPipe facial landmarks'
            ],
            tags: [
                { icon: 'assets/sec3/react.webp', label: 'React' },
                { icon: 'assets/sec3/python.png', label: 'OpenCV' }
            ],
            thumb: { type: 'image', src: 'assets/TrachSense2.png', alt: 'Kapture facial-tracking app screens' },
            links: [
                { href: 'https://today.umd.edu/student-designed-tool-helps-kids-recovering-from-neck-surgery', type: 'external', label: 'Read about Kapture in Maryland Today' }
            ]
        },
        {
            name: 'ShellSeek',
            role: 'IDEA258U: Introduction to UI/UX Design',
            timeframe: 'Jan 2025 – May 2025',
            hook: 'A redesign of campus navigation for UMD students - find buildings and rooms faster, with accessibility preferences and indoor wayfinding the current map is missing.',
            detail: "Re-designed and re-imagined the navigation app for University of Maryland students to locate buildings and rooms on campus more efficiently, addressing gaps in the current map. The design system covers multi-modal routing (walk, bike, bus/metro, car), accessibility preferences like wheelchair access and least elevation, and AR-style indoor navigation overlays.",
            highlights: [
                'End-to-end UI/UX redesign for UMD campus nav',
                'Accessibility-first routing preferences',
                'Indoor wayfinding + multi-modal trip planning'
            ],
            tags: [
                { icon: 'assets/sec3/figma.webp', label: 'Figma' },
                { label: 'UI/UX' }
            ],
            thumb: { type: 'image', src: 'assets/ShellSeek.png', alt: 'ShellSeek campus navigation app design' },
            links: []
        }
    ];

    var LINK_LABELS = { github: 'GitHub', play: 'Watch Demo', external: 'View Project' };
    var activeOverlay = null;
    var lastFocusedEl = null;

    function getLinks(project) {
        if (project.links) return project.links;
        return project.link ? [project.link] : [];
    }

    function createTag(tag) {
        var span = document.createElement('span');
        span.className = 'tag';
        if (tag.icon) {
            var img = document.createElement('img');
            img.src = tag.icon;
            img.alt = '';
            img.loading = 'lazy';
            img.decoding = 'async';
            span.appendChild(img);
        }
        span.appendChild(document.createTextNode(tag.label));
        return span;
    }

    function createLinkEl(linkData) {
        var link = document.createElement('a');
        link.className = 'project-link';
        link.href = linkData.href;
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', linkData.label);
        link.innerHTML = ICONS[linkData.type] || ICONS.external;
        return link;
    }

    function createThumb(project, options) {
        options = options || {};
        var links = getLinks(project);
        var primary = !options.detailed && links[0];
        var el = primary ? document.createElement('a') : document.createElement('div');
        el.className = 'project-thumb';
        if (primary) {
            el.href = primary.href;
            el.target = '_blank';
            el.rel = 'noopener';
        }

        if (project.thumb.type === 'image' || project.thumb.type === 'icon') {
            if (project.thumb.type === 'icon') el.classList.add('project-thumb--icon');
            var img = document.createElement('img');
            img.src = project.thumb.src;
            img.alt = project.thumb.alt;
            img.loading = 'lazy';
            img.decoding = 'async';
            el.appendChild(img);
        } else if (project.thumb.type === 'mockup') {
            el.classList.add('project-thumb--mockup');
            el.innerHTML =
                '<div class="phone-mockup">' +
                '<div class="phone-notch"></div>' +
                '<div class="phone-screen">' +
                '<div class="capy-avatar">' +
                '<span class="capy-ear capy-ear--left"></span>' +
                '<span class="capy-ear capy-ear--right"></span>' +
                '<span class="capy-face"></span>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        return el;
    }

    function createCard(project, options) {
        options = options || {};
        var card = document.createElement('article');
        card.className = 'project-card';
        if (options.detailed) card.classList.add('project-card--detailed');

        var titlebar = document.createElement('div');
        titlebar.className = 'card-titlebar';
        titlebar.innerHTML =
            '<span class="traffic-dots" aria-hidden="true">' +
            '<span class="dot dot-red"></span>' +
            '<span class="dot dot-yellow"></span>' +
            '<span class="dot dot-green"></span>' +
            '</span>' +
            '<h3 class="card-titlebar-name">' + project.name + '</h3>';

        var links = getLinks(project);
        if (links.length && !options.detailed) {
            var linkGroup = document.createElement('span');
            linkGroup.className = 'project-links';
            links.forEach(function (l) { linkGroup.appendChild(createLinkEl(l)); });
            titlebar.appendChild(linkGroup);
        }

        var body = document.createElement('div');
        body.className = 'project-body';

        if (!options.detailed) {
            var hook = document.createElement('p');
            hook.textContent = project.hook;
            body.appendChild(hook);
        }

        var tagRow = document.createElement('div');
        tagRow.className = 'tag-row';
        project.tags.forEach(function (t) { tagRow.appendChild(createTag(t)); });
        body.appendChild(tagRow);

        card.appendChild(titlebar);
        card.appendChild(createThumb(project, options));
        card.appendChild(body);

        if (options.detailed) {
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', 'View details for ' + project.name);
            card.addEventListener('click', function () { openProjectModal(project); });
            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProjectModal(project);
                }
            });
        }

        return card;
    }

    function getGalleryImages(project) {
        if (project.images && project.images.length) return project.images;
        if (project.thumb && project.thumb.type === 'image') {
            return [{ src: project.thumb.src, alt: project.thumb.alt }];
        }
        return [];
    }

    function createModalLinkButton(linkData) {
        var a = document.createElement('a');
        a.className = 'modal-link-btn' + (linkData.type === 'github' ? ' modal-link-btn--secondary' : ' modal-link-btn--primary');
        a.href = linkData.href;
        a.target = '_blank';
        a.rel = 'noopener';
        a.setAttribute('aria-label', linkData.label);
        a.innerHTML = (ICONS[linkData.type] || ICONS.external) + '<span>' + (LINK_LABELS[linkData.type] || 'View Project') + '</span>';
        return a;
    }

    function handleModalKeydown(e) {
        if (e.key === 'Escape') closeProjectModal();
    }

    function closeProjectModal() {
        if (!activeOverlay) return;
        var overlay = activeOverlay;
        activeOverlay = null;
        overlay.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        document.removeEventListener('keydown', handleModalKeydown);

        var removed = false;
        function remove() {
            if (removed) return;
            removed = true;
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }
        overlay.addEventListener('transitionend', remove, { once: true });
        setTimeout(remove, 250);

        if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
    }

    function openProjectModal(project) {
        closeProjectModal();
        lastFocusedEl = document.activeElement;

        var overlay = document.createElement('div');
        overlay.className = 'project-modal-overlay';
        overlay.addEventListener('mousedown', function (e) {
            if (e.target === overlay) closeProjectModal();
        });

        var win = document.createElement('div');
        win.className = 'project-modal';
        win.setAttribute('role', 'dialog');
        win.setAttribute('aria-modal', 'true');
        win.setAttribute('aria-label', project.name + ' details');

        var titlebar = document.createElement('div');
        titlebar.className = 'project-modal-titlebar';

        var dots = document.createElement('span');
        dots.className = 'traffic-dots';

        var closeDot = document.createElement('button');
        closeDot.className = 'dot dot-red';
        closeDot.type = 'button';
        closeDot.setAttribute('aria-label', 'Close');
        closeDot.addEventListener('click', closeProjectModal);

        var yellowDot = document.createElement('span');
        yellowDot.className = 'dot dot-yellow';
        var greenDot = document.createElement('span');
        greenDot.className = 'dot dot-green';

        dots.appendChild(closeDot);
        dots.appendChild(yellowDot);
        dots.appendChild(greenDot);

        var titleEl = document.createElement('h2');
        titleEl.className = 'project-modal-name';
        titleEl.textContent = project.name;

        titlebar.appendChild(dots);
        titlebar.appendChild(titleEl);

        var content = document.createElement('div');
        content.className = 'project-modal-content';

        var images = getGalleryImages(project);
        if (images.length) {
            var media = document.createElement('div');
            media.className = 'project-modal-media' + (images.length > 1 ? ' project-modal-media--gallery' : '');
            images.forEach(function (img) {
                var imageEl = document.createElement('img');
                imageEl.src = img.src;
                imageEl.alt = img.alt || '';
                imageEl.loading = 'lazy';
                media.appendChild(imageEl);
            });
            content.appendChild(media);
        }

        var body = document.createElement('div');
        body.className = 'project-modal-body';

        if (project.role || project.timeframe) {
            var meta = document.createElement('p');
            meta.className = 'project-modal-meta';
            meta.textContent = [project.role, project.timeframe].filter(Boolean).join(' · ');
            body.appendChild(meta);
        }

        var detail = document.createElement('p');
        detail.className = 'project-modal-detail';
        detail.textContent = project.detail || project.hook;
        body.appendChild(detail);

        if (project.highlights && project.highlights.length) {
            var highlightRow = document.createElement('div');
            highlightRow.className = 'highlight-row';
            project.highlights.forEach(function (h) {
                var chip = document.createElement('span');
                chip.className = 'highlight-chip';
                chip.textContent = h;
                highlightRow.appendChild(chip);
            });
            body.appendChild(highlightRow);
        }

        var tagRow = document.createElement('div');
        tagRow.className = 'tag-row project-modal-tags';
        project.tags.forEach(function (t) { tagRow.appendChild(createTag(t)); });
        body.appendChild(tagRow);

        var links = getLinks(project);
        if (links.length) {
            var linkRow = document.createElement('div');
            linkRow.className = 'project-modal-links';
            links.forEach(function (l) { linkRow.appendChild(createModalLinkButton(l)); });
            body.appendChild(linkRow);
        }

        content.appendChild(body);
        win.appendChild(titlebar);
        win.appendChild(content);
        overlay.appendChild(win);

        document.body.appendChild(overlay);
        document.body.classList.add('modal-open');
        activeOverlay = overlay;
        document.addEventListener('keydown', handleModalKeydown);

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                overlay.classList.add('is-open');
            });
        });

        closeDot.focus();
    }

    function renderProjectGrid(container, limit, options) {
        var list = typeof limit === 'number' ? PROJECTS.slice(0, limit) : PROJECTS;
        list.forEach(function (project) { container.appendChild(createCard(project, options)); });
    }

    document.querySelectorAll('[data-project-limit]').forEach(function (el) {
        var attr = el.getAttribute('data-project-limit');
        var limit = attr === 'all' ? undefined : parseInt(attr, 10);
        var detailed = el.getAttribute('data-project-detailed') === 'true';
        renderProjectGrid(el, limit, { detailed: detailed });
    });

    window.PROJECTS = PROJECTS;
    window.renderProjectGrid = renderProjectGrid;
})();
