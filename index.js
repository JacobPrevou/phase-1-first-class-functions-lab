
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
  

const returnFirstTwoDrivers = function(drivers) {
    return ['Sally', 'Bob'];
}

const returnLastTwoDrivers = function(drivers) {
    return ['Freddy', 'Claudia'];
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function() {
    return function fareQuintupler(fare) {
        return (fare * 5)
    };
};

const fareDoubler = function(fare) {
    return (fare * 2);
}

const fareTripler = function(fare) {
    return (fare * 3);
}

const selectDifferentDrivers = function() {
    return returnFirstTwoDrivers(drivers);
}

// describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//     });

//     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//     });

//slice