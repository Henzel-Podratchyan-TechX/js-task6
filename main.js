main();


function main() {
    const newJokeButton = document.getElementById("get-joke");
    const jokeDiv = document.getElementById("joke-container");


    newJokeButton.addEventListener("click", async () => {
        const joke = await getJoke();
        jokeDiv.textContent = joke;
    });
}


async function getJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });


        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText);
        }


        const joke = await response.json();
        return joke.joke;
    } catch (e) {
        return "Failed to fetch joke";
    }
}
