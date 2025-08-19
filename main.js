const COOKIE = "acceptCookies"

saveOnLocal();
noteSaver();
acceptCookies();
clearAllData();

function saveOnLocal() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
    const name = document.getElementById("name")
    const email = document.getElementById("email")

    const submit = document.getElementById("submit");

    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName !== null && storedEmail !== null) {
        console.log(storedName);
        console.log(storedEmail);
    }

    submit.addEventListener("click", () => {
        if (name.value === "" || email.value === "") {
            alert("Please fill in all fields");
        } else {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
        }
    });
}

function noteSaver() {
    const text = document.getElementById('text');
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        sessionStorage.setItem('note', text.value);
    });
    text.value = sessionStorage.getItem('note');
}

function acceptCookies() {
    const acceptCookiesButton = document.getElementById('acceptCookies');

    const cookie = getCookie(COOKIE);
    if (cookie !== 'true') {
        document.getElementById('footer').style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', () => {
        setCookie(COOKIE, 'true', 7);
        document.getElementById('footer').style.display = 'none';
    });
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function clearAllData() {
    const clearLocal = document.getElementById("clear");

    clearLocal.addEventListener("click", () => {
        localStorage.clear();
        sessionStorage.clear();
        document.cookie = COOKIE + "=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}
