var OrbitPeriods;
(function (OrbitPeriods) {
    OrbitPeriods[OrbitPeriods["Earth"] = 1] = "Earth";
    OrbitPeriods[OrbitPeriods["Mercury"] = 0.2408467] = "Mercury";
    OrbitPeriods[OrbitPeriods["Venus"] = 0.61519726] = "Venus";
    OrbitPeriods[OrbitPeriods["Mars"] = 1.8808158] = "Mars";
    OrbitPeriods[OrbitPeriods["Jupiter"] = 11.862615] = "Jupiter";
    OrbitPeriods[OrbitPeriods["Saturn"] = 29.447498] = "Saturn";
    OrbitPeriods[OrbitPeriods["Uranus"] = 84.016846] = "Uranus";
    OrbitPeriods[OrbitPeriods["Neptune"] = 164.79132] = "Neptune";
})(OrbitPeriods || (OrbitPeriods = {}));
var earthYearInSeconds = 31557600;
var Planet = /** @class */ (function () {
    function Planet(name) {
        this.name = name;
        this.period = OrbitPeriods[name];
    }
    Planet.prototype.getPlanetYears = function (seconds) {
        return this.name + ": " + (seconds / earthYearInSeconds) / this.period;
    };
    return Planet;
}());
var earth = new Planet("Earth");
var mercury = new Planet("Mercury");
var venus = new Planet("Venus");
var mars = new Planet("Mars");
var jupiter = new Planet("Jupiter");
var saturn = new Planet("Saturn");
var uranus = new Planet("Uranus");
var neptune = new Planet("Neptune");
var yearsInSeconds = 500000000;
console.log(earth.getPlanetYears(yearsInSeconds));
console.log(mercury.getPlanetYears(yearsInSeconds));
console.log(venus.getPlanetYears(yearsInSeconds));
console.log(mars.getPlanetYears(yearsInSeconds));
console.log(jupiter.getPlanetYears(yearsInSeconds));
console.log(saturn.getPlanetYears(yearsInSeconds));
console.log(uranus.getPlanetYears(yearsInSeconds));
console.log(neptune.getPlanetYears(yearsInSeconds));
