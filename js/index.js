let a =document.querySelector(".navbar");
window.onscroll = function (){
    if (this.scrollY >= 605){
        a.classList.add("fixed-top");
        a.classList.add("specific-padding");
        a.classList.add("shadow");
        a.classList.add("chang-bg");
    }    
    else{
        a.classList.remove("fixed-top");
        a.classList.remove("specific-padding");
        a.classList.remove("shadow");
        a.classList.remove("chang-bg");
    }    
}; 
