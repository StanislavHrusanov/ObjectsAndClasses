function convertToObject(stringAsJson) {
    let obj = JSON.parse(stringAsJson);
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]}: ${values[i]}`);
    }
}
let stringAsJson = '{"name": "George", "age": 40, "town": "Sofia"}';
convertToObject(stringAsJson);