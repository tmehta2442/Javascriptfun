// immediately invoked function expression
// good so that if variable names are used in other functions
// this will no clash

(function(){
	// literal syntax
	var hotel = {
		name: "Tog's Hotel",
		roomRate: 300,
		discount: 10, //percentage basis, created below
		offerPrice: function(){
			// this ~~ hotel
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate
		}
	}

	var hotelName, roomRate, specialRate;  // declaring our variables

	hotelName = document.getElementById("hotelName");  // look to html
	roomRate = document.getElementById("roomRate");
	specialRate = document.getElementById("specialRate");

	hotelName.textContent = hotel.name;
	roomRate.textContent = "$" + hotel.roomRate;
	specialRate.textContent = "$" + hotel.offerPrice();

	var expiryMsg;
	var today;
	var elEnds;

	function offerExpires() {
		//declaring here to keep local scope
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);
		//alert(weekFromToday.getDay()); //will alert 1, thus day name = Monday
		dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();

		expiryMsg = "Offer goes away next ";
		expiryMsg += day + " <br/>(" + date + " " + month + " " + year + ")";
		return expiryMsg;

	}

	today = new Date();
	elEnds = document.getElementById("offerEnds")
	elEnds.innerHTML = offerExpires(today);

}());