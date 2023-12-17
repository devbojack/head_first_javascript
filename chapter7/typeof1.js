
var test1 = "abcdef";            //string
var test2 = 123;                //number
var test3 = true;               //boolean
var test4 = {};                 //object
var test5 = [];                 //object
var test6;                      //undefined
var test7 = { "abcdef": 123 };  //object
var test8 = ["abcdef", 123];    //object
function test9() {              //function
    return "abcdef"
};
var test10 = null;              //object

var allTest = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10];

for (var i =0; i < allTest.length; i++){
    console.log(typeof allTest[i]);
}