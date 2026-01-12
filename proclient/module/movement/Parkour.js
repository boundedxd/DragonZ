import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class Parkour extends Module {
    constructor() {
        super("Parkour", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer && this.mc.theWorld && this.mc.gameSettings) {
            if (this.mc.thePlayer.onGround && !this.mc.thePlayer.isSneaking && !this.mc.gameSettings.keyBindSneak.pressed) {
                const collidingBoxes = this.mc.theWorld.getCollidingBoundingBoxes(
                    this.mc.thePlayer,
                    this.mc.thePlayer.getEntityBoundingBox().offset(0.0, -0.5, 0.0).expand(-0.001, 0.0, -0.001)
                );
                if (collidingBoxes && collidingBoxes.length === 0) {
                    this.mc.thePlayer.jump();
                }
            }
        }
    }
}
