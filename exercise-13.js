/* Program X dan O */
function xo(str) {
   var extra = 'x'
   var ordinary = 'o'
   var totalX = 0
   var totalO = 0

   for (var i = 0; i < str.length; i++) {
      //Menghitung jumlah huruf x
      if (str.charAt(i) == extra) {
         totalX += 1
      //Menghitung jumlah huruf o
      } else if (str.charAt(i) == ordinary) {
         totalO += 1
      }
   }
   
   //Membandingkan jumlah huruf x dan o dalam suatu string
   if (totalX == totalO) {
      return true
   } else {
      return false
   }
}
