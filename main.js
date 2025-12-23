// Smooth Scrolling
$(function() {
    $('a.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });
});

// Mobile Navigation
$(function() {
    $('.mobile-btn').on('click', function() {
        $('#nav').toggleClass('open');
    });
});

// Typewriter
const typewriter = document.querySelector('.typewriter h2');

// Add the text content to the typewriter element
typewriter.textContent = "Let's start scrolling and learn more about me.";

// Create a new text node for the link
const link = document.createElement('a');
link.href = "http://www.styleshout.com/";
link.textContent = "";

// Append the link to the typewriter element
typewriter.appendChild(link);

// Add a span element for the cursor
const cursor = document.createElement('span');
cursor.className = 'cursor';
cursor.textContent = '';
typewriter.appendChild(cursor);


document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.project-list li');

    if (!listItems.length) return;

    listItems.forEach(li => {
        li.addEventListener('click', () => {
            const detail = li.querySelector('.project-detail');

            // toggle only this project's detail
            const isActive = detail.classList.contains('active');
            // close all
            document.querySelectorAll('.project-detail').forEach(d => d.classList.remove('active'));
            listItems.forEach(item => item.classList.remove('active'));

            if (!isActive) {
                li.classList.add('active');
                detail.classList.add('active');
            }
        });
    });
});

