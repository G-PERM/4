function calculate() {
    let l = document.getElementById("l").value;
    let b = document.getElementById("b").value;
    if ((l>0) && (b>0)) { 
        let a = l * b;
        document.getElementById("answer").innerHTML = "Area of a rectangle with length " + l + " units and breadth " + b + " units is " + a + " unit².";
    }
    else {
        document.getElementById("answer").innerHTML = "Please enter a number which is greater than zero.";
    }
}