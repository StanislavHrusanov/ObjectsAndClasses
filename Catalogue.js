function catalogue(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let capitalLatter = arr[0][0];
    let products = [];
    for (let i = 0; i < arr.length; i++) {
        let product = {};
        let currProductInfo = arr[i].split(' : ');
        let typeOfProduct = currProductInfo[0];
        let priceOfproduct = Number(currProductInfo[1]);
        let currCapitalLetter = currProductInfo[0][0];
        if (currCapitalLetter != capitalLatter) {
            console.log(capitalLatter);
            for (let product of products) {
                for (let key of Object.keys(product)) {
                    console.log(`  ${key}: ${product[key]}`);
                }
            }
            product = {};
            products = [];
            capitalLatter = currCapitalLetter;
        }
        product[typeOfProduct] = priceOfproduct;
        products.push(product);
        if (i == arr.length - 1) {
            console.log(capitalLatter);
            for (let product of products) {
                for (let key of Object.keys(product)) {
                    console.log(`  ${key}: ${product[key]}`);
                }
            }
        }
    }
}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);