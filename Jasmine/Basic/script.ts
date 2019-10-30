
class Person1 {
	name;
	age;
	jobTitle;
	
	constructor(name, age, jobTitle) {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	
	whoAreYou() {
       return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}
		
	setname(n){
		return this.name = n;
	}
}

let max = new Person1("Max", 29, "Maurer");


class Person2 {
	constructor(public name, public age, public jobTitle) {
	}
}

let anna = new Person2("Anna", 35, "CEO");

max.setname("Hans");
console.log(max.whoAreYou());
console.log(anna);


class Worker extends Person1 {
	salary;
	jobLocation;
	
	constructor(name, age, jobTitle, salary, jobLocation) {
		super(name, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
	
	whoAreYou() {
		return `${super.whoAreYou()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
	}
		
	} 
}

let worker = new Worker(max.name, max.age, max.jobTitle, 20000, "Wien");

console.log(worker.whoAreYou());

