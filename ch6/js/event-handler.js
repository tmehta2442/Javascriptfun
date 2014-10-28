function checkUsername() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elMsg.textContent = '5 characters you BoJo';
	}	else {
		elMsg.textContent = ''
	}
}

var elUsername = document.getElementById('username')
elUsername.onblur = checkUsername;