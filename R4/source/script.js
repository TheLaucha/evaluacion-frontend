const formulario = document.querySelector('#formulario');
let url = 'http://api.weatherstack.com/current?access_key=ef4edfbc3f8f63dc3b544f76a6bd20af&query=';

formulario.addEventListener('submit',buscarCiudad);

function buscarCiudad(e){
    e.preventDefault();
    // Obtengo la ciudad ingresada
    const ciudad = document.querySelector('#ciudad').value;

    // Busco la ciudad
    fetch(url+ciudad)
        .then( respuesta => respuesta.json())
        .then( respuestaJSON => {
            console.log(respuestaJSON);
            cargarCiudad(respuestaJSON);
        })
        .catch ( error => console.log(error));
}

function cargarCiudad(ciudad){
    const tabla = document.querySelector('#tabla');
    // Creo fila , 4 columnas y img.
    const fila = document.createElement('tr');
    const columna1 = document.createElement('td');
    const columna2 = document.createElement('td');
    const columna3 = document.createElement('td');
    const columna4 = document.createElement('td');
    const icon = document.createElement('img'); 
    // Agrego datos a las columnas
    columna1.innerHTML = ciudad.location.name;
    columna2.innerHTML = ciudad.location.localtime;
    columna3.innerHTML = `${ciudad.current.temperature}c°`;
    columna4.innerHTML = ciudad.current.weather_descriptions;
    icon.src = ciudad.current.weather_icons;
    icon.id = 'icono';
    // Lo muestro en la pagina.
    tabla.appendChild(fila);
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    columna4.appendChild(icon);
}