countdown();

function countdown() {
    const startBtn = document.getElementById('start-btn');
    const countdown = document.getElementById('countdown');

    startBtn.addEventListener('click', () => {
        let time = 5;
        function timer() {
            if (time === 0) {
                countdown.textContent = "Go!";
            } else {
                countdown.textContent = time;
            }
            time--;
            if (time >= 0) {
                setTimeout(timer, 1000);
            }
        }

        timer();
    });
}
