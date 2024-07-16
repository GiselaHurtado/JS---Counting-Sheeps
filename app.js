
export function countSheeps(list){
    let sheepCount = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i] === true){
            sheepCount++;
        }
    }

    return sheepCount;
}
let list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
let list2 = [false, false, false];

console.log(`There are ${countSheeps(list1)} sheep in total`);

console.log(countSheeps(list2) === 0 ? "UPS!!! Wolfs eaten Sheeps" : `There are ${countSheeps(list2)} sheep in total`);