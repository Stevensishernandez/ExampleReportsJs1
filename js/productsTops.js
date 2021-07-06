const invoicesList = JSON.parse(localStorage.getItem('invoices'));
const productsList = JSON.parse(localStorage.getItem('products'));

var productsExists = [];
var temp = [];
var tempName = [];
var tops = [];

function paint(){
    //Saber cuantas veces esta un producto en una factura
    
    invoicesList.forEach(element => {
    productsExists = [];
       element.products.forEach(p => {
            var productc = getProducto(p.name);
            if (productc=='') {
                productc = p;
            }
            
            if(productsExists.indexOf(p.name) == -1){
                var quantity = getCantidad(p.name, element);
                temp.push(product = {product: 'id: '+ (Boolean(productc.id) ? productc.id : '') +' , '+ p.name, total:quantity});
            }
            
       }); 
    });

    //Saber cuantas veces esta un producto en todas las facturas
    temp.forEach(element => {
        if(tempName.indexOf(element.product) == -1){
            var quantity = getCantidad2(element.product);
            tops.push(product = {product: element.product, total:quantity});
        }
    });

    tops.sort(function(a, b) { 
        return b.total - a.total;
    })

    paintTable();
}

function paintTable(){
    var count = 0;
    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';
    
    tops.forEach(element => {
        if (count>4) {
            return;
        }
        var row = `<div class="card bg-light mb-4" style="max-width: 18rem; margin-right: 1rem">
                        <div class="card-header">
                        <i class="fas fa-sort-amount-up"></i>
                        total: ${element.total}</div>
                        <div class="card-body">
                        <h5 class="card-title"> 
                        <i class="fab fa-product-hunt"></i>
                        ${(element.product)}</h5>
                        </div>
                    </div>`;
        conteiner.innerHTML += row;
        count++;
    });
}

function getCantidad2(name){
    tempName.push(name);
    quantity = 0;
    temp.forEach(element => {
        if (element.product == name) {
            quantity+=element.total;
        }
    });
    return quantity;
}



function getCantidad(name, invoice){
    productsExists.push(name);
    quantity = 0;
    invoice.products.forEach(element => {
        if (element.name == name) {
            quantity++;
        }
    });
    return quantity;
}

function getProducto(name){
    var product = '';
    productsList.forEach(element => {
        if (element.name == name) {
            product = element;
            return;
        }
    });
    return product;
}

paint();