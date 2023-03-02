(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-page-rest-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-page-rest-close]'),
    modal: document.querySelector('[data-modal-page-rest-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
