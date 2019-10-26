// Source : https://www.youtube.com/watch?v=R8rmfD9Y5-c

const items = [
    { name:"Bike",     price:100 },
    { name:"TV",       price:200 },
    { name:"Album",    price:10 },
    { name:"Book",     price:5 },
    { name:"Phone",    price:500 },
    { name:"Computer", price:1000 },
    { name:"Keyboard", price:25 },
]

// Filter data
const filteredItems = items.filter((item => {
    return item.price <= 100
}))

// Execute a function over all the element of the array
// Returns a copy of the array
const itemNames = items.map((item => {
    return item.price * 2
}))

// Find first element
const foundItem = items.find((item) => {
    return item.name === "Book"
})

// Print elements of the array
items.forEach((item) => {
    console.log(item.name)
})

// Modify each elements of the array
items.forEach((item) => {
    item.price *= 2
})


// Check if any value is > than 100
const hasExpensiveItems = items.some((item =>{
    return item.price > 100
}))


// Check if all values are > than 0
const hasAllInexpesiveItems = items.every((item =>{
    return item.price > 0
}))

// Running total.
// currentTotal : temp variables that old the current total
// 0 : initial value of currentTotal
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

// Checks if a value exists in a vector
const v = [1, 2, 3, 4, 5]
const includeTwo = v.includes(2);

//console.log(JSON.stringify(includeTwo, null, '\t'));