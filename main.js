fetch ("https://swapi.info/api/people")
.then(response => response.json())
.then(data => {
    console.log(data)
    personajes = data
    mostrarPersonajes(personajes)
})
.catch(error => {
    console.error("Error al leerr el archivo", error)
})


let personajes = []

const contenedor = document.querySelector(".miniContainer")
const searchInput = document.getElementById("")

function mostrarPersonajes(listaPersonajes) {
    listaPersonajes.forEach(personaje => {
        contenedor.innerHTML += `
       <div class = "card">

       <h2>${personaje.name}</h2>
       <p>Altura: ${personaje.height}cm</p>
       <p>Pelo: ${personaje.hair_color}</p>
       <p>Piel: ${personaje.skin_color}</p>
       <p>Ojos: ${personaje.eye_color}</p>
       <p>Año: ${personaje.birth_year}</p>
       <p>Género: ${personaje.gender}</p>

       </div>
        `   
    });
}

