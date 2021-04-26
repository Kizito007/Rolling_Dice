//Pick a random number from 1 to 6 for each of the 3 dies
let rand1;
let rand2;
let rand3;
let result;

const outcome = () => {
    rand1 = Math.floor(Math.random() * 6) + 1
    rand2 = Math.floor(Math.random() * 6) + 1
    rand3 = Math.floor(Math.random() * 6) + 1
    console.log(rand1, rand2, rand3)
    result = rand1 + rand2 + rand3;
    //Display Result 
    document.getElementById("result").innerHTML = result;
}

//Assign from die one to die six to a digit from its random outcome