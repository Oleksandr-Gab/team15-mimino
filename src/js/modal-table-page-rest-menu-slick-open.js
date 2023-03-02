(() => {
  const refs = {
    openModalBtn: document.querySelector(
      '[data-modal-table-page-rest-menu-slick-open]'
    ),
    closeModalBtn: document.querySelector(
      '[data-modal-table-page-rest-menu-slick-close]'
    ),
    modal: document.querySelector('[data-modal-page-rest-menu-slick-table]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
