// Перемещение окна
dragElement(document.getElementById("window"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var border = document.getElementById("border");
    if (border) {
        border.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Кнопки окна
function hideTerminal() {
    document.getElementById('terminal').style.display = 'none';
    // document.getElementById('menu').style.display = 'none';
    document.getElementById('border').style.borderBottom = '1px solid rgb(0, 77, 0)';
}

function showTerminal() {
    document.getElementById('terminal').style.display = 'block';
    // document.getElementById('menu').style.display = 'block';
    document.getElementById('border').style.borderBottom = '';
}
