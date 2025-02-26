// Get the modal elements
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

// Function to open the modal
function openModal(image) {
    modal.style.display = 'block';
    const img = document.createElement('img');
    img.src = image.src;
    modal.innerHTML = '';
    modal.appendChild(img);
    modal.appendChild(closeModal);
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = 'none';
}

// Add event listeners to the modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('artwork')) {
        const image = e.target.querySelector('img');
        openModal(image);
    }
});

closeModal.addEventListener('click', closeModalFunction);

// Add event listener to the modal background
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});
