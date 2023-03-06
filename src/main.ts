
const jokeButton = document.getElementsByClassName("jokeButton")[0] as HTMLFormElement;
const jokeText = document.getElementsByClassName("jokeText")[0] as HTMLFormElement;
const jokeImage = document.getElementsByClassName("jokeImage")[0] as HTMLFormElement;
const jokeTitle = document.getElementsByClassName("jokeTitle")[0] as HTMLFormElement;


async function getJoke(id: string): Promise<Joke> {
  const joke: Joke = await fetch(" https://getxkcd.vercel.app/api/comic?num=" + id).then(r => r.json());
  return joke;
}

jokeButton.addEventListener("click", async function () {
  MakeJoke();
});

async function MakeJoke(): Promise<void> {
  const params: URLSearchParams = new URLSearchParams();
  params.append('email', "k.tyulebaeva@innopolis.university");
  const id = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(r => r.json());

  const joke: Joke = await getJoke(id);

  const { alt, title, img, year, month, day } = joke;

  const date: Date = new Date(parseInt(year), parseInt(month) + 1, parseInt(day));

  jokeImage.src = img;
  jokeTitle.textContent = title;
}

document.addEventListener("DOMContentLoaded", function () {
  MakeJoke();
});

interface Joke {
  alt: string;
  day: string;
  month: string;
  year: string;
  img: string;
  title: string;
}

MakeJoke();