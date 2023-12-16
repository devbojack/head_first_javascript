# Arrays

Arrays in JavaScript are used to store multiple values within a single variable. They can hold various data types, including numbers, strings, objects, or even other arrays.
They are versatile data structures in JavaScript, providing flexibility in storing and manipulating collections of data, making them fundamental to JavaScript programming.

## Declaration
**Using Array Literals:**<br>
```js
let myArray = [value1, value2, value3];
```

**Using the new keyword:**<br> 
```js
let myArray = new Array(value1, value2, value3);
```

## Indexing
Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. Access elements using bracket notation: myArray[index].

## Length
The length property indicates the number of elements in an array. You can access it using myArray.length.

## Modifying Arrays:
- **Adding Elements:** Use `push()` to add elements to the end of the array, or unshift() to add elements to the beginning.
- **Removing Elements:** Use 
    - `pop()` to remove the last element.
    - `shift()` to remove the first element
    - `splice()` to remove elements from specific positions.

## Iterating Over Arrays:
- **For Loop:** Use a standard for loop to iterate through elements.
- **forEach():** A method to execute a function on each element of the array.
- **Array Methods:** Arrays come with several built-in methods for manipulation and transformation, such as 
    - slice()
    - concat()
    - indexOf()
    - includes()
    - filter()
    - map()
    - reduce() and more.

## Multidimensional Arrays: 
JavaScript arrays can contain other arrays, allowing for the creation of multidimensional arrays or arrays of arrays.
```js
let multiDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

## Common Array Properties:
Apart from length, arrays also have properties such as
- `toString()` that converts an array to a string by joining all elements with commas and returns the resulting string.
- `join()` for converting arrays to strings.
- `indexOf(value)` that returns the index of the first occurrence of a specified value
- `includes(value)` checks if the array contains a specified value and returns true or false.


## BULLET POINTS
- Arrays are a data structure for ordered data.
- An array holds a set of items, each with its own index.
- Arrays use a zero-based index, where the first item is at index zero.
- All arrays have a length property, which holds a number representing the number of items in the array.
- You can access any item using its index. For example, use myArray[1] to access item one (the second item in the array).
- If an item doesn’t exist, trying to access it will result in a value of undefined.
- Assigning a value to an existing item will change its value.
- Assigning a value to an item that doesn’t exist in the array will create a new item in the array.
- You can use a value of any type for an array item.
- Not all the values in an array need to be the same type.
- Use the array literal notation to create a new array.
- You can create an empty array with
    ```js
    var myArray = [ ];
    ```
- The for loop is commonly used to iterate through arrays.
- A for loop packages up variable initialization, a conditional test, and variable increment into one statement.
- The while loop is most often used when you don’t know how many times you need to loop, and you’re looping until a condition is met. The for loop is most often used when you know the number of times the loop needs to execute.
- Sparse arrays occur when there are undefined items in the middle of an array.
- You can increment a variable by one with the post-increment operator ++.
- You can decrement a variable by one with the post-decrement operator --.
- You can add a new value to an array using push.