const direccion = "https://japceibal.github.io/emercado-api/cats_products/101.json";



document.addEventListener('DOMContentLoaded', ()=>{

    fetch(direccion)
    .then(respuesta => respuesta.json())
    .then(datos=> {
        document.getElementById('chevroletonix').innerHTML= datos.products[0].name;
        document.getElementById('fiatway').innerHTML= datos.products[1].name
        document.getElementById('suzukicelerio').innerHTML= datos.products[2].name
        document.getElementById('peugeot208').innerHTML= datos.products[3].name
        document.getElementById('bugattichiron').innerHTML= datos.products[4].name
    });

});