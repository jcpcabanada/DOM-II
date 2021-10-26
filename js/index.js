// Your code goes here

const links = document.querySelectorAll('a');

Array.from(links).forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = "red";
    })
    // event.preventDefault();
})