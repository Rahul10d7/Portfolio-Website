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

// Get the typewriter element
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

