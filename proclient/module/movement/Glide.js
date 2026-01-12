import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Glide extends Module {
    constructor() {
        super("Glide", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.motionY < 0.0 && this.mc.thePlayer.isAirBorne && 
                (!this.mc.thePlayer.isInWater || !this.mc.thePlayer.isInWater()) && 
                (!this.mc.thePlayer.isOnLadder || !this.mc.thePlayer.isOnLadder())) {
                if (!this.mc.thePlayer.isInsideOfMaterial) {
                    this.mc.thePlayer.motionY = -0.125;
                    this.mc.thePlayer.jumpMovementFactor *= 1.12337;
                }
            }
        }
    }
}
