var i1 = {
    name: "Honda Silver Wing 600",
    imgSrc: "img/SW600.jpg",
    price: 600000
};

var i2 = {
    name: "Suzuki Burgman 650",
    imgSrc: "img/Burgman650.jpg",
    price: 680000
};

var i3 = {
    name: "Yamaha T-MAX",
    imgSrc: "img/TMAX.jpg",
    price: 650000
};

var i4 = {
    name: "BMW C650GT",
    imgSrc: "img/C650GT.jpeg",
    price: 700000
};

var itemsArray = [i1, i2, i3, i4];

var sum = 0;

function init() {
    var catalog = document.getElementsByClassName("catalog")[0];
    var i, item;
    for (i=0;i<itemsArray.length; i++){
        item = document.createElement("div");
        item.setAttribute("class", "div_item");
        item.appendChild(document.createTextNode(itemsArray[i].name));
        item.style.position = "relative";
        item.style.border = "0.5px solid gray";
        
        itemImg = document.createElement("img");
        itemImg.src = itemsArray[i].imgSrc;
        itemImg.style.display = "block";
        itemImg.style.height = "120px";
        itemImg.style.width = "160px";
        
        item.appendChild(itemImg);
        
        item.appendChild(document.createTextNode(itemsArray[i].price + "\u20bd"));
        
        itemBtn = document.createElement("button");
        itemBtn.style.position = "absolute";
        itemBtn.style.right = "0";
        itemBtn.style.bottom = "0";
        itemBtn.textContent = "buy";
        itemBtn.setAttribute("id", "btn_"+i);
        itemBtn.onclick = addItem;
        item.appendChild(itemBtn);
        
        catalog.appendChild(item);
    }
}

function addItem(obj){
    var selectedItem = itemsArray[obj.target.id.split("_")[1]];
    var selectedItems = document.getElementsByClassName("selected_items")[0];
    var tr = selectedItems.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);
    td.style.textAlign = "center";
    td.style.width = "100px";
    td.appendChild(document.createTextNode("    " + selectedItem.price + "\u20bd"));
    
    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum + "\u20bd";    
}

window.onload = init;
