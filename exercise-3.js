var nama = 'Amir';
var peran = 'tabib';

if (nama === '' && peran === '') {
  console.log('Nama harus diisi!');
} else if (peran === '' && nama) {
  console.log('Halo, ' + nama + '. Pilih peranmu untuk memulai game.');
} else if (peran === 'ksatria' && nama) {
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo, Ksatria ' + nama + ' kamu dapat menyerang dengan senjatamu.');
} else if (peran === 'tabib' && nama) {
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo, Tabib ' + nama + ' kamu akan membantu temanmu yang terluka.');
} else if (peran === 'penyihir' && nama) {
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo, Penyihir ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu.');
} else {
  console.log('Maaf, peran yang Anda pilih tidak tersedia di gim ini.');
}