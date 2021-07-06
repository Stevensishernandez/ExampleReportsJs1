const invoicesList = JSON.parse(localStorage.getItem('invoices'));
const clientsList = JSON.parse(localStorage.getItem('clients'));
var saleList = [];
function paint(){
    clientsList.forEach(element => {
        totalc = 0;
        invoicesList.forEach(inv => {
            if (element.id==inv.client) {
                totalc += getTotal(inv.products);
            }
        });
        saleList.push( person = {client: 'id: '+ element.id +' , '+ element.name, total:totalc});
    });

    
    saleList.sort(function(a, b) { 
        return b.total - a.total;
    })

    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';
    
    saleList.forEach(element => {
        var row = `<div class="card bg-light mb-4" style="max-width: 18rem; margin-right: 1rem">
                        <div class="card-header">total: $${element.total}</div>
                        <div class="card-body">
                        <h5 class="card-title"> 
                        <i class="fas fa-user"></i>
                        ${(element.client)}</h5>
                        </div>
                    </div>`;
        conteiner.innerHTML += row;
    });
}

function getTotal(products){
    total = 0;
    products.forEach(element => {
        total += element.price;
    });
    return total;
}

paint();