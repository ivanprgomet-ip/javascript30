var controls = document.getElementById("controls"); //gets all the elemtns in the controlls div into an HTMLcollection
var inputs = controls.getElementsByTagName("input"); //gets all the input controls from the controls div into an HTMLcollection

/* 
    an HTMLcollection is not an array, so we must convert into an array to be able to use foreach function

    1. converts the inputs HTMLcollection into an array collection.
    2. adds change event to every element in the array collection
    3. attaches the events to a function
*/
Array.from(inputs).forEach(input => input.addEventListener("change", function (e) {
    //'this' keyword will return the element thats currently being chagned , like eg. the handle of the blur input, 'this' will be the input element
    document.documentElement.style.setProperty(`--${this.name}`, this.value + "px");

    //whenever we drag the 'mySpacing' handle, we wanna change the --common-padding variable
    //for all elements that use it
    if (this.name == "mySpacing")
        document.documentElement.style.setProperty(`--common-padding`, this.value + "px");

    if (this.name == "MyColor")
        document.documentElement.style.setProperty("--MyColor", this.value);
}));