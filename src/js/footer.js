(() => {
  const overlay = document.querySelector('.MD-overlay');
  const thanksWindow = document.querySelector('.MD-thanks');
  const thanksCloseBtn = document.querySelector('.MD-thanks-cross');
  const footerButton = document.querySelector('[data-modal-open]');
  const footerForm = document.querySelector('.footer-sub form');

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

  if (footerForm) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const input = footerForm.querySelector('.footer-input');
      if (input.checkValidity()) {
        showOverlay();
        openThanks();
      }
    });
  }

  if (thanksCloseBtn) {
    thanksCloseBtn.addEventListener('click', () => {
      closeThanks();
      hideOverlay();
    });
  }
})();
