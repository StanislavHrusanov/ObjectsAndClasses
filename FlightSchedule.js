function flightSchedule(arrays) {
    let flightsAsArrOfStrings = arrays.shift();
    let newlyStatusOfSomeFlights = arrays.shift()
    let statusToCheck = arrays.shift().join('');

    for (let flight of flightsAsArrOfStrings) {

        flight = flight.split(' ');
        let flightNumber = flight[0];
        let city = flight[1];
        let flightInfo = {};
        let updateFlightsNumbers = [];

        for (let i = 0; i < newlyStatusOfSomeFlights.length; i++) {
            let numberAndStatus = newlyStatusOfSomeFlights[i].split(' ');
            let number = numberAndStatus[0];
            updateFlightsNumbers.push(number);
        }

        if (statusToCheck == 'Ready to fly') {
            if (updateFlightsNumbers.includes(flightNumber)) {
                continue;
            } else {
                flightInfo.Destination = city;
                flightInfo.Status = 'Ready to fly';
                console.log(flightInfo);
            }
        } else if (statusToCheck == 'Cancelled') {
            if (updateFlightsNumbers.includes(flightNumber)) {
                flightInfo.Destination = city;
                flightInfo.Status = 'Cancelled';
                console.log(flightInfo);
            }
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);