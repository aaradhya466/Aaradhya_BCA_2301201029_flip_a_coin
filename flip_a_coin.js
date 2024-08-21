const coin = document.getElementById('coin');
const result = document.getElementById('result');
const flipButton = document.getElementById('flipButton');

function flipCoin() {
    // Add flip class for animation
    coin.classList.add('flip');
    
    // Wait for the animation to complete before showing result
    setTimeout(() => {
        // Remove flip class after animation
        coin.classList.remove('flip');
        
        // Determine the result
        const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        result.textContent = `Result: ${outcome}`;
        
        // Update coin face
        coin.textContent = outcome;
    }, 500); // Match the duration of the CSS animation
}

flipButton.addEventListener('click', flipCoin);
