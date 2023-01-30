
let dizi=[2,5,8,11,15,17];

//uygun dizi metotlarını kullanarak yukarı  verilen dizinin elemanları içinde 10'dan buyuk olan elemanların 5'er katından oluşan yeni dizi oluşturun.SONUC: [55,75,85]olmalı.


const kosulluSayilar=dizi.filter(function(sayi){
    return sayi>10;
    
});

const sayilarincarpimi=kosulluSayilar.map(function(sayi){
    return sayi*5;
});

console.log("10'dan büyük sayilar:",kosulluSayilar)
console.log("10'dan büyük sayilarin 5 ile çarpımı:",sayilarincarpimi)



