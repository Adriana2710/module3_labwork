// 1: What are the results of these expressions

// a: "" + 1 + 0 = '10'
// b: "" - 1 + 0 = -1
// c: true + false = 1
// d: 6 / "3" = 2
// e: "2" * "3" = 6
// f: 4 + 5 + "px" = '9px'
// g: "$" + 4 + 5 = '$45'
// h: "4" - 2 = 2
// i: "4px" - 2 = NaN
// j: "   -9   " + 5 = '   -9   5'
// k: "   -9   " - 5 = -14
// l: null + 1 = 1
// m: undefined + 1 = NaN
// n: "  \t  \n" - 2 = -2

// 2: here's code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values)
//Why? Fix it. The result should be 3.

function questionTwo() {
    let a = prompt("First Number?", 1);
    let b = prompt("Second Number?", 2);

    alert(Number(a) + Number(b)); //12
}

// 3: What will be the result for these expressions?

// a: 5 > 4 = true
// b: "apple" > "pineapple" = false
// c: "2" > "12" = true
// d: undefined == null = true
// e: undefined === null = false
// f: null == "\n0\n" = false
// g: null === +"\n0\n" = false


/*
    4: Will an alert be shown?
    Yes, will be. (I've copied the "if" with the alert on my console and it showed the alert.)

    if ("0") {
        alert( 'Hello' );
    }
*/

// 5: Rewrite this if using the conditional operator '?':

function questionFive() {
    let result;
    let a = 5;
    let b = 3;

    if (a + b < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }

    console.log(result);

    console.log('----------------------');

    (a + b < 4) ? console.log(result = 'Below') : console.log(result = 'Over');

}

// 6: Write the delay method with arrow function, delay(func,ms)

function questionSix() {
    //Write delay arrow function here
    const delay = (func, ms) => (...arg) => setTimeout(() => func.apply(null, arg), ms)

    const hello = ( who ) => console.log('Hello ' + who);

    const delayHello = delay(hello, 300);

    delayHello('world');
}

// 7: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function questionSeven() {
    //Write isEmpty function here
    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    let schedule = {};

    alert( isEmpty(schedule) ) // true

    schedule['8:30'] = "get up";

    alert (isEmpty(schedule) ) // false
}

// 8: There's a ladder object that allows you to go up and down

function questionEight() {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { //shows the current step
            console.log( this.step )
            return this;
        }
    }

    //Modify the code of up, down, and showStep to make the calls chainable,
    //like this:

    ladder.up().up().down().showStep(); // 1
}

// 9: Create New Accumulator
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:

//  1: Store the "current value" in the property value. The starting value
//  is set to the argument of the constructor startingValue
//
//  2: The read() method should use prompt to read a new number and add it to value

//In other words, the value property is the sum of all user-entered
//values with the initial value startingValue

//Here's the demo of the code:

function questionNine() {
    //Write constructor function here
   
    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function() {
            let userNumber = prompt("Enter a number");
           this.value += parseInt(userNumber);
           console.log(this.value)
        }
    }

    let accumulator = new Accumulator(1); //initial value 1

    accumulator.read(); //adds the user-entered value

    accumulator.read(); //adds the user-entered value

    console.log(accumulator.value); // shows the sum of these values
}