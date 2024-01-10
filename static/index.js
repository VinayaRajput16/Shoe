/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("main").style.marginRight= "350px";
  document.body.style.backgroundColor = "rgb(41, 51, 72, 0.5)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.body.style.backgroundColor = "white";
}
// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// When the user scrolls down 50px from the top of the document, resize the header's font size

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the 'block' class
  var blockElements = document.querySelectorAll('.block');

  // Listen for scroll events on the window
  window.addEventListener("scroll", function () {
      // Calculate the scaling factor based on the scroll position
      var scrollPosition = window.scrollY;
      var scalingFactor = 1 + (scrollPosition / 1000); // Adjust the scaling factor as needed

      // Apply the scaling factor to the font size of each block element
      blockElements.forEach(function (element) {
          element.style.fontSize = (30 * scalingFactor) + 'px';
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var logoElement = document.querySelector('.logo');

  // Add the logo-enter class to the logo when the page loads
  logoElement.classList.add('logo-enter');

  // Remove the logo-enter class after a short delay
  setTimeout(function () {
      logoElement.classList.remove('logo-enter');
  }, 500);
});

function toggleProfileMenu() {
  var profileMenu = document.getElementById("profile-menu");
  profileMenu.style.display = (profileMenu.style.display === "block") ? "none" : "block";
}
 

