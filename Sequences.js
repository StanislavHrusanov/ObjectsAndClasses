function sequences(arrOfArrsInJSONFormat) {

    let myArr = [];
    for (const str of arrOfArrsInJSONFormat) {
        let currentArr = JSON.parse(str)
            .map(Number)
            .sort((a, b) => b - a);
        let currSum = currentArr.reduce((a, b) => a + b);
        if (!myArr.find(arr => arr.reduce((a, b) => a + b) === currSum)) {
            myArr.push(currentArr);
        }

    }
    let outputArr = myArr
        .sort((a, b) => a.length - b.length)
        .forEach(e => console.log(`[${e.join(', ')}]`));

}
sequences(["[7.14, 7.180, 7.339, 80.099, 2]",
    "[2, 2, 4, 80.099]",
    "[3, 3, 2, 80.099]",
    "[7.14, 7.180, 7.339, 80.099, 1]",
    "[7.14, 7.180, 7.339, 80.099]"]);