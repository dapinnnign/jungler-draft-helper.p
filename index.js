document.getElementById("app").innerText =
  "Pilih hero musuh, lalu dapat rekomendasi jungler!";

const heroes = ["Lancelot", "Gusion", "Hayabusa", "Karina"];
const counters = {
  Lancelot: "Baxia",
  Gusion: "Martis",
  Hayabusa: "Natalia",
  Karina: "Helcurt",
};

const heroListDiv = document.createElement("div");
heroes.forEach(hero => {
  let btn = document.createElement("button");
  btn.innerText = hero;
  btn.onclick = () => {
    document.getElementById("app").innerText =
      "Rekomendasi jungler: " + counters[hero];
  };
  heroListDiv.appendChild(btn);
});

document.body.appendChild(heroListDiv);
