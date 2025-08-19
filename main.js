const COOKIE = "acceptCookies"

acceptCookies();

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
