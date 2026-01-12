import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class FastPlace extends Module {
    constructor() {
        super("FastPlace", 66, Category.PLAYER);
    }

    onUpdate() {
        if (this.isToggled() && this.mc) {
            this.mc.rightClickDelayTimer = 0;
        }
    }
}
