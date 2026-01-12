import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Drag extends Module {
    constructor() {
        super("Drag", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
