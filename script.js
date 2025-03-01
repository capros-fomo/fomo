document.addEventListener('DOMContentLoaded', function() {
  const triggerButton = document.getElementById('trigger');
  const fomoOverlay = document.getElementById('fomoOverlay');
  const releaseContainer = document.getElementById('releaseContainer');
  const imageContainer = document.querySelector('.image-container');
  
  triggerButton.addEventListener('click', function() {
    triggerButton.style.display = 'none';
    fomoOverlay.classList.add('fomo-active');
    fomoOverlay.style.display = 'flex';
  
    setTimeout(() => {
    fomoOverlay.classList.remove('fomo-active');
    fomoOverlay.classList.add('fomo-dim');
    imageContainer.style.display = 'none';
    releaseContainer.style.display = 'flex';
    }, 4000);
  });
  });
