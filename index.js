// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return ([drivers[0],drivers[1]])
}

function returnLastTwoDrivers(drivers){
    return (drivers.slice(-2))
}

const selectingDrivers=
    [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(value){
    return ()=>{
        return value*value
    }
}

function fareDoubler(value){
    return 2*value
}

function fareTripler(value){
    return 3*value
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}