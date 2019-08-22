// Asterisk
var baris = 8;
var bintang = '*';

for (var angka = 1; angka <= baris; angka++) {
  console.log(bintang);
}

// Asterisk with Nested Looping
baris = 9;
var angka1 = 0;
var angka2 = 1;

while (angka1 < baris) {
    while (angka2 < baris) {
      bintang = bintang + '*';
      angka2++;
    }
    console.log(bintang);
    angka1++;    
}

// Asterisk Stairs with Nested Looping
baris = 10;
var angka3 = 0;

while (angka1 < baris) {
    while (angka3 < angka1) {
      bintang = bintang + '*';
      angka3++;
    }
    console.log(bintang);
    angka1++;    
}
