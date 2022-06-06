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
            printProducts(capitalLatter, products);
            product = {};
            products = [];
            capitalLatter = currCapitalLetter;
        }
        product[typeOfProduct] = priceOfproduct;
        products.push(product);
        if (i == arr.length - 1) {
            printProducts(capitalLatter, products);
        }
    }
    function printProducts(capitalLatter, products) {
        console.log(capitalLatter);
        for (let product of products) {
            for (let key of Object.keys(product)) {
                console.log(`  ${key}: ${product[key]}`);
            }
        }
        return;
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);