// Alright, let’s handle this form the right way
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('form'); // The form we’re working with
  const nameField = document.querySelector('#name'); // Name input
  const emailField = document.querySelector('#email'); // Email input field
  const reasonField = document.querySelector('#interest'); // Why they’re interested

  // Email validation—let’s keep it clean
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard check for emails
    return emailRegex.test(email);
  };

  // On submit, make sure everything’s filled out right
  signupForm.addEventListener('submit', (e) => {
    let validationFailed = false;

    // Check if they left the name blank
    if (!nameField.value.trim()) {
      alert("We gotta know your name before you can sign up.");
      validationFailed = true;
    }

    // Make sure the email is good—no shady addresses
    if (!isValidEmail(emailField.value)) {
      alert("This email ain’t looking valid. Try again.");
      validationFailed = true;
    }

    // Can’t leave this field blank—we wanna know your reason
    if (!reasonField.value.trim()) {
      alert("Tell us why you’re interested in Compost Worm Tycoon. Don’t hold back!");
      validationFailed = true;
    }

    if (validationFailed) {
      e.preventDefault(); // Stop everything till they fix it
    } else {
      alert('You’re all set—welcome to the Worm Tycoon fam!'); // Nice little welcome
    }
  });
});






// Hooking up dropdown menu interactivity
const navItems = document.querySelectorAll('nav ul li');
navItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#4caf50'; // Give it a highlight on hover
  });
  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = ''; // Reset when they leave
  });
});

// Hitting them with some feedback when they click the Call-to-Action button
const ctaButton = document.querySelector('#cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert('Thanks for starting your worm empire!'); // Encouragement prompt for the button
  });
}

// Make that table feel interactive with row highlights
const tableRows = document.querySelectorAll('#comparison-table tbody tr');
tableRows.forEach((row) => {
  row.addEventListener('mouseenter', () => {
    row.style.backgroundColor = '#f0f0f0'; // Highlight row on hover
  });
  row.addEventListener('mouseleave', () => {
    row.style.backgroundColor = ''; // Reset row color on leave
  });
});

// Smooth scroll for navigation—keep it classy
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href'); // helping ensure the scroll is behavior as expected or intended
    if (href.startsWith('#')) { // Smooth scroll for internal section links
      e.preventDefault(); // Don't follow the link
      const targetElement = document.querySelector(href); // Find the target section
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
      }
    }
  });
});

// Survey Form Validation and Submission
document.addEventListener('DOMContentLoaded', () => {
  const surveyForm = document.querySelector('#survey-form'); // Grab the survey form
  const wormSelect = document.querySelector('#favorite-worm'); // Dropdown for worm types
  const featureInput = document.querySelector('#most-wanted-feature'); // Text for features
  const gameplayRating = document.querySelector('#gameplay-rating'); // Slider for rating
  const ratingDisplay = document.querySelector('#rating-display'); // Displaying slider value

  // Update the displayed rating value dynamically as the slider moves it
  gameplayRating.addEventListener('input', () => {
    ratingDisplay.textContent = gameplayRating.value; // Show current rating
  });

  // Handle form submission
  surveyForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from refreshing the page

    // Validate the dropdown selection
    if (!wormSelect.value) {
      alert('Please select your favorite worm type.'); // Prompt for missing selection
      return;
    }

    // Validate the textarea input
    if (featureInput.value.trim() === '') {
      alert('Please share what feature excites you most.'); // Prompt for empty feature input
      return;
    }

    // Feedback for successful submission
    alert('Thank you for your feedback! Your help us improve our game!');
    surveyForm.reset(); // Reset the form fields
    ratingDisplay.textContent = '3'; // Reset the slider display to default
  });
});
