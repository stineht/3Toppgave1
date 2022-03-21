
function visTiden() {

    let idag = new Date();

    let time = idag.getHours();
    let minutt = idag.getMinutes();
    let sekund =idag.getSeconds();

  

    document.getElementById("klokka").innerHTML= time + ":" + minutt + ":" + sekund;

    setInterval(visTiden, 1000);

}