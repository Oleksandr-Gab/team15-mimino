(() => {
  const refs = {
    openModalBtn: document.querySelector(
      '[data-modal-page-hotel-price-tri-open]'
    ),
    closeModalBtn: document.querySelector(
      '[data-modal-page-hotel-price-tri-close]'
    ),
    modal: document.querySelector('[data-modal-page-hotel-tri-price]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

