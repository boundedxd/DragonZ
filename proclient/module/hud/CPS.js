import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class CPS extends Module {
    constructor() {
        super("CPS", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
