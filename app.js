const canvas = document.getElementById("jsCanvas"); //canvas is element from HTML5
const ctx = canvas.getContext("2d"); // use pixel

//canvas have 2 element of size, give 'pixel modifier'
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c"; // color of line
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); //path is a line. remember
        ctx.moveTo(x,y); //everytime i move, that creat a path 기준점, 즉 원점
    }else{
        ctx.lineTo(x,y); // create a line from the previous potition of the line/ beginPath~lineTo 원점에서 좌표까지 선을 그린 후 원점을 좌표로 이동
        ctx.stroke(); // strokes the current sub-paths with the current stroke
    }
}

function onMouseDown(event){
    painting = true;
}

function onMouseLeave(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}