var saying = "Do or do not there is no try";
var originalNumber = 234.932423532;
var randomNum = Math.floor((Math.random() * 10) + 1);
var today = new Date();
var year = today.getFullYear();
var open = new Date("November 18, 2008 12:10:10");
var difference = today.getTime() - open.getTime();
difference = (difference / 31556900000);

var msg = "<h2>Lotsa different stuff here</h2>";
// msg += "<h2>browser window</h2><p>width: " + window.innerWidth + "</p>";
// msg += "<p>height: " + window.innerHeight + "</p>";
// msg += "<h2>history</h2><p>history: " + window.history.length + "</p>";
// msg += "<h2>screen size</h2><p>width: " + window.screen.width + "</p>";
// msg += "<p>height: " + window.screen.height + "</p>";
// msg += "<h2>length</h2><p>" + saying.length + "</p>";
// msg += "<h2>uppercase</h2><p>" + saying.toUpperCase() + "</p>";
msg += "<h2>Original Number</h2><p>" + originalNumber + "</p>";
msg += "<h2>Four Decimal Places</h2><p>" + originalNumber.toFixed(4) +"<p>";
msg += "<h2>Three Digits Long</h2><p>" + originalNumber.toPrecision(3) + "</p>";
msg += "<h2>Random Number between 1-10</h2><p>" + randomNum + "<p>";

var el = document.getElementById("info");
el.innerHTML = msg;
//alert("Current page: " + window.location);


// var msg2 = "<p><b>page title:<b>" + document.title + "<br/>";
// msg2 += "<b>page address: <b>" + document.URL + "<br/>";
// msg2 += "<b>last modified: <b>" + document.lastModified + "<br/>"
// var el2 = document.getElementById("footer");
// el2.innerHTML = msg2;

var el3 = document.getElementById("footer");
el3.innerHTML = "<p>Copyright &copy;" + year + "</p>";

var elSinceOpen = document.getElementById("message")
elSinceOpen.innerHTML = Math.floor(difference) + " Years for Guitar District";