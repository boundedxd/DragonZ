import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Fullbright extends Module {
    constructor() {
        super("Fullbright", 0, Category.RENDER);
    }

    onEnable() {
        console.log("Fullbright enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
