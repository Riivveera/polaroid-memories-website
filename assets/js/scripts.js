function flipCard(event, el) {
    if (event.stopPropagation) event.stopPropagation();
    const polaroid = el.closest('.polaroid');
    polaroid.classList.toggle('flipped');
}

document.querySelectorAll('.polaroid').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('flipped');
    });
});