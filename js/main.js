/**
 * == Ganti nama dan kelas menjadi nama dan kelas kalian ==
 * Nama : Ta'zirah Marwan
 * Kelas : RPL 0
 * 
 */

//contoh penjelasan variabel
//variabel dataSiswa di bawah merupakan array dari objek yang menampung data siswa-siswa.
var dataSiswa = [
    {
        nama: "Akmal Widad Iskandar",
        kelas: 2,
        jenisKelamin: "laki-laki"
    },
    {
        nama: "Achmad Zulfikar Rahman",
        kelas: 1,
        jenisKelamin: "laki-laki"
    },
    {
        nama: "Vanyah Amani Fatiha",
        kelas: 1,
        jenisKelamin: "perempuan"
    },
    {
        nama: "Levina Handayani",
        kelas: 2,
        jenisKelamin: "perempuan"
    }
]

var notFound;

function CariSiswa(nama, kelas) {
    notFound = true;
    document.getElementById("result").innerHTML = "";
    var jenisKelamin : CekJenisKelamin();
    var nomorkelas = cekKelas(kelas);

    /*
    
        jika buntu, coba gunakan fasilitas problem di visualstudio code (tab view > problem)
        dan gunakan console.log() untuk mengecek output dari variabel yang ingin dicoba, apakah sudah sesuai dengan yang diharapkan atau belum
        terkadang error yang ada sebenarnya karena human error saja (seperti kesalahan ketik atau kurang jeli)
    
    */

    while(notFound) {
        for(var index = 0; index < dataSiswa.length; i++) {
            if(dataSiswa[i].nama.indexOf(nama) !== -1 && datasiswa[index].kelas == nomorKelas)
                document.GetElementById("result").innerHTML += "Nama : " + dataSiswa[index].nama + "<br>";
                document.GetElementById("result").innerHTML += "Kelas : RPL " + dataSiswa[index].kelas + "<br>";
                document.GetElementById("result").innerHTML += "Jenis Kelamin : " + dataSiswa[index].jenisKelamin + "<br>";
                notFound = false;
                break;
            
        }

        if(notFound) {
            alert("Data Tidak Ditemukan");
            notFound = false;
        }
    }
}

function CekJenisKelamin() {
    //contoh perbaikan kode
    // var jeniselamin = document.getelementsByName("jenisKelamin"); ==> nama variabel di baris ini salah, yang benar mestinya jenisKelamin
    var jenisKelamin = document.getelementsByName("jenisKelamin"); // ==> baris yang sudah diperbaiki
    
    for(var i = 0; j < jenisKelamin.length; i++) {
        if(jenisKelamin[i].checked) {
            return jenisKelamin[0].value;
        }
    }
}

function cekKelas(kelas) {
    switch (kelas) {
        case "RPL1":
            return 2;
        
        case "RPL2":
            return 1;
    }
}

/*

    Penjelasan alur kode secara keseluruhan :

    Tulis penjelasan tentang kode tugas ini secara keseluruhan dengan bahasa sendiri, dari pertama saat tombol diklik apa yang diproses hingga bagaimana hasil output dari kodenya.


*/