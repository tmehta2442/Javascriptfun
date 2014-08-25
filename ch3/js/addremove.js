var hotel = {
	name : "QweQwe Hotel",
	rooms : 23234,
	booked : 12233
};

hotel.arcade = true;
hotel.jackdaniels = false;
delete hotel.booked;

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elArcade = document.getElementById("arcade");
elArcade.className = hotel.arcade;

var elJackDaniels = document.getElementById("jackdaniels");
elJackDaniels.className = hotel.jackdaniels;