// Logic Controller - Minute Converter
function konversiMenit(menit) {
   var jam = Math.floor(menit / 60)
   var menitSisa = menit % 60

   if (menit < 60) {
      return '0:' + menit
   } else {
      if (menitSisa < 10) {
        return jam + ':0' + menitSisa
      } else {
        return jam + ':' + menitSisa
      }
   }
} 
