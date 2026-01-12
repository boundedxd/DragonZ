import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Scaffold extends Module {
    constructor() {
        super("Scaffold", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer && this.mc.playerController) {
            const blockBelow = this.getBlockBelow();
            if (blockBelow && this.mc.playerController.onPlayerRightClick) {
                this.mc.playerController.onPlayerRightClick(this.mc.thePlayer, this.mc.theWorld, this.mc.thePlayer.getHeldItem(), blockBelow.pos, blockBelow.facing, blockBelow.vec);
            }
        }
    }

    getBlockBelow() {
        if (!this.mc || !this.mc.thePlayer) return null;
        return null;
    }
}
