// Yorum satırı

/*3 farklı yol ile dışa aktarım yapalım 

console.log('Merhaba')
alert('Merhaba')
document.write('Merhaba')
//element üzerindende yazabiliriz 
document.getElementById('js').innerHTML = 'Değistirebiliriz'
*/


/*
=> const=değiştirilemez , var= fonksiyon kapsamıyla sınırlıdır. Yani bir değişken, içinde tanımlandığı fonksiyonun dışında erişilemez., let = blok kapsamıyla sınırlıdır. Yani bir değişken, içinde tanımlandığı bloğun dışında erişilemez. (if blogu)
const number = 3
let number1 = 3
var number3 = 3

=> type : number, string, boolen, null, undefined  typeof ile tipini öğrenebiliriz (type of name) 

=> matematiksel ifadeler +,-,*,/,%(kalan)

=> Number(sayi) => sayi değişkenin tipini number yapar
   String(sayi) => sayi değişkenin tipini string yapar


=> let esitmi = 3 === '3' // True/(False) döner  ===(tip kontrolude yapar) ==(sadece deger kontrolu yapar)
!== esit değil mi tip kontrolu ile != tip kontrolu olmadan 
<,<=,>,>= gibi kontrollerde kulanılmakta.

&& ve true true ise true doner 
|| veya bir true yeterli true donmesi için 

*/

/*fonksiyonlar : 2 farklı şekilde fonksiyon olusturabiliriz

//1.Yöntem iel fonksiyon

const sayi1 = 20 
const sayi2 = 10 
function sum(a,b){
    return a+b // fonksiyonu çalıtırdaktan sonraki sonucumuzu geri yollamak istiyorsak return kullanırız return ifadesinin kullanılması, fonksiyonların daha esnek, modüler ve yeniden kullanılabilir olmasını sağlar
}
console.log(sum(sayi1,sayi2))

function carpma(a, b) {
    if (a === 0 || b === 0) {
       return 0; // Eğer herhangi biri 0 ise işlemi sonlandır ve 0 döndür.  fonksiyonun belirli bir koşulda çalışmasını sonlandırmak için return kullanılabilir 
    }
}

// 2. Yöntem Arrow func 

const subs = (a,b) => {
    console.log(a-b)
}
subs(sayi1,sayi2)
*/


/* fonkisyonlarda call=objeyi fonksiyona yollamak için kullanılır genelde ajax ile kullanılır, apply=diziyi funca yollamak için kullanılır., bind = this değerini değiştirmek için kullanılır (baslangıc değerini)

function sum(a,b){
    //console.log(this.name+ this.val)    
    console.log(a+b)
}
let obj = {name:"js",val:"3"}
//sum.call(obj)
let arr = [2,3]
sum.apply(null ,arr)
*/

// METODLAR



/*
// String metodları
let text = "deneme,js egitimi"
length, toUpperCase(), toLowerCase(),indexOf('js'),lastIndexOf('js'), slice(0,3) ,substring(0,3) ikisi aynı slice negatif indexe izin verir.,
replace("deneme" , "test") yer değiştirme 
split(",")[0] virglden sonra parcalayıp array doner
trim() boslukları alır 
charAt(5)  indexteki karakteri ver
*/



/*Array metodları
pop() sondan cıkar
shift() bastan cıkar
push("sona ekle")
unshift("basa ekle")
arr1.concat(arr2) arrayleri birleştirir
arr.slice(1,3) parcalar
arr.indexOf('name')


let meyveler = ['elma','armut','muz', 'armut']
console.log(meyveler.filter(meyve=> meyve=='armut'))
console.log(meyveler.find(meyve=> meyve=='armut'))
// filter metodu elemanlar içerisinde tek tek dolasır daha sonra verilen kosulu saglayan eleman veya elemanları bir array halinde geri döndürür. find da aynı filter gibi dolasır ama string olarak geri döndürür.

// map ile dizi üzerinde gezeriz ve istedğimiz işlemleri uygulayabiliriz. 
let sayilar = [1,23,45,5]
console.log(sayilar.map(sayi => sayi * 2 ))
//sayilar dizisiniz yazdik daha sonra map fonksiyonu ile içine girdik. arror fonksiyon olusturduk bize içerde elemanları donecek birim parametre lazım o da sayi olsun dedik daha sonra bu sayi 1. elemana geldi ve 2 ile carpıldı yeni yeni diziye yazıldı bu seiklde tum elemanlar dönülerek yeni dizi olusturulmus olunur.

console.log(sayilar.reduce((birikimci, mevcut)=> birikimci + mevcut , 0))
//reduce fonksiyonu 2 param alır ilki baslangıc degeri diğeri ise gezecek olan param örnekte birimkici parametremiz var ve baslangıc degerini 0 verdik virgulden sonraki 0 ile , mevcut ile tek tek birikimci ile toplanarak sayilar dizisinin toplam değirini elde ederiz.


console.log(sayilar.some(sayi=> sayi==1))//tek tek  dön 1 e esit bir değer varsa true dön bir tane olması yeterli 
// every de her elemanın sağlanması gerekir aksi takdirde false döner


console.log(sayilar.forEach((sayi)=>console.log(sayi) ))
//forEach diziyi gezmemizi sağlar diziyi değiştiremeyiz (map ten farkı map döner ve yeni bir dizi olusturur)


//sort((a,b)=> a-b ve b-a) kücükten büyüge sıralama

//reverse() diziyi ters cevirir

*/


