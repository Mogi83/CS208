// rewrote the sayHello() function to instead count how many times you have clicked the button. 
let clickCount = 0;
function sayHello() {
    clickCount++; 
    alert("Hello, world from JavaScript! You've clicked " + clickCount + " times.");
}
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

async function getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error => {
        console.error('There was a problem fetching the joke:', error);
        return "Failed to fetch a joke. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-button");
    if (!jokeButton) {
        console.error("Button with ID 'joke-button' not found.");
        return;
    }
    jokeButton.addEventListener("click", async function() {

            const jokeDisplay = document.getElementById("joke-display");
            if (!jokeDisplay) {
                console.error("Element with ID 'joke-display' not found.");
                return;
            }
            jokeDisplay.textContent = "Loading joke...";
            const joke = await getRandomJoke();
            jokeDisplay.textContent = joke;
    });
});


// Sports lineup assignment:

document.getElementById('submitBtn').addEventListener('click', myLineUp);

function myLineUp(event) {
    event.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const gameDate = document.getElementById('gameDate').value;
    const playerCheckboxes = document.querySelectorAll('input[name="player"]:checked');
    let players = [];
    
    playerCheckboxes.forEach((checkbox) => {
        players.push(checkbox.value);
    });

    const resultString = `Status: ${status} | Date: ${gameDate} | Players: ${players.join(', ') || 'None selected'}`;

    console.log("Form Data Received:");
    console.log("Status:", status);
    console.log("Date:", gameDate);
    console.log("Players:", players);
    
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `<h3>Submission Summary:</h3><p>${resultString}</p>`;
}