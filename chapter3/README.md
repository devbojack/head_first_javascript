# Getting Functional

**With Arguments and Return:**
## Function Expression (Anonymous Function):
```js
const myFunction = function(arg1, arg2){
    // Codeusing arg1 and arg2

    return arg1 + arg2;
}
```

## Function Declaration:
```js
function myFunction(arg1, arg2){
    // Code using arg1 and arg2

    return arg1 + arg2;
}
```

## Arrow Function (ES6):
```js
const myFunction = (arg1, arg2) => {
    // Code using arg1 and arg2

    return arg1 + arg2;
};
```

## Function Constructor (Not Recommended):
```js
const myFunction = new Function('a', 'b', 'return a + b');
```
<br>

**The function declaration and function expression are more commonly used, while arrow functions (ES6) provide a concise syntax for writing functions, especially for shorter functions or when using lexical scoping of this. The function constructor is less common and usually avoided due to security concerns and potential performance issues.**


<br>

## Bullet Points
- Declare a function using the function keyword, followed by the name of the function.
- Use parentheses to enclose any parameters a function has. Use empty parentheses if there are no parameters.
- Enclose the body of the function in curly braces.
- The statements in the body of a function are executed when you call a function.
- Calling a function and invoking a function are the same thing.
- You call a function by using its name and passing arguments to the function’s parameters (if any).
- A function can optionally return a value using the return statement.
- A function creates a local scope for parameters and any local variables the function uses.
- Variables are either in the 
    - global scope: visible everywhere in your program
    - local scope: visible only in the function where they are declared.
- Declare local variables at the top of the body of your function.
- If you forget to declare a local variable using var, that variable will be global, which could have unintended consequences in your program.
- Functions are a good way to organize your code and create reusable chunks of code.
- You can customize the code in a function by passing in arguments to parameters (and using different arguments to get different results).
- Functions are also a good way to reduce or eliminate duplicate code.
- You can use JavaScript’s many built-in functions, like alert, prompt, and Math.random, to do work in your programs.
- Using built-in functions means using existing code you don’t have to write yourself.
- It’s a good idea to organize your code so your functions are together, and your global variables are together, at the top of your JavaScript file.