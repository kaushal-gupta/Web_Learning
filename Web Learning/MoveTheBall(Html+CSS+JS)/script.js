var ball = document.getElementById('ball');

function keyHandle(e){
    // console.log(e,'hello')
    switch(e.key){
        case 'w':
            moveUp();
            break;
        case 'a':
            moveLeft();
            break;
        case 'd':
            moveRight();
            break;
        case 's':
            moveBottom();
            break;
    }
}

function moveUp(){
    let coordinates = ball.getBoundingClientRect();
    if(coordinates.y==0)
        return;
   
    ball.style.top=coordinates.y-5+'px';
}

function moveBottom(){
    let coordinates = ball.getBoundingClientRect();
    console.log(coordinates,window.innerHeight)
    if(coordinates.y+100>window.innerHeight)
        return;
   
    ball.style.top=coordinates.y+5+'px';
}


function moveRight(){
    let coordinates = ball.getBoundingClientRect();
    console.log(coordinates,window.innerHeight)
    if(coordinates.x+100>window.innerWidth)
        return;
   
    ball.style.left=coordinates.x+5+'px';
}

function moveLeft(){
    let coordinates = ball.getBoundingClientRect();
    console.log(coordinates,window.innerHeight)
    if(coordinates.x==0)
        return;
   
    ball.style.left=coordinates.x-5+'px';
}