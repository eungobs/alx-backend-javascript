# ES6 Classes Project

This project contains JavaScript files implementing various ES6 classes and demonstrating different concepts of ES6 classes.

## Project Structure

The project is organized into several JavaScript files, each implementing a specific class. Below is a brief description of each file:

1. **0-classroom.js:** Implements a class named `ClassRoom` with a constructor that accepts the `maxStudentsSize` attribute.
2. **1-make_classrooms.js:** Imports the `ClassRoom` class and implements a function named `initializeRooms` that returns an array of `ClassRoom` objects with predefined sizes.
3. **2-hbtn_course.js:** Implements a class named `HolbertonCourse` with attributes `name`, `length`, and `students`, along with getters and setters for each attribute.
4. **3-currency.js:** Implements a class named `Currency` with attributes `code` and `name`, along with getters and setters for each attribute. Also includes a method `displayFullCurrency` to display the currency information.
5. **4-pricing.js:** Imports the `Currency` class and implements a class named `Pricing` with attributes `amount` and `currency`, along with getters and setters for each attribute. Also includes a method `displayFullPrice` to display the price information and a static method `convertPrice` for conversion.
6. **5-building.js:** Implements a class named `Building` with attribute `sqft` and a getter for the attribute. Considers it as an abstract class and requires subclasses to implement the `evacuationWarningMessage` method.
7. **6-sky_high.js:** Imports the `Building` class and implements a class named `SkyHighBuilding` that extends `Building` with additional attribute `floors`. Overrides the `evacuationWarningMessage` method to provide a custom message.
8. **7-airport.js:** Implements a class named `Airport` with attributes `name` and `code`, along with getters and setters for each attribute. Overrides the `toString` method to return the airport code.
9. **8-hbtn_class.js:** Implements a class named `HolbertonClass` with attributes `size` and `location`, along with getters for each attribute. Also overrides the casting to Number and String for custom behavior.
10. **9-hoisting.js:** Implements classes `HolbertonClass` and `StudentHolberton` with dependencies between them, resolving hoisting issues.
11. **10-car.js:** Implements a class named `Car` with attributes `brand`, `motor`, and `color`, along with a method `cloneCar` to create a new object of the class.

## Usage

Each class implementation is accompanied by example usage in separate JavaScript files. You can run each file to see the output and behavior of the classes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
