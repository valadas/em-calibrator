import { createStore } from "@stencil/store";

const { state } = createStore<{
    startGcode: string;
    endGcode: string;
    buildVolume: {
        x: number,
        y: number,
        z: number,
    },
    gcode: string,
    width: number,
    depth: number,
    height: number,
    emStart: number,
    emEnd: number,
    speed: number,
    nozzleSize: number,
    layerHeight: number,
    minEm: number,
    maxEm: number,
}>({
    startGcode: "PRINT_START\n;PRINT_START BED=110 EXTRUDER=245 CHAMBER=65",
    buildVolume: {x: 120, y: 120, z: 120},
    endGcode: "PRINT_END",
    gcode: "",
    width: 100,
    depth: 100,
    height: 3,
    emStart: 1.1,
    emEnd: 0.9,
    speed: 60,
    nozzleSize: 0.4,
    layerHeight: 0.2,
    minEm: 0.8,
    maxEm: 1.2,
});

export default state;