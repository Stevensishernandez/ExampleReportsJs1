const products = document.getElementById('formFile');

products.addEventListener('change', function(e){
    const reader = new FileReader();
    reader.onload = function(){
        var result = JSON.parse(reader.result);
        localStorage.setItem('products', JSON.stringify(result));
        console.log(result);
        products.value='';
        paintTable();
    }
    reader.readAsText(products.files[0]);
}, false);

function paintTable(){

    var productsList = JSON.parse(localStorage.getItem('products'));

    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';
    productsList.forEach(element => {
        var ingredients = element.ingredients;
        var row = `<div class="card bg-light mb-4" style="max-width: 18rem; margin-right: 1rem">
                        <div class="card-header">${element.id}</div>
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">description: ${element.description}</p>
                        <p class="card-text">cost: ${element.cost}</p> 
                        <p class="card-text">price: ${element.price}</p> 
                        <p class="card-text">ingredients No: ${ Object.keys(ingredients).length }</p> 
                        <a href="oneProduct.html?id=${element.id}" class="btn btn-secondary">View</a>
                        </div>
                    </div>`;
        conteiner.innerHTML += row;
    });
}

paintTable();