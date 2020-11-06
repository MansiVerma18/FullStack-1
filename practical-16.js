var add_input = document.querySelector("#input");
var add_button = document.querySelector("#add-button");

var ul = document.createElement('ul');
ul.classList.add('list');
document.body.appendChild(ul);
var newDiv = document.createElement('div');
newDiv.classList.add('Items-container');
ul.appendChild(newDiv);
ul.onclick = click;

function create() {
    var newList = document.createElement('li');
    newList.classList.add('item');
    newList.innerHTML = input.value;
    newDiv.appendChild(newList);

    var tick = document.createElement('button');
    tick.classList.add('check-btn');
    tick.innerHTML = "<i class='fa fa-check'></i>";
    newList.appendChild(tick);

    var del = document.createElement('button');
    del.classList.add('delete-btn');
    del.innerHTML = "<i class='fa fa-trash'></i>";
    newList.appendChild(del);
    input.value = "";
}

function click(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        var parent = item.parentNode;
        parent.remove();
    }
    if (item.classList[0] === "check-btn") {
        var parent = item.parentNode;
        parent.classList.add("completed");
    }

}