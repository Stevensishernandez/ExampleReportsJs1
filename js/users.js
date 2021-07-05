const users = document.getElementById('formFile');

users.addEventListener('change', function(e){
    const reader = new FileReader();
    reader.onload = function(){
        var result = JSON.parse(reader.result);
        localStorage.setItem('users', JSON.stringify(result));
        console.log(result);
        users.value='';
        paintTable();
    }
    reader.readAsText(users.files[0]);
}, false);

function paintTable(){

    var clientsList = JSON.parse(localStorage.getItem('users'));

    var table = document.getElementById('tableBody');
    table.innerHTML = '';
    clientsList.forEach(element => {
        var row = `<tr> 
                        <td> ${element.username} </td>
                        <td> ${element.password} </td>
                  </tr>`;
        table.innerHTML += row;
    });
}

paintTable();