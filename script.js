const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
  steel: "#eff3ff"
};
const url = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('card');
const btn = document.getElementById('btn');

let getPokemon = () => {
    let randomNum = Math.floor(Math.random() * 250) + 1; // Generate random Pokemon
    const result = url + randomNum; // Conbine API with randomNum
    fetch(result)
    .then((response) => response.json())
    .then((data) => {
        generateCard(data);
    });
};

let generateCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const atkStat = data.stats[1].base_stat;
    const defStat = data.stats[2].base_stat;
    const spdStat = data.stats[5].base_stat;
    const typeOne = data.types[0].type.name;
    const cardColor = typeColor[data.types[0].type.name];

    if(data.types.length == 2){
        const typeTwo = data.types[1].type.name;
        document.querySelector('.types').innerHTML = `<span>${typeOne}</span><span>${typeTwo}</span>`;
    } else {
        document.querySelector('.types').innerHTML = `<span>${typeOne}</span>`;
    }

    document.querySelector('.hp').innerHTML = `<span>HP</span> ${hp}`;
    document.querySelector('img').src = imgSrc;
    document.querySelector('.poke-name').innerText = pokeName;
    document.querySelector('.atk').innerText = atkStat;
    document.querySelector('.def').innerText = defStat;
    document.querySelector('.spd').innerText = spdStat;
    styleCard(cardColor);
};

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0, ${color} 45%, #f6f8ff 36%)`;
    card.querySelectorAll('.types span').forEach((typeColor) => {
        typeColor.style.backgroundColor = color;
    })
};

btn.addEventListener('click', getPokemon);
window.addEventListener('load', getPokemon);