function rispostaesattaprimapagina(){
    var i=1;
    i++;
    var punteggio=1;
    localStorage.setItem("i", i);
    localStorage.setItem("punteggio", punteggio);
    console.log(i);
    var audio = document.getElementById("correctaudio");
    audio.play();
    setTimeout(function(){ $(location).attr('href',"page"+i+".html"); }, 2000);
    
}

function rispostaesatta(){
    var i = localStorage.getItem("i");
    var punteggio = localStorage.getItem("punteggio");
    punteggio++;
    i++;
    localStorage.setItem("punteggio", punteggio);  
    localStorage.setItem("i", i);
    var audio = document.getElementById("correctaudio");
    console.log(i);
    audio.play();
    setTimeout(function(){ $(location).attr('href',"page"+i+".html"); }, 2000);
}


function rispostaesattafinale(){
    var i = localStorage.getItem("i");
    var punteggio = localStorage.getItem("punteggio");
    punteggio++;
    i++;
    localStorage.setItem("punteggio", punteggio); 
    localStorage.setItem("i", i);
    var audio = document.getElementById("correctaudio");
    console.log(i);
    audio.play();
    setTimeout(function(){ $(location).attr('href',"finale.html"); }, 2000);
}


function rispostasbagliata(){
    var audio = document.getElementById("wrongaudio");
    audio.play();
    var punteggio = localStorage.getItem("punteggio");
    punteggio--;
    localStorage.setItem("punteggio", punteggio);
}