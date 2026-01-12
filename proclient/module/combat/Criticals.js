import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class Criticals extends Module {
    constructor() {
        super("Criticals", 0, Category.COMBAT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc) {
            if (this.mc.objectMouseOver && this.mc.objectMouseOver.entityHit) {
                this.doJumpCriticals();
            }
        }
    }

    doJumpCriticals() {
        const player = this.mc.thePlayer;
        if (!player) return;
        
        if (player.isInWater && !player.isInsideOfMaterial && player.onGround) {
            player.motionY = 0.1;
            player.fallDistance = 0.1;
            player.onGround = false;
        }
    }
}
