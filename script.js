

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
                link.style.opacity = '1'; 
                link.style.animation = 'bounce-in 0.8s ease-out forwards'; 
            }, index * 200); 
        });
    }, 5000); 

    
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const profile = link.getAttribute('data-profile'); 
            document.querySelector('.whos-watching h1').style.display = 'none'; 

            profileLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('hidden'); 
                }
                otherLink.querySelector('span').style.display = 'none'; 
            });

            const profilePic = link.querySelector('.profile-pic');
            profilePic.classList.add('enlarged');
            const loadingSpinner = link.querySelector('.loading-spinner');
            loadingSpinner.classList.remove('hidden'); 

            setTimeout(() => {
                document.querySelector('.whos-watching').style.display = 'none'; 
                if (profile === 'Ryan') {
                    document.querySelector('#ryan-page').style.display = 'block';
                } else if (profile === 'Liza') {
                    document.querySelector('#liza-page').style.display = 'block';
                } else if (profile === 'Kat') {
                    document.querySelector('#kat-page').style.display = 'block';
                }
            }, 1000); 
        });
    });


  // Preview logic for movie/TV show hover effect Ryan
  const previewImageR = document.getElementById('previewImageR');
  const previewTextR = document.getElementById('previewTextR');
  const summaryR = document.getElementById('summaryR')

  document.querySelectorAll('.RM, .RTV').forEach(item => {
      item.addEventListener('mouseover', () => {
          const previewImgSrc = item.getAttribute('data-preview-imgR');
          const previewTextContent = item.getAttribute('data-preview-textR');
          const previewSummaryR = item.getAttribute("data-summaryR");

          if (previewImageR) previewImageR.src = previewImgSrc;
          if (previewTextR) previewTextR.textContent = previewTextContent;
          if (summaryR) summaryR.textContent = previewSummaryR;

          if (previewImageR) previewImageR.style.opacity = '1';
          if (previewTextR) previewTextR.style.opacity = '1';
          if (summaryR) previewSummaryR.style.opacity = '1';
      });
  }); 


  // Preview logic for movie/TV show hover effect Liza
  const previewImage = document.getElementById('previewImage');
  const previewText = document.getElementById('previewText');
  const summaryL = document.getElementById('summaryL');


  document.querySelectorAll('.LM, .LTV, .LWL').forEach(item => {
      item.addEventListener('mouseover', () => {
          const previewImgSrc = item.getAttribute('data-preview-img');
          const previewTextContent = item.getAttribute('data-preview-text');
          const previewSummaryL = item.getAttribute("data-summaryL");

          if (previewImage) previewImage.src = previewImgSrc;
          if (previewText) previewText.textContent = previewTextContent;
          if (summaryL) summaryL.textContent = previewSummaryL;

          if (previewImage) previewImage.style.opacity = '1';
          if (previewText) previewText.style.opacity = '1';
          if (summaryL) previewSummaryL.style.opacity = '1';
      });
  }); 



  // Preview logic for movie/TV show hover effect Kat
  const previewImageK = document.getElementById('previewImageK');
  const previewTextK = document.getElementById('previewTextK');

  document.querySelectorAll('.KM, .KTV').forEach(item => {
      item.addEventListener('mouseover', () => {
          const previewImgSrc = item.getAttribute('data-preview-imgK');
          const previewTextContent = item.getAttribute('data-preview-textK');

          if (previewImageK) previewImageK.src = previewImgSrc;
          if (previewTextK) previewTextK.textContent = previewTextContent;

          if (previewImageK) previewImage.style.opacity = '1';
          if (previewTextK) previewText.style.opacity = '1';
      });
  }); 
  
}); // end of class
