document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/6`);
        const data = await res.json();

        const pokemon = {
            id: data.id,
            name: data.name,
            level: 100,
            height: unitsFormatter(data.height, 'height'),
            weight: unitsFormatter(data.weight, 'weight'),
            type: data.types[0].type.name.toUpperCase(),
            ability: data.abilities[0].ability.name.toUpperCase(),
        }

        renderData(pokemon);

    } catch (error) {
        console.log;
    }
}

const renderData = (pokemon) => {
    const nameCard = document.querySelector('.pokemon__name h2');
    const infoCard = document.querySelector('.pokemon__info');

    const { id, name, level, height, weight, type, ability } = pokemon;

    nameCard.textContent = name;

    infoCard.innerHTML = `
    <div class="row__group">
        <div class="pokemon__info-row">
            <p class="row__header">No.</p>
            <p class="row__data">00${id}</p>
        </div>
        <div class="pokemon__info-row">
            <p class="row__header">level</p>
            <p class="row__data">${level}</p>
        </div>
    </div>
    <div class="row__group">
        <div class="pokemon__info-row">
            <p class="row__header">type</p>
            <p class="row__data">${type}</p>
        </div>
        <div class="pokemon__info-row">
            <p class="row__header">ability</p>
            <p class="row__data">${ability}</p>
        </div>
    </div>
    <div class="row__group">
        <div class="pokemon__info-row">
            <p class="row__header">height</p>
            <p class="row__data">${height}</p>
        </div>
        <div class="pokemon__info-row">
            <p class="row__header">weight</p>
            <p class="row__data">${weight}</p>
        </div>
    </div>`;
}

const unitsFormatter = (value, type) => {
    switch (type) {
        case 'height':
            return `${value / 10} m`;
        case 'weight':
            return `${value / 10} Kg`;

        default:
            return value;
    }
}