
enum OrbitPeriods {
    Earth = 1,
    Mercury = 0.2408467,
    Venus = 0.61519726,
    Mars = 1.8808158,
	Jupiter = 11.862615,
	Saturn = 29.447498,
	Uranus = 84.016846,
	Neptune = 164.79132
}

const earthYearInSeconds = 31557600;

class Planet {
	name;
	period;
	
	constructor(name) {
		this.name = name;
		this.period = OrbitPeriods[name];
	}
	
	getPlanetYears(seconds) {
		return `${this.name}: ` +(seconds/earthYearInSeconds)/this.period; 
	}
	
}

let earth = new Planet("Earth");
let mercury = new Planet("Mercury");
let venus = new Planet("Venus");
let mars = new Planet("Mars");
let jupiter = new Planet("Jupiter");
let saturn = new Planet("Saturn");
let uranus = new Planet("Uranus");
let neptune = new Planet("Neptune");

let yearsInSeconds = 500000000;

console.log(earth.getPlanetYears(yearsInSeconds));
console.log(mercury.getPlanetYears(yearsInSeconds));
console.log(venus.getPlanetYears(yearsInSeconds));
console.log(mars.getPlanetYears(yearsInSeconds));
console.log(jupiter.getPlanetYears(yearsInSeconds));
console.log(saturn.getPlanetYears(yearsInSeconds));
console.log(uranus.getPlanetYears(yearsInSeconds));
console.log(neptune.getPlanetYears(yearsInSeconds));

