
let a_taktikk = Math.floor(Math.random() * 51);
let b_taktikk = Math.floor(Math.random() * 51);

let a_styrke = Math.floor(Math.random() * 51);
let b_styrke = Math.floor(Math.random() * 51);

let a_NATO = a_taktikk + a_styrke;
let b_USSR = b_taktikk + b_styrke;


while (a_NATO > 0 && b_USSR > 0) {
    if (Math.random() < 0.5) {
        a_NATO--;
    } else {
        b_USSR--;
    }
    console.log('A: ' + a_NATO + ' B:' + b_USSR);
}

if (a_NATO > 0) {
    console.log('NATO vant!');
} else {
    console.log('USSR vant!');
}

