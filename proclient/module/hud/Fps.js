import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Fps extends Module {
    constructor() {
        super("Fps", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
