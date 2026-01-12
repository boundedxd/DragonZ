import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class PlayerEsp extends Module {
    constructor() {
        super("PlayerEsp", 0, Category.RENDER);
    }

    onEnable() {
        console.log("PlayerEsp enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
