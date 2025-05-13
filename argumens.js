// memmahami tentang "argument" type array pada belajar tentang parameter dan argument
// contoh function

function tambah() {
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
    
}

let coba = tambah(1,2,3,4);
console.log(coba);

// kode di atas sudah tidak disarankan memakai argumrnts, ini kode di modrn javascript
function tambah(...args) {
  let hasil = 0;
  for (let i = 0; i < args.length; i++) {
    hasil += args[i];
  }
  return hasil;
}

let covaHasil = tambah(1, 2, 3);
console.log(covaHasil);
