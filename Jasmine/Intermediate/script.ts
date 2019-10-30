

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
	
}

let venus = new Planet("Venus");

console.log(venus.period);