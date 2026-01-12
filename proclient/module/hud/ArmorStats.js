import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class ArmorStats extends Module {
    constructor() {
        super("ArmorStats", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
