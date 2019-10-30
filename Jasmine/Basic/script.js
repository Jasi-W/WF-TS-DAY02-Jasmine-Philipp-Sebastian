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
var Person1 = /** @class */ (function () {
    function Person1(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person1.prototype.whoAreYou = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    Person1.prototype.setname = function (n) {
        return this.name = n;
    };
    return Person1;
}());
var max = new Person1("Max", 29, "Maurer");
var Person2 = /** @class */ (function () {
    function Person2(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    return Person2;
}());
var anna = new Person2("Anna", 35, "CEO");
max.setname("Hans");
console.log(max.whoAreYou());
console.log(anna);
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Worker.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return Worker;
}(Person1));
var worker = new Worker(max.name, max.age, max.jobTitle, 20000, "Wien");
console.log(worker.whoAreYou());
