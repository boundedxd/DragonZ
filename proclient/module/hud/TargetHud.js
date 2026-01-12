import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class TargetHud extends Module {
    constructor() {
        super("TargetHud", 0, Category.HUD);
    }

    onRender() {
        if (this.isToggled()) {
            // HUD render logic here
        }
    }
}
