const overlay = document.querySelector('.MD-overlay');
const modalWindow = document.querySelector('.modalWindow');
const modalCloseBtn = document.querySelector('.MD-cross');
const saveBtn = document.querySelector('.MD-logIn-btn');

const thanksWindow = document.querySelector('.MD-thanks');
const thanksCloseBtn = document.querySelector('.MD-thanks-cross');


function showOverlay() {
  overlay.classList.add('active');
}

function hideOverlay() {
  overlay.classList.remove('active');
}

function openModal() {
  showOverlay();
  modalWindow.style.display = 'flex';
}

function closeModal() {
  modalWindow.style.display = 'none';
}

function openThanks() {
  thanksWindow.style.display = 'flex';
}

function closeThanks() {
  thanksWindow.style.display = 'none';
}


window.addEventListener('DOMContentLoaded', () => {
  openModal();
});


if (saveBtn) {
  saveBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModal();
    openThanks();
  });
}


if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    closeModal();
    hideOverlay();
  });
}


if (thanksCloseBtn) {
  thanksCloseBtn.addEventListener('click', () => {
    closeThanks();
    hideOverlay();
  });
}
