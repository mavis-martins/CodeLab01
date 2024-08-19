document.addEventListener('DOMContentLoaded', () => {
    const heartIcons = document.querySelectorAll('.dateAndFav img');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const parentDiv = this.closest('.postCodeLab');

            const isActive = this.src.includes('icon-heart-active.svg');
            
            if (isActive) {
                this.src = './assets/icons/icon-heart.svg';
                parentDiv.style.borderColor = ''; 
            } else {
                this.src = './assets/icons/icon-heart-active.svg';
                parentDiv.style.borderColor = '#E07B67';
            }
        });
    });
});
