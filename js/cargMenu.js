function menu() {
    
    var container = document.getElementById("cards");
        
    
    let url = new URLSearchParams(location.search);
    let cat = url.get('cat');
    let id = Number(url.get('id'));
    
    
    let id2 = document.getElementById('id');
    id2.value = id;


    let cat2 = document.getElementById('cat');
    cat2.value = cat;
var cont = 0;

    let menu2 = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`).then(res => res.json());  

     menu2.then(data =>{

        
        var a = Number(data.meals.length);

        

for(let i = 0; i <a ; i++){
    var menu = data.meals[i];
    console.log(data.meals.length+" "+i);

/**
        <div class="col-md-4 mb-3">
        <div class="card">
            <img src="..." class="card-img-top" all="" width="" height="">
            <div class="card-body">
                <h5 class="card-title">Card de ejemplo 1</h5>
                <p class="card-text">Este es un ejemplo de card de Bootstrap.</p>
            </div>
        </div>
    </div>
 */
 
    var nuevaCard = document.createElement("div");
    nuevaCard.className = "col-md-4 mb-3";
    var card = document.createElement("div");
    card.className = "card";
    var img = document.createElement("img");
    img.src = menu.strMealThumb;
    img.className = "card-img-top";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    var cardTitleText = document.createTextNode(menu.strMeal);
    cardTitle.appendChild(cardTitleText);
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    var cardTextContent = document.createTextNode("Precio: $ "+parseInt(Math.random() * (100000 - 50000) +50000));
    
  
  
    card.appendChild(img);
    cardText.appendChild(cardTextContent);
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  
    card.appendChild(cardBody);
    
    nuevaCard.appendChild(card);
  
    
  
    
    // Agregamos la nueva card al contenedor
    container.appendChild(nuevaCard);
    
    


}


  


      

  


});
}