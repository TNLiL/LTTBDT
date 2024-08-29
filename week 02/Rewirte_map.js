Array.prototype.mapfn = function(callbackfn) {
    var arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callbackfn(this[i], i, this))
    }
    return arr;
}



const lengthArr = [1, 4, 3, 6];
let cs = lengthArr.mapfn((callbackfn) => {
    return callbackfn ** 2;
})
console.log(cs)