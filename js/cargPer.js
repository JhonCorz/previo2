function mostrarNombre() {
    
  
        
    //creo las variables para almacenar la URL, el nombre y el numero
    let url = new URLSearchParams(location.search);
    let cat = String(url.get('cat'));
    let id = Number(url.get('id'));
    
    //Asigno el nombre al elemento html
    fetch('https://johnfredyb.github.io/ApiPersonas/Persona.json?authuser=0').then(response => response.json()).then(data => {
        
        var persona = data.Personas[id];
        

        if(persona.Sexo == "Mujer"){
            let img = document.getElementById('img');
            img.src = "../img/mujer.png"
        }else{
            let img = document.getElementById('img');
            img.src = "../img/hombre.png" 
        }
        let nombre = document.getElementById('titulo');
        nombre.textContent = persona.Nombre+" "+persona.Apellidos;

        let email = document.getElementById('email');
        email.textContent = "Correo: "+persona.Nombre+"@gmail.com";
        
       
        let naci = document.getElementById('naci');
        naci.textContent = "Fecha de nacimiento: "+persona['Fecha Nacimiento'];

        let cel = document.getElementById('cel');
        cel.textContent = "Celular: "+persona.Celular;

        let id2 = document.getElementById('id');
        id2.value = id;


        let cat2 = document.getElementById('cat');
        cat2.value = cat;

     
        
    });




}





 /**

var i = 1;
    let cosas = jsonGeneracion.data[0];
var a = true;
while(a){
    if(cosas.defense >= 0 && cosas.attack <= 0){
cosas = jsonGeneracion.data[i];
i = i + 1;
    }else{
a = false;
    }
}



  // Creamos los elementos HTML de la card utilizando el DOM
  var nuevaCard = document.createElement("div");
  nuevaCard.className = "col-md-4 mb-3";
  var card = document.createElement("div");
  card.className = "card";
  var img = document.createElement("img");
  img.src = cosas.image;
  img.className = "card-img-top";
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";
  var cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  var cardTitleText = document.createTextNode(cosas.name);
  cardTitle.appendChild(cardTitleText);
  var cardText = document.createElement("p");
  cardText.className = "card-text";
  var cardTextContent = document.createTextNode(cosas.description);
  var cardText2 = document.createElement("p");
  cardText2.className = "card-text";
  var cardTextContent2 = document.createTextNode("Ataque = "+cosas.attack);


  card.appendChild(img);
  cardText.appendChild(cardTextContent);
  cardText2.appendChild(cardTextContent2);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardText2);
  card.appendChild(cardBody);
  
  nuevaCard.appendChild(card);

  

  
  // Agregamos la nueva card al contenedor
  container.appendChild(nuevaCard);
  


});
 */ 