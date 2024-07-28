export const audio = (() => {

    const music = document.getElementById('button-music');
    let audio = null;

    const getAudio = () => {
        if (!audio) {
            audio = new Audio();
            audio.src = music.getAttribute('data-url');
            audio.load();
            audio.currentTime = 0;
            audio.autoplay = true;
            audio.muted = false;
            audio.loop = true;
            audio.volume = 1;
        }

        return audio;
    };

    const button = (button) => {
        if (button.getAttribute('data-status') !== 'true') {
            button.setAttribute('data-status', 'true');
            getAudio().play();
            button.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
            return;
        }

        button.setAttribute('data-status', 'false');
        getAudio().pause();
        button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    };

    const showButton = () => {
        music.style.display = 'block';
        music.style.setAttribute = 'light';
        music.classList.add('btn-theme-dark','text-dark','bg-light','bg-white','bg-theme-light','btn-outline-dark','color-theme-white','active');
    };

    return {
        play: () => getAudio().play(),
        button,
        showButton,
    };
})();