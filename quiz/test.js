const gryffindor = {
    
}

var i = 0;
var x = 0;
var y = 0;
var z = 0;

// gryffindor === 1
function increment1() {
    i++;
    console.log(i);
};

// hufflepuff === 2
function increment2() {
    x++;
    console.log(x);
}

// ravenclaw === 3
function increment3() {
    y++;
    console.log(y);
}

// slytherin === 4
function increment4() {
    z++;
    console.log(z);
}

var link1="slytherin.html"
var link2="ravenclaw.html"
var link3="hufflepuff.html"
var link4="gryffindor.html"


function blue(i, x, y, z) {
    if ( i > x, i > y, i > z) {
    console.log("gryffindor!");
    window.location=link4
} else {
    console.log("not gryffindor!");
}};

function blue(i, x, y, z) {
    if ( x > i, x > y, x > z) {
    console.log("hufflepuff!");
    window.location=link3
} else {
    console.log("not hufflepuff!");
}};

function blue(i, x, y, z) {
    if ( y > x, y > i, y > z) {
    console.log("ravenclaw!");
    window.location=link2
} else {
    console.log("not ravenclaw!");
}};


function randomHouse() {
    var myrandom=Math.round(Math.random() * 3)
    var link1="gryffindor.html"
    var link2="ravenclaw.html"
    var link3="hufflepuff.html"
    var link4="slytherin.html"
    if (myrandom == 0)
    window.location=link1
    else if (myrandom == 1)
    window.location=link2
    else if (myrandom == 2)
    window.location=link3
    else if (myrandom == 3)
    window.location=link4
}