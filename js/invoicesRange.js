const clientsList = JSON.parse(localStorage.getItem('clients'));


const config = document.getElementById('configFile');
var startList = JSON.parse(localStorage.getItem('invoices'));

function paintTable(invoicesList){
    if (!Boolean(invoicesList)) {
        alert('No se encontraron facturas');
        return;
    }
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

function search(){
    var dateStart = document.getElementById('start').value;
    var dateFinish = document.getElementById('finish').value;
    var newList = [];

    startList.forEach(element => {
        if (element.date >= dateStart && element.date <= dateFinish) {
            newList.push(element);
        }
    });

    paintTable(newList);
}


paintTable(startList);