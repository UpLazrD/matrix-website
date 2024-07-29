
    const windowElement = document.querySelector('.window');
    const borderElement = document.querySelector('.border');

    let offsetX, offsetY;

    borderElement.onmousedown = (e) => {
        const rect = windowElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        document.onmousemove = (e) => {
            windowElement.style.left = (e.clientX - offsetX) + 'px';
            windowElement.style.top = (e.clientY - offsetY) + 'px';
        };

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
