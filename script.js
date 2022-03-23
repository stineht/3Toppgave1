
function visTiden() {

    let idag = new Date();

    let time = idag.getHours();
    let minutt = idag.getMinutes();
    let sekund =idag.getSeconds();

    time = leggTilNull(time);
    minutt= leggTilNull(minutt);
    sekund= leggTilNull ( sekund);
    

    document.getElementById("klokka").innerHTML= time + ":" + minutt + ":" + sekund;

    setInterval(visTiden, 500);

}

function leggTilNull(i) {
 if ( i < 10 ){
     i = "0" + i 
 }
 return i ;
}
