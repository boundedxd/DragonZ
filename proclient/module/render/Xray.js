import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Xray extends Module {
    constructor() {
        super("Xray", 0, Category.RENDER);
    }

    onEnable() {
        console.log("Xray enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
