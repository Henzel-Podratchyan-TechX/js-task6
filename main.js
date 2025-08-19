saveOnLocal();

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