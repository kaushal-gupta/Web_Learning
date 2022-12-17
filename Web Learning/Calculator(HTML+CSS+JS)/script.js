let n1,n2,op;
function valueClicked(n){
    var target =document.getElementById("result-text");
    let num=target.textContent;
    target.innerHTML=num+n;

}

function clearText(){
    document.getElementById("result-text").innerHTML="";
}

function operatorClicked(o){
    console.log(o);

    if(o=="=")
    {
        var target =document.getElementById("result-text");
        n2=target.textContent;
        var res = eval(n1+" "+op+" "+n2);
    
        target.innerHTML=res;    
    }
    else{
    
    op=o;
    var target =document.getElementById("result-text");
    n1=target.textContent;
    target.innerHTML="";
}
}

