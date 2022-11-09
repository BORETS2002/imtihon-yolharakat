const elForm = document.querySelector(".form-start")
const elLevel = document.querySelector(".level")
const elGazBtn = document.querySelector(".gazz")
const ElTitle = document.querySelector(".title") 
const elList = document.querySelector(".list")
const Urinish = document.querySelector(".urinish")
const Achko = document.querySelector(".achko")
const elTime = document.querySelector(".time-sekunt")
const ChooseTime = document.querySelector(".time")
const Elimg = document.querySelector(".img")
const elBtn =document.querySelector(".btn-close")
 const WinAcko =document.querySelector(".winachko")
 const WinUrinish =document.querySelector(".winUrinsh")

const Modal = document.querySelector(".modal-content")
const elNatija = document.querySelector(".Natija")



const ElFragmen = new DocumentFragment()
qop = []
yiguvchi = []




// belgilangan levelni aylanib ciqib chiqarish

function Chizish (qop) {  
  
  qop.forEach(element => {
    const elTemplate = document.querySelector(".template").content.cloneNode(true)
    if (Names[element] ) {
      elTemplate.querySelector(".itms").dataset.id = Names[element].id
      elTemplate.querySelector(".img").dataset.id =  Names[element].id
      elTemplate.querySelector(".img").src = Names[element].symbol_img
      ElFragmen.appendChild(elTemplate)
    }   
    elList.appendChild(ElFragmen)
  });
  
}
// belgilangan levelni aylanib ciqib chiqarish


// belgilangan levelni chizish
function levleTop(elLevel){
  elList.innerHTML = ""
  
  if (elLevel.value == "yengil" ) {  
    qop.splice (1 , qop.length)
    
    // Random qilish
    for(i = 1 ; i <= 100 ; i++) {
      qopga = Math.floor(Math.random(Names.id)*100 )  
      if (  !qop.includes(qopga)  &&  (qop.length < 20 ) ) {
        qop.push(qopga)
      }
    }
    // Random qilish End
    
    
    //Rasmlarni chizish
    Chizish(qop)
    //Rasmlarni chizish end
    
    
    // TItle chizish
    qop.forEach(item =>{
      if (item % 2 == 0 ) {
        yiguvchi.unshift(item)
      }else{
        yiguvchi.push(item)
      }
    })
    
    yiguvchi.forEach(item =>{
      ElTitle.textContent = Names[item].symbol_title 
    })
    
    // TItle chizish
    
  }
  
  if (elLevel.value == "orta" ) { 
    qop.splice (1 , qop.length)
    
    for(i = 0 ; i <= 200  ; i++) {
      qopga = Math.floor(Math.random(Names.id)*  40)  
      if (  !qop.includes(qopga) && (qop.length <= 40 ) ) {
        qop.push(qopga)
      }
    }
    
    //Rasmlarni chizish
    Chizish(qop)
    //Rasmlarni chizish end
    
    // TItle chizish
    qop.forEach(item =>{
      if (item % 2 == 0 ) {
        yiguvchi.unshift(item)
      }else{
        yiguvchi.push(item)
      }
    })
    
    yiguvchi.forEach(item =>{
      ElTitle.textContent = Names[item].symbol_title 
    })
    
    // TItle chizish
    
  }
  
  
  if (elLevel.value == "qiyin" ) { 
    qop.splice (1, qop.length)
    for(i = 0 ; i <= 300  ; i++) {
      qopga = Math.floor(Math.random(Names.id)*  60)  
      if (  !qop.includes(qopga) && (qop.length <= 60 ) ) {
        qop.push(qopga)
      }
    }
    
    //Rasmlarni chizish
    Chizish(qop)
    //Rasmlarni chizish end
    
    // TItle chizish
    qop.forEach(item =>{
      if (item % 2 == 0 ) {
        yiguvchi.unshift(item)
      }else{
        yiguvchi.push(item)
      }
    })
    
    yiguvchi.forEach(item =>{
      ElTitle.textContent = Names[item].symbol_title 
    })
    
    // TItle chizish
    
    
  }
  
}
// belgilangan levelni chizish

// Audio chiqarish
function PLaySount ( ) {
 
  const audio = new Audio("/audio/echichqoq.ogg")
  audio.play();  
 
  }

function  qarseLar() {
  const audio = new Audio("/audio/erkak.ogg")
  audio.play()
}
function tugadi(){
  const audio = new Audio("/audio/tugadi.ogg")
  audio.play()
}
function jonmFido(){
  const audio = new Audio("/audio/jonimFido.m4a")
  audio.play()
}
// Audio chiqarish


