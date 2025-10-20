/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Reviews functionality
    const reviews = [
        {
            name: "Client Name",
            rating: 5,
            text: "Copy the exact review text from your TaskRabbit profile here. Keep the original wording to maintain authenticity.",
            date: "Date from review (e.g., '2 weeks ago')"
        },
        {
            name: "Another Client",
            rating: 5,
            text: "Another review text goes here. Make sure to copy it exactly as it appears on TaskRabbit.",
            date: "1 month ago"
        },
        {
            name: "Third Client",
            rating: 5,
            text: "Add as many reviews as you want to showcase. The more the better for the scrolling effect!",
            date: "3 weeks ago"
        },
        // Add more reviews here...
    ];

    function generateStars(rating) {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }

    function createReviewCard(review) {
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewer-info">
                        <h5>${review.name}</h5>
                        <div class="stars">${generateStars(review.rating)}</div>
                        <div class="review-date">${review.date}</div>
                    </div>
                    <div class="verified-badge">✓ Verified</div>
                </div>
                <p class="review-text">"${review.text}"</p>
            </div>
        `;
    }

    // Generate and display reviews
    const reviewsHTML = reviews.map(createReviewCard).join('');
    const scrollContainer = document.getElementById('reviewsScroll');
    
    if (scrollContainer) {
        // Duplicate reviews for seamless infinite scroll
        scrollContainer.innerHTML = reviewsHTML + reviewsHTML;
    }

});
