(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-price-open]'),
    closeModalBtn: document.querySelector('[data-modal-price-close]'),
    modal: document.querySelector('[data-modal-price]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
