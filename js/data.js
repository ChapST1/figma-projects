export async function showData(element) {
    const response = await fetch('../services/projects.json');
    const data = await response.json();
    data.reverse();
    data.map(e => {
        return element.innerHTML += `
        <article class="projects__item">
            <img src="${e.small}" alt="$${e.alt}" data-hd="${e.hd}" class="projects__img" id="${e.id}">
            <!-- loader -->
            <aside class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </aside>
        </article>`;
    });

    const loader = document.querySelectorAll('.loader');
    const allImages = document.querySelectorAll('.projects__img');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    const modalLoader = document.getElementById('modal-loader')
    const modalImage = document.getElementById('modal-img');
    const modalRange = document.getElementById('modal-range');
    const modalNumber = document.getElementById('modal-number');
    let value;

    showLoader(allImages, loader);

    allImages.forEach(e => {
        e.addEventListener('click', () => {
            modal.classList.add('modal-active');
            let image = e.getAttribute('data-hd');
            modalImage.setAttribute('src', image)

            modalLoader.style.display = 'block';

            modalImage.addEventListener('load', () => {
                modalLoader.style.display = 'none';
                modalImage.style.display = 'block'
            })
            closeModal.addEventListener('click', () => {
                modal.classList.remove('modal-active');
                modalImage.style.display = 'none';
            })
        })
    })
    modalRange.addEventListener('input', (e) => {
        value = e.target.value;
        modalNumber.textContent = `${value}0%`;
        modalImage.style.width = `${value}0%`;
    })
}


const showLoader = (img, loader) => {
    img.forEach(e => {
        e.addEventListener('load', () => {
            e.nextElementSibling.style.display = 'none';
            e.style.display = 'block';
        })
        e.nextElementSibling.style.display = 'block'
    })
}
