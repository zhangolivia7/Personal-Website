(function () {
    var ICONS = {
        github: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
        play: '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M4 2.5v11l10-5.5-10-5.5Z"/></svg>',
        external: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h7v7"/><path d="M13 3 4 12"/></svg>'
    };

    var PROJECTS = [
        {
            name: 'TrachSense',
            role: 'App Development Club — Mobile Engineer',
            timeframe: 'Sep 2024 – May 2025',
            hook: "Remote CO2 monitoring for tracheostomy patients — built with Children's National Hospital so non-ventilated pediatric patients get real-time complication alerts instead of a nurse checking in.",
            detail: "Built with Children's National Hospital to give non-ventilated pediatric tracheostomy patients continuous CO2 monitoring instead of periodic manual checks. The Flutter app pairs with a sensor over Bluetooth, streams readings to a Python backend, and pushes real-time alerts the moment a reading drifts into dangerous territory — giving nurses minutes of extra warning on complications that used to go unnoticed between rounds.",
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
            link: { href: 'https://github.com/zhangolivia7', type: 'github', label: 'View TrachSense on GitHub' }
        },
        {
            name: "Capy's Journey",
            role: 'Co-founder & CPTO',
            timeframe: 'Jun 2025 – present',
            hook: 'A gamified mindfulness app for kids ages 6–14 — meditation and breathing reframed as an adventure. Co-founder & CPTO across product, engineering, and marketing.',
            detail: "A gamified mindfulness game for kids ages 6–14 that reframes meditation and breathing exercises as an adventure, built in Unity/C# with a Firebase backend. My role spans product, engineering, and marketing: I ship the Unity/Firebase build, design the cosmetics and reward systems that keep kids coming back, and run the content strategy — video essays, social campaigns — that got us noticed.",
            highlights: [
                '🚀 Accepted into the Mokhtarzada Hatchery accelerator',
                '🏆 Winner — Shore Hatchery pitch competition',
                '⚡ Youngest team of 13 finalists'
            ],
            tags: [
                { label: 'Unity' },
                { label: 'Firebase' }
            ],
            thumb: { type: 'image', src: "assets/Capy's Journey.png", alt: "Capy's Journey app screens" },
            link: { href: 'https://apps.apple.com/us/app/capy-calm-kids-meditation/id6760802602', type: 'external', label: "View Capy's Journey on the App Store" }
        },
        {
            name: 'Bitcamp Design',
            role: 'Design Team Organizer, UMD Bitcamp',
            timeframe: 'Oct 2024 – present',
            hook: "UI/UX and front-end for a 1,000+ attendee hackathon's website as UMD Bitcamp's Design Team Organizer — the thing every participant sees before they ever set foot in the venue.",
            detail: "Spearheaded graphic design, product design, and UI/UX for UMD Bitcamp's hackathon website — the first thing 1,000+ attendees see before they ever set foot in the venue. Owned the visual identity end to end: the Figma design system, the front-end build, and the small interaction details that make a hackathon site feel like part of the event instead of an afterthought.",
            highlights: [
                '1,000+ attendees served',
                'Owned the design system + front-end build',
                'Design Team Organizer since Oct 2024'
            ],
            tags: [
                { icon: 'assets/sec3/figma.webp', label: 'Figma' },
                { icon: 'assets/sec3/html.png', label: 'HTML/CSS' },
                { icon: 'assets/sec3/javascript.webp', label: 'JavaScript' }
            ],
            thumb: { type: 'image', src: 'assets/Bitcamp.png', alt: 'Bitcamp hackathon website screenshot' },
            link: { href: 'https://github.com/zhangolivia7', type: 'github', label: 'View Bitcamp work on GitHub' }
        },
        {
            name: 'Den',
            role: 'Solo builder — Buildspace Nights & Weekends',
            timeframe: 'Jun 2024 – Aug 2024',
            hook: 'A React Native app built solo during Buildspace Nights & Weekends to talk yourself down from a panic attack — guided breathing, meditation, and fidget toys in one place.',
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
            link: { href: 'https://youtu.be/o8s2vsBwTZY', type: 'play', label: 'Watch the Den demo on YouTube' }
        }
    ];

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

    function createThumb(project) {
        var a = document.createElement('a');
        a.className = 'project-thumb';
        a.href = project.link.href;
        a.target = '_blank';
        a.rel = 'noopener';

        if (project.thumb.type === 'image') {
            var img = document.createElement('img');
            img.src = project.thumb.src;
            img.alt = project.thumb.alt;
            img.loading = 'lazy';
            img.decoding = 'async';
            a.appendChild(img);
        } else if (project.thumb.type === 'mockup') {
            a.classList.add('project-thumb--mockup');
            a.innerHTML =
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
        return a;
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

        var link = document.createElement('a');
        link.className = 'project-link';
        link.href = project.link.href;
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', project.link.label);
        link.innerHTML = ICONS[project.link.type];
        titlebar.appendChild(link);

        var body = document.createElement('div');
        body.className = 'project-body';

        if (options.detailed) {
            if (project.role || project.timeframe) {
                var meta = document.createElement('p');
                meta.className = 'project-meta';
                meta.textContent = [project.role, project.timeframe].filter(Boolean).join(' · ');
                body.appendChild(meta);
            }
            var detail = document.createElement('p');
            detail.className = 'project-detail';
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
        } else {
            var hook = document.createElement('p');
            hook.textContent = project.hook;
            body.appendChild(hook);
        }

        var tagRow = document.createElement('div');
        tagRow.className = 'tag-row';
        project.tags.forEach(function (t) { tagRow.appendChild(createTag(t)); });
        body.appendChild(tagRow);

        card.appendChild(titlebar);
        card.appendChild(createThumb(project));
        card.appendChild(body);
        return card;
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
