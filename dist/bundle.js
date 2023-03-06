const jokeButton = document.getElementsByClassName("jokeButton")[0];
document.getElementsByClassName("jokeText")[0];
const jokeImage = document.getElementsByClassName("jokeImage")[0];
const jokeTitle = document.getElementsByClassName("jokeTitle")[0];
async function getJoke(id) {
    const joke = await fetch(" https://getxkcd.vercel.app/api/comic?num=" + id).then(r => r.json());
    return joke;
}
jokeButton.addEventListener("click", async function () {
    MakeJoke();
});
async function MakeJoke() {
    const params = new URLSearchParams();
    params.append('email', "k.tyulebaeva@innopolis.university");
    const id = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(r => r.json());
    const joke = await getJoke(id);
    const { alt, title, img, year, month, day } = joke;
    jokeImage.src = img;
    jokeTitle.textContent = title;
}
document.addEventListener("DOMContentLoaded", function () {
    MakeJoke();
});
MakeJoke();
