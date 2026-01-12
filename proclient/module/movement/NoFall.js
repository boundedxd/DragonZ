import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class NoFall extends Module {
    constructor() {
        super("Nofall", 0, Category.MOVEMENT);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.fallDistance > 2) {
                if (this.mc.thePlayer.sendQueue && this.mc.thePlayer.sendQueue.addToSendQueue) {
                    this.mc.thePlayer.sendQueue.addToSendQueue({ onGround: true });
                }
            }
        }
        super.onUpdate();
    }
}
