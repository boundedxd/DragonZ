import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class ItemEsp extends Module {
    constructor() {
        super("ItemEsp", 0, Category.RENDER);
    }

    onEnable() {
        console.log("ItemEsp enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
