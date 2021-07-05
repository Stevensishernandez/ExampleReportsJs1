const clients = document.getElementById('formFile');

clients.addEventListener('change', function(e){
    const reader = new FileReader();
    reader.onload = function(){
        var result = JSON.parse(reader.result);
        localStorage.setItem('clients', JSON.stringify(result));
        console.log(result);
        clients.value='';
        paintTable();
    }
    reader.readAsText(clients.files[0]);
}, false);

function paintTable(){

    var clientsList = JSON.parse(localStorage.getItem('clients'));

    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';
    clientsList.forEach(element => {
        var row = `<div class="card bg-light mb-4" style="max-width: 18rem; margin-right: 1rem">
                        <div class="card-header">${element.id}</div>
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">addess: ${element.address}</p>
                        <p class="card-text">phone: ${element.phone}</p> 
                        <p class="card-text">nit: ${element.nit}</p> 
                        <a href="oneCliente.html?id=${element.id}" class="btn btn-secondary">View</a>
                        </div>
                    </div>`;
        conteiner.innerHTML += row;
    });
}

paintTable();