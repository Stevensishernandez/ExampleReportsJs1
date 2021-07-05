
function paintTable(){

    var id =  window.location.href.split('?id=')[1];
    var productsList = JSON.parse(localStorage.getItem('products'));
    
    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';
    console.log(id);
    productsList.forEach(element => {
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
                            <label for="formGroupExampleInput">description</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                            value="${element.description}" readonly>
                            </div>
                            <div class="form-group">
                            <label for="formGroupExampleInput">cost</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                            value="${element.cost}" readonly>
                            </div>
                            <div class="form-group">
                            <label for="formGroupExampleInput">price</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                            value="${element.price}" readonly>
                            </div>
                        </form> <br> <h2> ingredients </h2> <br>`;
            conteiner.innerHTML += row;
            
            element.ingredients.forEach(i => {
                var list = `<ul class="list-group">
                                <li class="list-group-item-dark active">${i.name}</li>
                                <li class="list-group-item">quantity: ${i.quantity}</li>
                                <li class="list-group-item">units: ${i.units}</li>
                            </ul> <br> `;
                conteiner.innerHTML += list;
            });
           
            return;
        }
    
    
    });
    }
    
    paintTable();