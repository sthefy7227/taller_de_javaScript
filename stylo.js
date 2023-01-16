function cambiarfondo(x){
    console.log(x.value);
    var body = document.getElementById("body");
    body.style.backgroundColor=x.value;
}
let elementosacordeon= document.getElementsByClassName("acordeon");
            for(let i=0;i<elementosacordeon.length;i++){
                elementosacordeon[i].addEventListener("click",function(){
                    this.classList.toggle("active");
                    let panel =this.nextElementSibling;
                    if(panel.style.display=="block"){
                        panel.style.display="none";
                    }else{
                        panel.style.display="block";
                    }
                });
            }