import React, {useEffect} from "react";
import Graph from "../../models/Graph/Graph";
import useGraph from "../../models/Graph/useGraph";


import './Map.css';

const Map: React.FC = () => {
    const WIN = {
        WIDTH: 16,
        HEIGHT: 9,
        LEFT: 0,
        BOTTOM: 0
    }

    let canMove: boolean;
    const zoomStep = 0.5;
    let graph: Graph | null = null;
    const winAspect = 16/9;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const canvasWidth = 3/4 * winWidth;
    const canvasHeigth =   canvasWidth / winAspect;

    const [getGraph, cancelGraph] = useGraph(renderScene);

    const wheelHandler = (event: WheelEvent): void => {

    }

    const mouseupHandler = (): void => {
        canMove = false;
    }

    const mousedownHandler = (event: MouseEvent): void => {
        event.preventDefault();
        canMove = true;
    }

    const mousemoveHandler = (event: MouseEvent) => {
        if (canMove) {
            
        }
    }

    const mouseoutHandler = (): void => {
        canMove = false;
    }

    useEffect(() => {
        graph = getGraph({
            id: 'canvas',
            WIN,
            width: canvasWidth,
            height: canvasHeigth,
            callbacks: {
                wheel: wheelHandler,
                mousemove: mousemoveHandler,
                mouseup: mouseupHandler,
                mousedown: mousedownHandler,
                mouseout: mouseoutHandler,
            }
        });

        return () => {
            cancelGraph();
        }
    })

    function renderScene(FPS = 0): void {
        if (!graph) return;
        graph.fill('white');
        graph.renderFrame();
    }

    const drawImage = (source: string): void => {

    }

    return (
        <div id="map-wrapper">
            <canvas id="canvas"></canvas>
        </div>
    );

}

export default Map;