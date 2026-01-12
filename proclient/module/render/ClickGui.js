import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class ClickGui extends Module {
    constructor() {
        super("ClickGui", 0, Category.RENDER);
    }

    onEnable() {
        console.log("ClickGui enabled");
    }

    onRender() {
        if (this.isToggled()) {
            // Render logic here
        }
    }
}
