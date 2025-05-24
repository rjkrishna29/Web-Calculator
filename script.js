let string = ""; // To store the entered calculation
const buttons = document.querySelectorAll('.button'); // Select all buttons

// Iterate over all buttons and add event listeners
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML; // Get button text

        if (buttonText === '=') {
            try {
                string = eval(string); // Evaluate the calculation
                document.querySelector('.input').value = string; // Update result
            } catch (error) {
                document.querySelector('.input').value = "Error"; // Handle invalid input
                string = ""; // Reset string
            }
        } else if (buttonText === 'C') {
            string = ""; // Clear the input
            document.querySelector('.input').value = string;
        } else {
            console.log(buttonText); // Log button text
            string += buttonText; // Append button text to string
            document.querySelector('.input').value = string; // Update the input field
        }
    });
});
