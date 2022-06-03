function convertToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    let stringAsJson = JSON.stringify(person);
    console.log(stringAsJson);
}
convertToJson('George', 'Jones', 'Brown')