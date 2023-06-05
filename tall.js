// Beregner summen av de 100 første heltallene og finner tiden det tar
console.time("sum1");
let sum1 = 0;
for (let i = 0; i < 100; i++) {
  sum1 += i;
}
console.log("Sum 1: " + sum1);
console.timeEnd("sum1");

// Beregner summen av de 100 000 første heltallene og finner tiden det tar
console.time("sum2");
let sum2 = 0;
for (let i = 0; i < 100000; i++) {
  sum2 += i;
}
console.log("Sum 2: " + sum2);
console.timeEnd("sum2");

console.time("sum3");
let sum3 = 0;
for (let i = 0; i < 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999; i++) {
  sum3 += i;
}
console.log("Sum 3: " + sum3);
console.timeEnd("sum3");