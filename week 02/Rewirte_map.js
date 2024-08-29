const lengthArr = [1, 4, 3, 6];
let areaArr = [];
for (let i = 0; i < lengthArr.length; i++) {
    areaArr.push(lengthArr[i] * lengthArr[i]);
}
console.log(areaArr);