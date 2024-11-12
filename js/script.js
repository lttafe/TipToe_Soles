// LACHLAN TANFIELD - PART 3 ASSIGNMENT

// HAMBURGER MENU
document.getElementById('hamburger').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
});

// TRACK FOOTER LINKS VISITED STATE ACROSS PAGES
document.addEventListener('DOMContentLoaded', function() {
  // Select all the utility links
  const links = document.querySelectorAll('footer ul li a.utility-link');
  
  // Retrieve the visited links from localStorage
  const visitedLinks = JSON.parse(localStorage.getItem('visitedLinks')) || [];

  // Mark links as visited if they're in localStorage
  links.forEach(link => {
    if (visitedLinks.includes(link.href)) {
      link.classList.add('visited'); // Add the 'visited' class if the link was clicked
    }

    // Event listener for clicks to track visited links
    link.addEventListener('click', function() {
      if (!visitedLinks.includes(link.href)) {
        visitedLinks.push(link.href);  // Add the link to the visited list
        localStorage.setItem('visitedLinks', JSON.stringify(visitedLinks)); // Save to localStorage
      }
    });
  });
});