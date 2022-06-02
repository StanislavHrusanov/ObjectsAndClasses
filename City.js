function city(input) {
    let keys = Object.keys(input);
    let values = Object.values(input);
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]} -> ${values[i]}`);
    }
}
let input = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}

city(input);