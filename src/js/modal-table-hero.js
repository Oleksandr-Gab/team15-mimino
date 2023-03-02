(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-hero-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-hero-close]'),
    modal: document.querySelector('[data-modal-hero-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
