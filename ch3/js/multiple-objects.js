function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;

	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
}

var togsHotel = new Hotel("Togs", 20, 8);
var saqisHotel = new Hotel("Saqi", 232, 220);

var details1 = togsHotel.name + " total rooms: ";
		details1 += togsHotel.rooms + " available: ";
		details1 += togsHotel.checkAvailability();

var elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = details1;

var details2 = saqisHotel.name + " total rooms: ";
		details2 += saqisHotel.rooms + " available: ";
		details2 += saqisHotel.checkAvailability();

var elHotel2 = document.getElementById("hotel2");
elHotel2.textContent = details2;