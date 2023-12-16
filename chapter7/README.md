# Serious Types
**Types, Equality, Conversion, etc..**

## Primitive Types:
- **Number:** Represents both integers and floating-point numbers. Example: let num = 10;
- **String:** Represents sequences of characters enclosed in single (' ') or double (" ") quotes. Example: let str = 'Hello';
- **Boolean:** Represents true or false values. Example: let isTrue = true;
- **Undefined:** Represents a variable that has been declared but not assigned a value. Example: let undef;
- **Null:** Represents the intentional absence of any object value. Example: let empty = null;
- **Symbol (ES6+):** Represents unique identifiers. Example: let sym = Symbol('description');

## Non-Primitive (Reference) Types:
- **Object:** Represents a collection of key-value pairs. Examples: let obj = {}; or let person = { name: 'John', age: 30 };
- **Array:** A special type of object used to store multiple values in a single variable. Example: let arr = [1, 2, 3];
- **Function:** A special type of object used for executing code. Functions are objects in JavaScript. Example:

```js
    let func = function() {
        // Function code
    };
```

- **Date:** Represents dates and times. Example: let today = new Date();
**RegExp:** Represents regular expressions for pattern matching. Example: let regex = /[a-z]+/;

## Key Points:
- **Mutability:** Primitive types are immutable; their values cannot be changed once assigned. Non-primitive types are mutable; their values can be changed.
- **Passing by Value vs. Passing by Reference:** Primitive types are passed by value, meaning the variable holds a copy of the value. Non-primitive types are passed by reference, meaning the variable holds a reference (memory address) to the value.
- **Storage:** Primitive types are stored directly in the variable's memory location. Non-primitive types are stored by reference in memory, and the variable holds a reference to the object's location.

Understanding these data types in JavaScript is fundamental for effectively working with variables, performing operations, and understanding how values are stored and passed in JavaScript programs.

## undefined
Represents a variable that has been declared but has not yet been assigned a value.
```js
    let someVar;
    console.log(someVar); // Output: undefined
```

### Characteristics and Usage:
- **Declaration without Initialization:** When a variable is declared without assigning a value to it, it automatically holds the value undefined.
- **Default Value:** Variables that are declared but not initialized implicitly hold the value undefined.
- **Return Value:** Functions that do not explicitly return a value will return undefined by default.

### Advantages:
- **Initialization Marker:** Used to indicate that a variable has been declared but not yet assigned a value.
- **Error Handling:** Can be used to check if a variable exists or has been assigned a value.
- **Default Values:** Allows functions or conditions to handle default behavior in the absence of an assigned value.

### Considerations:
- **Avoidance in Production Code:** Explicitly initializing variables to meaningful values is good practice to prevent unexpected behavior due to undefined.
- **Error Prevention:** Checking for undefined can help prevent errors resulting from using variables that have not been assigned a value.

### Example Use Cases:
- Checking for Initialized Values:
```js
    let myVar;
    if (myVar === undefined) {
        console.log('myVar is not yet assigned.'); // Output: myVar is not yet assigned.
    }
```
<br>

- Function Returning Undefined:
```js
    function myFunction() {
        // No return statement
    }
    console.log(myFunction()); // Output: undefined
```
<br>

Understanding **undefined** in JavaScript is crucial for handling variable assignments, error checking, and defining default behaviors within your code. However, it's advisable to explicitly assign values to variables to avoid unexpected behavior due to undefined.


## NaN
`"Not-a-Number"` is a special value in JavaScript that represents a value which is not a valid number.

```js
    let result = 10 / "apple";
    console.log(result); // Output: NaN
```

### Characteristics and Usage:
- **Arithmetic Operations:** NaN is returned when an arithmetic operation encounters an undefined or unrepresentable value.
- **Type Conversions:** Performing mathematical operations involving non-numeric values or attempting to convert non-numeric strings into numbers results in NaN.
- **Comparison with NaN:** Comparisons involving NaN always return false. Even comparing NaN with NaN using == results in false.

### Advantages:
- **Error Indicator:** Helps identify invalid operations or values that cannot be represented as numbers.
- **Failure to Convert:** Indicates when string-to-number or other type conversions fail due to non-numeric content.

### Considerations:
- **Checking for NaN:** The isNaN() function can be used to determine whether a value is NaN. However, be aware that isNaN() might return unexpected results for non-numeric values.
- **Comparison Issues:** Due to peculiarities with how JavaScript handles NaN, direct comparisons (using == or ===) for NaN are often not reliable.

### Example Use Cases:
- Checking for NaN:
```js
    let myNumber = parseInt("xyz");
    if (isNaN(myNumber)) {
        console.log('Conversion failed!'); // Output: Conversion failed!
    }
```
<br>

- Comparison with NaN:
```js
    let x = NaN;
    if (x !== x) {
        console.log('x is NaN'); // Output: x is NaN
    }
```

<br>
Understanding NaN is important to handle scenarios where unexpected non-numeric values might result in invalid calculations or conversions, helping to manage and gracefully handle such cases in JavaScript code. However, handling NaN comparisons or checks requires careful consideration due to its unique behavior in JavaScript.


## BULLET POINTS
- There are two groups of types in JavaScript: primitives and objects. Any value that isn’t a primitive type is an object.
- The primitives are: numbers, strings, booleans, null and undefined. Everything else is an object.
- undefined means that a variable (or property or array item) hasn’t yet been initialized to a value.
- null means “no object”.
- “NaN” stands for “Not a Number”, although a better way to think of NaN is as a number that can’t be represented in JavaScript. The type of NaN is number.
- NaN never equals any other value, including itself, so to test for NaN use the function isNaN.
- Test two values for equality using == or ===.
- If two operands have different types, the equality operator (==) will try to convert one of the operands into another type before testing for equality.
- If two operands have different types, the strict equality operator (===) returns false.
- You can use === if you want to be sure no type conversion happens, however, sometimes the type conversion of == can come in handy.
- Type conversion is also used with other operators, like the arithmetic operators and string concatenation.
- JavaScript has five falsey values: undefined, null, 0, “” (the empty string) and NaN. (False is also falsey of course.) All other values are truthy.
- Strings sometimes behave like objects. If you use a property or method on a primitive string, JavaScript will convert the string to an object temporarily, use the property, and then convert it back to a primitive string. This happens behind the scenes so you don’t have to think about it.
- The string has many methods that are useful for string manipulation.
- Two objects are equal only if the variables containing the object references point to the same object.







