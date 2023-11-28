const typeColor = {
  bug: "#85c45a",
  dragon: "#8854d1",
  electric: "#f0c730",
  fairy: "#f74d93",
  fighting: "#cc843b",
  fire: "#f0932b",
  flying: "#74b9ff",
  grass: "#17bd4b",
  ground: "#EFB549",
  ghost: "#9f73c9",
  ice: "#81ecec",
  normal: "#95afc0",
  poison: "#9639cc",
  psychic: "#e06cd3",
  rock: "#947344",
  water: "#0190FF",
  steel: "#b3b6be",
  dark: "#3b3b3b"
};
const url = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('card');
const btn = document.getElementById('btn');

let getPokemon = () => {
    let randomNum = Math.floor(Math.random() * 549) + 1; // Generate random Pokemon
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
        const cardColorTwo = typeColor[data.types[1].type.name];
        document.querySelector('.types span:nth-child(2)').style.backgroundColor = cardColorTwo;
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
    document.querySelector('.types span:nth-child(1)').style.backgroundColor = color;
};

btn.addEventListener('click', getPokemon);
window.addEventListener('load', getPokemon);