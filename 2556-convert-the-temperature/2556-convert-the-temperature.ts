function convertTemperature(celsius: number): number[] {
    let arr:number[]=[];
    arr.push(celsius+273.15);
    arr.push(celsius*1.8+32);
    return arr;
};