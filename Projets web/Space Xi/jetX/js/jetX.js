var input = document.getElementById("input");
var commencer = document.getElementById("miser");
var gain = document.getElementById("gain");
var recommencer = document.getElementById("replay");
var exact = document.getElementById("text");
//prise du canvas pour les dessinsk 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth =5;

// initialisation des images
var image = new Image();
 image.src ="img/fusee.png";
 var boom = new Image();
 boom.src = "img/boom.png"

//sarina fusee am voalohany


 function _manaoSaryFuse(positiony){
    ctx.drawImage(image,250,positiony,70,70) 
 }
 function _miotra(plus){
        if (plus<0 || plus>100 ){
            console.log("pas un bon nombre")
                return false ;
              
        }else{
            console.log("un bon nombre")
            return true ;
        }
 }
 function _saryBoom(positiony){
    positiony=positiony-20;
    ctx.drawImage(boom,250,positiony,50,50)
 }

function _manaoRepere(){
    //ilay ligne
    ctx.clearRect(0,0,800,630);
/*ctx.beginPath() 
    ctx.strokeStyle = "black";
    ctx.moveTo(150,100);
    ctx.lineTo(150,600);
    ctx.stroke();
ctx.closePath();

ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.moveTo(450 , 100);
    ctx.lineTo(450 ,600)
    ctx.stroke()
ctx.closePath()*/
    //manao titre 
ctx.beginPath();
    ctx.fillStyle = "pink"
    ctx.lineWidth = "2";
    ctx.font = "italic 60pt Calibri";
ctx.fillText("🎮 JetX 🚀",120,70);
    //manao anle graduation
ctx.closePath();
for (var y=600; y>=100; y-=25){
    ctx.font = "10pt Calibri";
    ctx.beginPath()
        ctx.strokeStyle = "whitesmoke";
        ctx.lineWidth = "2";
        ctx.moveTo(50,y)
        ctx.lineTo(550, y)
        ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
        ctx.fillStyle = "whitesmoke"
        ctx.fillText(((y/100)-6)/-0.05 , 10,y);
    ctx.closePath()
    }
}

function _initialisation(){
     _manaoRepere()   
     ctx.drawImage(image,250,600,70,70)
     recommencer.style.display = "block"
 }
_initialisation()


var intervalID
//fonction d'animation de la fusée
function _miactualiserSary(nombreAleatoire,nombreEntre){
    var i=600;
    commencer.style.pointerEvents = "none"
   intervalID = setInterval(function(){
       i--;
       exact.innerHTML =  ( ((i/100)-6)/-0.05 ).toFixed(2) ; //affichage pourcentage a chaque incrementation
        _manaoRepere()
       _manaoSaryFuse(i);
       if(parseInt(((i/100)-6)/-0.05)==nombreAleatoire){
        _manaoRepere();
        _saryBoom(i)
        clearInterval(intervalID);
        console.log("nipoaka");

            if(nombreEntre<nombreAleatoire+2 && nombreEntre>nombreAleatoire-2){
                //message ra marina ny condition
                exact.innerHTML = 'le nombre exact : ' + nombreAleatoire;
                gain.style.color = "green"
                gain.innerHTML = "vous avez " + nombreAleatoire + "% de reduction" ;
                recommencer.style.display = "none";
               // window.location.href = "../Forany pary/accueil.html"
            }
            else{
                //message au cas ou tsy marina leizy
              console.log("vous n'avez pas de reduction");
              if(tentatives == 0){
                exact.innerHTML = "Le bon nombre est : " + nombreAleatoire + " . Vous n'avez plus de tentatives"
              }else{
              exact.innerHTML = 'Le nombre exact est : ' + nombreAleatoire + ' % appuyez sur recommencer pour la prochaine tentative';
              }
             
            }
            
         }
    },20); //temps de latance 
   
   
}
    

//rappel la variable commencer est le bouton d'enclenchement
commencer.addEventListener("click",function(){
        //condition raha ts y 
    if(input.value == "" ){
        exact.innerHTML = "veuillez entrer un nombre entre 0 et 100";
    }
    else{
        if(_miotra(input.value) == false){
            exact.innerHTML = "veuillez entrer un nombre entre 0 et 100";   
        }else{
        let valeur = input.value;
        input.value =""
       
       let aleatoire = Math.floor(Math.random()*101);
        console.log("le nombre est : " +aleatoire)
        _miactualiserSary(aleatoire,valeur);
        }
    }
})
var tentatives =2;
gain.style.color = "red"
gain.innerHTML = "tentative restantes : " + tentatives
recommencer.addEventListener("click" ,function(){
    exact.innerHTML = ""
    if (tentatives == 0){
        gain.innerHTML = "vous avez depasser le nombre d'essaie total "
        recommencer.style.display = "none"
    }
    else{
        commencer.style.pointerEvents = "auto"
     clearInterval(intervalID);
    _initialisation()
        tentatives--
        gain.style.color = "red"
        gain.innerHTML = "tentatives restantes : " + tentatives
    }
    
})