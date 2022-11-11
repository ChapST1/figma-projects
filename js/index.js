const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');
const modalRange = document.getElementById('modal-range');
let value;

const allImages = document.querySelectorAll('.projects__img');

allImages.forEach(e => {
    e.addEventListener('click', () => {
        modal.classList.add('modal-active');
        closeModal.addEventListener('click', () => {
            modal.classList.remove('modal-active');

        })
    })
})

modalRange.addEventListener('change', (e) => {
    value = e.target.value;
    modalImage.style.width = `${value}0%`;
})