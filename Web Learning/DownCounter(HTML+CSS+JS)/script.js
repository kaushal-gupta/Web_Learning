var curr = document.querySelector('.current');
var next = document.querySelector('.next');
var inputText = document.getElementById('input');

function startCountDown(){

  var num = inputText.value;
  var interval =setInterval(function(){
    if(num==0)
    {
        clearInterval(interval);
        return;
    }
    

    next.classList.add('animate');   
    num--;
    next.innerHTML=num;
    
   
    console.log(num)
    setTimeout(function(){
        next.classList.remove('animate');
         curr.innerHTML=num;
    },500);
  },1000);
}
