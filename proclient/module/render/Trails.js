import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Trails extends Module {
    constructor() {
        super("Trails", 0, Category.RENDER);
    }

    onEnable() {
        console.log("Trails enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
