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
    return Planet;
}());
var venus = new Planet("Venus");
console.log(venus.period);
