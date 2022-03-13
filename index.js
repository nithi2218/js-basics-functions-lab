// Code your solution in this file!
const scuberNum = 42;
const distanceFromHqInBlocks = (block) => {
    if(block > scuberNum) {
    return block-scuberNum;
    }
    else if (scuberNum > block) {
        return scuberNum - block;
    }
}

const distanceFromHqInFeet = (feet) => {
    const distance = distanceFromHqInBlocks() * 264;
    return distance;
}

const distanceTravelledInFeet = (scuberNum, destination ) => {

    if(scuberNum > destination) {
const differenceInFeet = (scuberNum - destination) * 264;
return differenceInFeet;
} else  if(scuberNum < destination) {
    const differenceInFeet = (destination - scuberNum) * 264;
    return differenceInFeet;
    }

}

const calculatesFarePrice = (start, end) => {

    const distance = (start - end) * 264;
    
    if (distance <= 400) {
    return 0;
    }
    else if(distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } 
    else if (distance > 2000 && distance < 2500) {
        return 25;
    } 
    else { 
        return 'cannot travel that far'; }
}

