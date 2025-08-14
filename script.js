console.log("Selamat datang")
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Masih Kosong");
      return false;
    }
    for( let i = 0; i < this.penumpang.length; i++){
      if( this.penumpang[i] == namaPenumpang){
        this.penumpang[i] == undefined;
        this.kas += bayar;
        return this.penumpang
      }
    }
  };
}

let angkot1 = new Angkot("Gojo satoru", ["Pasir panjang", "Bentar"], [], 0);
let angkot2 = new Angkot("Tira", ["Srikandi", "Pasar Manis"], [], 0);
// const penumpang1 = angkot1.penumpangNaik("Caplun");
// const penumpang2 = angkot1.penumpangNaik("Martin");
// const turun1 = angkot1.penumpangTurun("Caplun", 5000)
// const turun2 = angkot1.penumpangTurun("Martin", 3000)
console.log(angkot1)