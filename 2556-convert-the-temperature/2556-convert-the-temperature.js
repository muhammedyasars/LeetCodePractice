/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let arr=[];
    arr.push(celsius+273.15);
    arr.push(celsius*1.8+32);
    return arr;

};