/*selectorrs

const h1 = document.getElementById("baslik")
//document.getElementsByClassName
//document.getElementsByTagName
console.log(h1)

//querySelector u hersey için kullanabiliriz. tagNmae ,class ,id 
//ama bir liste ya da aynı aynı class ta elementler varsa  ilk elemanı getirir EĞER hepsini getirmek istersek querySelectorAll kullanabiliriz.
console.log(document.querySelector('.text'))
//('h1.text') h1 elemnti içinde text class lı 


const text = document.querySelector('.text')
//elementlere style verme style. dan sonra bütün css özelliklerini kullanabiliriz
h1.style.color = 'red'
text.className = 'deneme' // text e deneme classını ekler title ile id eklenir


//setAttribute birdeen fazla style ekleyebiliriz 
const title3 = document.getElementsByClassName('title3')
//setAttribute('class', 'title23') // burada ve className kullanırken yeni ekleme yaparken ezerek ekler
//setAttribute('style', 'color:red')
*/


//title.classList.add('title')
//title.classList.remove('title')
//title.textContent = 'teni baslik' innerHTML ile farkı : sadece text için kullanılır innerHTML içerisinde html elementide kullanabiliriz 


/*craeatEelemnt : js ile htmlelementi olusturma 
let span  = document.createElement('span') // elementi olusturduk
span.className = 'content'
span.style.color = 'red'
span.style.fontSize = '24px'//style js de camel case ile kullanılır
span.textContent=  'content olusturuldu.'
document.body.append(span) //body içine ekle diyoruz ama appen oldug için sona ekler prepand dersek basa ekler document.body.prepend(span)
*/









/*
events


<button id="btn">Tikla</button>

      <button onclick="console.log('Clicked')">Click</button>

      <button onclick="clickFunc()">Click Func</button>

      <button id="mouse">Mouse Enter</button>


        <input id="input" type="text" placeholder="ssay something"/>
        <p id="p"></p>

        <input type="text" onchange="console.log(value)">

        <script>
      const button = document.getElementById("btn");
      button.addEventListener("click", function () {
        console.log("Hello World");
      });

      //click func
      const clickFunc = () => {
        alert("Click Function is started");
      };

      //mouseenter
      const mouse = document.getElementById("mouse");
      mouse.addEventListener("mouseenter", function () {
        console.log("mouse Enter func");
      });

      //input value
      const text = document.getElementById('input')
      const p = document.getElementById('p')
      text.addEventListener('input' , function(e){
        p.textContent = e.target.value
      })

      document.body.addEventListener('keypress' , function(event){
            console.log('Key code is ' + event.keyCode)
      })



      /*
        click - when the element clicked
        dblclick - when the element double clicked
        mouseenter - when the mouse point enter to the element
        mouseleave - when the mouse pointer leave the element
        mousemove - when the mouse pointer move on the element
        mouseover - when the mouse pointer move on the element
        mouseout -when the mouse pointer out from the element
        input -when value enter to input field
        change -when value change on input field
        blur -when the element is not focused
        keydown - when a key is down
        keyup - when a key is up
        keypress - when we press any key
        onload - when the browser has finished loading a page
        
    </script>

*/












