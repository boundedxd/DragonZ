import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Radar extends Module {
    constructor() {
        super("Radar", 0, Category.RENDER);
    }

    onEnable() {
        console.log("Radar enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
