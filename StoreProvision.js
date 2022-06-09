function storeProvision(containProducts, orderedProducts) {
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let currProduct = orderedProducts[i];
        let quantityOfCurrProduct = Number(orderedProducts[i + 1]);
        if (containProducts.includes(currProduct)) {
            let indexOfCurrProduct = containProducts.indexOf(currProduct);
            containProducts[indexOfCurrProduct + 1] = Number(containProducts[indexOfCurrProduct + 1]) + quantityOfCurrProduct;
        } else {
            containProducts.push(currProduct);
            containProducts.push(quantityOfCurrProduct);
        }
    }
    for (let i = 0; i < containProducts.length; i += 2) {
        let typeOfProduct = containProducts[i];
        let quantityOfProduct = Number(containProducts[i + 1]);

        let productAsObjects = {
            typeOfProduct: typeOfProduct,
            quantityOfProduct: quantityOfProduct
        }
        console.log(`${productAsObjects.typeOfProduct} -> ${productAsObjects.quantityOfProduct}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);