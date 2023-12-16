# DOM

**Document Object Model** *(DOM)* is a representation of the structure and content of a webpage created by the browser when it loads an HTML document. 

## What is JavaScript DOM?
The Document Object Model (DOM) is an interface provided by web browsers to programmatically interact with web pages. It represents the document as a tree-like structure of nodes, where each node corresponds to an element in the HTML structure.

## Key Points about JavaScript DOM:
- **Tree-like Structure:** The DOM represents the HTML document as a tree structure, with the document object as the root node. Each HTML element, attribute, text, comment, etc., is a node in this tree.

<br>

- **Accessing Elements:** JavaScript can access and manipulate elements on a web page using various methods and properties provided by the DOM, such as `getElementById, querySelector, getElementsByTagName,` etc.

```js
    let element = document.getElementById("heading");
    console.log(element.innerHTML);
```

```js
    let element = document.querySelector(".container p");
    console.log(element.innerHTML); 
```
<br>

- **Manipulating Content:** DOM methods allow for adding, removing, or modifying elements and their attributes, styles, and content dynamically.
```js
    let newElement = document.createElement("p");
    newElement.innerHTML = "This is a new paragraph.";
    document.getElementById("container").appendChild(newElement);
```
<br>

- **Event Handling:** JavaScript can attach event listeners to DOM elements to respond to user interactions (e.g., clicks, mouse movements, keyboard actions).
```html
    <!DOCTYPE html>
    <html>
        <body>

            <button onclick="displayAlert()">Click me</button>

            <script>
                function displayAlert() {
                    alert("Button clicked!");
                }
            </script>

        </body>
    </html>

```
<br>

- **Traversal and Navigation:** Developers can navigate through the DOM tree, moving between parent, child, and sibling nodes, enabling dynamic content updates.
```html
    <!DOCTYPE html>
    <html>
        <body>

            <ul id="myList">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <script>
                let list = document.getElementById("myList");
                let firstItem = list.firstElementChild;
                console.log(firstItem.innerHTML); // Output: Item 1
            </script>

        </body>
    </html>
```
<br>

- **Dynamic Interaction:** JavaScript can change the style, structure, and content of a web page based on user actions, data input, or other events, providing a more interactive user experience.
```js
    let element = document.getElementById("text");
    element.style.color = "red";
    element.style.fontSize = "20px";
```
<br>

- **Cross-Browser Compatibility:** DOM methods and properties are standardized by the W3C, ensuring compatibility across different browsers.
- **Document Manipulation:** Besides elements, the DOM allows manipulation of the document structure, including the addition of new elements, modification of existing ones, and removal of elements.

## Usage Scenarios
- **Dynamic Web Development:** DOM manipulation is extensively used to create interactive and dynamic web applications.
```html
    <!DOCTYPE html>
    <html>
        <body>
            <button onclick="changeText()">Click me</button>
            <p id="text">Hello World!</p>

            <script>
                function changeText() {
                    document.getElementById("text").innerHTML = "Text changed!";
                }
            </script>

        </body>
    </html>
```

<br>

- **Form Validation and Interaction:** Validating user inputs and responding to form submissions using JavaScript events.
```html
    <!DOCTYPE html>
    <html>
        <body>

            <form onsubmit="return validateForm()">
                <input type="text" id="name" placeholder="Enter your name" required>
                <input type="submit" value="Submit">
            </form>

            <script>
                function validateForm() {
                    let name = document.getElementById("name").value;
                    if (name === "") {
                        alert("Name must be filled out");
                        return false;
                    }
                    return true;
                }
            </script>

        </body>
    </html>

```
<br>

- **Client-Side Templating:** Building templates that can be dynamically populated with data.
```html
    <!DOCTYPE html>
    <html>
        <body>

            <ul id="list"></ul>

            <script>
                let fruits = ['Apple', 'Banana', 'Orange'];
                let list = document.getElementById('list');
                fruits.forEach(function(fruit) {
                    let li = document.createElement('li');
                    li.textContent = fruit;
                    list.appendChild(li);
                });
            </script>

        </body>
    </html>

```
<br>

- **AJAX Requests:** Interacting with the server to load data without refreshing the entire page.
```html
    <!DOCTYPE html>
    <html>
        <body>

            <div id="data"></div>

            <script>
                fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('data').innerHTML = `Title: ${data.title}`;
                    })
                    .catch(error => console.error(error));
            </script>

        </body>
    </html>

```
<br>

The JavaScript DOM provides a powerful interface for web developers to create interactive and dynamic web applications by allowing manipulation and interaction with HTML documents and elements.

## BULLET POINTS
- The Document Object Model, or DOM, is the browser’s internal representation of your web page.
- The browser creates the DOM for your page as it loads and parses the HTML.
- You get access to the DOM in your JavaScript code with the **document** object.
- The **document** object has properties and methods you can use to access and modify the DOM.
- The `document.getElementById` method grabs an element from the DOM using its id.
- The `document.getElementById` method returns an element object that represents an element in your page.
- An element object has properties and methods you can use to read an element’s content, and change it.
- The `innerHTML` property holds the text content, as well as all nested HTML content, of an element.
- You can modify the content of an element by changing the value of its `innerHTML` property.
- When you modify an element by changing its `innerHTML` property, you see the change in your web page immediately.
- You can get the value of an element’s attributes using the `getAttribute` method.
- You can set the value of an element’s attributes using the `setAttribute` method.
- If you put your code in a `<script>` element in the `<head>` of your page, you need to make sure you don’t try to modify the DOM until the page is fully loaded.
- You can use the window object’s `onload` property to set an event handler, or callback, function for the load event.
- The event handler for the window’s `onload` property will be called as soon as the page is fully loaded.
- There are many different kinds of events we can handle in JavaScript with event handler functions.