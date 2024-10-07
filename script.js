

// JavaScript to hide the Netflix logo and show profiles
setTimeout(() => {
    console.log('Hiding Netflix logo'); // Debugging message
    document.querySelector('.netflix').style.display = 'none'; // Hide Netflix logo

    console.log('Showing profile section'); // Debugging message
    document.querySelector('.whos-watching').classList.remove('hidden'); // Show profile page
}, 2500); // Adjusted timeout for better timing
