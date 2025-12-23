// Smooth Scrolling
$(function () {
    $('a.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate(
            {
                scrollTop: $target.offset().top
            },
            800,
            'swing',
            function () {
                window.location.hash = target;
            }
        );
    });
});


// Mobile Navigation
$(function () {
    $('.mobile-btn').on('click', function () {
        $('#nav').toggleClass('open');
    });
});


// Typewriter (desktop only typing; mobile = static text)
(function () {
    const typewriter = document.querySelector('.typewriter h2');
    if (!typewriter) return;

    const fullText = "Let's start scrolling and learn more about me.";

    // Always create the cursor
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '';
    // set initial content (will be changed for desktop below)
    typewriter.textContent = fullText;
    typewriter.appendChild(cursor);

    // Check if viewport is mobile width
    const isMobile = window.matchMedia('(max-width: 600px)').matches;

    if (!isMobile) {
        // Desktop: animate typing
        typewriter.textContent = '';   // clear text; cursor will be re‑appended
        typewriter.appendChild(cursor);

        let i = 0;

        function type() {
            if (i < fullText.length) {
                // insert text before the cursor so cursor stays at the end
                cursor.before(fullText.charAt(i));
                i++;
                setTimeout(type, 80);
            }
        }

        type();
        // CSS will handle cursor blinking
    }
    // On mobile: do nothing else → fullText is already shown, cursor blinks via CSS
})();


// Project list toggle
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.project-list li');

    if (!listItems.length) return;

    listItems.forEach(li => {
        li.addEventListener('click', () => {
            const detail = li.querySelector('.project-detail');

            if (!detail) return;

            const isActive = detail.classList.contains('active');

            // close all
            document.querySelectorAll('.project-detail').forEach(d => d.classList.remove('active'));
            listItems.forEach(item => item.classList.remove('active'));

            // open this one if it was not active
            if (!isActive) {
                li.classList.add('active');
                detail.classList.add('active');
            }
        });
    });
});
