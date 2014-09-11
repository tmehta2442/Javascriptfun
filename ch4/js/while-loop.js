var i = 1;
var msg = '';

// while (i < 10) {
// 	msg += i + ' x 5 = ' + (i * 5) + '<br />';
// 	i++
// }

// document.getElementById('answer').innerHTML = msg;

do {
	msg += i + ' x 5 = ' + (i * 5) + '<br />';
	i++;
} while (i < 9);

document.getElementById('answer').innerHTML = msg;