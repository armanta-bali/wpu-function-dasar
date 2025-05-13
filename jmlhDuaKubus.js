// latihan 2
// menjumlahkan dua kubus dengan menngunakan function sederhana

// code biasa 
function jumblahDuaKubus(a, b) {
    let total;
    let jumlahVolumA = a * a * a;
    let jumlahVolumB = b * b * b;

    total = jumlahVolumA + jumlahVolumB;

    return total;
}

// code refactoring lebih disederhankan
function jumblahDuaKubus(a, b) {
  return a ** 3 + b ** 3;
}


console.log(jumblahDuaKubus(8, 3));
console.log(jumblahDuaKubus(10, 7));