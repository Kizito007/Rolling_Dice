//Pick a random number from 1 to 6 and display it on the screen
let rand1;

const outcome1 = () => {
    rand1 = Math.floor(Math.random() * 6) + 1
    console.log(rand1)
}