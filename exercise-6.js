var angka = 0;
var batas = 20;
var selisih = 2;

// Looping menggunakan while-do
console.log('LOOPING PERTAMA');
while (angka < batas) {
  angka += selisih;
  console.log(angka + ' - I love coding.');
}

console.log('LOOPING KEDUA');
while (angka > 0) {
  console.log(angka + ' - I will become a fullstack developer.');
  angka -= selisih;
}

// Looping menggunakan for
console.log('LOOPING PERTAMA');
for (var angka = 1; angka <= batas; angka++) {
  console.log(angka + ' - I love coding.');
}

console.log('LOOPING KEDUA');
for (var angka = batas; angka > 0; angka--) {
  console.log(angka + '- I will become a fullstack developer.');
}

// Perulangan ganjil-genap
for (var angka = 1; angka <= 100; angka++) {
  if (angka % 2 == 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}

// Perulangan kelipatan 3 dan pertambahan 2
for (var angka = 1; angka <= 100; angka += 2) {
  if (angka % 3 == 0) {
    console.log(angka + ' kelipatan 3');
  } else {
    console.log(angka);
  }
}

// Perulangan kelipatan 6 dan pertambahan 5
for (var angka = 1; angka <= 100; angka += 5) {
  if (angka % 6 == 0) {
    console.log(angka + ' kelipatan 6');
  } else {
    console.log(angka);
  }
}

// Perulangan kelipatan 10 dan pertambahan 9
for (var angka = 1; angka <= 100; angka += 9) {
  if (angka % 10 == 0) {
    console.log(angka + ' kelipatan 10');
  } else {
    console.log(angka);
  }
}
