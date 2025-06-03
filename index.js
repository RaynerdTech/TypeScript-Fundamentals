// ✅ Step 3: Create a class Car that implements Vehicle.
var Car = /** @class */ (function () {
    // ✅ Step 4: Add a constructor to Car.
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // ✅ Step 5: Implement the start() method.
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// ✅ Step 6: Create an instance of Car.
var myCar = new Car("Toyota", "Corolla", 2022);
// ✅ Step 7: Call the start() method.
myCar.start(); // Should log: Car engine started
