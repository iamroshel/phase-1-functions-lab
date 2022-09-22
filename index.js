// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    
    return Math.abs(42 - someValue);
}
    
function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;  
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;     

}
function calculatesFarePrice(start, destination) {
    let travel; 
    travel = distanceTravelledInFeet(start, destination);
    if (travel < 400) {
        return 0; 
    }
    else if (travel > 400 && travel <2000) {
        return (travel - 400) * .02;  
    }
    else if (travel > 2000 && travel <= 2500) {
        return 25;
    }
       
    else {
        return "cannot travel that far"
    }
         


}
