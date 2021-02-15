let input=document.getElementById("input");
input.addEventListener("focus",function(){
    console.log("inputa focus olundu")
})
input.addEventListener("blur",function(){
    console.log("inputdan blur olundu")
})
input.addEventListener("change",function(){
    console.log("kontent deyisdi")
})
document.getElementById("slct").onchange=function(){
    console.log("metn deyisdirildi");
}

input.addEventListener("keyup",()=>{
if(input.value==""){
    input.nextElementSibling.classList.remove("d-none")
}
else{
    input.nextElementSibling.classList.add("d-none")
}
})
document.getElementById("login").addEventListener("submit",function(e){
    e.preventDefault();
    if(input==""){
        input.nextElementSibling.classList.remove("d-none")
    }
   
})