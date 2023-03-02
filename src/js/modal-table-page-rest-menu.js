(() => {
  const refs = {
    openModalBtn: document.querySelector(
      '[data-modal-table-page-rest-menu-open]'
    ),
    closeModalBtn: document.querySelector(
      '[data-modal-table-page-rest-menu-close]'
    ),
    modal: document.querySelector('[data-modal-page-rest-menu-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
