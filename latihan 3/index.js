//Posumah, Gabrile Janes

//Class

class orang {
    constructor(nama,umur) {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja() {
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
    tidur() {
        console.log(`${this.nama} sedang tidur`);
    }
    makan() {
        console.log(`${this.nama} sedang makan`);
    }
};

class pelajar extends orang {
    constructor (nama,umur,namaSekolah) {
        super(nama,umur);
        this.namaSekolah = namaSekolah;
    }
    belajar() {
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

const user1 = new orang ("Gabriel",19);
const user = new pelajar ("John",17,"Unklab");
user1.bekerja();
console.log(user);

