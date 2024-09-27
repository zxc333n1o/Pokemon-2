

window.onload = function () {
    const aspect = 16/9;
    const tileWidthNum = 80;
    const innWidth = window.innerWidth * 0.83;
    const innHeight = 1/aspect * innWidth;

    
    const WIN = {
        WIDTH: innWidth,
        HEIGHT: innHeight,
        LEFT: 0,
        BOTTOM: 0,
        TILE: {
            LEN: innWidth/tileWidthNum,
            WIDTHNUM: tileWidthNum,
            HEIGHTNUM: 1/aspect * tileWidthNum
        },
        character: {
            x: 0,
            y: 0
        }
    }

    
    let zoomStep = 0.5;
    let canMove = false;
    
    const wheel = (event) => {
        // const delta = (event.wheelDelta > 0) ? -zoomStep : zoomStep;
        // WIN.WIDTH += delta;
        // WIN.HEIGHT += delta;
        // WIN.LEFT -= delta / 2;
        // WIN.BOTTOM -= delta / 2;
        // zoomStep = WIN.WIDTH/10;66
        // render();
    }

    const mousedown = () => {
        canMove = true;
    }

    const mouseup = () => {
        canMove = false;
    }

    const mousemove = (event) => {
        if (canMove) {
            WIN.LEFT -= graph.sx(event.movementX);
            WIN.BOTTOM -= graph.sy(event.movementY);
            render();
        }
    }

    const mouseout = () => {
        canMove = false;
    }

    const graph = new Graph({
        id: 'canvas',
        width: innWidth,
        height: innHeight,
        WIN,
        // callbacks: {
        //     wheel,
        //     mousemove,
        //     mousedown,
        //     mouseup,
        //     mouseout
        //     }
        }
    )
    

    const render = function() {
        graph.fill('white');
        graph.drawImage("map1.jpg", WIN);   
        graph.renderFrame(); 
    }

    render();

}