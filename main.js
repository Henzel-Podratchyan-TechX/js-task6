tickTracker();

function tickTracker() {
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const output = document.getElementById('output');

    let tickInterval = undefined;

    startButton.addEventListener('click', () => {
        if (!tickInterval) {
            tickInterval = setInterval(() => {
                const p = document.createElement("p");
                p.textContent = "Tick";
                output.appendChild(p);
            }, 1000);
        }
    });

    stopButton.addEventListener('click', () => {
        clearInterval(tickInterval);
        tickInterval = undefined;
    });
}
