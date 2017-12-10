var num = function(){
    var elements = document.getElementsByTagName("li");
    return elements.length;
};

var button = document.getElementById("b");
var thelist = document.getElementById("thelist");

var add = function(){
    var li = document.createElement("li");
    li.innerHTML = "item " + num();
    thelist.appendChild(li);
    li.addEventListener("mouseover", heading);
    li.addEventListener("mouseleave", og);
    li.addEventListener("click", rm);
};

button.addEventListener("click", add);

var heading = function(){
    var h = document.getElementById("h");
    h.innerHTML = this.innerHTML
};

var og = function(){
    var h = document.getElementById("h");
    h.innerHTML = "Hello World!";
};

var rm = function(){
    this.remove();
}

var elements = document.getElementsByTagName("li");

for (x = 0; x < elements.length; x++){
    elements[x].addEventListener("mouseover", heading);
    elements[x].addEventListener("mouseleave", og);
    elements[x].addEventListener("click", rm);
};
