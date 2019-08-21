var angka = 0;
var batas = 20;
var selisih = 2;

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
