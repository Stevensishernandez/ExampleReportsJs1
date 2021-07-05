const invoicesList = JSON.parse(localStorage.getItem('invoices'));
const config = JSON.parse(localStorage.getItem('config'));
const id =  window.location.href.split('?id=')[1];
const clientsList = JSON.parse(localStorage.getItem('clients'));

var invoice = '';
var client = '';

invoicesList.forEach(element => {
    if (element.id==id) {
        invoice = element;
        return;
    }
});

clientsList.forEach(element => {
    if (element.id==invoice.client) {
        client = element;
        return;
    }
});

document.getElementById('idInvoice').innerHTML += invoice.id;
document.getElementById('Company').innerHTML = `<h5 class="page-info text-secondary-d1">
                                                    <small class="page-info">
                                                        <i class="fas fa-building"></i>
                                                    </small>
                                                    ${config.name}
                                                    </h5>

                                                    <small class="page-info">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    ${config.address}
                                                    </small>
                                                    <br>
                                                    <small class="page-info">
                                                    <i class="fas fa-mobile-alt"></i>
                                                    ${config.phone}
                                                    </small>`;
document.getElementById('dataClient').innerHTML = `<div>
                                                        <span class="text-sm text-grey-m2 align-middle">To:</span>
                                                        <span class="text-600 text-110 text-blue align-middle"> ${client.name}</span>
                                                        </div>
                                                        <div class="text-grey-m2">
                                                        <div class="my-1">
                                                            ${client.address}
                                                        </div>
                                                        <div class="my-1">
                                                            ${client.nit}
                                                        </div>
                                                        <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> 
                                                        <b class="text-600">${client.phone}</b></div>
                                                    </div>`;

document.getElementById('dataInvoice').innerHTML += `
                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> ${invoice.id} </div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Date:</span> ${invoice.date}</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">id Client:</span>  ${invoice.client} </div>`;

document.getElementById('totalInvoice').innerHTML = getTotal(invoice.products);

function getTotal(products){
        total = 0;
        products.forEach(element => {
            total += element.price;
        });
        return total;
}