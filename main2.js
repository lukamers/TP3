fetch ("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    console.log(data)
    personajes = data.results
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
  
       <p>Género: ${personaje.gender}</p>
       <p>Estatus: ${personaje.status}</p>
        <p>Especie: ${personaje.species}</p>
    <img class = "img" src="${personaje.image}">
 
       </div>

       
        ` 

    })
}



const busqueda = document.getElementById("busqueda")

function buscar() {
    let personajesBuscados = personajes.filter(personaje => {
        return  personaje.name.toLocaleLowerCase().includes(busqueda.value.toLowerCase())
    })
    contenedor.innerHTML = ""
    mostrarPersonajes(personajesBuscados)
}
busqueda.addEventListener("input", buscar)