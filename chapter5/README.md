# Understanding Objects

Objects in JavaScript are complex data types that can store collections of related data and functionality. They are collections of key-value pairs, where keys are strings (or symbols in ES6+) and values can be of any data type.
JavaScript objects are versatile and fundamental in JavaScript programming, offering a way to structure and organize data, making them a crucial part of many applications and projects.

## Declaration:

```js
let person = {
    name: 'Bojack',
    age: 29,
    city: 'New York'
};
```

## Accessing Properties:
- Dot Notation: objectName.propertyName
- Bracket Notation: objectName['propertyName']
```js
console.log(person.name);
console.log(person['age']);
```

## Adding or Modifying Properties:
```js
person.email = 'bojack@jsking.com';
person.age = 30;
```

## Deleting Properties:
```js
delete person.city;
```

## Nested Objects:
Objects can contain other objects, creating nested structures.
```js
let student = {
    name: 'Alice',
    info: {
        grade: 'A',
        age: 25
    }
};
```

## Methods: 
Functions within objects are called methods.
```js
let car = {
    brand: 'Audi',
    model: 'RS7',
    start: function() {
        return 'Engine started';
    }
};
console.log(car.start());
```

## Object.keys(): 
This method returns an array containing the keys of an object.
```js
console.log(Object.keys(person)); 
// Output: ['name', 'age', 'email']
```

## Object.values(): 
This method returns an array containing the values of an object.
```js
console.log(Object.values(person)); 
// Output: ['Bojack', 30, 'john@jsking.com']
```

## JavaScript built-in objects:
JavaScript has several built-in objects that provide a wide range of functionalities. <br>
These built-in objects in JavaScript provide a wide range of functionalities and are used extensively in JavaScript programming for various operations, data manipulation, and error handling.<br>
Some of the notable built-in objects include:
- **Object:** The most fundamental object in JavaScript. It serves as the base for all objects and has methods for object manipulation.
- **Array:** Used to store multiple values in a single variable. It provides methods for manipulating arrays, such as push(), pop(), slice(), and more.
- **String:** Represents a sequence of characters and provides methods for manipulating strings, such as toUpperCase(), substring(), indexOf(), etc.
- **Number:** Represents numeric data types and provides methods for numeric operations, conversions, and formatting.
- **Boolean:** Represents a Boolean value (true or false) and provides methods for Boolean operations.
- **Function:** Functions are objects in JavaScript and have methods and properties. They can be invoked and can be passed around as variables.
- **Date:** Used for working with dates and times. It provides methods for managing dates, formatting, and arithmetic operations with dates.
- **Math:** Provides mathematical functions and constants, such as trigonometric functions, logarithms, random number generation, etc.
- **RegExp:** Represents regular expressions for pattern matching within strings. It provides methods for pattern matching and manipulation.
- **Error:** Represents an error object that contains information about errors that occur during execution. JavaScript includes built-in error types like SyntaxError, TypeError, ReferenceError, etc.










## BULLET POINTS
- An object is a collection of properties.
- To access a property, use dot notation: the name of the variable containing the object, then a period, then the name of the property.
- You can add new properties to an object at any time, by assigning a value to a new property name.
- You can also delete properties from objects, using the delete operator.
- Unlike variables that contain primitive values, like strings, numbers, and booleans, a variable can’t actually contain an object. Instead, it contains a reference to an object. We say that objects are “reference variables”.
- When you pass an object to a function, the function gets a copy of the reference to the object, not a copy of the object itself. So, if you change the value of one of the object’s properties, it changes the value in the original object.
- Object properties can contain functions. When a function is in an object, we call it a method.
- You call a method by using the dot notation: the object name, a period, and the property name of the method, followed by parentheses.
- A method is just like a function except that it is in an object.
- You can pass arguments to methods, just like you can to regular functions.
- When you call an object’s method, the keyword this refers to the object whose method you are calling.
- To access an object’s properties in an object’s method, you must use dot notation, with this in place of the object’s name.
- In object-oriented programming, we think in terms of objects rather than procedures.
- An object has both state and behavior. State can affect behavior, and behavior can affect state.
- Objects encapsulate, or hide, the complexity of the state and behavior in that object.
- A well-designed object has methods that abstract the details of how to get work done with the object, so you don’t have to worry about it.
- Along with the objects you create, JavaScript has many built-in objects that you can use. 
