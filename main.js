countdown();

function countdown() {
    const startBtn = document.getElementById('start-btn');
    const countdown = document.getElementById('countdown');

    startBtn.addEventListener('click', () => {
        let time = 6;
        const interval = setInterval(() => {
            time--;
            countdown.textContent = time;
            if (time === 0) {
                clearInterval(interval);
                countdown.textContent = 'Go!';
            }
        }, 1000);
    });
}
