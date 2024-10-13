// Hide Netflix logo animation and show profile selection
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector('.netflix').style.display = 'none'; // Hide Netflix logo animation
        document.querySelector('.whos-watching').classList.remove('hidden'); // Show profile selection
        document.querySelector('.whos-watching').style.visibility = 'visible'; // Make it visible

        // Apply bounce effect to each profile
        const profileLinks = document.querySelectorAll('.profile-link');
        profileLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1'; // Show the profile
                link.style.animation = 'bounce-in 0.8s ease-out forwards'; // Apply bounce animation
            }, index * 200); // Delay for staggered animation effect
        });
    }, 5000); // 5 seconds delay

    // Add event listeners to profile links
    const profileLinks = document.querySelectorAll('.profile-link');
    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const profile = link.getAttribute('data-profile'); // Get the clicked profile
            document.querySelector('.whos-watching h1').style.display = 'none'; // Hide "Who's watching?"

            // Hide all other profiles and names
            profileLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('hidden'); // Hide others
                }
                otherLink.querySelector('span').style.display = 'none'; // Hide names
            });

            // Enlarge the clicked profile picture
            const profilePic = link.querySelector('.profile-pic');
            profilePic.classList.add('enlarged');

            // Show the loading spinner
            const loadingSpinner = link.querySelector('.loading-spinner');
            loadingSpinner.classList.remove('hidden'); // Show spinner

            // Wait for 1 second, then show the personal page
            setTimeout(() => {
                document.querySelector('.whos-watching').style.display = 'none'; // Hide profile selection

                // Show the appropriate personal page
                if (profile === 'Ryan') {
                    document.querySelector('#ryan-page').style.display = 'block';
                } else if (profile === 'Liza') {
                    document.querySelector('#liza-page').style.display = 'block';
                } else if (profile === 'Kat') {
                    document.querySelector('#kat-page').style.display = 'block';
                }
            }, 1000); // 1-second delay for loading
        });
    });

    // Preview logic for movie/TV show hover effect
    const previewImage = document.getElementById('previewImage');
    const previewText = document.getElementById('previewText');

    document.querySelectorAll('.LM, .LTV').forEach(item => {
        item.addEventListener('mouseover', () => {
            // Get the data attributes
            const previewImgSrc = item.getAttribute('data-preview-img');
            const previewTextContent = item.getAttribute('data-preview-text');

            // Update the preview image and text
            if (previewImage) previewImage.src = previewImgSrc;
            if (previewText) previewText.textContent = previewTextContent;

            // Show the preview by changing the opacity
            if (previewImage) previewImage.style.opacity = '1';
            if (previewText) previewText.style.opacity = '1';
        });
    });
});
