// Base class Kapal
class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
    }}

// Subclass KapalPenumpang
class KapalPenumpang extends Kapal {

    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

// Subclass 1: KapalPesiar 
class KapalPesiar extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, fasilitas) {
        super(nama, "Pesiar", panjang, lebar, kapasitasPenumpang);
        this.fasilitas = fasilitas;
    }

    infokapal() {
        return `${super.infokapal()} Fasilitas yang tersedia: ${this.fasilitas.join(", ")}.`;
    }
}

// Subclass 2: KapalFeriEkonomi 
class KapalFeriEkonomi extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, tiket) {
        super(nama, "Feri Ekonomi", panjang, lebar, kapasitasPenumpang);
        this.tiket = tiket;
    }

    infokapal() {
        return `${super.infokapal()} Harga tiket: Rp. ${this.tiket}.`;
    }
}

// Subclass 3: KapalFeriVIP 
class KapalFeriVIP extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, tiket, layananKhusus) {
        super(nama, "Feri VIP", panjang, lebar, kapasitasPenumpang);
        this.tiket = tiket;
        this.layananKhusus = layananKhusus;
    }

    infokapal() {
        return `${super.infokapal()} Harga tiket VIP: Rp. ${this.tiket}. Layanan khusus: ${this.layananKhusus.join(", ")}.`;
    }
}

// Subclass 4: KapalPenumpangAntarPulau 
class KapalPenumpangAntarPulau extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, jadwal) {
        super(nama, "Penumpang Antar Pulau", panjang, lebar, kapasitasPenumpang);
        this.jadwal = jadwal;
    }

    infokapal() {
        return `${super.infokapal()} Jadwal keberangkatan: ${this.jadwal}.`;
    }
}

// Subclass 5: KapalCepat 
class KapalCepat extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitasPenumpang, kecepatan) {
        super(nama, "Kapal Cepat", panjang, lebar, kapasitasPenumpang);
        this.kecepatan = kecepatan;
    }

    infokapal() {
        return `${super.infokapal()} Kecepatan maksimal: ${this.kecepatan} km/jam.`;
    }
}

// Pembuatan objek untuk setiap subclass
const kapalPenumpang = new KapalPenumpang("Budiono Siregar", "Pesiar", 300, 50, 2000);
const kapalPesiar = new KapalPesiar("Ocean Dream", 300, 50, 2000, ["Kolam Renang", "Restoran", "Teater"]);
const kapalFeriEkonomi = new KapalFeriEkonomi("Jaya Abadi", 100, 20, 500, 50000);
const kapalFeriVIP = new KapalFeriVIP("Jaya Abadi", 100, 20, 500, 50000, ["Coffe Shop", "Restoran", "Spaa"]);
const kapalPenumpangAntarPulau = new KapalPenumpangAntarPulau("Budiono Siregar", 300, 50, 2000, "Senin, Selasa, Rabu, Kamis, Jumat");
const kapalCepat = new KapalCepat("Budiono Siregar", 300, 50, 2000, 80 );


// Menampilkan informasi kapal
console.log(kapalPenumpang.infokapal());
console.log(kapalPesiar.infokapal());
console.log(kapalFeriEkonomi.infokapal());
console.log(kapalFeriVIP.infokapal());
console.log(kapalPenumpangAntarPulau.infokapal());
console.log(kapalCepat.infokapal());


