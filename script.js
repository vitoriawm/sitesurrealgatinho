window.onload = function() {
    const audio = document.getElementById('audio');
    audio.play().catch(error => {
        console.log("Autoplay failed: ", error);
    });

    const cd = document.querySelector('.cd-wrapper');
    const cover = document.querySelector('.cover');
    
    cd.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            cover.style.opacity = '0';
        } else {
            audio.pause();
            cover.style.opacity = '0.7';
        }
    });
}

