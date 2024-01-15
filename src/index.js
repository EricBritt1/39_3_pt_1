import { choice, remove } from "./helpers"
import foodsArray from "./foods"

let randomFruit = choice(foodsArray)
let removeItem = remove(foodsArray, randomFruit)
let foodsArrayLength = foodsArray.length

console.log(
    `
    i'd like one ${randomFruit}, please
    here you go: ${randomFruit}
    Delicious may I have another?
    ${removeItem}
    I'm sorry, we're all out. We have ${foodsArrayLength} left.
    `
)