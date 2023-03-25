// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element by its ID
    const button = document.getElementById('click-me');
    // Get the message element by its ID
    const message = document.getElementById('message');
  
    // If the button and message elements exist
    if (button && message) {
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        // Set the message text content and show it
        message.textContent = 'Hello from TypeScript!';
        message.style.display = 'block';
      });
    }
  });
  