import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Nametags extends Module {
    constructor() {
        super("Nametags", 0, Category.RENDER);
    }

    onEnable() {
        console.log("Nametags enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
