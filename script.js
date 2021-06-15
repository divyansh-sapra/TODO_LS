
function update() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    tablebody = document.getElementById('tablebody');
    let str = "";
    itemJsonArray.forEach((element, index) => {

if (element[0] && element[1]) {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-danger" onclick = "deleted(${index})">Delete</button></td>
      </tr>
        `
}
    });
    tablebody.innerHTML = str
}

add = document.getElementById('add');
add.addEventListener('click', update);
update();
function deleted(indexed) {
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(indexed, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}