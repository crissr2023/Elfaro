
function updateClock() {
  var now = new Date(); // crea un nuevo objeto Date con la hora actual

  // obtiene los componentes de la fecha y los formatea como cadenas de dos dígitos
  var day = ('0' + now.getDate()).slice(-2);
  var month = ('0' + (now.getMonth() + 1)).slice(-2);
  var year = now.getFullYear();

  // combina los componentes en el formato deseado
  var date = day + '/' + month + '/' + year;

  // obtiene la hora actual en formato local
  var time = now.toLocaleTimeString();

  var dateTime = date + ' ' + time; // combina la fecha y la hora

  document.getElementById('date').innerHTML = dateTime; // muestra la fecha y hora en el elemento HTML
}

// actualiza la fecha y hora cada segundo
setInterval(updateClock, 1000);
  
    document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-articulo');
    formulario.addEventListener('submit', publicarNoticia);
  });
  
  function publicarNoticia(evento) {
    evento.preventDefault(); // Evitar que se recargue la página al enviar el formulario
  
    // Obtener los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
  
    // Crear un elemento article para la noticia
    const noticia = document.createElement('article');
    noticia.classList.add('noticia');
  
    // Agregar el título y el contenido de la noticia
    const tituloNoticia = document.createElement('h2');
    tituloNoticia.textContent = titulo;
    noticia.appendChild(tituloNoticia);
  
    // Agregar un botón para eliminar la noticia
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.addEventListener('click', function() {
    noticia.remove();
  });
  noticia.appendChild(botonEliminar);
  
    const contenidoNoticia = document.createElement('p');
    contenidoNoticia.textContent = contenido;
    noticia.appendChild(contenidoNoticia);
  
    // Agregar la noticia al elemento "noticias"
    const contenedorNoticias = document.getElementById('noticias');
    contenedorNoticias.appendChild(noticia);
  
    // Limpiar el formulario después de publicar la noticia
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
  }
  // Obtener el identificador del artículo actual
var currentArticleId = /* Código para obtener el identificador del artículo actual */;

// Obtener la lista de artículos visitados del localStorage
var visitedArticles = localStorage.getItem('visitedArticles');

// Convertir la lista de artículos visitados en un array
visitedArticles = visitedArticles ? JSON.parse(visitedArticles) : [];

// Agregar el identificador del artículo actual al array de artículos visitados
visitedArticles.push(currentArticleId);

// Limitar la lista de artículos visitados a los últimos 5 elementos
visitedArticles = visitedArticles.slice(-5);

// Almacenar la lista de artículos visitados en localStorage
localStorage.setItem('visitedArticles', JSON.stringify(visitedArticles));
// Obtener la lista de artículos visitados del localStorage
var visitedArticles = localStorage.getItem('visitedArticles');

// Convertir la lista de artículos visitados en un array
visitedArticles = visitedArticles ? JSON.parse(visitedArticles) : [];

// Obtener la sección de la página web donde se mostrarán los artículos visitados
var recentlyVisitedSection = document.querySelector('#recently-visited');

// Crear una lista con los artículos visitados
var visitedList = document.createElement('ul');

visitedArticles.forEach(function(articleId) {
  // Crear un enlace para cada artículo visitado
  var link = document.createElement('a');
  link.href = /* Código para obtener la URL del artículo */;
  link.textContent = /* Código para obtener el título del artículo */;

  // Crear un elemento de la lista con el enlace
  var listItem = document.createElement('li');
  listItem.appendChild(link);

  // Agregar el elemento de la lista a la lista de artículos visitados
  visitedList.appendChild(listItem);
});

// Agregar la lista de artículos visitados a la sección de la página web
recentlyVisitedSection.appendChild(visitedList);

$('.carousel').carousel({
  interval: 2000, // tiempo de transición entre slides
  pause: "hover", // pausar la transición cuando el usuario coloca el mouse sobre el Carousel
  wrap: true // si debe volver a la primera imagen después de la última
})