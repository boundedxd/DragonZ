import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class Spider extends Module {
    constructor() {
        super("Spider", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.isCollidedHorizontally) {
                this.mc.thePlayer.motionY = 0.2;
            }
        }
    }
}
