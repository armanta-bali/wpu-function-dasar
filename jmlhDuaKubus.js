// latihan 2
// menjumlahkan dua kubus dengan menngunakan function sederhana

function jumblahDuaKubus(a, b) {
    let total;
    let jumlahVolumA = a * a * a;
    let jumlahVolumB = b * b * b;

    total = jumlahVolumA + jumlahVolumB;

    return total;
}

console.log(jumblahDuaKubus(8, 3));
console.log(jumblahDuaKubus(10, 7));