/*OBJECT

const obj = {
    name: 'Sefa',
    surname:'Ciftci',
    class: 4,
    obj2 : {
        name2 :'obje içinde obje' 
    },
    func : function(){
        console.log('obje içinde func')
    }
}
//objeler key  : value dan olusur
//iki farklı sekilde kullanabiliriz. 
//regatnotation obj('name')
//dot notation obj.name
//obje içinde obje nested denir (obj.obj2.name2)
//obje içinde fonksiyonda olusturabiliriz (obj.func())
//obj.age = 32 diyerek de obje içine yeni bir key value ekleyebilriz


//constructer func
function Person(name,value){
    this.name = name,
    this.value = value
}
const person = new Person('js' ,23)
const {name , value} = person
console.log(name , value)


//spread  object
//obleri birleştirelim 
// let newObg = {...obj1, ...obj2} //obj1 içerisindeki verileri alır ve obj2 içerisindeki berileri alır  newObj olusur aynı değer varsa en sondakini alır

//objeler ve forun kullanımı person2 içerisinde git ve dolaş 
let person2 = {name:"Ali",age : 29}
for(var key in person2){
    console.log(key , person2[key])
}

//defineProperty

//Object.freeze(person2) objeyi dondurur değişikliğe izin vermez
//Object.seal() değiştirilebilir ama eklenemez 

//entries , frontentries

//JSON : js object notation
//JSON.stringify(); json yapısına cevirir
//JSON.parsel(); eski haline geir cevirir



//obj.hasOwnProperty('name') name adında key ın var mı 
//Object.assign({},obj1 , obj2 ) objeleri birleştirir yeni obje olusturur aynı keyi sahip elemanları almaz en sonda ne varsa onu alır


//callback , promise , async await

/*async await i bir senaryo üzerinden anlatacak olursak fetch veya axios ile api den veri cektiğimizi varsayalım bu işlem biraz uzun sürebilir bu nedenle response a undefined düşmemesi için çünkü js veri yi hemen çekmediği için response tanımsız olur biz async await ile önce apide ki şlemi bekle sonra devam et diyoruz kısaca. fonksiyonu async yapıp fetch ile çetiğimiz yerin başına await ekleriz.
const fetchData = async() => {
    let response = fetch("apiURL")
    let data = await response.json()
    return data
}
fetchData().then((data)=> console.log(data))
*/ 

/*Matematiksel işlemler
Math.abs(-2) mutlak değerini verir
ceil(4,3) byük olana yuvarlama
floor() kücük olana yuvarlama
round() en yakın tamsayıya yuvarlar
max(2,3,5) 5  min() 2
pow(2,3) 2 üzeri 3  
sqrt(25) karekok 
random() random sayı
*/

/*Date
let dataTime = new Date()
new Date(2000,04,12)
console.log(dataTime)
.getFullYear()getHour ,getDay() gibi kullanılabilir
*/

/*if else, for, while , switch case

let sayi = 10
if(sayi > 10){
    //kosul saglnınca buraya girdi
}else if (sayi<10){
    //kosul saglanınca buraya girdi
}else{
    // hic bi koşul saglanmayınca
}

while(sayi > 5){
    console.log(sayi) // 10 9 8 7 6 
    sayi--;
}

for(let i= 0 ; i<5; i++){
    console.log(i)
}
break = döngüyü sonlandırır. 
continue = dögüdeki kosul saglanırsa atlanmasını sağlar

switch(sayi){
    case 10:
    console.log("Sayi 10 ise burayi calistirir")
    break;
    case 2:
        //
    break;
    default:
        //hic bi case saglanmayınca calısır    
}
*/


/* for of=genelde dizilerde kullanılır  ve for in = genellikle objelerle kullanılır

for(let key in obje){
    obje[key]; // obje içerisinde value degerlerini verir
}
for(let sayi of sayilarDizisi){
    sayi // dizi içerisinde elemenaları verir
}
*/


//Set ve  Map yapısı

//EventListenner ve selectors

// js ile todo app ve bir kaç uygulama yap



//DOM 


document.getElementById("js").innerHTML = 'Hello'
const element = document.getElementsByTagName("h1");
const x = document.querySelectorAll("pintro"); // intro classına sahip p elemenetleri
//getElementByClassName()
document.getElementById("myImage").src = "landscape.jpg";
document.getElementById("renk").style.color = 'red'










