noteSaver();

function noteSaver() {
    const text = document.getElementById('text');
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        sessionStorage.setItem('note', text.value);
    });
    text.value = sessionStorage.getItem('note');
}
