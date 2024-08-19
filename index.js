document.addEventListener('DOMContentLoaded', () => {
    const heartIcons = document.querySelectorAll('.dateAndFav img');
    
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const parentDiv = this.closest('.postCodeLab');
            const isActive = parentDiv.style.borderColor === 'rgb(224, 123, 103)';

            parentDiv.style.borderColor = isActive ? '' : '#E07B67';

            if (isActive) {
                this.src = './assets/icons/icon-heart.svg';
            } else {
                this.src = './assets/icons/icon-heart-active.svg';
            }
        });
    });
});