// Time secuntdamer
function TimeSecunt (ChooseTime){
  let timeSekunt = 180
 
  const SetTimeInterval = setInterval(updateCountdown , 1000 )
   
  if (ChooseTime.value == 5  ) {
    
     timeSekunt = 300
  }
 if (ChooseTime.value == 8  ) {
  timeSekunt = 480
}
 
  function updateCountdown () {
    const minuts = Math.floor(timeSekunt / 60);
    let secunt = timeSekunt % 60
    secunt = secunt < 10  ? "0" + secunt:
    secunt;
    
    elTime.textContent = `${minuts} : ${secunt} `
    timeSekunt--
    
  }


  if (timeSekunt == 180  ) {
   setTimeout( ()=> {
     clearInterval(SetTimeInterval)
 
     if ( SetTimeInterval == 10) {
      Modal.querySelector(".modal-header").textContent = ""
      elList.textContent = ""
      elNatija.classList.remove("d-none")
      tugadi()
     }
    
   },  181000 )

  }
  if (timeSekunt == 300  ) {
    setTimeout( ()=> {
 
      clearInterval(SetTimeInterval)
      
      if ( SetTimeInterval == 10) {
        Modal.querySelector(".modal-header").textContent = ""
        elList.textContent = ""
        elNatija.classList.remove("d-none")
      tugadi()
            
       }
    },  301000 )
 
   }
   if (timeSekunt == 480  ) {
    setTimeout( ()=> {
 
      clearInterval(SetTimeInterval)
      
      if ( SetTimeInterval == 10) {
        Modal.querySelector(".modal-header").textContent = ""
        elList.textContent = ""
        elNatija.classList.remove("d-none")
      tugadi()
            
       }
      
    },  481000 )

   }


}
// Time secuntdamer


// Topilganlarini aniqlash
function FindItms(evt) {
  

  if ( evt.target.matches(".itms") || evt.target.matches(".img")  ) {

    topish = Number( evt.target.dataset.id)
    const delet = Names.find(item => {
      return topish == item.id
    })
    
    if (delet.symbol_title == ElTitle.textContent  ) {
      const elTemplate = document.querySelector(".template").content.cloneNode(true) 
      elTemplate.querySelector(".itms").dataset.id = delet.id
      
      if (elTemplate.querySelector(".itms").dataset.id == delet.id){
     
        elList.innerHTML = ''
        delet.symbol_img = `./images/checkmark.gif`
  
        qop.push("")
        Chizish(qop)
        Shotchik++
        hisob++
        hisob++
        hisob++
 
        Achko.textContent = hisob
        WinAcko.textContent = hisob
        Urinish.textContent = Shotchik
        WinUrinish.textContent = Shotchik
        qarseLar()
        
        // bitta qavs ickariga olib krdim prablema bumasa qosin
        yiguvchi.forEach( item => {
        
        if ( item == delet.id ) {
          
          yiguvchi.splice( Number(yiguvchi.indexOf(item) ) , 1)
          qop.splice( Number(yiguvchi.indexOf(item) ) , 1)
          
        }
        
        yiguvchi.forEach(item =>{
          ElTitle.textContent = Names[item].symbol_title 
        })
        
      })
  
    } 
    
  }
  else{
    PLaySount()
 
  }
    
  }

}
// Topilganlarini aniqlash


let Shotchik = 5 
let hisob = 0
Achko.textContent = hisob
Urinish.innerHTML = Shotchik
WinUrinish.textContent = Shotchik

elList.addEventListener("click", evt => {
  evt.preventDefault()
  Shotchik--
  Urinish.innerHTML = Shotchik
  WinUrinish.textContent = Shotchik

  hisob--
  Achko.textContent = hisob
  WinAcko.textContent = hisob 
  // Topilganlarini aniqlash
  FindItms(evt)
  // Topilganlarini aniqlash
 
  if ( Shotchik == 0 ) {
    Modal.querySelector(".modal-header").textContent = ""
    elList.textContent = ""
    elNatija.classList.remove("d-none")
    tugadi()

  }
  if( yiguvchi.length == 0){
    Modal.querySelector(".modal-header").textContent = ""
    elList.textContent = ""
    elNatija.classList.remove("d-none")
    elNatija.classList.add("win")
    jonmFido()
  }
  
})


elForm.addEventListener("submit", evt => {
  evt.preventDefault()
  levleTop(elLevel)
  TimeSecunt(ChooseTime)
  elForm.classList.add("democlass")
})
const RefreshBtn = document.querySelector(".refreshBtn")
RefreshBtn.addEventListener("click", ()=> {
  window.location.reload();

})
elBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  window.location.reload();
})