// Tüm yapıyı yükleme
const _ = require('lodash');

/** Array Metodları **/

const kelimeler = ['orman', 'kıta', 'toprak', 'dalga', 'okyanus', 'deniz', 'evren'];

/* .first */
/* Dizinin ilk elemanını */
const ilkKelime = _.first(kelimeler);
console.log(`Kelimeler dizisinin ilk elemanı: ${ilkKelime}`)

/* .last */
/* Dizinin son elemanını */
const sonKelime = _.last(kelimeler);
console.log(`Kelimeler dizisinin son elemanı: ${sonKelime}`)

/* .nth */
/* Dizinin diziliş sırasına göre istediğimiz elemanını çağırma (Index 0'dan başlar) */
const ikinciElemanı = _.nth(kelimeler, 1);
console.log(`Kelimeler dizisinin ikinci elemanı: ${ikinciElemanı}`)

/* .chunk */
/*diziyi alt kümelere ayırmak */
const ikiliAyirim = _.chunk(kelimeler, 2);
console.log(ikiliAyirim);

const ucluAyirim = _.chunk(kelimeler, 3)
console.log(ucluAyirim)

/* .slice */
/* slice metodu dizinin bir kısmını alır. slice metodunu kullanmak için başlama ve bitiş index'i belirtilmesi gerekir.
   başlama index'i yeni oluşturalacak olan dilime dahil edilirken, bitiş index'i dahil edilmez */
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dilim1 = _.slice(sayilar, 2, 5)
console.log("Diziden yeni parametler ile üretilen dizi")
console.log(dilim1)

/* .random */
/* random metodu verilen başlama ve bitiş indexleri arasında rastgele sayı üretir. */
const rastgeleSayi = _.random(5, 10)
console.log(`Üretilen rastgele sayı: ${rastgeleSayi}`)

/* .sample */
/* Bu metod ile bir diziden rastgele bir elemanı alınabilir */
const aylar = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran"]
const rastgeleEleman = _.sample(aylar);
console.log(`Diziden rastgele seçilen eleman: ${rastgeleEleman}`)

/* .shuffle */
/*  Dizi elemanlarını rastgele bir şekilde karıştırmaya yarar */
const sarkilar = ["Hallowed Be Thy Name", "The Trooper", "Powerslave", "Phantom Of The Opera", "Aces High"];
const calmaListesi = _.shuffle(sarkilar);
console.log(" Program her çalıştırıldığında dizi yeni bir sıralama ile basılacak")
console.log(calmaListesi)

/* filter */
/* Filter metodu ile belirtilen koşulu true döndüren elemanlar ile yeni bir dizi oluşturulur. */
let tamSayilar = [4, -5, 3, 2, -1, 7, -6, 8, 9];
/* filter metodu ile sıfırdan büyük sayılar filtreleniyor */
let pozitifSayilar = _.filter(tamSayilar, q => q > 0);
console.log(pozitifSayilar);

/* .find */
/* Belirtilen koşula göre ilgili sonucu döndürür */
let kisiler = [
    { 'isim': 'ali', yas: '42' },
    { 'isim': 'veli', yas: '18' },
    { 'isim': 'mustafa', yas: '30' },
    { 'isim': 'melih', yas: '55' },
    { 'isim': 'esma', yas: '58' },
    { 'isim': 'korhan', yas: '60' }
];
/* Yaşı 45'den yüksek olan ilk kişi */
let sonuc = _.find(kisiler, q => {
    if (q.yas > 45) {
        return true;
    }
});
console.log(sonuc);
/* Korhan kişisini bulmak */
let korhan = _.find(kisiler, { isim: 'korhan' });
console.log(korhan);

/* .pull verilen tüm değerleri diziden siler */
const sayiDizisi = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
const yeniDizi = _.pull(sayiDizisi, 3, 5, 7)
/* Yeni dizide 3 5 ve 7 elemanları bulunmayaccak */
console.log(yeniDizi)

