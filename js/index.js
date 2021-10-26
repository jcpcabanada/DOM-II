// Your code goes here

const links = document.querySelectorAll('a');

Array.from(links).forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = "red";
    })
    // event.preventDefault();
})

let button = document.querySelectorAll('.btn');

button.forEach(b =>{
    b.addEventListener(
        "mouseleave", 
        function (event)  {
            event.target.style.color = "blue";
            //reset color
            setTimeout(function() {
                event.target.style.color = "black";
            }, 500);
        },
    );
});

Array.from(document.links).forEach((link) =>{
    link.addEventListener(
        "mouseenter", 
        function (event)  {
            // event.target.style.color = "blue";
            //reset color
            setTimeout(function() {
                event.target.style.color = "purple";
            }, 500);
        },
    );
});

let backGcolor = document.querySelector('body');
backGcolor.addEventListener('wheel', (evt) => {
    evt.target.style.color = "brown";
    evt.target.style.backgroundColor = "rgb(250,251,205)";
})

let buttColor = document.querySelector('.btn');
buttColor.addEventListener('click', (event) =>{
    event.target.style.color = "black";
});


const contentImg = document.querySelector('.img-content img:nth-of-type(1)');

function zoom(event){
    console.log(zoom);
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.500,scale), 1.5);
    contentImg.style.transform = `scale(${scale})`;
}
let scale = 1;

contentImg.onwheel = zoom;

let pTags = document.getElementsByTagName('p');
Array.from(pTags).forEach( (pTag) =>{
    pTag.addEventListener('click', (evt) => {
        evt.target.style.color = "green";
    })
})

let h2Tags = document.getElementsByTagName('h2');
Array.from(h2Tags).forEach( (h2Tag) => {
    h2Tag.addEventListener('dblclick', (evt) => {
        evt.target.style.fontSize = "500%";
    })
})
let h4Tags = document.getElementsByTagName('h4');
Array.from(h4Tags).forEach( (h4Tag) => {
    h4Tag.addEventListener('mouseout', (evt) => {
        evt.target.style.fontSize = "500%";
    })
})
let anyTags = document.getElementsByTagName('h4', 'h2', 'p');
Array.from(anyTags).forEach( (anyTag) => {
    anyTag.addEventListener('mouseenter', (evt) => {
        evt.target.style.color = "blue";
    })
})