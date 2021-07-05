const invoices = document.getElementById('formFile');
const clientsList = JSON.parse(localStorage.getItem('clients'));

invoices.addEventListener('change', function(e){
    const reader = new FileReader();
    reader.onload = function(){
        var result = JSON.parse(reader.result);
        localStorage.setItem('invoices', JSON.stringify(result));
        invoices.value='';
        paintTable();
    }
    reader.readAsText(invoices.files[0]);
}, false);

const config = document.getElementById('configFile');

config.addEventListener('change', function(e){
    const reader = new FileReader();
    reader.onload = function(){
        var result = JSON.parse(reader.result);
        localStorage.setItem('config', JSON.stringify(result));
        config.value='';
        paintTable();
    }
    reader.readAsText(config.files[0]);
}, false);

function paintTable(){

    var invoicesList = JSON.parse(localStorage.getItem('invoices'));

    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';
    invoicesList.forEach(element => {
        var ingredients = element.ingredients;
        var row = `<div class="card bg-light mb-4" style="max-width: 18rem; margin-right: 1rem">
                        <div class="card-header">${element.id}</div>
                        <div class="card-body">
                        <h5 class="card-title">Client: ${this.getNameClient(element.client)}</h5>
                        <p class="card-text">date: ${element.date}</p>
                        <p class="card-text">Total: ${getTotal(element.products)}</p> 
                        <a href="oneInvoice.html?id=${element.id}" class="btn btn-secondary">View</a>
                        </div>
                    </div>`;
        conteiner.innerHTML += row;
    });
}

function getNameClient(id){
    var name = "Client doesn't exist"
    clientsList.forEach(element => {  
        if(element.id == id){
            name=element.name;
            return;
        }
    });
    return name;
}

function getTotal(products){
    total = 0;
    products.forEach(element => {
        total += element.price;
    });
    return total;
}

paintTable();