var box = document.getElementById('box');
box.addEventListener("mouseenter",moveBox)

function moveBox(){
    let x= Math.random()*(window.innerWidth-101);
    let y= Math.random()*(window.innerHeight-101);
    console.log(x," ",y, ' ', innerWidth,' ', innerHeight)
    box.style.top=y+'px';
    box.style.left=x+'px';
}