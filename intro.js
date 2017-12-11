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

var e1 = thelist.getElementsByTagName("li");

for (x = 0; x < e1.length; x++){
    e1[x].addEventListener("mouseover", heading);
    e1[x].addEventListener("mouseleave", og);
    e1[x].addEventListener("click", rm);
};

var b2 = document.getElementById("b2");

var secondlist = document.getElementById("secondlist");
var e2 = secondlist.getElementsByTagName("li");

var fib = function(n){    
    var start = 0;
    var next = 1;
    var k;
    
    while (n > 0){
	k = next;
	next = next +start;
	start = k;
	n = n-1;
    }
    
    return start;
}

var addFib = function(){
    var num = document.createElement("li");
    num.innerHTML = fib(e2.length);
    secondlist.appendChild(num);
};

b2.addEventListener("click", addFib);
