// Mendeklarasikan array dengan beberapa nilai
let buah = ["apel", "jeruk", "mangga"];
// Mengakses nilai pada array
console.log(buah[0]); // Output: "apel"
console.log(buah[1]); // Output: "jeruk"
console.log(buah[2]); // Output: "mangga"
// Menambahkan nilai pada array
buah.push("pisang");
console.log(buah); // Output: ["apel", "jeruk", "mangga", "pisang"
// Menghapus nilai pada array
buah.splice(1, 1);
console.log(buah); // Output: ["apel", "mangga", "pisang"]
// Mengubah nilai pada array
buah[1] = "anggur";
console.log(buah); // Output: ["apel", "anggur", "pisang"]
