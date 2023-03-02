(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-page-hot-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-page-hot-close]'),
    modal: document.querySelector('[data-modal-page-hot-room]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
