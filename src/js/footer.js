(() => {
  const overlay = document.querySelector('.MD-overlay');
  const thanksWindow = document.querySelector('.MD-thanks');
  const thanksCloseBtn = document.querySelector('.MD-thanks-cross');
  const footerButton = document.querySelector('[data-modal-open]');

  function showOverlay() {
    overlay.classList.add('active');
  }

  function hideOverlay() {
    overlay.classList.remove('active');
  }

  function openThanks() {
    thanksWindow.style.display = 'flex';
  }

  function closeThanks() {
    thanksWindow.style.display = 'none';
  }

  if (footerButton) {
    footerButton.addEventListener('click', () => {
      showOverlay();
      openThanks();
    });
  }

  if (thanksCloseBtn) {
    thanksCloseBtn.addEventListener('click', () => {
      closeThanks();
      hideOverlay();
    });
  }
})();
