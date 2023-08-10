// espera a qie cargue todo nuestro DOM
document.addEventListener("DOMContentLoaded", () => {
    fetchData();

})

const fetchData = async () => {
    // console.log('Obteniendo Datos...');
    try {
        loadingData(true);

        const respuesta = await fetch('https://rickandmortyapi.com/api/character')
        const data = await respuesta.json();

        pintarCard(data)
    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false);
    }
}

const pintarCard = data => {
    const cards = document.querySelector("#card-dinamicas");
    const templateCard = document.querySelector("#template-card").content;
    const fragment = document.createDocumentFragment()
    // console.log(data);
    data.results.forEach(item => {
        // console.log(item);
        const clone = templateCard.cloneNode(true)
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('img').setAttribute('src', item.image)

        //guardamos en fragment para EVITAR REFLOW
        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
}

const loadingData = estado => {
    const loading = document.querySelector('#loading')
    if (estado) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
    }
}