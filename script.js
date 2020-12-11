const next = document.getElementById("down");
next.style.position = "absolute";
let pos = 0;
let change = -1;

function downTop(){
    if (pos == 500) {change = -1}
    else if (pos == 0) {change = 1}
    pos += 2 * change;
    next.style.top = pos+'px';
    next.style.left = 0+'px';
    requestAnimationFrame(downTop);
}
requestAnimationFrame(downTop);

/*--------Anim bulles----------------------------------*/

window.addEventListener('click', (e) => {
    /*console.log(e);*/
    const circle = document.createElement('div');
    circle.className = 'clickAnim';
    circle.style.top = (e.pageY - 12.5)+'px';
    circle.style.left = (e.pageX - 12.5)+'px';
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1000)
})