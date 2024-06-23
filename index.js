let img=document.querySelectorAll("img")[0];
let r=Math.floor(Math.random()*6)+1;
imgone="images/"+"dice"+r+".png";
img.setAttribute("src",imgone);


let img2=document.querySelectorAll("img")[1];
let r2=Math.floor(Math.random()*6)+1;
imgtwo="images/"+"dice"+r2+".png";
img2.setAttribute("src",imgtwo);

let h1=document.querySelector("h1");

if(r>r2){
    h1.innerHTML="Player 1 Wins!";
}else if(r2>r){
    h1.innerHTML="Player 2 Wins!";
}else{
    h1.innerHTML="Draw!!";
}