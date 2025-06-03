// ✅ Step 2: Define an interface named Vehicle.
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // A method that returns nothing (void)
}

// ✅ Step 3: Create a class Car that implements Vehicle.
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // ✅ Step 4: Add a constructor to Car.
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // ✅ Step 5: Implement the start() method.
  start(): void {
    console.log("Car engine started");
  }
}

// ✅ Step 6: Create an instance of Car.
const myCar = new Car("Toyota", "Corolla", 2022);

// ✅ Step 7: Call the start() method.
myCar.start(); // Should log: Car engine started
