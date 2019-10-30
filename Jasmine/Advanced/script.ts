
class Vehicle {
	model;
	horsepower;
	numberOfWheels;
	mileage;
	numberOfSeats;
	fuelType;
	productionYear;
	price;
	color;
	
	constructor(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) {
		this.model = model;
		this.horsepower = horsepower;
		this.numberOfWheels = numberOfWheels;
		this.mileage = mileage;
		this.numberOfSeats = numberOfSeats;
		this.fuelType = fuelType;
		this.productionYear = productionYear;
		this.color = color;
		this.price = this.calculatePrice();
	}
	
	calculatePrice() {
		return this.horsepower*100-this.mileage/10000;
	}
	
	getDescription() {
		return `
			Model: ${this.model}
			Horsepower: ${this.horsepower}
			Mileage: ${this.mileage}
			Production Year: ${this.productionYear}
			Price: ${this.price}
			`;
	}
}

class Car extends Vehicle {
	constructor(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) {
		super(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color);

	}
}

class Truck extends Vehicle {
	constructor(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) {
		super(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color);
	}
}

let car1 = new Car("Batmobil", 1500, 4, 400000, 2, "Super++", 1988, "black");
let car2 = new Car("KITT", 330, 4, 200000, 4, "Petrol", 1984, "black");

let truck1 = new Truck("FatCat5000", 600, 8, 2000000, 3, "Diesel", 2014, "Firered");
let truck2 = new Truck("Betsy", 800, 6, 300000, 1, "Diesel", 2003, "Pink");

console.log(car1.getDescription());
console.log(truck2.getDescription());
