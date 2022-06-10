function storeProvision(stocks, orders) {

    let listOfAvailableStocks = makeListOfAvailableStocksAndQty(stocks);
    let listOfStocksAfterOrders = listAfterOrder(orders, listOfAvailableStocks);

    for (let product of Object.keys(listOfStocksAfterOrders)) {
        console.log(`${product} -> ${listOfStocksAfterOrders[product]}`);
    }

    function makeListOfAvailableStocksAndQty(stocks) {
        let obj = {};

        for (let i = 0; i < stocks.length; i += 2) {
            let product = stocks[i];
            let quantity = Number(stocks[i + 1]);
            obj[product] = quantity;
        }
        return obj;
    }

    function listAfterOrder(orders, listOfAvailableStocks) {

        for (let i = 0; i < orders.length; i += 2) {
            let product = orders[i];
            let quantity = Number(orders[i + 1]);

            if (listOfAvailableStocks[product] === undefined) {
                listOfAvailableStocks[product] = 0;
            }
            listOfAvailableStocks[product] += quantity;
        }
        return listOfAvailableStocks;
    }


}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);