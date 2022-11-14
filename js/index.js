import { showData } from "./data.js";
const projectsContainer = document.getElementById('projects-container');
showData(projectsContainer);

//cursor
const cursorBall = document.querySelector('.cursor-ball')
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor-2')
const cursor3 = document.querySelector('.cursor-3')
const cursor4 = document.querySelector('.cursor-4');

window.addEventListener('mousemove', (e) => {
    let x = e.screenX;
    let y = e.screenY;

    cursorBall.style.left = `${x}px`;
    cursorBall.style.top = `${y}px`;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    cursor2.style.left = `${x}px`;
    cursor2.style.top = `${y}px`;

    cursor3.style.left = `${x}px`;
    cursor3.style.top = `${y}px`;

    cursor4.style.left = `${x}px`;
    cursor4.style.top = `${y}px`;


})