//Pick a random number from 1 to 6 for each of the 3 dies
let rand1
let rand2
let rand3
let result
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let die3 = document.querySelector(".die3")
let space3 = document.querySelector(".space3")
let no1 = one
let no2 = two
let no3 = three
let no4 = four
let no5 = five
let no6 = six;

const outcome = () => {
    rand1 = Math.floor(Math.random() * 6) + 1
    rand2 = Math.floor(Math.random() * 6) + 1
    rand3 = Math.floor(Math.random() * 6) + 1
    console.log(rand1, rand2, rand3)
    result = rand1 + rand2 + rand3;
    if ( rand1 === 1) {
        die3.parentNode.replaceChild(one, space3)
    } else if ( rand1 === 2) {
        die3.parentNode.replaceChild(two, space3)
    }
      else if ( rand1 === 3) {
        die3.parentNode.replaceChild(three, space3)
    }
      else if ( rand1 === 4) {
        die3.parentNode.replaceChild(four, space3)
    }
      else if ( rand1 === 5) {
        die3.parentNode.replaceChild(five, space3)
    } else {
        die3.parentNode.replaceChild(six, space3)
    }
    //Display Result 
    // document.getElementById("result").innerHTML = six;
}

//Assign from die one to die six to a digit from its random outcome