document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.color-text');
    const words = textElement.innerText.split(' ');

    textElement.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

    const wordElements = document.querySelectorAll('.word');

    wordElements.forEach(word => {
        word.addEventListener('mouseover', () => {
            word.style.color = '#ffd700';
            word.style.textShadow = '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700, 0 0 20px #ffd700, 0 0 25px #ffd700';
        });

        word.addEventListener('mouseout', () => {
            word.style.color = '#fff'; // Reset to original color on mouse leave
            word.style.textShadow = 'none'; // Reset to no shadow
        });
    });
});
