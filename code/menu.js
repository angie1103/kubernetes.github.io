let ubvication = window.pageYOffset;
console.log(ubvication);
let nav = document.querySelector("#home"),
 title= document.querySelector(".");

window.onscroll = function(){
    let des = window.pageYOffset;
    ubvication>=des ? nav.style.top = "0px" : nav.style.top = "-120px"; 
    if(ubvication> 50){
        nav.classList.add("header__small");

        console.log('hehco');
    }else{
        nav.classList.remove("header__small");
        console.warn("lapdf");
    }
    ubvication = des;
console.log(ubvication);

}


