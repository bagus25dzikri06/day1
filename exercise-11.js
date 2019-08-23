/* Balik Kata */
function balikKata(kata) {
   var kataTerbalik = ''
   for (var angka = kata.length; angka >= 0; angka--) {
      kataTerbalik = kataTerbalik + kata[angka]
   }
   return kataTerbalik
}
