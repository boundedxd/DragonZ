import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class Dolphin extends Module {
    constructor() {
        super("Dolphin", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.isInWater && this.mc.thePlayer.isInWater()) {
                this.mc.thePlayer.motionY += 0.04;
            }
        }
    }
}
