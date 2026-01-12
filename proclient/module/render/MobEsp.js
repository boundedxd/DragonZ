import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class MobEsp extends Module {
    constructor() {
        super("MobEsp", 0, Category.RENDER);
    }

    onEnable() {
        console.log("MobEsp enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
