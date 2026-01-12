import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class ComboCounter extends Module {
    constructor() {
        super("ComboCounter", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
