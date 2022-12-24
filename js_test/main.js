const fruits = ['remon', 'apple', 'banana'];

console.log(fruits)


//forEach はコールバック関数
fruits.forEach(function(input) {
    console.log('delicious '.concat(input))
})

function callTest(input) {
    console.log("おいしい ".concat(input))
}

fruits.forEach(a=> callTest(a));

// アロー関数
const call2 = input => console.log("call ".concat(input));
fruits.forEach(f => call2(f))

//無名関数
fruits.forEach(a => console.log('aaaa ' + a));


const score = [10, 30, 40, 2]
var a = score.filter(s => s >=30).map( s => s * s);
console.log(a)