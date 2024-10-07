

// Hide Netflix logo animation and show profile selection
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector('.netflix').style.display = 'none';
        document.querySelector('.whos-watching').classList.remove('hidden');
        document.querySelector('.whos-watching').style.visibility = 'visible';

         // Apply bounce effect to each profile with a staggered delay
         const profileLinks = document.querySelectorAll('.profile-link');
         profileLinks.forEach((link, index) => {
             setTimeout(() => {
                 link.style.opacity = '1';  // Show the profile
                 link.style.animation = 'bounce-in 0.8s ease-out forwards';  // Apply bounce animation
             }, index * 200);  // Delay for staggered animation effect (200ms)
         });
     }, 3000);




    // Add event listeners to profile links
    const profileLinks = document.querySelectorAll('.profile-link');
    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent link navigation

            // Get the clicked profile
            const profile = link.getAttribute('data-profile');

            document.querySelector('.whos-watching h1').style.display = 'none';

            // Hide all other profiles and names
            profileLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('hidden');
                }
                otherLink.querySelector('span').style.display = 'none'; // Hide names

            });

            // Enlarge the clicked profile picture
            const profilePic = link.querySelector('.profile-pic');
            profilePic.classList.add('enlarged');

            // Show the loading spinner
            const loadingSpinner = link.querySelector('.loading-spinner');
            loadingSpinner.classList.remove('hidden');

            // Wait for 4 seconds, then show the personal page
            setTimeout(() => {
                // Hide the profile selection section
                document.querySelector('.whos-watching').style.display = 'none';

                // Show the appropriate personal page
                if (profile === 'Ryan') {
                    document.querySelector('#ryan-page').style.display = 'block';
                } else if (profile === 'Liza') {
                    document.querySelector('#liza-page').style.display = 'block';
                } else if (profile === 'Kat') {
                    document.querySelector('#kat-page').style.display = 'block';
                }
            }, 3000); // 4-second delay for loading
        });
    });
});
