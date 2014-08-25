var hotel = new Object();

hotel.name = "Tog's Hotel";
hotel.rooms = 44;
hotel.booked = 32;

hotel.checkAvailability = function(){
	return this.rooms - this.booked;
};

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();