(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-hot-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-hot-close]'),
    modal: document.querySelector('[data-modal-hot-room]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
