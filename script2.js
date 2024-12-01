
    // Form Handling and Validation
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}. Your message has been received!`);
            document.getElementById('contactForm').reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
    function submitReview(event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        // Get the form values
        const author = event.target.author.value;
        const review = event.target.review.value;
    
        // Create a new review element
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-item');
        reviewElement.innerHTML = `<strong>${author}</strong>: <p>${review}</p>`;
    
        // Append the new review to the reviews list
        const reviewsList = document.getElementById('reviewsList');
        reviewsList.appendChild(reviewElement);
    
        // Clear the form
        event.target.reset();
    }
    
  