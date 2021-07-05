
function paintTable(){

var id =  window.location.href.split('?id=')[1];
var clientsList = JSON.parse(localStorage.getItem('clients'));

var conteiner = document.getElementById('conteiner');
conteiner.innerHTML = '';
console.log(id);
clientsList.forEach(element => {
    if (element.id == id) {
        var row = `<form>
                        <div class="form-group">
                        <label for="formGroupExampleInput">Id</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" 
                        value="${element.id}" readonly>
                        </div>
                        <div class="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                        value="${element.name}" readonly>
                        </div>
                        <div class="form-group">
                        <label for="formGroupExampleInput">Address</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                        value="${element.address}" readonly>
                        </div>
                        <div class="form-group">
                        <label for="formGroupExampleInput">phone</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                        value="${element.phone}" readonly>
                        </div>
                        <div class="form-group">
                        <label for="formGroupExampleInput">nit</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                        value="${element.nit}" readonly>
                        </div>
                    </form>`;
        conteiner.innerHTML += row;
        return;
    }


});
}

paintTable();