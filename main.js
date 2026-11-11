fetch ("https://swapi.info/api/people")
fetch ("https://swapi.info/api/films")
fetch ("https://swapi.info/api/vehicles")
fetch ("https://swapi.info/api/starships")
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
  
       <p>Género: ${personaje.gender}</p>
       <button class="boton" id="botonPersonajes">Más info</button>

       </div>

       
        ` 

const botones = document.querySelectorAll(".boton")
const fondo = document.querySelector(".fondoPersonaje")
const info = document.querySelector(".infoPersonaje")

botones.forEach((boton, i) => {
    boton.addEventListener("click", () => {
        let personaje = listaPersonajes[i]

        info.innerHTML =  `
        <h2>${personaje.name}</h2>
        <p>Altura: ${personaje.height}cm</p>
        <p>Pelo: ${personaje.hair_color}</p>
        <p>Piel: ${personaje.skin_color}</p>
        <p>Ojos: ${personaje.eye_color}</p>
        <p>Año: ${personaje.birth_year}</p>
        <p>Género: ${personaje.gender}</p>
    `
        if (fondo.style.display === "none"){
            fondo.style.display = "flex"
        
        
        }
        else {
        fondo.style.display = "none"
        }
        }) 
       
    })
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