var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) {
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
    Vehicle.prototype.calculatePrice = function () {
        return this.horsepower * 100 - this.mileage / 10000;
    };
    Vehicle.prototype.getDescription = function () {
        return "\n\t\t\tModel: " + this.model + "\n\t\t\tHorsepower: " + this.horsepower + "\n\t\t\tMileage: " + this.mileage + "\n\t\t\tProduction Year: " + this.productionYear + "\n\t\t\tPrice: " + this.price + "\n\t\t\t";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) {
        return _super.call(this, model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) || this;
    }
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) {
        return _super.call(this, model, horsepower, numberOfWheels, mileage, numberOfSeats, fuelType, productionYear, color) || this;
    }
    return Truck;
}(Vehicle));
var car1 = new Car("Batmobil", 1500, 4, 400000, 2, "Super++", 1988, "black");
var car2 = new Car("KITT", 330, 4, 200000, 4, "Petrol", 1984, "black");
var truck1 = new Truck("FatCat5000", 600, 8, 2000000, 3, "Diesel", 2014, "Firered");
var truck2 = new Truck("Betsy", 800, 6, 300000, 1, "Diesel", 2003, "Pink");
console.log(car1.getDescription());
console.log(truck2.getDescription());
