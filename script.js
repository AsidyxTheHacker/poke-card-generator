const url = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('card');
const btn = document.getElementById('btn');

let getPokemon = () => {
    let randomNum = Math.floor(Math.random() * 150) + 1; // Generate random Pokemon
    const result = url + randomNum; // Conbine API with randomNum
    fetch(result)
    .then((response) => response.json())
    .then((data) => {
        generateCard(data);
    });
};

let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const atkStat = data.stats[1].base_stat;
    const defStat = data.stats[2].base_stat;
    const spdStat = data.stats[5].base_stat;
    const typeOne = data.types[0].type.name;

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
};

btn.addEventListener('click', getPokemon);
window.addEventListener('load', getPokemon);