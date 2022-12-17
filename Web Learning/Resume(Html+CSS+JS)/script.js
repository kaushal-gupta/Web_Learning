
//Smooth Scroll
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for(i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0)
            {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);
        },20)

    })
}


//Auto fill Skill bar


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById("skills-container")
var animationDone = false;
window.addEventListener('scroll',checkScroll)


function initialiseBars(){
    for(let  bar of progressBars){
        bar.style.width=0+"%";
    }
}
initialiseBars();

function fillBars(){
    for(let  bar of progressBars){
       let targetWidth = bar.getAttribute('data-bar-width');
       let currentWidth = 0;
       let interval = setInterval(function(){
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }

            currentWidth++;
            bar.style.width=currentWidth+"%";

       },5)
    }
}
function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone&&coordinates.top<window.innerHeight){
       {
         console.log('im')
        fillBars();


       animationDone=true;

        

    }
    }
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
    }

}